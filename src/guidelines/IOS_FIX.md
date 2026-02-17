# iOS Fix Pattern

This document describes the standardized iOS header pattern to apply across all detail screens in the CRA app.

## Problem
Detail screens were using individual headers with different titles and back buttons in the HeaderIOS component, which doesn't follow iOS design patterns.

## Solution
All detail screens (except the Dashboard/Home screen) should use a consistent header that matches the Home screen, with page-specific navigation moved to the content area.

## Header Display
The large title header displays:
- **Top line**: Canadian flag icon + "Canada Revenue Agency" (20px bold, black)
- **Bottom line**: "My Account" (14px semibold, #3a3a3c, aligned with text above)
- **Account Type Tabs**: At the bottom of the header, "Personal", "Business", and "Representative" tabs are clickable areas for switching account types

## Pattern to Apply

### 1. Header Configuration
Use the same header as the Home screen with `largeTitle={true}`:

```tsx
<HeaderIOS 
  title="My Account"
  onNavigateHome={onNavigateHome}
  onLogoClick={onLogoClick}
  hasUnreadMail={hasUnreadMail}
  onMenuClick={() => setShowMenu(true)}
  showSearch={true}
  showMenu={true}
  largeTitle={true}
  onPersonalClick={() => console.log('Personal account clicked')}
  onBusinessClick={() => console.log('Business account clicked')}
  onRepresentativeClick={() => console.log('Representative account clicked')}
  activeAccountType="personal"
/>
```

**Note**: The header will display "Canada Revenue Agency" as the large title with the Canadian flag, and "My Account" as the subtitle below it.

### Optional Account Type Switching
The header now supports clickable areas for the three account types (Personal, Business, Representative) shown at the bottom of the header image:

- **onPersonalClick**: Callback when Personal tab is clicked
- **onBusinessClick**: Callback when Business tab is clicked  
- **onRepresentativeClick**: Callback when Representative tab is clicked
- **activeAccountType**: Current active account type ('personal' | 'business' | 'representative') - default is 'personal'

These props are optional. Only provide them if you want to enable account type switching functionality.

#### Example: Account Type Toasts
When a user clicks on "Personal", "Business", or "Representative" in the header, show a toast notification that slides down from under the header explaining what that account type allows:

```tsx
// Add state for toast visibility and z-index management
const [showPersonalToast, setShowPersonalToast] = useState(false);
const [showBusinessToast, setShowBusinessToast] = useState(false);
const [showRepresentativeToast, setShowRepresentativeToast] = useState(false);
const [lastClickedToast, setLastClickedToast] = useState<'personal' | 'business' | 'representative' | null>(null);

// Wire up header
<HeaderIOS 
  onPersonalClick={() => {
    setShowPersonalToast(true);
    setLastClickedToast('personal');
  }}
  onBusinessClick={() => {
    setShowBusinessToast(true);
    setLastClickedToast('business');
  }}
  // ... other props
/>

// Add Personal toast with AnimatePresence
<AnimatePresence>
  {showPersonalToast && (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -100, opacity: 0 }}
      transition={{ type: 'spring', damping: 25, stiffness: 300 }}
      className={`absolute top-[90px] left-0 right-0 px-4 ${lastClickedToast === 'personal' ? 'z-[70]' : 'z-[60]'}`}
    >
      <div className="bg-white rounded-[12px] shadow-[0_4px_20px_rgba(0,0,0,0.15)] overflow-hidden border border-[rgba(60,60,67,0.18)] relative">
        <button
          onClick={() => setShowPersonalToast(false)}
          className="absolute top-2 right-2 text-[#8e8e93] hover:text-black bg-transparent border-0 p-1 cursor-pointer transition-colors z-10"
          aria-label="Close"
        >
          <X className="h-5 w-5" />
        </button>
        <div className="p-4 pr-10">
          <h3 className="text-[17px] font-semibold text-black m-0 mb-2">Personal account active</h3>
          <p className="text-[15px] text-[#3c3c43] m-0 mb-4 opacity-80">
            This Personal account allows you to file your taxes, view benefits and credits, and manage and update your individual tax information.
          </p>
          <button
            onClick={() => {
              setShowPersonalToast(false);
              // Handle learn more action
            }}
            className="w-full bg-[#34C759] text-white text-[17px] font-semibold py-3 px-4 rounded-[10px] border-0 cursor-pointer hover:bg-[#2FB04D] active:bg-[#2A9E46] transition-colors flex items-center justify-center"
          >
            Learn More
          </button>
        </div>
      </div>
    </motion.div>
  )}
</AnimatePresence>

// Add Business toast with AnimatePresence
<AnimatePresence>
  {showBusinessToast && (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -100, opacity: 0 }}
      transition={{ type: 'spring', damping: 25, stiffness: 300 }}
      className={`absolute top-[90px] left-0 right-0 px-4 ${lastClickedToast === 'business' ? 'z-[70]' : 'z-[60]'}`}
    >
      <div className="bg-white rounded-[12px] shadow-[0_4px_20px_rgba(0,0,0,0.15)] overflow-hidden border border-[rgba(60,60,67,0.18)] relative">
        <button
          onClick={() => setShowBusinessToast(false)}
          className="absolute top-2 right-2 text-[#8e8e93] hover:text-black bg-transparent border-0 p-1 cursor-pointer transition-colors z-10"
          aria-label="Close"
        >
          <X className="h-5 w-5" />
        </button>
        <div className="p-4 pr-10">
          <h3 className="text-[17px] font-semibold text-black m-0 mb-2">Business Account</h3>
          <p className="text-[15px] text-[#3c3c43] m-0 mb-4 opacity-80">
            A Business account allows you to manage GST/HST, payroll, and corporate income tax for your business.
          </p>
          <button
            onClick={() => {
              setShowBusinessToast(false);
              // Handle register business action
            }}
            className="w-full bg-[#34C759] text-white text-[17px] font-semibold py-3 px-4 rounded-[10px] border-0 cursor-pointer hover:bg-[#2FB04D] active:bg-[#2A9E46] transition-colors flex items-center justify-center"
          >
            Register Your Business
          </button>
        </div>
      </div>
    </motion.div>
  )}
</AnimatePresence>
```

**Notes**: 
- Ensure the parent container has `relative` positioning for the toast to position correctly.
- The `lastClickedToast` state tracks which toast was most recently clicked, ensuring the most recent toast appears on top (z-[70]) while others are behind (z-[60]). This prevents toasts from being hidden when multiple are visible simultaneously.
- All three account types (Personal, Business, Representative) follow the same pattern with consistent styling and animations.
- The button text varies based on context: "Learn More" for Personal, "Register Your Business" for Business, "Become a Representative" for Representative.

#### Example: Representative Account Toast
When a user clicks on "Representative" to learn about representative accounts, show a toast notification explaining what it is:

```tsx
// Wire up header
<HeaderIOS 
  onRepresentativeClick={() => {
    setShowRepresentativeToast(true);
    setLastClickedToast('representative');
  }}
  // ... other props
/>

// Add toast with AnimatePresence
<AnimatePresence>
  {showRepresentativeToast && (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -100, opacity: 0 }}
      transition={{ type: 'spring', damping: 25, stiffness: 300 }}
      className={`absolute top-[90px] left-0 right-0 px-4 ${lastClickedToast === 'representative' ? 'z-[70]' : 'z-[60]'}`}
    >
      <div className="bg-white rounded-[12px] shadow-[0_4px_20px_rgba(0,0,0,0.15)] overflow-hidden border border-[rgba(60,60,67,0.18)] relative">
        <button
          onClick={() => setShowRepresentativeToast(false)}
          className="absolute top-2 right-2 text-[#8e8e93] hover:text-black bg-transparent border-0 p-1 cursor-pointer transition-colors z-10"
          aria-label="Close"
        >
          <X className="h-5 w-5" />
        </button>
        <div className="p-4 pr-10">
          <h3 className="text-[17px] font-semibold text-black m-0 mb-2">Representative Account</h3>
          <p className="text-[15px] text-[#3c3c43] m-0 mb-4 opacity-80">
            A Representative account allows you to file taxes and manage accounts for family members or clients.
          </p>
          <button
            onClick={() => {
              setShowRepresentativeToast(false);
              // Handle become representative action
            }}
            className="w-full bg-[#34C759] text-white text-[17px] font-semibold py-3 px-4 rounded-[10px] border-0 cursor-pointer hover:bg-[#2FB04D] active:bg-[#2A9E46] transition-colors flex items-center justify-center"
          >
            Become a Representative
          </button>
        </div>
      </div>
    </motion.div>
  )}
</AnimatePresence>
```

**Remove these props:**
- `showBackButton={true}`
- `onBack={onBack}`
- Any custom title (replace with "My Account")

### 2. Content Area - Circular Back Button and Page Title
Add this section at the top of the scrollable content area (right after `<div className="flex-1 min-h-0 overflow-y-auto bg-[#f2f2f7] pb-20">`):

**UPDATED PATTERN (November 2024)**: The back button now uses a circular chevron design that matches the iOS design language:

```tsx
{/* Page Title with Circular Back Button */}
<div className="px-4 pt-2 pb-3 bg-[#f2f2f7]">
  <div className="flex items-center gap-3">
    <button
      onClick={onBack}
      className="flex items-center justify-center w-[30.6px] h-[30.6px] rounded-full border-2 border-[#007AFF] bg-transparent text-[#007AFF] cursor-pointer hover:bg-[#007AFF] hover:border-[#007AFF] hover:text-white active:opacity-70 transition-all flex-shrink-0"
    >
      <ChevronLeft className="h-5 w-5" strokeWidth={3} />
    </button>
    <h1 className="text-[28px] font-bold text-black m-0 tracking-tight">[Page Title]</h1>
  </div>
</div>
```

Replace `[Page Title]` with the actual screen title (e.g., "Benefits and credits", "Make a payment", "Tax returns", etc.)

#### Key Features of Circular Back Button
- **Circular Design**: 30.6px circular button (15% smaller than original 36px)
- **Blue Border and Chevron**: Uses iOS blue (#007AFF) for both border and icon
- **Bold Chevron**: `strokeWidth={3}` for better visibility
- **Hover Effect**: Circle fills with blue background, chevron turns white
- **Same Line**: Button and title are on the same horizontal line with proper spacing
- **Compact**: Takes minimal space while maintaining touch-friendly size

#### Multi-line H1 Headers
When the H1 header text requires 2 lines, use `items-start` instead of `items-center` and add `mt-[2px]` to the button to align the vertical center of the circular back button with the vertical center of the first line of text:

```tsx
{/* Page Title with Circular Back Button - Multi-line H1 */}
<div className="px-4 pt-2 pb-3 bg-[#f2f2f7]">
  <div className="flex items-start gap-3">
    <button
      onClick={onBack}
      className="flex items-center justify-center w-[30.6px] h-[30.6px] rounded-full border-2 border-[#007AFF] bg-transparent text-[#007AFF] cursor-pointer hover:bg-[#007AFF] hover:border-[#007AFF] hover:text-white active:opacity-70 transition-all flex-shrink-0 mt-[2px]"
    >
      <ChevronLeft className="h-5 w-5" strokeWidth={3} />
    </button>
    <h1 className="text-[28px] font-bold text-black m-0 tracking-tight">Choose registration method</h1>
  </div>
</div>
```

**Key differences**: 
- Use `flex items-start` instead of `flex items-center` to align with the first line when H1 wraps to multiple lines
- Add `mt-[2px]` to the button to vertically center the 30.6px circle with the ~34px first line of text (calculated as: text line center [17px] - button center [15.3px] = 1.7px ≈ 2px)

## Required Import
Make sure `ChevronLeft` is imported from lucide-react:

```tsx
import { ChevronLeft } from 'lucide-react';
```

## Example: Before and After

### Before
```tsx
<HeaderIOS 
  title="Benefits and credits"
  showBackButton={true}
  onBack={onBack}
  onNavigateHome={onNavigateHome}
  onLogoClick={onLogoClick}
  hasUnreadMail={hasUnreadMail}
  onMenuClick={() => setShowMenu(true)}
  showSearch={true}
  showMenu={true}
/>
```

### After
```tsx
{/* Header - Fixed */}
<div className="flex-shrink-0">
  <HeaderIOS 
    title="My Account"
    onNavigateHome={onNavigateHome}
    onLogoClick={onLogoClick}
    hasUnreadMail={hasUnreadMail}
    onMenuClick={() => setShowMenu(true)}
    showSearch={true}
    showMenu={true}
    largeTitle={true}
  />
</div>

{/* Content - Scrollable */}
<div className="flex-1 min-h-0 overflow-y-auto bg-[#f2f2f7] pb-20">
  {/* Back Button and Page Title */}
  <div className="px-4 pt-2 pb-3 bg-[#f2f2f7]">
    <button
      onClick={onBack}
      className="flex items-center gap-0.5 text-[#007AFF] bg-transparent border-0 p-0 cursor-pointer hover:opacity-70 active:opacity-50 transition-opacity mb-2"
    >
      <ChevronLeft className="h-5 w-5" strokeWidth={2.5} />
      <span className="text-[15px]">Back</span>
    </button>
    <h1 className="text-[28px] font-bold text-black m-0 tracking-tight">Benefits and credits</h1>
  </div>

  {/* Rest of content */}
  <div className="bg-[#f2f2f7] px-4 py-4">
    {/* ... */}
  </div>
</div>
```

## Benefits
1. **Consistency**: All screens show the same header with Canadian flag, "Canada Revenue Agency" (large title), and "My Account" (subtitle) branding
2. **iOS Pattern**: Follows standard iOS navigation patterns where detail views show their title in the content area
3. **Visual Hierarchy**: Large title header provides organizational context (Canada Revenue Agency), subtitle shows account context (My Account), while content title shows the specific screen
4. **Cleaner Code**: Separates global navigation (header) from page-specific navigation (back button + title)

## Screens to Update
Apply this pattern to all detail/secondary screens including:
- Tax filing screens
- Payment screens
- Profile/settings screens
- Documents screens
- Messages screens
- All benefit detail screens
- All registered plans screens
- All FAQ screens
- All form/edit screens

**Do NOT apply to:**
- DashboardScreen (Home) - Already uses `largeTitle={true}` correctly
- LoginScreen - Different header pattern
- LaunchScreen - No header
- HomeScreenIPhone - iPhone home screen, not app screen

## Quick Action Icons Styling

For the "My most requested" QuickActions component on the home screen, use white backgrounds with rounded corners and proper text spacing:

### Icon Button Structure
```tsx
<button
  onClick={onClick}
  className="aspect-square flex flex-col items-center justify-center gap-1.5 p-3 transition-all text-[#007AFF] rounded-[10px] bg-white border-0 hover:opacity-70 active:opacity-50"
>
  <div className="flex-shrink-0">
    {/* Icon goes here - h-7 w-7 for lucide icons */}
    <Mail className="h-7 w-7" strokeWidth={2} />
  </div>
  <div className="flex flex-col items-center gap-0">
    <span className="text-[11px] text-center leading-tight break-words hyphens-auto text-black">CRA mail</span>
    {/* Optional badge/count - wrapped in same container with gap-0 for tight spacing */}
    <span className="text-[10px] text-center text-[#007AFF] font-semibold leading-tight">1 Unread</span>
  </div>
</button>
```

### Key Features
- **White Background**: `bg-white` with `rounded-[10px]` for iOS-style card appearance
- **Icon Size**: `h-7 w-7` for lucide icons (28px for image icons)
- **Text Container**: Wrap label and optional badge in `<div className="flex flex-col items-center gap-0">` for tight vertical spacing
- **Label Styling**: `text-[11px] text-center leading-tight` with black color
- **Badge Styling**: `text-[10px] text-center text-[#007AFF] font-semibold leading-tight` for counts/status
- **Spacing**: `gap-1.5` between icon and text container, `gap-0` between label and badge for tight coupling

## H2 Headers (iOS Section Headers)

Use H2 headers to label different content sections within screens (like "Select tax year", "Related links", "Actions", etc.):

### H2 Header Styling
```tsx
<h2 className="text-black text-[13px] uppercase tracking-wider mb-2 px-4 opacity-95">Section Title</h2>
```

### Key Features
- **Text Color**: `text-black` with `opacity-95` for subtle appearance
- **Text Size**: `text-[13px]` - Small, unobtrusive size
- **Transform**: `uppercase` - All capital letters
- **Letter Spacing**: `tracking-wider` - Increased spacing for readability
- **Spacing**: `mb-2` bottom margin, `px-4` horizontal padding to align with content
- **Common Uses**: "Select tax year", "Statement preview", "Actions", "Related links", "Need help?", etc.

This matches the standard iOS Settings app section header pattern and is used for subsections within a screen.

## Page Subtitle/Description Text

Use consistent subtitle text below the main page title to provide additional context about the screen's purpose:

### Subtitle Text Styling
```tsx
<p className="text-black text-[15px] m-0 opacity-80">Description text here</p>
```

### Key Features
- **Text Color**: `text-black` with `opacity-80` for subtle, secondary appearance
- **Text Size**: `text-[15px]` - Standard iOS body text size
- **Margin**: `m-0` - No margin (spacing controlled by parent)
- **Placement**: Directly below the page title (h1) in the back button/page title section
- **Common Uses**: Brief descriptions like "Generate an official proof of income statement for your records", "View your RRSP, TFSA, FHSA, and RESP contribution information", etc.

This follows iOS patterns for secondary descriptive text that provides context for the current screen.

## H1 Headers (Content Section Headers)

Use the H1 style for major content section headers on the Dashboard/Home screen (like "My most requested", "Recent activity", etc.):

### H1 Header Styling
```tsx
<h2 className="text-[22px] font-semibold text-black m-0">My most requested</h2>
```

### Key Features
- **Text Size**: `text-[22px]` - Large, prominent size
- **Font Weight**: `font-semibold` - Semibold for emphasis
- **Text Color**: `text-black` - Full black, no opacity
- **Margin**: `m-0` - No margin (spacing controlled by parent)
- **Case**: Regular case (not uppercase)
- **Common Uses**: "My most requested", "Recent activity", "Tax overview", "Benefits summary", etc.

This style is distinct from iOS section headers (13px uppercase gray) and is used for major dashboard content sections that need more visual prominence.

## Accordion Styling (iOS Pattern)

When using accordions for expandable content sections (like FAQs, help topics, or collapsible information), follow this **STANDARD** iOS-inspired pattern. This is the canonical accordion format used throughout the app, as seen in the Sign In Help Screen.

### ⭐ STANDARD Accordion Structure (Use This Format)

```tsx
{/* Section Header */}
<h2 className="text-black text-[13px] uppercase tracking-wider mb-2 opacity-95">Need Help?</h2>

{/* Accordion Wrapper - Note: use space-y-3, NOT card-ios */}
<Accordion type="single" collapsible className="space-y-3" defaultValue={defaultValue}>
  
  {/* Each accordion item is a separate card with blue left border */}
  <AccordionItem value="item-1" className="card-ios overflow-hidden border-l-4 border-[#007AFF]">
    <AccordionTrigger className="text-black hover:no-underline py-3 px-4 hover:bg-[#f2f2f7] active:bg-[#e5e5ea] text-[15px]">
      Accordion title goes here
    </AccordionTrigger>
    <AccordionContent className="px-4 pb-4">
      {/* Content goes here */}
    </AccordionContent>
  </AccordionItem>
  
  {/* Additional items follow same pattern */}
  <AccordionItem value="item-2" className="card-ios overflow-hidden border-l-4 border-[#007AFF]">
    <AccordionTrigger className="text-black hover:no-underline py-3 px-4 hover:bg-[#f2f2f7] active:bg-[#e5e5ea] text-[15px]">
      Second accordion title
    </AccordionTrigger>
    <AccordionContent className="px-4 pb-4">
      {/* Content goes here */}
    </AccordionContent>
  </AccordionItem>
</Accordion>
```

### Key Features (IMPORTANT - Follow Exactly)

#### Accordion Wrapper
- **ClassName**: `space-y-3` - Creates vertical spacing between accordion items
- **NOT**: ❌ Do NOT use `card-ios overflow-hidden` on the wrapper
- **Type**: `type="single"` for one item open at a time
- **Collapsible**: `collapsible` allows closing the opened item

#### AccordionItem (Individual Cards)
- **Card Base**: `card-ios` - White background with rounded corners and shadow
- **Color Accent**: `border-l-4 border-[#007AFF]` - Blue vertical bar on left edge
- **Overflow**: `overflow-hidden` - Ensures content respects rounded corners
- **Value**: Unique string identifier (e.g., "item-1", "item-2")
- **NO Border-T**: ❌ Each item is separate, no `border-t border-[#c6c6c8]` needed

#### AccordionTrigger (Clickable Header)
- **Text Style**: `text-black text-[15px]` - Standard body text size
- **Padding**: `py-3 px-4` - Adequate touch target
- **Hover States**: 
  - `hover:no-underline` - Remove default underline
  - `hover:bg-[#f2f2f7]` - Light gray on hover
  - `active:bg-[#e5e5ea]` - Darker gray on press
- **NOT**: ❌ Do NOT use `data-[state=open]:bg-[#f2f2f7]`
- **Text**: Direct text, NOT wrapped in `<span>` tag

#### AccordionContent (Expandable Content)
- **Padding**: `px-4 pb-4` - Matches trigger padding
- **Top Padding**: None - content flows naturally from trigger

### Content Text Guidelines
- **Body Text**: `text-black text-[15px] m-0 opacity-80`
- **Subheadings**: `text-black mb-2 text-[15px] font-semibold`
- **Lists**: Use `text-[#007AFF]` for bullet points (`•`), and `text-black text-[15px] opacity-80` for list item text
- **Links**: `text-[#007AFF] hover:opacity-70 active:opacity-50 underline text-[15px] transition-opacity`

### Complete Example (Sign In Help Screen Pattern)

```tsx
<h2 className="text-black text-[13px] uppercase tracking-wider mb-2 opacity-95">Common issues</h2>

<Accordion type="single" collapsible className="space-y-3" defaultValue={defaultAccordionItem}>
  <AccordionItem value="item-0" className="card-ios overflow-hidden border-l-4 border-[#007AFF]">
    <AccordionTrigger className="text-black hover:no-underline py-3 px-4 hover:bg-[#f2f2f7] active:bg-[#e5e5ea] text-[15px]">
      You need help with registering for My Account
    </AccordionTrigger>
    <AccordionContent className="px-4 pb-4">
      <h4 className="text-black mb-2 text-[15px] font-semibold">How to register for My Account:</h4>
      <p className="text-black text-[15px] m-0 opacity-80 mb-3">
        Select the registration option from the sign-in screen and follow the prompts.
      </p>
      <a href="#" className="text-[#007AFF] hover:opacity-70 active:opacity-50 underline text-[15px] transition-opacity">
        Learn more about registering for My Account
      </a>
    </AccordionContent>
  </AccordionItem>

  <AccordionItem value="item-1" className="card-ios overflow-hidden border-l-4 border-[#007AFF]">
    <AccordionTrigger className="text-black hover:no-underline py-3 px-4 hover:bg-[#f2f2f7] active:bg-[#e5e5ea] text-[15px]">
      You forgot your CRA user ID or password
    </AccordionTrigger>
    <AccordionContent className="px-4 pb-4">
      <h4 className="text-black mb-2 text-[15px] font-semibold">To recover your CRA user ID:</h4>
      <p className="text-black text-[15px] m-0 opacity-80">
        Select "Forgot your user ID?" and follow the recovery process.
      </p>
    </AccordionContent>
  </AccordionItem>
</Accordion>
```

### Common Use Cases
- FAQ sections
- Help topics and troubleshooting guides (e.g., Sign In Help, Need Help sections)
- Expandable information panels
- Step-by-step instructions
- Terms and conditions
- Policy information

### ❌ Common Mistakes to Avoid
1. **DON'T** wrap the Accordion in `card-ios` class - use `space-y-3` instead
2. **DON'T** add `border-t border-[#c6c6c8]` to items - each is its own separate card
3. **DON'T** use `data-[state=open]:bg-[#f2f2f7]` on trigger - use `active:bg-[#e5e5ea]` instead
4. **DON'T** wrap trigger text in `<span>` tags - use direct text
5. **DON'T** use `pb-3` on content - use `pb-4` to match padding
6. **DON'T** forget the `border-l-4 border-[#007AFF]` blue accent bar

## Bullet Points Styling

Bullet points should be larger and more visible than the body text for better readability and visual hierarchy.

### Bullet Point Structure
```tsx
<div className="flex items-start gap-2">
  <span className="text-[#007AFF] mt-1 text-[20px] leading-none">•</span>
  <p className="text-[#3c3c43] text-[17px] m-0 leading-snug">List item text goes here</p>
</div>
```

### Key Features
- **Bullet Size**: `text-[20px] leading-none` - Larger than body text for prominence
- **Bullet Color**: 
  - `text-[#007AFF]` - Standard blue for informational bullets
  - `text-[#28a745]` - Green for positive/success bullets
  - `text-[#ff3b30]` - Red for warning/important bullets
- **Vertical Alignment**: `mt-1` - Slight offset to align with first line of text
- **Spacing**: `gap-2` between bullet and text content
- **Container**: `flex items-start` to keep bullet aligned with top of text

### Example with Different Colors
```tsx
{/* Informational (blue) */}
<span className="text-[#007AFF] mt-1 text-[20px] leading-none">•</span>

{/* Positive/Success (green) */}
<span className="text-[#28a745] mt-1 text-[20px] leading-none">•</span>

{/* Warning/Important (red) */}
<span className="text-[#ff3b30] mt-1 text-[20px] leading-none">•</span>
```

### Note on Separator Bullets
Bullets used as metadata separators (like "date • size • type") should remain at standard text size and not use the enlarged styling. These are decorative separators, not list bullets.

## Hamburger Menu (iOS Right-Slide Pattern)

All hamburger menu interactions across the app should use the standardized right-slide animation pattern. This has been implemented as a reusable component.

### Using the HamburgerMenu Component

Import and use the reusable `HamburgerMenu` component instead of creating custom menu implementations:

```tsx
import { HamburgerMenu } from '../HamburgerMenu';
```

### Component Usage
```tsx
// 1. Add state for menu visibility
const [showMenu, setShowMenu] = useState(false);

// 2. Configure menu items
const menuItems = [
  { 
    icon: Send, 
    label: 'File taxes', 
    id: 'file-taxes', 
    type: 'lucide' as const, 
    onClick: () => { 
      setShowMenu(false); 
      if (onFileTaxes) onFileTaxes(); 
    } 
  },
  { 
    icon: Gift, 
    label: 'Benefits & credits', 
    id: 'benefits-credits', 
    type: 'lucide' as const, 
    onClick: () => { 
      setShowMenu(false); 
      if (onBenefitsAndCredits) onBenefitsAndCredits(); 
    } 
  },
  // ... more items
  { 
    icon: LogOut, 
    label: 'Sign out and exit', 
    id: 'sign-out', 
    type: 'lucide' as const, 
    onClick: () => { 
      setShowMenu(false); 
      if (onSignOut) onSignOut(); 
    }, 
    danger: true  // Red text for destructive actions
  },
];

// 3. Wire up HeaderIOS
<HeaderIOS 
  onMenuClick={() => setShowMenu(true)}
  showMenu={true}
  // ... other props
/>

// 4. Add HamburgerMenu component
<HamburgerMenu 
  isOpen={showMenu}
  onClose={() => setShowMenu(false)}
  menuItems={menuItems}
/>
```

### MenuItem Configuration
Each menu item object supports:
- **icon**: Lucide icon component (optional, use `null` for image icons)
- **label**: Display text for the menu item
- **id**: Unique identifier for the menu item
- **type**: Either `'lucide'` for icon components or `'image'` for image sources
- **imageSrc**: Image URL (required if type is `'image'`)
- **onClick**: Handler function - should close menu and execute action
- **danger**: Boolean (optional) - displays item in red for destructive actions

### Animation Behavior
The `HamburgerMenu` component provides:
- **Right-slide animation**: Menu slides in from right (`x: '100%'` to `x: 0`)
- **Smooth backdrop fade**: Semi-transparent black backdrop with opacity animation
- **Tween easing**: Uses `easeInOut` with 0.3s duration for professional feel
- **Fixed positioning**: Menu is 280px wide, full height, positioned on right edge
- **Body scroll lock**: Automatically disables body scroll when menu is open
- **Click-outside-to-close**: Clicking backdrop closes menu
- **Sticky header**: "Menu" title with "Done" button stays visible during scroll

### Key Features
- **White header with border**: Header uses white background with bottom border
- **Gray background**: Menu content area uses `#f2f2f7` background
- **Card styling**: Menu items are in a white `card-ios` container
- **Interactive states**: Items have hover/active states with background color changes
- **Chevron icons**: Right chevrons indicate tappable items
- **Icon colors**: Blue (`#007AFF`) for normal items, red (`#ff3b30`) for danger items
- **Consistent spacing**: 17px text, proper padding, list-item separators

### DO NOT Use Alternative Patterns
- ❌ Bottom slide-up sheets
- ❌ Center modals
- ❌ Left-side slide-ins
- ❌ Custom animation timings or easing functions
- ❌ Different menu widths or positioning

### Benefits of Standardization
1. **Consistency**: Same menu behavior across all screens
2. **Code Reusability**: Single component, no duplication
3. **Maintainability**: Updates apply globally
4. **iOS Pattern**: Matches iOS navigation drawer pattern
5. **Performance**: Optimized animations and scroll locking

## iOS Chevron Style (Clickable Items)

All clickable list items and navigation elements should use the standardized iOS chevron pattern with interactive hover states.

### Chevron Styling Pattern

Use the `.chevron-button-ios` class for right-facing chevrons in clickable items:

```tsx
<button className="w-full card-ios p-4 text-left hover:bg-[#f9f9f9] active:bg-[#ebebeb] transition-colors">
  <div className="flex items-center justify-between">
    <div className="flex items-start gap-3 flex-1">
      <Icon className="h-6 w-6 text-[#007AFF]" strokeWidth={2} />
      <div>
        <h3 className="text-[17px] font-semibold text-black m-0">Item Title</h3>
        <p className="text-[15px] text-black opacity-80 m-0">Description text</p>
      </div>
    </div>
    <div className="chevron-button-ios">
      <ChevronRight />
    </div>
  </div>
</button>
```

### Key Features
- **Blue Chevron**: Chevron is styled in iOS blue (#007AFF)
- **Bold Stroke**: Uses `stroke-width: 3` for prominence
- **Circle on Hover**: A subtle blue circle background appears when hovering ANY part of the clickable area
- **Global Hover Behavior**: The blue circle activates when the parent button/link is hovered, not just the chevron itself
- **Interactive States**:
  - Default: Blue chevron, no background
  - Hover (anywhere on button): Blue chevron with light blue circle (`rgba(0, 122, 255, 0.15)`)
  - Active (anywhere on button): Blue chevron with darker blue circle (`rgba(0, 122, 255, 0.25)`)
- **Consistent Size**: 28px circle container with 20px chevron icon
- **Smooth Transition**: 0.2s ease transition for background changes

### Global CSS Classes

Two chevron classes are available:

**`.chevron-button-ios`** - Primary style for clickable items
- Stronger visual weight with `stroke-width: 3`
- Optimized for list items and navigation
- Hover circle: `rgba(0, 122, 255, 0.15)`

**`.chevron-ios`** - Alternative style for inline chevrons
- Standard visual weight with `stroke-width: 2.5`
- Lighter hover circle: `rgba(0, 122, 255, 0.1)`

### Usage in List Items

```tsx
{/* Clickable navigation item */}
<button 
  onClick={() => navigate('target')}
  className="w-full card-ios p-4 text-left hover:bg-[#f9f9f9] active:bg-[#ebebeb] transition-colors"
>
  <div className="flex items-center justify-between gap-3">
    <div className="flex items-start gap-3 flex-1">
      <Smartphone className="h-6 w-6 text-[#007AFF]" strokeWidth={2} />
      <div>
        <h3 className="text-[17px] font-semibold text-black m-0">Online Registration</h3>
        <p className="text-[15px] text-black opacity-80 m-0">
          Register using your personal information
        </p>
      </div>
    </div>
    <div className="chevron-button-ios">
      <ChevronRight />
    </div>
  </div>
</button>
```

### Required Import
```tsx
import { ChevronRight } from 'lucide-react';
```

### DO NOT Use
- ❌ Gray chevrons (`text-[#c7c7cc]`)
- ❌ Small chevrons without the wrapper (`<ChevronRight className="h-5 w-5" />`)
- ❌ Chevrons without hover states
- ❌ Custom circle implementations

### Benefits
1. **Discoverability**: Bold blue chevrons clearly indicate interactive elements
2. **Enhanced Feedback**: Hover circle activates when hovering anywhere on the clickable area, providing immediate visual feedback
3. **Consistency**: Same chevron style and hover behavior across all clickable items
4. **iOS Native Feel**: Matches iOS design patterns for navigation
5. **Accessibility**: Clear visual indicators improve usability
6. **Better UX**: Users don't need to hover precisely on the chevron - any part of the button triggers the visual feedback

### How It Works
The CSS uses parent-child selector patterns (`button:hover .chevron-button-ios`) so that hovering over any part of a button, link, or clickable area will activate the blue circle on the chevron. This creates a more responsive and intuitive user experience.

## iOS List Items with Separators (Clickable Pattern)

For lists of clickable items (like financial institutions, menu options, settings items), use this standardized pattern with proper separators and chevron styling.

### List Structure with Separators

```tsx
{/* Container - card-ios for white background */}
<div className="card-ios overflow-hidden">
  {items.map((item, index) => (
    <div key={item.id}>
      <button
        onClick={() => handleItemClick(item)}
        className="w-full px-4 py-3.5 flex items-center justify-between gap-3 bg-transparent border-0 cursor-pointer hover:bg-[#f2f2f7] active:bg-[#e5e5ea] transition-colors text-left"
      >
        <div className="flex items-center gap-3 flex-1">
          <Icon className="h-5 w-5 text-[#007AFF] flex-shrink-0" strokeWidth={2} />
          <span className="text-[17px] text-black">{item.name}</span>
        </div>
        <div className="chevron-button-ios">
          <ChevronRight />
        </div>
      </button>
      {index < items.length - 1 && (
        <div className="border-b border-[#c7c7cc] ml-[52px]" />
      )}
    </div>
  ))}
</div>
```

### Key Features

**Container:**
- `card-ios` - White background with rounded corners and shadow
- `overflow-hidden` - Ensures content respects rounded corners

**Button (Clickable Item):**
- `w-full` - Full width for easy clicking
- `px-4 py-3.5` - Consistent padding (16px horizontal, 14px vertical)
- `flex items-center justify-between gap-3` - Icon/text on left, chevron on right
- `bg-transparent border-0` - Remove default button styles
- `cursor-pointer` - Show pointer on hover
- `hover:bg-[#f2f2f7] active:bg-[#e5e5ea]` - Interactive background states
- `transition-colors` - Smooth color transitions
- `text-left` - Left-align text content

**Content Layout:**
- Left side: `flex items-center gap-3 flex-1` - Icon and text, takes available space
- Icon: `h-5 w-5 text-[#007AFF] flex-shrink-0` with `strokeWidth={2}`
- Text: `text-[17px] text-black` - Standard iOS text size
- Right side: `chevron-button-ios` wrapper with `<ChevronRight />` inside

**Separator:**
- `border-b border-[#c7c7cc]` - Light gray bottom border
- `ml-[52px]` - Left margin (52px = 16px padding + 20px icon + 12px gap + 4px adjustment)
- Only shown between items (`index < items.length - 1`)
- Aligns with text, not icon, following iOS pattern

### Example: Sign-In Partners List

```tsx
const SIGNIN_PARTNERS = [
  'Affinity Credit Union',
  'ATB Financial',
  'BMO Financial Group',
  // ... more partners
];

<div className="card-ios overflow-hidden mb-4">
  {SIGNIN_PARTNERS.map((partner, index) => (
    <div key={partner}>
      <button
        onClick={() => onSelectBank(partner)}
        className="w-full px-4 py-3.5 flex items-center justify-between gap-3 bg-transparent border-0 cursor-pointer hover:bg-[#f2f2f7] active:bg-[#e5e5ea] transition-colors text-left"
      >
        <div className="flex items-center gap-3 flex-1">
          <Building2 className="h-5 w-5 text-[#007AFF] flex-shrink-0" strokeWidth={2} />
          <span className="text-[17px] text-black">{partner}</span>
        </div>
        <div className="chevron-button-ios">
          <ChevronRight />
        </div>
      </button>
      {index < SIGNIN_PARTNERS.length - 1 && (
        <div className="border-b border-[#c7c7cc] ml-[52px]" />
      )}
    </div>
  ))}
</div>
```

### Example: Settings List Items

```tsx
const settingsItems = [
  { icon: User, label: 'Edit Name', id: 'name' },
  { icon: Mail, label: 'Edit Email', id: 'email' },
  { icon: Phone, label: 'Edit Phone', id: 'phone' },
  { icon: MapPin, label: 'Edit Address', id: 'address' },
];

<div className="card-ios overflow-hidden">
  {settingsItems.map((item, index) => (
    <div key={item.id}>
      <button
        onClick={() => handleNavigate(item.id)}
        className="w-full px-4 py-3.5 flex items-center justify-between gap-3 bg-transparent border-0 cursor-pointer hover:bg-[#f2f2f7] active:bg-[#e5e5ea] transition-colors text-left"
      >
        <div className="flex items-center gap-3 flex-1">
          <item.icon className="h-5 w-5 text-[#007AFF] flex-shrink-0" strokeWidth={2} />
          <span className="text-[17px] text-black">{item.label}</span>
        </div>
        <div className="chevron-button-ios">
          <ChevronRight />
        </div>
      </button>
      {index < settingsItems.length - 1 && (
        <div className="border-b border-[#c7c7cc] ml-[52px]" />
      )}
    </div>
  ))}
</div>
```

### Separator Alignment

The separator's left margin (`ml-[52px]`) is calculated to align with the text content:
- 16px (padding-left of button) 
- + 20px (icon width)
- + 12px (gap between icon and text)
- + 4px (fine-tuning for perfect alignment)
- = 52px total

This creates the iOS-native look where separators don't extend to the left edge, but align with the content.

### Interactive States

1. **Default**: White background, blue icon, blue chevron with no circle
2. **Hover**: Light gray background (`#f2f2f7`), blue circle appears behind chevron
3. **Active/Click**: Darker gray background (`#e5e5ea`), darker blue circle behind chevron

The chevron's blue circle feedback activates when hovering **anywhere** on the button, not just the chevron itself.

### Required Imports

```tsx
import { ChevronRight, Building2, User, Mail, Phone, MapPin } from 'lucide-react';
```

### DO NOT Use
- ❌ Gray chevrons without the `.chevron-button-ios` wrapper
- ❌ Separators that extend full width (should align with text)
- ❌ Different padding values (breaks visual consistency)
- ❌ Static backgrounds without hover states
- ❌ Items without the chevron indicator

### Benefits
1. **iOS Native Feel**: Matches Apple's Settings app and other system apps
2. **Clear Affordance**: Chevrons clearly indicate items are clickable
3. **Consistent Interaction**: Same hover/active states across all lists
4. **Visual Hierarchy**: Separators align with text, not icons
5. **Accessibility**: Large touch targets, clear visual feedback

## Static Footer Pattern (Sign-In/Registration Screens)

For sign-in, registration, and authentication-related screens, use a static footer that remains fixed at the bottom of the screen with links to Terms, Privacy, and navigation back to sign-in.

### Footer Structure

```tsx
{/* Screen Container */}
<div className="h-full bg-[#f2f2f7] flex flex-col">
  {/* Logo/Header - Fixed at top */}
  <div className="text-center flex-shrink-0">
    <img src={myAccountLogo} alt="My Account - Canada Revenue Agency" className="w-full h-auto" />
  </div>

  {/* Content - Scrollable */}
  <div className="flex-1 overflow-y-auto px-4 pt-6 pb-6">
    {/* Page content goes here */}
  </div>

  {/* Static Footer - Fixed at bottom */}
  <div className="flex-shrink-0 border-t separator-ios bg-white">
    <div className="px-4 pt-3 pb-[40px]">
      <div className="flex items-center justify-center gap-6 text-[13px] mb-3">
        <button
          onClick={onShowTerms}
          className="text-[#007AFF] hover:opacity-70 active:opacity-50 bg-transparent border-0 p-0 transition-opacity"
        >
          Terms
        </button>
        <button
          onClick={onShowPrivacy}
          className="text-[#007AFF] hover:opacity-70 active:opacity-50 bg-transparent border-0 p-0 transition-opacity"
        >
          Privacy
        </button>
      </div>
      <div className="text-center">
        <button
          onClick={onBack}
          className="text-[#007AFF] text-[15px] bg-transparent border-0 p-0 hover:opacity-70 active:opacity-50 transition-opacity"
        >
          Back to sign in
        </button>
      </div>
    </div>
  </div>
</div>
```

### Key Features

**Container Layout:**
- `h-full bg-[#f2f2f7] flex flex-col` - Full height with vertical flex layout
- Three sections: header (fixed), content (scrollable), footer (fixed)

**Header Section:**
- `flex-shrink-0` - Prevents shrinking, stays at natural height
- Contains logo or branding

**Content Section:**
- `flex-1` - Takes up remaining space between header and footer
- `overflow-y-auto` - Allows scrolling when content exceeds available space
- `px-4 pt-6 pb-6` - Consistent padding (16px sides, 24px top/bottom)

**Footer Section:**
- `flex-shrink-0` - Prevents shrinking, always visible at bottom
- `border-t separator-ios` - Top border using iOS separator style (0.5px gray)
- `bg-white` - White background to stand out from gray content area
- `px-4 pt-3 pb-[40px]` - Padding: 16px sides, 12px top, 40px bottom (accounts for iOS safe area)

**Footer Content:**
- First row: Terms and Privacy links, centered with 24px gap
- Second row: "Back to sign in" link, centered, slightly larger text (15px vs 13px)
- `text-[13px]` for Terms/Privacy, `text-[15px]` for back link
- All links use `text-[#007AFF]` with opacity transitions on hover/active

**Link Styling:**
- `text-[#007AFF]` - iOS blue color
- `hover:opacity-70 active:opacity-50` - Interactive opacity changes
- `bg-transparent border-0 p-0` - Remove default button styling
- `transition-opacity` - Smooth opacity transitions

### Alternative Footer: Login Screen Pattern

For the main login screen, the footer can be inside the scrollable content:

```tsx
{/* Content - Scrollable */}
<div className="flex-1 overflow-y-auto px-4" style={{ paddingTop: '24px', paddingBottom: '24px' }}>
  {/* Form content */}
  
  {/* Footer inside scrollable area */}
  <div className="px-4 pt-4 pb-[40px] border-t separator-ios bg-white">
    <div className="flex items-center justify-between text-[13px]">
      <button onClick={onShowTerms} className="text-[#007AFF] hover:opacity-70 active:opacity-50 bg-transparent border-0 p-0 transition-opacity">
        Terms
      </button>
      <button onClick={onShowPrivacy} className="text-[#007AFF] hover:opacity-70 active:opacity-50 bg-transparent border-0 p-0 transition-opacity">
        Privacy
      </button>
      <button onClick={onShowAppVersion} className="text-[#007AFF] hover:opacity-70 active:opacity-50 bg-transparent border-0 p-0 transition-opacity">
        v1.0.0
      </button>
    </div>
  </div>
</div>
```

This pattern uses `justify-between` instead of `justify-center` and includes an app version link.

### When to Use Each Pattern

**Static Footer (fixed at bottom):**
- Registration flow screens
- Sign-in partner selection
- Information/help screens during authentication
- Screens where user needs consistent access to Terms/Privacy/Back
- Screens with variable content length

**Scrollable Footer (inside content):**
- Main login screen
- Screens with forms and keyboards
- When footer should scroll away to give more screen space

### Required Props

For static footer pattern, the component should accept:
- `onBack` - Navigation back to sign-in/previous screen
- `onShowTerms` (optional) - Show terms and conditions
- `onShowPrivacy` (optional) - Show privacy policy

### Example: Full Implementation

See `RegistrationSignInPartnerInfoScreen.tsx` for a complete implementation with:
- Logo header at top
- Scrollable content area with cards and lists
- Static footer with Terms, Privacy, and "Back to sign in" links
- Proper flexbox layout ensuring footer stays at bottom

### Benefits
1. **Persistent Access**: Users can always access Terms, Privacy, and go back
2. **Clear Navigation**: "Back to sign in" is prominently displayed
3. **iOS Native Feel**: Matches iOS authentication screen patterns
4. **Accessibility**: Links are always visible, not hidden by scroll
5. **Consistent UX**: Same footer pattern across all auth/registration screens

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

**UPDATED FIX (November 2024)**: Do NOT use maxHeight constraints with fixed headers - it causes calculation conflicts!

```tsx
{/* Scrollable Content */}
<div 
  ref={scrollContainerRef}
  className="flex-1 overflow-y-auto px-4"
  style={{ 
    paddingBottom: showKeyboard ? `${keyboardHeight + 150}px` : '96px'
  }}
>
  {/* Form content with input fields */}
</div>
```

**Key Features:**
- **NO maxHeight** - Let flex-1 handle height naturally
- Dynamic `paddingBottom` adds keyboard height PLUS 150px buffer (e.g., 290 + 150 = 440px for numeric keyboard)
- `overflow-y-auto` enables scrolling
- Use a `ref` to pass to the keyboard scroll hook
- **CRITICAL:** Must use the same `keyboardHeight` variable calculated in step 2

**Why No maxHeight?** 
When the screen has a fixed header at the top (like registration screens with the header image), using `maxHeight: calc(100vh - keyboardHeight)` doesn't account for the header height. The calculation becomes incorrect:
- Formula says: "Container can be 100vh - 290px"
- Reality is: "Container starts BELOW the 100px header, so actual space is 100vh - 100px - 290px"
- Result: Fields get hidden behind keyboard because container is too constrained

The solution is to remove maxHeight entirely and instead use generous paddingBottom that equals `keyboardHeight + 150px`. This creates scrollable space BELOW the content where the keyboard will appear.

#### 2. Use the Keyboard Scroll Hook
```tsx
import { useKeyboardScroll } from '../useKeyboardScroll';

// Inside component
const scrollContainerRef = useRef<HTMLDivElement>(null);
const [showKeyboard, setShowKeyboard] = useState(false);
const [activeField, setActiveField] = useState<string | null>(null);

// IMPORTANT: Determine keyboard height based on keyboard type
// Numeric keyboard (IPhoneNumericKeyboard): 290px
// Text keyboard (IPhoneKeyboard): 220px
const isNumericKeyboard = activeField === 'sin' || activeField === 'dob';
const keyboardHeight = isNumericKeyboard ? 290 : 220;

// Use the hook with dynamic keyboard height
useKeyboardScroll({ 
  isKeyboardVisible: showKeyboard, 
  activeField,
  keyboardHeight,
  scrollContainerRef
});
```

**CRITICAL:** Different keyboards have different heights:
- **IPhoneNumericKeyboard** (with "Done" toolbar): 290px
- **IPhoneKeyboard** (standard text keyboard): 220px

You MUST dynamically calculate the `keyboardHeight` based on which type of keyboard is showing for the active field. If you use a fixed height of 290px for text fields, the scroll container will be too constrained and scrolling won't work properly.

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

**UPDATED (November 2024)**: The hook now positions fields near the top instead of centering for better keyboard visibility.

The hook automatically scrolls the active input field into view when the keyboard appears:

```tsx
// From useKeyboardScroll.tsx
useEffect(() => {
  if (isKeyboardVisible && activeField) {
    setTimeout(() => {
      const activeElement = document.getElementById(activeField);
      
      if (activeElement && scrollContainerRef?.current) {
        const containerRect = scrollContainerRef.current.getBoundingClientRect();
        const elementRect = activeElement.getBoundingClientRect();
        
        // Position element 100px from top of visible container
        // This ensures field is well above keyboard with good spacing
        const targetTopPosition = containerRect.top + 100;
        const currentTopPosition = elementRect.top;
        const scrollOffset = currentTopPosition - targetTopPosition;
        
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
    }, 150); // Delay ensures padding is applied first
  }
}, [isKeyboardVisible, activeField, keyboardHeight, scrollContainerRef]);
```

**Key Features:**
- 150ms delay ensures dynamic padding is applied before scrolling
- Positions field 100px from top of visible container (not centered) for maximum visibility above keyboard
- Uses `scrollBy` with calculated offset for precise positioning
- Fallback uses `scrollIntoView` with `block: 'start'`
- Automatically triggered when `activeField` changes

### Critical Values

- **Numeric Keyboard Height**: 290px (IPhoneNumericKeyboard with "Done" toolbar)
- **Text Keyboard Height**: 220px (IPhoneKeyboard without toolbar)
- **Bottom Padding**: `${keyboardHeight + 150}px` when keyboard visible (keyboard height + 150px buffer)
  - Example: 290 + 150 = 440px for numeric keyboard
  - Example: 220 + 150 = 370px for text keyboard
- **Scroll Positioning**: 100px from top of visible container (not centered)
- **Scroll Delay**: 150ms (allows padding to be applied)
- **NO maxHeight** - Removed to avoid conflicts with fixed headers

### Example: Full Implementation with Mixed Keyboard Types

See `RegistrationPersonalInfoScreen.tsx` for a complete working example with:
- Multiple input fields using BOTH keyboard types
- SIN and Date of Birth fields using numeric keyboard (290px)
- Name fields using text keyboard (220px)
- Dynamic keyboard height calculation based on active field
- Proper scroll handling for bottom fields without maxHeight constraints
- Support for both popup and physical keyboard input

**UPDATED Code snippet (November 2024):**
```tsx
// Determine which keyboard type based on field
const isNumericKeyboard = activeField === 'sin' || activeField === 'dob';
const keyboardHeight = isNumericKeyboard ? 290 : 220;

// Scroll container with dynamic padding (NO maxHeight!)
<div 
  ref={scrollContainerRef}
  className="flex-1 overflow-y-auto px-4"
  style={{ 
    paddingBottom: showKeyboard ? `${keyboardHeight + 150}px` : '96px'
  }}
>

// Hook with dynamic height
useKeyboardScroll({ 
  isKeyboardVisible: showKeyboard, 
  activeField,
  keyboardHeight,  // Dynamic value!
  scrollContainerRef
});
```

**Key Changes from Old Pattern:**
- ❌ REMOVED: `maxHeight: calc(100vh - ${keyboardHeight}px)` - causes issues with fixed headers
- ✅ ADDED: Dynamic paddingBottom = `${keyboardHeight + 150}px` - creates proper scroll space
- ✅ IMPROVED: Scroll positioning to 100px from top instead of centering
- ✅ FIXED: Works correctly with fixed header images at top of screen

### Benefits
1. **Visible Inputs**: All input fields can be scrolled above the keyboard with proper spacing
2. **Works with Fixed Headers**: No calculation conflicts when screen has header images
3. **Dual Keyboard Support**: Works with both popup and physical keyboards
4. **Smooth UX**: Automatic scrolling positions field optimally above keyboard
5. **Consistent Behavior**: Same pattern works for any screen with popup keyboards
6. **Proper Spacing**: Field appears 100px from top of visible area, not cut off or hidden

### Common Issues Solved
- ✅ Date of Birth field no longer hidden behind numeric keyboard
- ✅ Fixed headers don't interfere with scroll calculations
- ✅ Generous padding ensures last field is fully scrollable
- ✅ Field positioning is predictable and visible with good spacing
5. **iOS Native Feel**: Matches iOS keyboard appearance and behavior

### DO NOT
- ❌ Use excessive bottom padding (900px+) - causes black space below keyboard
- ❌ Position keyboard with `fixed bottom-0` without constraining scroll container
- ❌ Forget to set `inputMode="none"` on inputs (causes dual keyboards)
- ❌ Skip the scroll delay - scrolling will fail if padding isn't applied yet
- ❌ Use scroll calculations without `scrollIntoView` - browser API is more reliable

## Alphanumeric Keyboard Default Behavior

For all fields with mixed letters and number entries (such as mailing addresses, license plates, account numbers, etc.), the `IPhoneAlphanumericKeyboard` component should follow this standardized behavior:

### Default State
- **Start with CAPITAL letters** - The keyboard should initialize with `shifted` state set to `true`
- **Auto-switch to lowercase** - After typing the first letter, the keyboard automatically switches to lowercase letters
- **Manual toggle remains available** - Users can still manually toggle between uppercase and lowercase using the shift button

### Implementation
```tsx
export function IPhoneAlphanumericKeyboard({ onKeyPress, onDone }: IPhoneAlphanumericKeyboardProps) {
  const [shifted, setShifted] = useState(true); // ✅ Start with true (capitals)
  
  const handleKeyClick = (key: string) => {
    if (key === 'shift') {
      setShifted(!shifted);
    } else {
      onKeyPress(shifted ? key.toUpperCase() : key);
      // Auto-unshift after typing a letter
      if (shifted) {
        setShifted(false); // ✅ Auto-switch to lowercase after first character
      }
    }
  };
  // ... rest of implementation
}
```

### When to Use
Use the alphanumeric keyboard for:
- Mailing addresses and street addresses
- License plates and vehicle registration numbers
- Account numbers with mixed alphanumeric characters
- Reference numbers or confirmation codes
- Any field requiring both letters and numbers in free-form text

### Keyboard Height
The alphanumeric keyboard height (including the "Done" toolbar) should be documented as:
- **IPhoneAlphanumericKeyboard**: Approximately 290-310px (similar to IPhoneNumericKeyboard)

Update the `keyboardHeight` calculation in forms using this keyboard:
```tsx
const isAlphanumericKeyboard = activeField === 'mailingAddress' || activeField === 'accountNumber';
const isNumericKeyboard = activeField === 'sin' || activeField === 'phone';
const keyboardHeight = isAlphanumericKeyboard || isNumericKeyboard ? 290 : 220;
```

### Field Configuration Example
```tsx
<textarea
  id="mailingAddress"
  inputMode="none"  // Prevent native keyboard
  value={mailingAddress}
  onChange={(e) => setMailingAddress(e.target.value)}
  onFocus={() => {
    setActiveField('mailingAddress');
    setShowAlphanumericKeyboard(true);
    setShowKeyboard(false);
    setShowQwertyKeyboard(false);
  }}
  className="w-full bg-white border border-[#c6c6c8] rounded-[8px] text-[17px] focus:border-[#007AFF] focus:ring-1 focus:ring-[#007AFF] outline-none p-3 min-h-[100px] resize-none"
  placeholder="Enter street address, city, province, postal code"
/>
```

### Benefits
1. **User-friendly**: Starts with capitals as expected for the beginning of addresses and proper nouns
2. **iOS-like behavior**: Mimics iOS native keyboard auto-capitalization behavior
3. **Reduces user effort**: Automatically switches to lowercase after first character, minimizing manual shift key usage
4. **Consistent UX**: All alphanumeric fields across the app behave the same way

## Date Field with Calendar Picker (iOS Pattern)

When implementing date input fields across the app, use this standardized pattern that includes an inline calendar icon and popup calendar selector. This pattern is used throughout authenticated screens for consistent date entry UX.

### Visual Pattern

All date fields should display:
- Text input field with centered text
- Calendar icon positioned **inside** the input field on the right
- Both the input field and calendar icon trigger the calendar popup
- yyyy-mm-dd placeholder format
- Popup calendar modal with iOS-style animations

### Required Imports

```tsx
import { Calendar as CalendarIcon } from 'lucide-react';
import { Calendar } from '../ui/calendar';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'motion/react';
```

### State Management

Add these state variables for calendar functionality:

```tsx
// Date field state
const [selectedDate, setSelectedDate] = useState(''); // The actual date value (yyyy-mm-dd)

// Calendar modal states
const [calendarOpen, setCalendarOpen] = useState(false);
const [tempSelectedDate, setTempSelectedDate] = useState<Date | undefined>(undefined);
const [calendarMonth, setCalendarMonth] = useState(new Date());
```

For **multiple date fields**, use an identifier to track which field is active:

```tsx
const [activeCalendar, setActiveCalendar] = useState<'start' | 'end' | 'restructuring' | null>(null);
const [startDate, setStartDate] = useState('');
const [endDate, setEndDate] = useState('');
const [restructuringDate, setRestructuringDate] = useState('');
const [tempSelectedDate, setTempSelectedDate] = useState<Date | undefined>(undefined);
const [calendarMonth, setCalendarMonth] = useState(new Date());
```

### Calendar Handlers

#### Single Date Field
```tsx
const handleCalendarOpenChange = (open: boolean) => {
  setCalendarOpen(open);
  if (open && selectedDate) {
    setTempSelectedDate(new Date(selectedDate));
  } else if (open) {
    setTempSelectedDate(new Date());
  }
};

const handleCalendarSelect = (date: Date | undefined) => {
  setTempSelectedDate(date);
};

const handleCalendarCancel = () => {
  setCalendarOpen(false);
};

const handleCalendarConfirm = () => {
  if (tempSelectedDate) {
    setSelectedDate(tempSelectedDate.toISOString().split('T')[0]);
    setCalendarOpen(false);
  }
};
```

#### Multiple Date Fields
```tsx
const handleCalendarOpen = (field: 'start' | 'end' | 'restructuring') => {
  setActiveCalendar(field);
  let currentDate = new Date();
  if (field === 'start' && startDate) {
    currentDate = new Date(startDate);
  } else if (field === 'end' && endDate) {
    currentDate = new Date(endDate);
  } else if (field === 'restructuring' && restructuringDate) {
    currentDate = new Date(restructuringDate);
  }
  setTempSelectedDate(currentDate);
  setCalendarMonth(currentDate);
};

const handleCalendarSelect = (date: Date | undefined) => {
  setTempSelectedDate(date);
};

const handleCalendarCancel = () => {
  setActiveCalendar(null);
};

const handleCalendarConfirm = () => {
  if (tempSelectedDate) {
    const formattedDate = tempSelectedDate.toISOString().split('T')[0];
    if (activeCalendar === 'start') {
      setStartDate(formattedDate);
    } else if (activeCalendar === 'end') {
      setEndDate(formattedDate);
    } else if (activeCalendar === 'restructuring') {
      setRestructuringDate(formattedDate);
    }
    setActiveCalendar(null);
  }
};
```

### Date Input Field Structure

```tsx
{/* Date field container - typically inside a card */}
<div className="p-4 bg-white border border-[#E5E5EA] rounded-[10px]">
  <Label className="text-black text-[17px] block mb-2">Date to withdraw payment</Label>
  <div className="relative">
    <Input
      type="text"
      inputMode="none"
      placeholder="yyyy-mm-dd"
      value={selectedDate}
      onChange={(e) => setSelectedDate(e.target.value)}
      onClick={() => handleCalendarOpenChange(true)} // or handleCalendarOpen('fieldName')
      className="bg-white border-[#c6c6c8] rounded-[8px] text-[17px] focus:border-[#007AFF] focus:ring-[#007AFF] w-full pr-10 pl-3"
      maxLength={10}
      readOnly
    />
    <button
      type="button"
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        handleCalendarOpenChange(true); // or handleCalendarOpen('fieldName')
      }}
      className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center justify-center bg-transparent hover:opacity-70 active:opacity-50 transition-opacity p-1 border-0 cursor-pointer"
      aria-label="Open calendar"
    >
      <CalendarIcon className="h-6 w-6 text-[#007AFF]" />
    </button>
  </div>
</div>
```

### Key Features of Date Field

- **Label**: `text-[17px]` with `mb-2` spacing
- **Container**: White background with border, rounded corners, padding
- **Input**: 
  - `inputMode="none"` prevents native keyboard
  - `readOnly` forces use of calendar picker
  - Text and placeholder are **left-aligned** (no `text-center`)
  - `pr-10` provides padding for the calendar icon
  - `pl-3` provides left padding for text
  - `placeholder="yyyy-mm-dd"` shows expected format
- **Calendar Icon**:
  - Positioned absolutely inside input field (`absolute right-2 top-1/2 -translate-y-1/2`)
  - Size: `h-6 w-6`
  - Color: iOS blue (`text-[#007AFF]`)
  - Hover/active states for feedback
  - `cursor-pointer` for proper cursor indication
  - `e.preventDefault()` and `e.stopPropagation()` to prevent event bubbling
- **Click Handlers**: Both input and icon trigger the calendar popup

### Calendar Popup Modal

Get the portal container and render the calendar modal (see full code in MakePaymentScreen.tsx or CPPEIRulingFormStep1Screen.tsx).

### Calendar Modal Features

- **Backdrop**: Semi-transparent black overlay (`bg-black/40`)
- **Slide-up Animation**: Modal slides from bottom with spring physics
- **Handle Bar**: Visual indicator at top (`w-10 h-1 bg-[#c7c7cc] rounded-full`)
- **Dynamic Title**: Changes based on which date field is being edited
- **Calendar Component**: Full iOS-styled calendar from `ui/calendar`
- **Action Buttons**: Cancel and Confirm buttons with proper styling
- **Portal Rendering**: Uses `createPortal` to render at root level
- **z-index**: `z-[100]` ensures modal appears above other content

### Common Use Cases

- **Payment Dates**: Date to withdraw payment, recurring payment dates
- **Employment Dates**: Start date, end date, date of restructuring
- **Personal Dates**: Date of birth, date of marriage, date of separation
- **Tax Dates**: Tax year selection, filing deadlines
- **Benefit Dates**: Benefit start dates, eligibility dates

### Complete Example

See `MakePaymentScreen.tsx` (payment date field) and `CPPEIRulingFormStep1Screen.tsx` (multiple date fields) for complete working implementations.

### Benefits

1. **Consistent UX**: All date fields work the same way across the app
2. **iOS Native Feel**: Matches iOS date picker patterns with bottom sheet modal
3. **Visual Clarity**: Calendar icon clearly indicates date selection capability
4. **Touch-Friendly**: Large touch targets for both input and icon
5. **Accessible**: Clear labels and ARIA attributes
6. **Flexible**: Works for single or multiple date fields on same screen

### DO NOT

- ❌ Use native HTML date inputs - they don't match iOS styling
- ❌ Position calendar icon outside the input field
- ❌ Allow keyboard input on date fields (always use `inputMode="none"` and `readOnly`)
- ❌ Forget the portal container check before rendering calendar modal
- ❌ Use different calendar styling - always use the standard Calendar component
