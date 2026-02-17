import { useState, useEffect } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { FileText, CreditCard, Mail, Gift, Receipt, FileCheck, HelpCircle, LogOut, GripVertical, Eye, EyeOff, ChevronLeft, ChevronRight, Home, ArrowUp, ArrowDown, Send, DollarSign, Activity, CalendarClock, FileBarChart, AlertCircle, Bell, Clock, Timer, TrendingUp, BellRing, FileWarning, Lightbulb, CircleDollarSign, User, Shield, MessageCircle, Phone, Globe, BookOpen, Bot, PhoneCall, MessageSquarePlus, Users, Baby, Key, Target, GraduationCap, Settings, Banknote, UserPlus, Scale, Search, Calculator, Edit, AlertTriangle, MapPin, Hash, Upload } from 'lucide-react';
import mapleLeafIcon from 'figma:asset/d387a6886c2891c54c4538a4bad19f2879f80d44.png';
import { Switch } from '../ui/switch';
import { motion, AnimatePresence } from 'motion/react';
import { toast } from 'sonner';
import { BottomNavItem } from '../BottomNav';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion';
import { HeaderMaster } from '../HeaderMaster';

interface CustomizeHomeScreenProps {
  onNavigateHome?: () => void;
  onNavigateProfile?: () => void;
  onViewMail?: () => void;
  onFileTaxes?: () => void;
  onMakePayment?: () => void;
  onBenefitsAndCredits?: () => void;
  onRegisteredPlans?: () => void;
  onHelp?: () => void;
  onSignOut?: () => void;
  onTaxSlips?: () => void;
  onProofOfIncome?: () => void;
  onSaveChanges?: (mostRequested: QuickAction[], menuItems: MenuAction[], numberOfRows: number, bottomNavItems: BottomNavItem[], homeContentItems: HomeContentItem[]) => void;
  scrollContainerRef?: React.RefObject<HTMLDivElement>;
  onLogoClick?: () => void;
  hasUnreadMail?: boolean;
  onViewAllBenefits?: () => void;
  onViewRefundDetails?: () => void;
  onViewNoticeOfAssessment?: () => void;
  onGSTHSTCredit?: () => void;
  onAccountDetails?: () => void;
  onProfile?: () => void;
  onViewTaxReturns?: () => void;
  onHomeBuyersPlan?: () => void;
  onFHSAEligibility?: () => void;
  onLifelongLearningPlan?: () => void;
  onCustomize?: () => void;
  onUncashedCheques?: () => void;
  onBecomeRepresentative?: () => void;
  onBecomeRepresentativeAsRep?: () => void;
  onRemittanceVoucher?: () => void;
  onCPPEIRuling?: () => void;
  onAuditEnquiries?: () => void;
  onCarryoverAmounts?: () => void;
  onChangeMyReturn?: () => void;
  onRegisterFormalDispute?: () => void;
  onNonResidentAccount?: () => void;
  onResidencyDetermination?: () => void;
  onPersonalIdentificationNumber?: () => void;
  onProgressTrackerService?: () => void;
  onReliefOfPenalties?: () => void;
  onSubmitDocuments?: () => void;
}

interface QuickAction {
  icon: any;
  label: string;
  id: string;
  type: 'lucide' | 'image';
  imageSrc?: string;
}

interface MenuAction {
  icon: any;
  label: string;
  id: string;
  type: 'lucide' | 'image';
  imageSrc?: string;
  visible: boolean;
}

interface HomeContentItem {
  icon: any;
  label: string;
  id: string;
  type: 'lucide' | 'image';
  imageSrc?: string;
  visible: boolean;
}

const DraggableItem = ({ 
  action, 
  index, 
  isSelected,
  isInBottomNav,
  onCheckmarkClick,
  onDownArrowClick 
}: { 
  action: QuickAction; 
  index: number; 
  isSelected?: boolean;
  isInBottomNav?: boolean;
  onCheckmarkClick?: () => void;
  onDownArrowClick?: () => void;
}) => {
  const [{ isDragging }, drag] = useDrag({
    type: 'action',
    item: { action, index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <div
      ref={drag}
      className={`h-[90px] flex flex-col items-center justify-center gap-1.5 p-3 transition-all relative rounded-[10px] ${
        isDragging ? 'opacity-50' : ''
      } ${isSelected ? 'bg-[#e3f2fd] border-[#007AFF]' : isInBottomNav ? 'bg-[#fff3cd] border-[#ffc107]' : 'bg-white'} cursor-move border-2 hover:bg-[#f2f2f7] shadow-sm hover:shadow-md`}
    >
      <button 
        onClick={(e) => {
          e.stopPropagation();
          if (onCheckmarkClick) onCheckmarkClick();
        }}
        className={`absolute top-1.5 left-1.5 rounded-full p-0.5 border-0 transition-all cursor-pointer ${
          isSelected 
            ? 'bg-[#28a745] hover:bg-[#218838]' 
            : 'bg-[#c7c7cc] hover:bg-[#8e8e93]'
        }`}
        aria-label={isSelected ? 'Remove from most requested' : 'Add to most requested'}
      >
        <ArrowUp className="h-3.5 w-3.5 text-white" />
      </button>
      <button 
        onClick={(e) => {
          e.stopPropagation();
          if (onDownArrowClick) onDownArrowClick();
        }}
        className={`absolute top-1.5 right-1.5 rounded-full p-0.5 border-0 transition-all cursor-pointer ${
          isInBottomNav 
            ? 'bg-[#28a745] hover:bg-[#218838]' 
            : 'bg-[#c7c7cc] hover:bg-[#8e8e93]'
        }`}
        aria-label={isInBottomNav ? 'Remove from bottom navigation' : 'Add to bottom navigation'}
      >
        <ArrowDown className="h-3.5 w-3.5 text-white" />
      </button>
      <div className="flex-shrink-0 h-7 w-7 flex items-center justify-center">
        {action.type === 'lucide' && action.icon ? (
          action.id === 'home-buyers-plan' ? (
            <div className="relative">
              <action.icon className="h-7 w-7 text-[#007AFF]" strokeWidth={2} />
              <span className="absolute -top-1 -right-1 text-[#007AFF] text-[10px] font-bold">$</span>
            </div>
          ) : (
            <action.icon className="h-7 w-7 text-[#007AFF]" strokeWidth={2} />
          )
        ) : action.type === 'image' && action.imageSrc ? (
          <img src={action.imageSrc} alt="" className="h-7 w-7 object-contain" />
        ) : null}
      </div>
      <span className="text-[11px] text-center text-black leading-tight break-words hyphens-auto">{action.label}</span>
    </div>
  );
};

const DroppableSlot = ({ action, index, onDrop, onSwap }: { 
  action: QuickAction; 
  index: number; 
  onDrop: (droppedAction: QuickAction, targetIndex: number) => void;
  onSwap: (sourceIndex: number, targetIndex: number) => void;
}) => {
  const [{ isDragging }, drag] = useDrag({
    type: 'action',
    item: { action, index, fromMostRequested: true },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [{ isOver }, drop] = useDrop({
    accept: 'action',
    drop: (item: { action: QuickAction; index: number; fromMostRequested?: boolean }) => {
      if (item.fromMostRequested) {
        onSwap(item.index, index);
      } else {
        onDrop(item.action, index);
      }
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  return (
    <div
      ref={(node) => drag(drop(node))}
      className={`h-[90px] flex flex-col items-center justify-center gap-1.5 p-3 transition-all rounded-[10px] ${
        isDragging ? 'opacity-50' : ''
      } ${
        isOver ? 'bg-[#e3f2fd] border-[#007AFF]' : 'bg-[#e3f2fd]'
      } border-2 border-dashed cursor-move shadow-sm hover:shadow-md`}
    >
      <div className="flex-shrink-0 h-7 w-7 flex items-center justify-center">
        {action.type === 'lucide' && action.icon ? (
          action.id === 'home-buyers-plan' ? (
            <div className="relative">
              <action.icon className="h-7 w-7 text-[#007AFF]" strokeWidth={2} />
              <span className="absolute -top-1 -right-1 text-[#007AFF] text-[10px] font-bold">$</span>
            </div>
          ) : (
            <action.icon className="h-7 w-7 text-[#007AFF]" strokeWidth={2} />
          )
        ) : action.type === 'image' && action.imageSrc ? (
          <img src={action.imageSrc} alt="" className="h-7 w-7 object-contain" />
        ) : null}
      </div>
      <span className="text-[11px] text-center text-black leading-tight break-words hyphens-auto">{action.label}</span>
    </div>
  );
};

const DroppableBottomNavSlot = ({ 
  navItem, 
  index, 
  onDrop,
  onSwap 
}: { 
  navItem: BottomNavItem; 
  index: number; 
  onDrop: (droppedAction: QuickAction, targetIndex: number) => void;
  onSwap: (sourceIndex: number, targetIndex: number) => void;
}) => {
  const [{ isDragging }, drag] = useDrag({
    type: 'action',
    item: { action: navItem, index, fromBottomNav: true },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [{ isOver }, drop] = useDrop({
    accept: 'action',
    drop: (item: { action: QuickAction; index: number; fromMostRequested?: boolean; fromBottomNav?: boolean }) => {
      if (item.fromBottomNav) {
        onSwap(item.index, index);
      } else {
        onDrop(item.action, index);
      }
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  return (
    <div
      ref={(node) => drag(drop(node))}
      className={`flex flex-col items-center gap-1.5 py-4 transition-all border-t-4 -mt-[2px] cursor-move ${
        isDragging ? 'opacity-50' : ''
      } ${
        isOver ? 'bg-[#e3f2fd] border-[#007AFF]' : 'bg-[#fff3cd] border-transparent'
      }`}
    >
      <div className="h-7 w-7 flex items-center justify-center">
        {navItem.type === 'lucide' && navItem.icon ? (
          <navItem.icon className="h-7 w-7 text-[#007AFF]\" />
        ) : navItem.type === 'image' && navItem.imageSrc ? (
          <img src={navItem.imageSrc} alt="" className="h-7 w-7 object-contain" />
        ) : null}
      </div>
      <span className="text-[11px] text-center text-black leading-[13px] line-clamp-2 whitespace-pre-line">{navItem.label}</span>
    </div>
  );
};

const DraggableMenuItem = ({ 
  menuItem, 
  index, 
  moveMenuItem,
  toggleVisibility 
}: { 
  menuItem: MenuAction; 
  index: number; 
  moveMenuItem: (dragIndex: number, hoverIndex: number) => void;
  toggleVisibility: (id: string) => void;
}) => {
  const [{ isDragging }, drag] = useDrag({
    type: 'menuItem',
    item: { index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [{ isOver }, drop] = useDrop({
    accept: 'menuItem',
    hover: (item: { index: number }) => {
      if (item.index !== index) {
        moveMenuItem(item.index, index);
        item.index = index;
      }
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  return (
    <motion.div
      layout
      initial={false}
      transition={{
        layout: {
          type: "spring",
          stiffness: 300,
          damping: 30
        }
      }}
      ref={(node) => drag(drop(node))}
      className={`flex items-center gap-3 px-4 py-3 bg-white rounded-[10px] border border-[#c7c7cc] transition-all cursor-move ${
        isDragging ? 'opacity-50' : ''
      } ${isOver ? 'bg-[#f2f2f7]' : ''} hover:bg-[#f2f2f7] ${!menuItem.visible ? 'opacity-60' : ''} shadow-sm hover:shadow-md`}
    >
      <GripVertical className="h-7 w-7 text-[#8e8e93] flex-shrink-0" />
      <div className="flex items-center gap-3 flex-1">
        {menuItem.type === 'lucide' && menuItem.icon ? (
          <menuItem.icon className="h-7 w-7 text-[#007AFF] flex-shrink-0" />
        ) : menuItem.type === 'image' && menuItem.imageSrc ? (
          <img src={menuItem.imageSrc} alt="" className="h-7 w-auto flex-shrink-0" />
        ) : null}
        <span className="text-black text-[17px]">{menuItem.label}</span>
      </div>
      <div className="flex items-center gap-2 flex-shrink-0">
        {menuItem.visible ? (
          <Eye className="h-4 w-4 text-[#007AFF]" />
        ) : (
          <EyeOff className="h-4 w-4 text-[#8e8e93]" />
        )}
        <Switch
          checked={menuItem.visible}
          onCheckedChange={() => toggleVisibility(menuItem.id)}
          className="data-[state=checked]:bg-[#28a745]"
        />
      </div>
    </motion.div>
  );
};

const DraggableHomeContentItem = ({ 
  contentItem, 
  index, 
  moveContentItem,
  toggleContentVisibility 
}: { 
  contentItem: HomeContentItem; 
  index: number; 
  moveContentItem: (dragIndex: number, hoverIndex: number) => void;
  toggleContentVisibility: (id: string) => void;
}) => {
  const [{ isDragging }, drag] = useDrag({
    type: 'homeContentItem',
    item: { index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [{ isOver }, drop] = useDrop({
    accept: 'homeContentItem',
    hover: (item: { index: number }) => {
      if (item.index !== index) {
        moveContentItem(item.index, index);
        item.index = index;
      }
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  return (
    <motion.div
      layout
      initial={false}
      transition={{
        layout: {
          type: "spring",
          stiffness: 300,
          damping: 30
        }
      }}
      ref={(node) => drag(drop(node))}
      className={`flex items-center gap-3 px-4 py-3 bg-white rounded-[10px] border border-[#c7c7cc] transition-all cursor-move ${
        isDragging ? 'opacity-50' : ''
      } ${isOver ? 'bg-[#f2f2f7]' : ''} hover:bg-[#f2f2f7] ${!contentItem.visible ? 'opacity-60' : ''} shadow-sm hover:shadow-md`}
    >
      <GripVertical className="h-7 w-7 text-[#8e8e93] flex-shrink-0" />
      <div className="flex items-center gap-3 flex-1">
        {contentItem.type === 'lucide' && contentItem.icon ? (
          <contentItem.icon className="h-7 w-7 text-[#007AFF] flex-shrink-0" />
        ) : contentItem.type === 'image' && contentItem.imageSrc ? (
          <img src={contentItem.imageSrc} alt="" className="h-7 w-auto flex-shrink-0" />
        ) : null}
        <span className="text-black text-[17px]">{contentItem.label}</span>
      </div>
      <div className="flex items-center gap-2 flex-shrink-0">
        {contentItem.visible ? (
          <Eye className="h-4 w-4 text-[#007AFF]" />
        ) : (
          <EyeOff className="h-4 w-4 text-[#8e8e93]" />
        )}
        <Switch
          checked={contentItem.visible}
          onCheckedChange={() => toggleContentVisibility(contentItem.id)}
          className="data-[state=checked]:bg-[#28a745]"
        />
      </div>
    </motion.div>
  );
};

export function CustomizeHomeScreen({
  onNavigateHome,
  onNavigateProfile,
  onViewMail,
  onFileTaxes,
  onMakePayment,
  onBenefitsAndCredits,
  onRegisteredPlans,
  onHelp,
  onSignOut,
  onTaxSlips,
  onProofOfIncome,
  onSaveChanges,
  scrollContainerRef,
  onLogoClick,
  hasUnreadMail,
  onViewAllBenefits,
  onViewRefundDetails,
  onViewNoticeOfAssessment,
  onGSTHSTCredit,
  onAccountDetails,
  onProfile,
  onViewTaxReturns,
  onHomeBuyersPlan,
  onFHSAEligibility,
  onLifelongLearningPlan,
  onCustomize,
  onUncashedCheques,
  onBecomeRepresentative,
  onBecomeRepresentativeAsRep,
  onRemittanceVoucher,
  onCPPEIRuling,
  onAuditEnquiries,
  onCarryoverAmounts,
  onChangeMyReturn,
  onRegisterFormalDispute,
  onNonResidentAccount,
  onResidencyDetermination,
  onPersonalIdentificationNumber,
  onProgressTrackerService,
  onReliefOfPenalties,
  onSubmitDocuments,
}: CustomizeHomeScreenProps) {
  const [showMenu, setShowMenu] = useState(false);

  // Menu items for hamburger menu
  const defaultMenuItems = [
    { icon: Send, label: 'File taxes', id: 'file-taxes', type: 'lucide' as const, onClick: () => { setShowMenu(false); if (onFileTaxes) onFileTaxes(); } },
    { icon: Gift, label: 'Benefits and credits', id: 'benefits-credits', type: 'lucide' as const, onClick: () => { setShowMenu(false); if (onBenefitsAndCredits) onBenefitsAndCredits(); } },
    { icon: CreditCard, label: 'Make a payment', id: 'make-payment', type: 'lucide' as const, onClick: () => { setShowMenu(false); if (onMakePayment) onMakePayment(); } },
    { icon: Mail, label: 'Inbox', id: 'mail', type: 'lucide' as const, onClick: () => { setShowMenu(false); if (onViewMail) onViewMail(); } },
    { icon: null, label: 'Registered plans', id: 'registered-plans', type: 'image' as const, imageSrc: mapleLeafIcon, onClick: () => { setShowMenu(false); if (onRegisteredPlans) onRegisteredPlans(); } },
    { icon: Receipt, label: 'Tax slips and documents', id: 'tax-slips', type: 'lucide' as const, onClick: () => { setShowMenu(false); if (onTaxSlips) onTaxSlips(); } },
    { icon: FileCheck, label: 'Proof of income', id: 'proof-income', type: 'lucide' as const, onClick: () => { setShowMenu(false); if (onProofOfIncome) onProofOfIncome(); } },
    { icon: HelpCircle, label: 'Help and support', id: 'help', type: 'lucide' as const, onClick: () => { setShowMenu(false); if (onHelp) onHelp(); } },
    { icon: LogOut, label: 'Sign out and exit', id: 'sign-out', type: 'lucide' as const, onClick: () => { setShowMenu(false); if (onSignOut) onSignOut(); }, danger: true },
  ];

  const allActions: QuickAction[] = [
    { icon: Send, label: 'File taxes', id: 'file-taxes', type: 'lucide' },
    { icon: FileText, label: 'Tax returns', id: 'tax-returns', type: 'lucide' },
    { icon: CircleDollarSign, label: 'Account details', id: 'payments', type: 'lucide' },
    { icon: Gift, label: 'Benefits & credits', id: 'benefits-credits', type: 'lucide' },
    { icon: CreditCard, label: 'Make payment', id: 'make-payment', type: 'lucide' },
    { icon: Mail, label: 'Inbox', id: 'mail', type: 'lucide' },
    { icon: null, label: 'Registered plans', id: 'registered-plans', type: 'image', imageSrc: mapleLeafIcon },
    { icon: Receipt, label: 'Tax slips & documents', id: 'tax-slips', type: 'lucide' },
    { icon: FileCheck, label: 'Proof of income', id: 'proof-income', type: 'lucide' },
    { icon: HelpCircle, label: 'Help & support', id: 'help', type: 'lucide' },
    { icon: User, label: 'Personal info', id: 'personal-info', type: 'lucide' },
    { icon: Shield, label: 'Security', id: 'security', type: 'lucide' },
    { icon: MessageCircle, label: 'Live chat', id: 'chat', type: 'lucide' },
    { icon: Phone, label: 'Phone an agent', id: 'phone', type: 'lucide' },
    { icon: Globe, label: 'CRA website', id: 'cra-website', type: 'lucide' },
    { icon: BookOpen, label: 'Forms & guides', id: 'forms-guides', type: 'lucide' },
    { icon: Bot, label: 'AI chat', id: 'ai-chat', type: 'lucide' },
    { icon: Home, label: 'Home', id: 'family-info', type: 'lucide' },
    { icon: PhoneCall, label: 'Schedule callback', id: 'schedule-callback', type: 'lucide' },
    { icon: User, label: 'Profile', id: 'faq', type: 'lucide' },
    { icon: MessageSquarePlus, label: 'User feedback', id: 'user-feedback', type: 'lucide' },
    { icon: Users, label: 'Spouse info', id: 'spouse-info', type: 'lucide' },
    { icon: Baby, label: 'Children info', id: 'children-info', type: 'lucide' },
    { icon: Key, label: 'Change password', id: 'change-password', type: 'lucide' },
    { icon: Home, label: "Home Buyers' Plan", id: 'home-buyers-plan', type: 'lucide', onClick: () => { if (onHomeBuyersPlan) onHomeBuyersPlan(); } },
    { icon: Target, label: 'FHSA Eligibility', id: 'fhsa-eligibility', type: 'lucide', onClick: () => { if (onFHSAEligibility) onFHSAEligibility(); } },
    { icon: GraduationCap, label: 'Lifelong Learning Plan', id: 'lifelong-learning-plan', type: 'lucide', onClick: () => { if (onLifelongLearningPlan) onLifelongLearningPlan(); } },
    { icon: Settings, label: 'Customize', id: 'customize', type: 'lucide', onClick: () => { if (onCustomize) onCustomize(); } },
    { icon: Banknote, label: 'Uncashed Cheques', id: 'uncashed-cheques', type: 'lucide', onClick: () => { if (onUncashedCheques) onUncashedCheques(); } },
    { icon: UserPlus, label: 'Become Tax Rep.', id: 'become-representative', type: 'lucide', onClick: () => { if (onBecomeRepresentative) onBecomeRepresentative(); } },
    { icon: UserPlus, label: 'Assign Tax Rep.', id: 'become-representative-as-rep', type: 'lucide', onClick: () => { if (onBecomeRepresentativeAsRep) onBecomeRepresentativeAsRep(); } },
    { icon: FileText, label: 'Remittance Voucher', id: 'remittance-voucher', type: 'lucide', onClick: () => { if (onRemittanceVoucher) onRemittanceVoucher(); } },
    { icon: Scale, label: 'CPPEI Ruling', id: 'cppei-ruling', type: 'lucide', onClick: () => { if (onCPPEIRuling) onCPPEIRuling(); } },
    { icon: Search, label: 'Audit Enquiries', id: 'audit-enquiries', type: 'lucide', onClick: () => { if (onAuditEnquiries) onAuditEnquiries(); } },
    { icon: Calculator, label: 'Carryover Amounts', id: 'carryover-amounts', type: 'lucide', onClick: () => { if (onCarryoverAmounts) onCarryoverAmounts(); } },
    { icon: Edit, label: 'Change My Return', id: 'change-my-return', type: 'lucide', onClick: () => { if (onChangeMyReturn) onChangeMyReturn(); } },
    { icon: AlertTriangle, label: 'Register Formal Dispute', id: 'register-formal-dispute', type: 'lucide', onClick: () => { if (onRegisterFormalDispute) onRegisterFormalDispute(); } },
    { icon: Globe, label: 'Non-Resident Account', id: 'non-resident-account', type: 'lucide', onClick: () => { if (onNonResidentAccount) onNonResidentAccount(); } },
    { icon: MapPin, label: 'Residency Determination', id: 'residency-determination', type: 'lucide', onClick: () => { if (onResidencyDetermination) onResidencyDetermination(); } },
    { icon: Hash, label: 'Personal Identification Number', id: 'personal-identification-number', type: 'lucide', onClick: () => { if (onPersonalIdentificationNumber) onPersonalIdentificationNumber(); } },
    { icon: TrendingUp, label: 'Progress Tracker Service', id: 'progress-tracker-service', type: 'lucide', onClick: () => { if (onProgressTrackerService) onProgressTrackerService(); } },
    { icon: DollarSign, label: 'Relief of Penalties', id: 'relief-of-penalties', type: 'lucide', onClick: () => { if (onReliefOfPenalties) onReliefOfPenalties(); } },
    { icon: Upload, label: 'Submit Documents', id: 'submit-documents', type: 'lucide', onClick: () => { if (onSubmitDocuments) onSubmitDocuments(); } },
  ];

  const initialMenuItems: MenuAction[] = [
    { icon: Send, label: 'File taxes', id: 'file-taxes', type: 'lucide', visible: true },
    { icon: Gift, label: 'Benefits & credits', id: 'benefits-credits', type: 'lucide', visible: true },
    { icon: CreditCard, label: 'Make a payment', id: 'make-payment', type: 'lucide', visible: true },
    { icon: CircleDollarSign, label: 'Account details', id: 'account-details', type: 'lucide', visible: true },
    { icon: Mail, label: 'Inbox', id: 'mail', type: 'lucide', visible: true },
    { icon: null, label: 'Registered plans', id: 'registered-plans', type: 'image', imageSrc: mapleLeafIcon, visible: true },
    { icon: Receipt, label: 'Tax slips & documents', id: 'tax-slips', type: 'lucide', visible: true },
    { icon: FileCheck, label: 'Proof of income', id: 'proof-income', type: 'lucide', visible: true },
    { icon: HelpCircle, label: 'Help and support', id: 'help', type: 'lucide', visible: true },
    { icon: LogOut, label: 'Sign out and exit', id: 'sign-out', type: 'lucide', visible: true },
  ];

  const initialMostRequested: QuickAction[] = [
    allActions[5], // CRA mail
    allActions[3], // Benefits and credits
    allActions[6], // Registered plans
    allActions[4], // Make payment
  ];

  const initialBottomNavItems: BottomNavItem[] = [
    { icon: Home, label: 'Home', id: 'home' as any, type: 'lucide' },
    { icon: FileText, label: 'Tax\nreturns', id: 'returns' as any, type: 'lucide' },
    { icon: CircleDollarSign, label: 'Account\ndetails', id: 'payments' as any, type: 'lucide' },
    { icon: User, label: 'Profile', id: 'profile' as any, type: 'lucide' },
  ];

  const initialHomeContentItems: HomeContentItem[] = [
    { icon: DollarSign, label: 'Balance owing', id: 'balance-owing', type: 'lucide', visible: true },
    { icon: Activity, label: 'Latest transactions', id: 'latest-transactions', type: 'lucide', visible: true },
    { icon: CalendarClock, label: 'Next benefit and credits payments', id: 'next-benefit-payments', type: 'lucide', visible: true },
    { icon: FileBarChart, label: 'Tax filing status', id: 'tax-filing-status', type: 'lucide', visible: true },
    { icon: AlertCircle, label: 'Alerts', id: 'alerts', type: 'lucide', visible: false },
    { icon: Bell, label: 'Date reminders', id: 'date-reminders', type: 'lucide', visible: false },
    { icon: Clock, label: 'Upcoming payments', id: 'upcoming-payments', type: 'lucide', visible: false },
    { icon: Timer, label: 'Processing status times', id: 'processing-times', type: 'lucide', visible: false },
    { icon: TrendingUp, label: 'Real-time status tracking', id: 'status-tracking', type: 'lucide', visible: false },
    { icon: BellRing, label: 'Reminders', id: 'reminders', type: 'lucide', visible: false },
    { icon: FileWarning, label: 'Notices', id: 'notices', type: 'lucide', visible: false },
    { icon: Lightbulb, label: 'Tax tips', id: 'tax-tips', type: 'lucide', visible: false },
  ];

  const [mostRequested, setMostRequested] = useState<QuickAction[]>(initialMostRequested);
  const [menuItems, setMenuItems] = useState<MenuAction[]>(initialMenuItems);
  const [numberOfRows, setNumberOfRows] = useState<number>(1);
  const [bottomNavItems, setBottomNavItems] = useState<BottomNavItem[]>(initialBottomNavItems);
  const [homeContentItems, setHomeContentItems] = useState<HomeContentItem[]>(initialHomeContentItems);

  const [savedMostRequested, setSavedMostRequested] = useState<QuickAction[]>(initialMostRequested);
  const [savedMenuItems, setSavedMenuItems] = useState<MenuAction[]>(initialMenuItems);
  const [savedNumberOfRows, setSavedNumberOfRows] = useState<number>(1);
  const [savedBottomNavItems, setSavedBottomNavItems] = useState<BottomNavItem[]>(initialBottomNavItems);
  const [savedHomeContentItems, setSavedHomeContentItems] = useState<HomeContentItem[]>(initialHomeContentItems);

  const hasChanges = () => {
    if (numberOfRows !== savedNumberOfRows) return true;
    if (mostRequested.length !== savedMostRequested.length) return true;
    
    for (let i = 0; i < mostRequested.length; i++) {
      if (mostRequested[i].id !== savedMostRequested[i].id) return true;
    }
    
    if (menuItems.length !== savedMenuItems.length) return true;
    for (let i = 0; i < menuItems.length; i++) {
      if (menuItems[i].id !== savedMenuItems[i].id || menuItems[i].visible !== savedMenuItems[i].visible) {
        return true;
      }
    }
    
    if (bottomNavItems.length !== savedBottomNavItems.length) return true;
    for (let i = 0; i < bottomNavItems.length; i++) {
      if (bottomNavItems[i].label !== savedBottomNavItems[i].label) return true;
    }
    
    if (homeContentItems.length !== savedHomeContentItems.length) return true;
    for (let i = 0; i < homeContentItems.length; i++) {
      if (homeContentItems[i].id !== savedHomeContentItems[i].id || homeContentItems[i].visible !== savedHomeContentItems[i].visible) {
        return true;
      }
    }
    
    return false;
  };

  const handleSaveChanges = () => {
    setSavedMostRequested([...mostRequested]);
    setSavedMenuItems([...menuItems]);
    setSavedNumberOfRows(numberOfRows);
    setSavedBottomNavItems([...bottomNavItems]);
    setSavedHomeContentItems([...homeContentItems]);
    
    toast.success('Changes saved successfully');
    if (onSaveChanges) onSaveChanges(mostRequested, menuItems, numberOfRows, bottomNavItems, homeContentItems);
  };

  const handleCancelChanges = () => {
    setMostRequested([...savedMostRequested]);
    setMenuItems([...savedMenuItems]);
    setNumberOfRows(savedNumberOfRows);
    setBottomNavItems([...savedBottomNavItems]);
    setHomeContentItems([...savedHomeContentItems]);
    
    toast.info('Changes cancelled');
  };

  const handleDrop = (droppedAction: QuickAction, targetIndex: number) => {
    const newMostRequested = [...mostRequested];
    newMostRequested[targetIndex] = droppedAction;
    setMostRequested(newMostRequested);
  };

  const handleSwap = (sourceIndex: number, targetIndex: number) => {
    const newMostRequested = [...mostRequested];
    const temp = newMostRequested[sourceIndex];
    newMostRequested[sourceIndex] = newMostRequested[targetIndex];
    newMostRequested[targetIndex] = temp;
    setMostRequested(newMostRequested);
  };

  const handleBottomNavSwap = (sourceIndex: number, targetIndex: number) => {
    const newBottomNavItems = [...bottomNavItems];
    const temp = newBottomNavItems[sourceIndex];
    newBottomNavItems[sourceIndex] = newBottomNavItems[targetIndex];
    newBottomNavItems[targetIndex] = temp;
    setBottomNavItems(newBottomNavItems);
  };

  const moveMenuItem = (dragIndex: number, hoverIndex: number) => {
    const newMenuItems = [...menuItems];
    const draggedItem = newMenuItems[dragIndex];
    newMenuItems.splice(dragIndex, 1);
    newMenuItems.splice(hoverIndex, 0, draggedItem);
    setMenuItems(newMenuItems);
  };

  const toggleVisibility = (id: string) => {
    const itemIndex = menuItems.findIndex(item => item.id === id);
    if (itemIndex === -1) return;
    
    const updatedItem = { ...menuItems[itemIndex], visible: !menuItems[itemIndex].visible };
    const newMenuItems = [...menuItems];
    
    if (!updatedItem.visible) {
      newMenuItems.splice(itemIndex, 1);
      newMenuItems.push(updatedItem);
    } else {
      newMenuItems.splice(itemIndex, 1);
      
      let lastVisibleIndex = -1;
      for (let i = 0; i < newMenuItems.length; i++) {
        if (newMenuItems[i].visible) {
          lastVisibleIndex = i;
        }
      }
      
      const insertIndex = lastVisibleIndex + 1;
      newMenuItems.splice(insertIndex, 0, updatedItem);
    }
    
    setMenuItems(newMenuItems);
  };

  const moveHomeContentItem = (dragIndex: number, hoverIndex: number) => {
    const newHomeContentItems = [...homeContentItems];
    const draggedItem = newHomeContentItems[dragIndex];
    newHomeContentItems.splice(dragIndex, 1);
    newHomeContentItems.splice(hoverIndex, 0, draggedItem);
    setHomeContentItems(newHomeContentItems);
  };

  const toggleContentVisibility = (id: string) => {
    const itemIndex = homeContentItems.findIndex(item => item.id === id);
    if (itemIndex === -1) return;
    
    const updatedItem = { ...homeContentItems[itemIndex], visible: !homeContentItems[itemIndex].visible };
    const newHomeContentItems = [...homeContentItems];
    
    if (!updatedItem.visible) {
      newHomeContentItems.splice(itemIndex, 1);
      newHomeContentItems.push(updatedItem);
    } else {
      newHomeContentItems.splice(itemIndex, 1);
      
      let lastVisibleIndex = -1;
      for (let i = 0; i < newHomeContentItems.length; i++) {
        if (newHomeContentItems[i].visible) {
          lastVisibleIndex = i;
        }
      }
      
      const insertIndex = lastVisibleIndex + 1;
      newHomeContentItems.splice(insertIndex, 0, updatedItem);
    }
    
    setHomeContentItems(newHomeContentItems);
  };

  const addRow = () => {
    if (numberOfRows < 6) {
      setNumberOfRows(numberOfRows + 1);
      const newSlots = Array(4).fill({ icon: null, label: '', id: '', type: 'lucide' as const });
      setMostRequested([...mostRequested, ...newSlots]);
    }
  };

  const removeRow = () => {
    if (numberOfRows > 1) {
      setNumberOfRows(numberOfRows - 1);
      const newLength = (numberOfRows - 1) * 4;
      setMostRequested(mostRequested.slice(0, newLength));
    }
  };

  const addAll = () => {
    setNumberOfRows(6);
    const maxSlots = 24;
    const filledSlots = allActions.slice(0, maxSlots);
    const emptySlots = maxSlots - filledSlots.length;
    const emptyActions = Array(emptySlots).fill({ icon: null, label: '', id: '', type: 'lucide' as const });
    setMostRequested([...filledSlots, ...emptyActions]);
  };

  const handleBottomNavDrop = (droppedAction: QuickAction, targetIndex: number) => {
    const newBottomNavItems = [...bottomNavItems];
    newBottomNavItems[targetIndex] = {
      ...newBottomNavItems[targetIndex],
      icon: droppedAction.icon,
      label: droppedAction.label,
      type: droppedAction.type,
      imageSrc: droppedAction.imageSrc,
    };
    setBottomNavItems(newBottomNavItems);
  };

  const handleDownArrowClick = (action: QuickAction) => {
    const isAlreadyInBottomNav = bottomNavItems.some(
      (navItem) => navItem.label === action.label
    );
    
    if (isAlreadyInBottomNav) {
      const indexToRestore = bottomNavItems.findIndex(
        (navItem) => navItem.label === action.label
      );
      if (indexToRestore !== -1) {
        const newBottomNavItems = [...bottomNavItems];
        newBottomNavItems[indexToRestore] = initialBottomNavItems[indexToRestore];
        setBottomNavItems(newBottomNavItems);
        toast.info('Removed from bottom navigation');
      }
      return;
    }
    
    let targetIndex = -1;
    for (let i = 0; i < bottomNavItems.length; i++) {
      if (bottomNavItems[i].label === initialBottomNavItems[i].label) {
        targetIndex = i;
        break;
      }
    }
    
    if (targetIndex === -1) {
      targetIndex = 0;
    }
    
    const newBottomNavItems = [...bottomNavItems];
    newBottomNavItems[targetIndex] = {
      ...newBottomNavItems[targetIndex],
      icon: action.icon,
      label: action.label,
      type: action.type,
      imageSrc: action.imageSrc,
    };
    setBottomNavItems(newBottomNavItems);
    toast.success(`Added to bottom navigation (slot ${targetIndex + 1})`);
  };

  const handleCheckmarkClick = (action: QuickAction) => {
    const isCurrentlySelected = mostRequested.some((mr) => mr.id === action.id && mr.id !== '');
    
    if (isCurrentlySelected) {
      const newMostRequested = mostRequested.map((mr) => 
        mr.id === action.id ? { icon: null, label: '', id: '', type: 'lucide' as const } : mr
      );
      setMostRequested(newMostRequested);
      return;
    }
    
    const emptySlotIndex = mostRequested.findIndex((mr) => !mr.id || mr.id === '');
    
    if (emptySlotIndex !== -1) {
      const newMostRequested = [...mostRequested];
      newMostRequested[emptySlotIndex] = action;
      setMostRequested(newMostRequested);
    } else {
      if (numberOfRows < 5) {
        setNumberOfRows(numberOfRows + 1);
        const newSlots = [
          action,
          { icon: null, label: '', id: '', type: 'lucide' as const },
          { icon: null, label: '', id: '', type: 'lucide' as const },
          { icon: null, label: '', id: '', type: 'lucide' as const }
        ];
        setMostRequested([...mostRequested, ...newSlots]);
      } else {
        toast.error('Maximum of 20 slots reached. Remove an item first or drag to replace.');
      }
    }
  };

  useEffect(() => {
    let animationFrameId: number | null = null;
    let isDragging = false;
    let currentMouseY = 0;

    const smoothScroll = () => {
      if (!isDragging || !scrollContainerRef?.current) {
        animationFrameId = null;
        return;
      }

      const scrollThreshold = 300;
      const viewport = scrollContainerRef.current;
      const viewportRect = viewport.getBoundingClientRect();
      const mouseY = currentMouseY;

      if (mouseY < viewportRect.top + scrollThreshold) {
        const distanceFromEdge = mouseY - viewportRect.top;
        const intensity = Math.max(0, 1 - distanceFromEdge / scrollThreshold);
        const scrollSpeed = 1 + intensity * 12;
        
        if (viewport.scrollTop > 0) {
          viewport.scrollTop -= scrollSpeed;
        }
      }
      else if (mouseY > viewportRect.bottom - scrollThreshold) {
        const distanceFromEdge = viewportRect.bottom - mouseY;
        const intensity = Math.max(0, 1 - distanceFromEdge / scrollThreshold);
        const scrollSpeed = 1 + intensity * 12;
        
        if (viewport.scrollTop < viewport.scrollHeight - viewport.clientHeight) {
          viewport.scrollTop += scrollSpeed;
        }
      }

      animationFrameId = requestAnimationFrame(smoothScroll);
    };

    const handleDragStart = () => {
      isDragging = true;
    };

    const handleDragOver = (e: DragEvent) => {
      if (!isDragging || !scrollContainerRef?.current) return;
      e.preventDefault();

      currentMouseY = e.clientY;

      if (!animationFrameId) {
        animationFrameId = requestAnimationFrame(smoothScroll);
      }
    };

    const handleDragEnd = () => {
      isDragging = false;
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
        animationFrameId = null;
      }
    };

    document.addEventListener('dragstart', handleDragStart);
    document.addEventListener('dragover', handleDragOver);
    document.addEventListener('dragend', handleDragEnd);
    document.addEventListener('drop', handleDragEnd);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      document.removeEventListener('dragstart', handleDragStart);
      document.removeEventListener('dragover', handleDragOver);
      document.removeEventListener('dragend', handleDragEnd);
      document.removeEventListener('drop', handleDragEnd);
    };
  }, [scrollContainerRef]);

  return (
    <div className="h-full bg-[#f2f2f7] flex flex-col relative">
      {/* Header - Sticky */}
      <div className="flex-shrink-0 sticky top-0 z-10 bg-white">
        <HeaderMaster 
          title="My Account"
          onNavigateHome={onNavigateHome}
          onLogoClick={onLogoClick}
          hasUnreadMail={hasUnreadMail}
          showSearch={true}
          showMenu={true}
          largeTitle={true}
          onFileTaxes={onFileTaxes}
          onViewAllBenefits={onViewAllBenefits || onBenefitsAndCredits}
          onMakePayment={onMakePayment}
          onViewMail={onViewMail}
          onRegisteredPlans={onRegisteredPlans}
          onTaxSlips={onTaxSlips}
          onProofOfIncome={onProofOfIncome}
          onHelp={onHelp}
          onSignOut={onSignOut}
          onViewRefundDetails={onViewRefundDetails}
          onViewNoticeOfAssessment={onViewNoticeOfAssessment}
          onGSTHSTCredit={onGSTHSTCredit}
          onAccountDetails={onAccountDetails}
          onProfile={onProfile}
          onViewTaxReturns={onViewTaxReturns}
          onHomeBuyersPlan={onHomeBuyersPlan}
          onFHSAEligibility={onFHSAEligibility}
          onLifelongLearningPlan={onLifelongLearningPlan}
          onCustomize={onCustomize}
          onUncashedCheques={onUncashedCheques}
          onBecomeRepresentative={onBecomeRepresentative}
          onBecomeRepresentativeAsRep={onBecomeRepresentativeAsRep}
          onRemittanceVoucher={onRemittanceVoucher}
          onCPPEIRuling={onCPPEIRuling}
          onAuditEnquiries={onAuditEnquiries}
          onCarryoverAmounts={onCarryoverAmounts}
          onChangeMyReturn={onChangeMyReturn}
          onRegisterFormalDispute={onRegisterFormalDispute}
          onNonResidentAccount={onNonResidentAccount}
          onResidencyDetermination={onResidencyDetermination}
          onPersonalIdentificationNumber={onPersonalIdentificationNumber}
          onProgressTrackerService={onProgressTrackerService}
          onReliefOfPenalties={onReliefOfPenalties}
          onSubmitDocuments={onSubmitDocuments}
        />
      </div>

      {/* Content - Scrollable */}
      <div className="flex-1 min-h-0 overflow-y-auto bg-[#f2f2f7] pb-20">
        {/* Page Title with Circular Back Button */}
        <div className="sticky top-0 px-4 pt-2 pb-3 bg-[#f2f2f7] z-[5]">
          <div className="flex items-center gap-3 mb-2">
            <button
              onClick={onNavigateHome}
              className="flex items-center justify-center w-[30.6px] h-[30.6px] rounded-full border-2 border-[#007AFF] bg-transparent text-[#007AFF] cursor-pointer hover:bg-[#007AFF] hover:border-[#007AFF] hover:text-white active:opacity-70 transition-all flex-shrink-0"
            >
              <ChevronLeft className="h-5 w-5" strokeWidth={3} />
            </button>
            <h1 className="text-[28px] font-bold text-black m-0 tracking-tight leading-[30.6px]">Customize</h1>
          </div>
          <p className="text-black text-[15px] m-0 opacity-80 ml-[42.6px]">Use the tools below to fully customize your home page experience.</p>
        </div>

        <div className="px-4 pb-[140px]">
          {/* Instructions Accordion */}
          <div className="mb-4">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="instructions" className="bg-white border-l-4 border-[#007AFF] rounded-[10px] overflow-hidden shadow-sm border-b-0">
                <AccordionTrigger className="px-4 py-3 text-black hover:no-underline hover:bg-[#f2f2f7] transition-colors [&[data-state=open]>div>div]:rotate-90 [&>svg]:hidden">
                  <div className="flex items-center justify-between w-full">
                    <span className="text-[17px]">How to customize instructions</span>
                    <div className="flex items-center justify-center w-[30.6px] h-[30.6px] rounded-full border-2 border-[#007AFF] bg-transparent text-[#007AFF] hover:bg-[#007AFF] hover:text-white active:opacity-70 transition-all flex-shrink-0">
                      <ChevronRight className="h-5 w-5" strokeWidth={3} />
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4">
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-black mb-2">My most requested</h4>
                      <ul className="list-disc pl-5 text-black text-[15px] space-y-1 m-0 opacity-80">
                        <li>Click the <strong>up arrow</strong> (top left) on any item in "All actions" to add it to "My most requested"</li>
                        <li>Drag any item from "All actions" to one of the slots in "My most requested" to replace the existing item</li>
                        <li>Drag items within "My most requested" to swap their positions and reorder them</li>
                        <li>Add up to 5 rows (20 total slots) to customize more shortcuts</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-black mb-2">Bottom navigation</h4>
                      <ul className="list-disc pl-5 text-black text-[15px] space-y-1 m-0 opacity-80">
                        <li>Click the <strong>down arrow</strong> (top right) on any item in "All actions" to add it to the bottom navigation bar</li>
                        <li>Drag any item from "All actions" to the bottom navigation bar to customize its appearance</li>
                        <li>Drag items within the bottom navigation bar to reorder them</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-black mb-2">Options menu</h4>
                      <ul className="list-disc pl-5 text-black text-[15px] space-y-1 m-0 opacity-80">
                        <li>Toggle the visibility switch to show or hide items in the options menu on your home screen</li>
                        <li>Drag items to reorder how they appear in the options menu</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-black mb-2">My Account news feed</h4>
                      <ul className="list-disc pl-5 text-black text-[15px] space-y-1 m-0 opacity-80">
                        <li>Toggle the visibility switch to show or hide content sections on your home screen</li>
                        <li>Drag items to reorder how content sections appear on your home page</li>
                      </ul>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Most Requested Section */}
          <div className="section-header-ios">
            My most requested
          </div>
          <div className="pb-4">
            <div className="bg-[#fff3cd] border-l-4 border-[#ffc107] p-3 mb-3 rounded-[10px]">
              <p className="text-black text-[15px] m-0">
                <span className="font-bold">Note:</span> Drag items from "All actions" below to replace items in your most requested section, or drag items within "My most requested" to reorder them
              </p>
            </div>
            <div className="grid grid-cols-4 gap-2.5">
              {mostRequested.map((action, index) => (
                <DroppableSlot key={`slot-${index}`} action={action} index={index} onDrop={handleDrop} onSwap={handleSwap} />
              ))}
            </div>
            <div className="mt-4 flex gap-4 flex-wrap items-center">
              {numberOfRows < 5 && (
                <button 
                  onClick={addRow} 
                  className="text-[#007AFF] underline hover:opacity-70 active:opacity-50 text-[15px] bg-transparent border-0 p-0 transition-opacity"
                >
                  Add a row
                </button>
              )}
              {numberOfRows > 1 && (
                <button 
                  onClick={removeRow} 
                  className="text-[#007AFF] underline hover:opacity-70 active:opacity-50 text-[15px] bg-transparent border-0 p-0 transition-opacity"
                >
                  Remove a row
                </button>
              )}
              <button 
                onClick={addAll} 
                className="text-[#007AFF] underline hover:opacity-70 active:opacity-50 text-[15px] bg-transparent border-0 p-0 transition-opacity"
              >
                Add all
              </button>
            </div>
          </div>

          {/* All Actions Section */}
          <div className="section-header-ios">
            All actions
          </div>
          <div className="pb-4">
            <div className="grid grid-cols-4 gap-2.5">
              {allActions.map((action, index) => {
                const isSelected = mostRequested.some((mr) => mr.id === action.id && mr.id !== '');
                const isInBottomNav = bottomNavItems.some((navItem) => navItem.label === action.label);
                return (
                  <DraggableItem 
                    key={action.id} 
                    action={action} 
                    index={index} 
                    isSelected={isSelected}
                    isInBottomNav={isInBottomNav}
                    onCheckmarkClick={() => handleCheckmarkClick(action)}
                    onDownArrowClick={() => handleDownArrowClick(action)}
                  />
                );
              })}
            </div>
          </div>

          {/* Bottom Navigation Customization Section */}
          <div className="section-header-ios">
            Bottom navigation
          </div>
          <div className="pb-4">
            <div className="bg-white border-t-2 border-[#c7c7cc] rounded-[10px] overflow-hidden shadow-sm">
              <div className="grid grid-cols-4">
                {bottomNavItems.map((navItem, index) => (
                  <DroppableBottomNavSlot 
                    key={`bottom-nav-${index}`} 
                    navItem={navItem} 
                    index={index} 
                    onDrop={handleBottomNavDrop}
                    onSwap={handleBottomNavSwap} 
                  />
                ))}
              </div>
            </div>
            <div className="bg-[#fff3cd] border-l-4 border-[#ffc107] p-3 mt-3 rounded-[10px]">
              <p className="text-black text-[15px] m-0">
                <span className="font-bold">Note:</span> Drag items from "All actions" to replace the icons in your bottom navigation bar, or click the down arrow on any item to add it.
              </p>
            </div>
          </div>

          {/* Options Menu Customization Section */}
          <div className="section-header-ios">
            Options menu
          </div>
          <div className="pb-4">
            <div className="bg-[#fff3cd] border-l-4 border-[#ffc107] p-3 mb-3 rounded-[10px]">
              <p className="text-black text-[15px] m-0">
                <span className="font-bold">Note:</span> Drag items up or down to reorder them in the options menu. Toggle the switch to show or hide items.
              </p>
            </div>
            <div className="space-y-3">
              {menuItems.map((menuItem, index) => (
                <DraggableMenuItem
                  key={menuItem.id}
                  menuItem={menuItem}
                  index={index}
                  moveMenuItem={moveMenuItem}
                  toggleVisibility={toggleVisibility}
                />
              ))}
            </div>
          </div>

          {/* Home Page Content Customization Section */}
          <div className="section-header-ios">
            My Account news feed
          </div>
          <div className="pb-4">
            <div className="bg-[#fff3cd] border-l-4 border-[#ffc107] p-3 mb-3 rounded-[10px]">
              <p className="text-black text-[15px] m-0">
                <span className="font-bold">Note:</span> Drag items up or down to reorder them on your home page. Toggle the switch to show or hide content sections.
              </p>
            </div>
            <div className="space-y-3">
              {homeContentItems.map((contentItem, index) => (
                <DraggableHomeContentItem
                  key={contentItem.id}
                  contentItem={contentItem}
                  index={index}
                  moveContentItem={moveHomeContentItem}
                  toggleContentVisibility={toggleContentVisibility}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Save and Cancel Buttons - Fixed to bottom above footer */}
      {hasChanges() && (
        <div className="fixed bottom-[-1px] left-0 right-0 bg-white border-t-4 border-[#007AFF] p-4 shadow-lg z-30 max-w-md mx-auto">
          <div className="flex gap-3">
            <button
              onClick={handleCancelChanges}
              className="flex-1 px-4 py-3 bg-white border-2 border-[#007AFF] text-[#007AFF] rounded-[10px] hover:bg-[#f2f2f7] active:bg-[#e5e5ea] transition-colors text-center text-[17px]"
            >
              Cancel
            </button>
            <button
              onClick={handleSaveChanges}
              className="flex-1 px-4 py-3 bg-[#007AFF] text-white rounded-[10px] hover:opacity-90 active:opacity-80 transition-opacity text-center text-[17px] whitespace-nowrap"
            >
              Save changes
            </button>
          </div>
        </div>
      )}

      {/* Hamburger Menu */}
      <AnimatePresence>
        {showMenu && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/30 z-[60]"
              onClick={() => setShowMenu(false)}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed top-0 right-0 bottom-0 w-[280px] bg-[#f2f2f7] z-[70] shadow-xl"
            >
              {/* Menu Header */}
              <div className="bg-white border-b border-[rgba(60,60,67,0.29)] px-4 py-3">
                <div className="flex items-center justify-between">
                  <h2 className="text-[20px] font-semibold text-black m-0">Menu</h2>
                  <button
                    onClick={() => setShowMenu(false)}
                    className="text-[#007AFF] text-[17px] bg-transparent border-0 p-0 hover:opacity-70 active:opacity-50 transition-opacity"
                  >
                    Close
                  </button>
                </div>
              </div>

              {/* Menu Items */}
              <div className="overflow-y-auto h-[calc(100%-60px)]">
                <div className="py-2">
                  {defaultMenuItems.map((item, index) => (
                    <button
                      key={item.id}
                      onClick={item.onClick}
                      className={`w-full flex items-center gap-3 px-4 py-3 bg-transparent border-0 text-left hover:bg-white/50 active:bg-white transition-colors ${
                        item.danger ? 'text-[#ff3b30]' : 'text-black'
                      }`}
                    >
                      {item.type === 'lucide' && item.icon && (
                        <item.icon className={`h-5 w-5 ${item.danger ? 'text-[#ff3b30]' : 'text-[#007AFF]'}`} />
                      )}
                      {item.type === 'image' && item.imageSrc && (
                        <img src={item.imageSrc} alt="" className="h-5 w-5" />
                      )}
                      <span className="text-[15px]">{item.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}