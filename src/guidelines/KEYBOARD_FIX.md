# Keyboard Scroll Fix - Quick Reference

## Problem
Input fields get hidden behind popup keyboards (IPhoneNumericKeyboard, IPhoneKeyboard), making it impossible to see what you're typing.

## Solution Summary
Use dynamic padding instead of maxHeight constraints + automatic scroll positioning to 100px from top.

## Critical Fix (November 2024)

### ❌ OLD PATTERN (Don't Use)
```tsx
<div 
  ref={scrollContainerRef}
  className="flex-1 overflow-y-auto px-4"
  style={{ 
    maxHeight: showKeyboard ? `calc(100vh - ${keyboardHeight}px)` : 'auto',
    paddingBottom: showKeyboard ? '150px' : '96px'
  }}
>
```
**Problem**: maxHeight doesn't account for fixed headers, causing calculation conflicts.

### ✅ NEW PATTERN (Use This)
```tsx
<div 
  ref={scrollContainerRef}
  className="flex-1 overflow-y-auto px-4"
  style={{ 
    paddingBottom: showKeyboard ? `${keyboardHeight + 150}px` : '96px'
  }}
>
```
**Why it works**: 
- No maxHeight constraint - let flex-1 handle height naturally
- Dynamic padding = keyboard height + 150px buffer (e.g., 290 + 150 = 440px)
- Creates scrollable space BELOW content where keyboard appears
- Works perfectly with fixed headers

## Complete Implementation

### 1. Calculate Keyboard Height Dynamically
```tsx
// Different keyboards have different heights!
const isNumericKeyboard = activeField === 'sin' || activeField === 'dob';
const keyboardHeight = isNumericKeyboard ? 290 : 220;

// Numeric keyboard (IPhoneNumericKeyboard): 290px
// Text keyboard (IPhoneKeyboard): 220px
```

### 2. Configure Scroll Container
```tsx
const scrollContainerRef = useRef<HTMLDivElement>(null);

<div 
  ref={scrollContainerRef}
  className="flex-1 overflow-y-auto px-4"
  style={{ 
    paddingBottom: showKeyboard ? `${keyboardHeight + 150}px` : '96px'
  }}
>
  {/* Your form content */}
</div>
```

### 3. Use Keyboard Scroll Hook
```tsx
import { useKeyboardScroll } from '../useKeyboardScroll';

useKeyboardScroll({ 
  isKeyboardVisible: showKeyboard, 
  activeField,
  keyboardHeight,  // MUST be dynamic!
  scrollContainerRef
});
```

### 4. Configure Input Fields
```tsx
<Input
  id="dob"  // ID must match activeField value
  type="text"
  inputMode="none"  // Prevents native keyboard
  value={dateOfBirth}
  onChange={(e) => handleDateChange(e.target.value)}
  onFocus={() => handleFieldFocus('dob')}  // Sets activeField='dob'
  onBlur={handleFieldBlur}
  placeholder="YYYY-MM-DD"
  className="h-11 bg-[#f2f2f7] border-[#c7c7cc] rounded-[10px]"
/>
```

### 5. Render Keyboards
```tsx
<AnimatePresence>
  {showKeyboard && activeField && (activeField === 'sin' || activeField === 'dob') && (
    <IPhoneNumericKeyboard 
      onKeyPress={(key) => {
        // Handle numeric input
      }}
      onDone={() => {
        setShowKeyboard(false);
        setActiveField(null);
        if (document.activeElement instanceof HTMLElement) {
          document.activeElement.blur();
        }
      }}
    />
  )}
  {showKeyboard && activeField && (activeField === 'firstName' || activeField === 'lastName') && (
    <IPhoneKeyboard />
  )}
</AnimatePresence>
```

## Updated Hook Behavior

The `useKeyboardScroll.tsx` hook now:
- Positions field **100px from TOP** of visible container (not centered)
- Ensures field is well above keyboard with good spacing
- Uses 150ms delay to allow padding to be applied
- Works correctly with fixed headers

### Hook Code (useKeyboardScroll.tsx)
```tsx
// Positions element 100px from top of visible container
const targetTopPosition = containerRect.top + 100;
const currentTopPosition = elementRect.top;
const scrollOffset = currentTopPosition - targetTopPosition;

scrollContainerRef.current.scrollBy({
  top: scrollOffset,
  behavior: 'smooth'
});
```

## Critical Values

| Item | Value | Notes |
|------|-------|-------|
| Numeric Keyboard Height | 290px | IPhoneNumericKeyboard with "Done" toolbar |
| Text Keyboard Height | 220px | IPhoneKeyboard |
| Bottom Padding (Numeric) | 440px | 290 + 150 buffer |
| Bottom Padding (Text) | 370px | 220 + 150 buffer |
| Scroll Position | 100px from top | Not centered! |
| Scroll Delay | 150ms | Allows padding to apply |

## Working Example

See `/components/screens/RegistrationPersonalInfoScreen.tsx` for complete implementation:
- Multiple fields with both keyboard types
- SIN & DOB use numeric keyboard (290px)
- Names use text keyboard (220px)
- Dynamic keyboard height calculation
- Proper scroll with fixed header image
- Full visibility of Date of Birth field

## Common Issues Fixed

✅ Date of Birth field no longer hidden behind numeric keyboard  
✅ Fixed headers don't interfere with calculations  
✅ Last field is fully visible with proper spacing  
✅ Field positioning is predictable (100px from top)  
✅ Works on screens with header images at top  

## Quick Checklist

- [ ] Remove `maxHeight` from scroll container style
- [ ] Add dynamic `paddingBottom: ${keyboardHeight + 150}px`
- [ ] Calculate `keyboardHeight` based on active field type
- [ ] Pass `keyboardHeight` to `useKeyboardScroll` hook
- [ ] Ensure input `id` matches `activeField` value
- [ ] Use `inputMode="none"` on inputs to prevent native keyboard
- [ ] Set `activeField` in `onFocus` handler
- [ ] Render correct keyboard based on field type

## Reference

Full documentation in `/guidelines/IOS_FIX.md` under "Keyboard Fix (Popup Keyboard with Scroll)" section.
