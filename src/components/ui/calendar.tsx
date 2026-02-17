"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react@0.487.0";
import { DayPicker } from "react-day-picker@8.10.1";

import { cn } from "./utils";
import { buttonVariants } from "./button";
import { Tooltip, TooltipContent, TooltipTrigger } from "./tooltip";

export type CalendarProps = React.ComponentProps<typeof DayPicker> & {
  selectedDateTooltip?: string;
  recurringFrequency?: 'weekly' | 'biweekly' | 'monthly' | 'quarterly' | 'annually' | null;
  recurringStartDate?: Date;
};

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  selectedDateTooltip = "Payment withdrawal date",
  recurringFrequency = null,
  recurringStartDate,
  ...props
}: CalendarProps) {
  // Modifier to detect if a date is April 30 (tax deadline)
  const taxDeadline = (date: Date) => {
    return date.getMonth() === 3 && date.getDate() === 30; // April is month 3 (0-indexed)
  };

  // Calculate recurring payment dates
  const getRecurringDates = React.useMemo(() => {
    if (!recurringFrequency || !recurringStartDate) return [];
    
    const dates: Date[] = [];
    const currentMonth = (props as any).month || new Date();
    const startOfMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1);
    const endOfMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0);
    
    // Extend the end date to include visible days from next month (up to 6 days)
    const extendedEndDate = new Date(endOfMonth);
    extendedEndDate.setDate(endOfMonth.getDate() + 6);
    
    let currentDate = new Date(recurringStartDate);
    
    // Safety counter to prevent infinite loops
    let iterationCount = 0;
    const maxIterations = 100;
    
    // Calculate dates for the displayed month and visible days from next month
    while (currentDate <= extendedEndDate && iterationCount < maxIterations) {
      iterationCount++;
      
      if (currentDate >= startOfMonth && currentDate >= recurringStartDate) {
        // Don't include the start date itself (it's already selected)
        if (currentDate.getTime() !== recurringStartDate.getTime()) {
          dates.push(new Date(currentDate));
        }
      }
      
      // Increment based on frequency
      if (recurringFrequency === 'weekly') {
        currentDate.setDate(currentDate.getDate() + 7);
      } else if (recurringFrequency === 'biweekly') {
        currentDate.setDate(currentDate.getDate() + 14);
      } else if (recurringFrequency === 'monthly') {
        currentDate.setMonth(currentDate.getMonth() + 1);
      } else if (recurringFrequency === 'quarterly') {
        currentDate.setMonth(currentDate.getMonth() + 3);
      } else if (recurringFrequency === 'annually') {
        currentDate.setFullYear(currentDate.getFullYear() + 1);
      } else {
        // Unknown frequency - break to prevent infinite loop
        break;
      }
    }
    
    return dates;
  }, [recurringFrequency, recurringStartDate, (props as any).month]);

  // Modifier for recurring payment dates
  const recurringPayment = (date: Date) => {
    return getRecurringDates.some(recurringDate => 
      date.getDate() === recurringDate.getDate() &&
      date.getMonth() === recurringDate.getMonth() &&
      date.getFullYear() === recurringDate.getFullYear()
    );
  };

  // Custom DayContent component with tooltip for April 30 and selected date
  const DayContentWithTooltip = React.useCallback(({ date }: { date: Date }) => {
    const isApril30 = date.getMonth() === 3 && date.getDate() === 30;
    
    // Check if this day is selected by comparing with the selected prop
    const selectedDate = (props as any).selected;
    const isSelected = selectedDate && 
      date.getDate() === selectedDate.getDate() &&
      date.getMonth() === selectedDate.getMonth() &&
      date.getFullYear() === selectedDate.getFullYear();

    // Check if this is a recurring payment date
    const isRecurring = recurringPayment(date);

    const dayContent = <>{date.getDate()}</>;

    // Determine tooltip alignment based on day of week to avoid viewport overflow
    const dayOfWeek = date.getDay();
    let tooltipAlign: "start" | "center" | "end" = "center";
    
    if (dayOfWeek === 0) {
      // Sunday (leftmost column) - align to the left
      tooltipAlign = "start";
    } else if (dayOfWeek === 6) {
      // Saturday (rightmost column) - align to the right
      tooltipAlign = "end";
    }

    // If selected, show selected date tooltip (takes precedence over April 30)
    if (isSelected) {
      return (
        <Tooltip>
          <TooltipTrigger asChild>
            <span className="relative z-[4]">
              {dayContent}
            </span>
          </TooltipTrigger>
          <TooltipContent 
            className="!bg-[#007AFF] !text-white !border-0 !rounded-[8px] !z-[9999] !font-bold"
            sideOffset={8}
            side="top"
            align={tooltipAlign}
            collisionPadding={30}
            avoidCollisions={true}
          >
            {selectedDateTooltip}
          </TooltipContent>
        </Tooltip>
      );
    }

    // If recurring payment date, show tooltip
    if (isRecurring) {
      return (
        <Tooltip>
          <TooltipTrigger asChild>
            <span className="relative z-[4]">
              {dayContent}
            </span>
          </TooltipTrigger>
          <TooltipContent 
            className="!bg-[#007AFF] !text-white !border-0 !rounded-[8px] !z-[9999] !font-bold"
            sideOffset={8}
            side="top"
            align={tooltipAlign}
            collisionPadding={30}
            avoidCollisions={true}
          >
            {selectedDateTooltip}
          </TooltipContent>
        </Tooltip>
      );
    }

    // If April 30 (and not selected), show tax deadline tooltip
    if (isApril30) {
      return (
        <Tooltip>
          <TooltipTrigger asChild>
            <span className="relative z-[4]">
              {dayContent}
            </span>
          </TooltipTrigger>
          <TooltipContent 
            className="!bg-[#007AFF] !text-white !border-0 !rounded-[8px] !z-[9999] !font-bold"
            sideOffset={8}
            side="top"
            align={tooltipAlign}
            collisionPadding={30}
            avoidCollisions={true}
          >
            Tax filing and payment deadline
          </TooltipContent>
        </Tooltip>
      );
    }

    return dayContent;
  }, [(props as any).selected, recurringPayment]);

  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("p-3", className)}
      modifiers={{
        taxDeadline,
        recurringPayment,
      }}
      modifiersClassNames={{
        taxDeadline: "tax-deadline-day",
        recurringPayment: "recurring-payment-day",
      }}
      classNames={{
        months: "flex flex-col sm:flex-row gap-2",
        month: "flex flex-col gap-4",
        caption: "flex justify-center pt-1 relative items-center w-full",
        caption_label: "text-sm font-medium",
        nav: "flex items-center gap-1",
        nav_button: cn(
          buttonVariants({ variant: "outline" }),
          "size-5.5 bg-white p-0 border-2 border-[#007AFF] hover:bg-[#007AFF] hover:text-white transition-colors rounded-[6px]",
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse table-fixed",
        head_row: "flex w-full",
        head_cell:
          "text-muted-foreground w-[calc(100%/7)] font-bold text-[0.8rem] text-center",
        row: "flex w-full mt-2",
        cell: cn(
          "relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-accent w-[calc(100%/7)] flex items-center justify-center",
          props.mode === "range"
            ? "[&:has(>.day-range-end)]:rounded-r-md [&:has(>.day-range-start)]:rounded-l-md first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md"
            : "[&:has([aria-selected])]:rounded-md",
        ),
        day: cn(
          buttonVariants({ variant: "ghost" }),
          "size-10 p-0 font-normal aria-selected:opacity-100 relative z-[2] cursor-pointer",
        ),
        day_range_start:
          "day-range-start aria-selected:bg-primary aria-selected:text-primary-foreground",
        day_range_end:
          "day-range-end aria-selected:bg-primary aria-selected:text-primary-foreground",
        day_selected:
          "!bg-[#007AFF] !text-white hover:!bg-[#007AFF] hover:!text-white focus:!bg-[#007AFF] focus:!text-white relative z-[3] rounded-[6px]",
        day_today: "bg-accent text-accent-foreground",
        day_outside:
          "day-outside text-muted-foreground aria-selected:text-muted-foreground",
        day_disabled: "text-muted-foreground opacity-50",
        day_range_middle:
          "aria-selected:bg-accent aria-selected:text-accent-foreground",
        day_hidden: "invisible",
        ...classNames,
      }}
      components={{
        IconLeft: ({ className, ...props }) => (
          <ChevronLeft className={cn("size-5", className)} {...props} />
        ),
        IconRight: ({ className, ...props }) => (
          <ChevronRight className={cn("size-5", className)} {...props} />
        ),
        DayContent: DayContentWithTooltip,
      }}
      {...props}
    />
  );
}

export { Calendar };