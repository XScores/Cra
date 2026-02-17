
## Keyboard Fix (Popup Keyboard with Scroll)

When implementing screens with popup keyboards (like the `IPhoneNumericKeyboard` component), proper scroll handling is critical to ensure input fields remain visible above the keyboard.

### Problem
Input fields near the bottom of the screen get hidden behind the popup keyboard, making it impossible for users to see what they're typing.

### Solution
Use a combination of:
1. **Constrained scroll container height** - Limit the scrollable area to viewport minus keyboard height
2. **Bottom padding** - Provide extra scrollable space below the last input
3. **scrollIntoView** - Automatically scroll active field into view

### Implementation Pattern

#### 1. Scroll Container Configuration
```tsx
{/* Scrollable Content */}
<div 
  ref={scrollContainerRef}
  className="flex-1 overflow-y-auto px-4 pb-4"
  style={{ 
    maxHeight: showKeyboard ? 'calc(100vh - 290px)' : 'auto',
    paddingBottom: showKeyboard ? '150px' : '16px'
  }}
>
  {/* Form content with input fields */}
</div>
```

**Key Features:**
- `maxHeight: calc(100vh - 290px)` when keyboard is visible (290px = keyboard height)
- Dynamic `paddingBottom` provides extra scroll space (150px recommended)
- `overflow-y-auto` enables scrolling
- Use a `ref` to pass to the keyboard scroll hook

#### 2. Use the Keyboard Scroll Hook
```tsx
import { useKeyboardScroll } from '../useKeyboardScroll';

// Inside component
const scrollContainerRef = useRef<HTMLDivElement>(null);
const [showKeyboard, setShowKeyboard] = useState(false);
const [activeField, setActiveField] = useState<string | null>(null);

// Use the hook
useKeyboardScroll({ 
  isKeyboardVisible: showKeyboard, 
  activeField,
  keyboardHeight: 290,
  scrollContainerRef
});
```

#### 3. Input Field Configuration
```tsx
<input
  id="tax"  {/* Required: ID must match activeField value */}
  type="text"
  inputMode="none"  {/* Prevents native keyboard */}
  value={taxAmount}
  onChange={(e) => {
    // Handle physical keyboard input
    const value = e.target.value.replace(/\D/g, '');
    setTaxAmount(value);
  }}
  onFocus={() => {
    setActiveField('tax');  {/* Set to input's ID */}
    setShowKeyboard(true);
  }}
  className="flex-1 border-0 text-[17px] text-black bg-transparent focus:outline-none"
  placeholder="0"
/>
```

**Key Features:**
- `inputMode="none"` prevents native keyboard from appearing
- `onFocus` handler shows popup keyboard and sets active field
- Input `id` matches the `activeField` value for scroll targeting
- `onChange` still works for physical keyboard input

#### 4. Keyboard Component
```tsx
<AnimatePresence>
  {showKeyboard && activeField && (
    <div className="keyboard-area">
      <IPhoneNumericKeyboard 
        onKeyPress={(key) => {
          // Handle key presses from popup keyboard
          if (activeField === 'tax') {
            if (key === 'backspace') {
              setTaxAmount(taxAmount.slice(0, -1));
            } else if (/^\d$/.test(key)) {
              setTaxAmount(taxAmount + key);
            }
          }
        }}
        onDone={() => {
          setShowKeyboard(false);
          setActiveField(null);
          // Blur the input
          if (document.activeElement instanceof HTMLElement) {
            document.activeElement.blur();
          }
        }}
      />
    </div>
  )}
</AnimatePresence>
```

### How the useKeyboardScroll Hook Works

The hook automatically scrolls the active input field into view when the keyboard appears:

```tsx
// From useKeyboardScroll.tsx
useEffect(() => {
  if (isKeyboardVisible && activeField) {
    setTimeout(() => {
      const activeElement = document.getElementById(activeField);
      
      if (activeElement) {
        // Scroll element to center of visible area
        activeElement.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
          inline: 'nearest'
        });
      }
    }, 400); // Delay ensures padding is applied first
  }
}, [isKeyboardVisible, activeField, keyboardHeight, scrollContainerRef]);
```

**Key Features:**
- 400ms delay ensures dynamic padding and height changes are applied before scrolling
- `scrollIntoView` with `block: 'center'` centers the input in visible area
- Automatically triggered when `activeField` changes

### Critical Values

- **Keyboard Height**: 290px (includes toolbar with "Done" button)
- **Scroll Container maxHeight**: `calc(100vh - 290px)` when keyboard visible
- **Bottom Padding**: 150px when keyboard visible (provides scroll buffer)
- **Scroll Delay**: 400ms (allows DOM updates to complete)

### Example: Full Implementation

See `ValidateIdentityScreen.tsx` for a complete working example with:
- Multiple input fields (SIN and tax information)
- Popup numeric keyboard
- Proper scroll handling for bottom fields
- Support for both popup and physical keyboard input

### Benefits
1. **Visible Inputs**: All input fields can be scrolled above the keyboard
2. **Dual Keyboard Support**: Works with both popup and physical keyboards
3. **Smooth UX**: Automatic scrolling provides seamless user experience
4. **Consistent Behavior**: Same pattern works for any screen with popup keyboards
5. **iOS Native Feel**: Matches iOS keyboard appearance and behavior

### DO NOT
- ❌ Use excessive bottom padding (900px+) - causes black space below keyboard
- ❌ Position keyboard with `fixed bottom-0` without constraining scroll container
- ❌ Forget to set `inputMode="none"` on inputs (causes dual keyboards)
- ❌ Skip the scroll delay - scrolling will fail if padding isn't applied yet
- ❌ Use scroll calculations without `scrollIntoView` - browser API is more reliable
