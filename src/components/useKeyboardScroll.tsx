import { useEffect, useRef } from 'react';

interface UseKeyboardScrollOptions {
  isKeyboardVisible: boolean;
  activeField: string | null;
  keyboardHeight?: number;
  scrollContainerRef?: React.RefObject<HTMLElement>;
  headerOffset?: number; // Additional offset for sticky headers
}

/**
 * Hook to handle automatic scrolling when iOS keyboard appears
 * Ensures that the active input field is not hidden behind the keyboard
 */
export function useKeyboardScroll({ 
  isKeyboardVisible, 
  activeField,
  keyboardHeight = 270, // Default keyboard height in pixels
  scrollContainerRef,
  headerOffset = 0 // Default no additional header offset
}: UseKeyboardScrollOptions) {
  const scrollTimeoutRef = useRef<NodeJS.Timeout>();
  const prevActiveFieldRef = useRef<string | null>(null);

  useEffect(() => {
    // Scroll whenever keyboard is visible and there's an active field
    if (isKeyboardVisible && activeField) {
      prevActiveFieldRef.current = activeField;
      
      // Clear any existing timeout
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }

      // Delay to allow keyboard animation and padding to be applied
      scrollTimeoutRef.current = setTimeout(() => {
        const activeElement = document.getElementById(activeField);
        
        if (activeElement && scrollContainerRef?.current) {
          // Get the bounding rectangles
          const containerRect = scrollContainerRef.current.getBoundingClientRect();
          const elementRect = activeElement.getBoundingClientRect();
          
          // Calculate the target position: place element below sticky header with good spacing
          // Account for header offset (sticky header height) plus additional spacing
          const targetTopPosition = containerRect.top + 100 + headerOffset;
          const currentTopPosition = elementRect.top;
          const scrollOffset = currentTopPosition - targetTopPosition;
          
          // Scroll the container to position the field
          scrollContainerRef.current.scrollBy({
            top: scrollOffset,
            behavior: 'smooth'
          });
        } else if (activeElement) {
          // Fallback to scrollIntoView if no container ref
          activeElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest'
          });
        }
      }, 150); // Slightly longer delay to ensure padding is applied
    } else if (!isKeyboardVisible) {
      prevActiveFieldRef.current = null;
    }

    return () => {
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [isKeyboardVisible, activeField, keyboardHeight, scrollContainerRef, headerOffset]);

  return {
    // Additional padding for scroll container when keyboard is visible
    keyboardPadding: isKeyboardVisible ? keyboardHeight : 0
  };
}