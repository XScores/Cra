# FIX CONTAINER - Flexbox Layout Pattern

## Problem This Fixes
Screens with sticky headers/breadcrumbs experience:
- Sub-pixel shifting during scrolling
- Inconsistent scrollbar placement
- Header movement when scrolling content
- Breadcrumb "jumping" or shifting

## Solution
Use flexbox column layout with fixed header/breadcrumb and scrollable content area.

---

## The Pattern

### Structure Overview
```tsx
<div className="h-full bg-[#f5f5f5] flex flex-col">
  {/* Header - Fixed (Non-scrollable) */}
  <div className="flex-shrink-0">
    <Header ... />
  </div>
  
  {/* Breadcrumb - Fixed (Non-scrollable) */}
  <div className="bg-white px-4 py-3 border-b border-[#e1e4e7] flex-shrink-0">
    ...breadcrumb content...
  </div>

  {/* Content - Scrollable */}
  <div className="flex-1 min-h-0 overflow-y-auto bg-[#f5f5f5]">
    ...all page content goes here...
  </div>
</div>
```

### Key Classes Explained

1. **Container:** `h-full bg-[#f5f5f5] flex flex-col`
   - `h-full` - Takes full height of parent
   - `flex flex-col` - Flexbox column layout
   - `bg-[#f5f5f5]` - Background color

2. **Header wrapper:** `flex-shrink-0`
   - Prevents header from shrinking
   - Keeps header at natural height
   - Header stays fixed at top

3. **Breadcrumb:** `flex-shrink-0`
   - Prevents breadcrumb from shrinking
   - Replaces `sticky top-0 z-10`
   - Now truly fixed, not sticky

4. **Content area:** `flex-1 min-h-0 overflow-y-auto`
   - `flex-1` - Takes remaining space
   - `min-h-0` - Allows flexbox to shrink below content size
   - `overflow-y-auto` - Scrolls when content overflows

---

## Before & After

### ❌ BEFORE (Problematic)
```tsx
export function ExampleScreen({ ... }) {
  return (
    <>
      <Header ... />
      
      <main className="pb-4">
        {/* Breadcrumb */}
        <div className="sticky top-0 z-10 bg-white px-4 py-3 border-b border-[#e1e4e7]">
          ...breadcrumb...
        </div>

        {/* Page Title */}
        <div className="px-4 py-6 bg-white border-b border-[#e1e4e7]">
          ...content...
        </div>
        
        ...more content...
      </main>
    </>
  );
}
```

**Issues:**
- Uses `<>` fragment as root
- Breadcrumb uses `sticky top-0` (can shift)
- No container height control
- Scrollbar on entire page

### ✅ AFTER (Fixed)
```tsx
export function ExampleScreen({ ... }) {
  return (
    <div className="h-full bg-[#f5f5f5] flex flex-col">
      {/* Header - Fixed */}
      <div className="flex-shrink-0">
        <Header ... />
      </div>
      
      {/* Breadcrumb - Fixed */}
      <div className="bg-white px-4 py-3 border-b border-[#e1e4e7] flex-shrink-0">
        ...breadcrumb...
      </div>

      {/* Content - Scrollable */}
      <div className="flex-1 min-h-0 overflow-y-auto bg-[#f5f5f5]">
        {/* Page Title */}
        <div className="px-4 py-6 bg-white border-b border-[#e1e4e7]">
          ...content...
        </div>
        
        ...more content...
      </div>
    </div>
  );
}
```

**Benefits:**
- Header and breadcrumb completely static
- Only content area scrolls
- No sub-pixel shifts
- Consistent scrollbar placement

---

## Step-by-Step Application

### Step 1: Wrap entire return in flexbox container
Replace:
```tsx
return (
  <>
```
With:
```tsx
return (
  <div className="h-full bg-[#f5f5f5] flex flex-col">
```

### Step 2: Wrap Header with flex-shrink-0
Replace:
```tsx
<Header ... />
```
With:
```tsx
<div className="flex-shrink-0">
  <Header ... />
</div>
```

### Step 3: Fix breadcrumb
Replace:
```tsx
<div className="sticky top-0 z-10 bg-white px-4 py-3 border-b border-[#e1e4e7]">
```
With:
```tsx
<div className="bg-white px-4 py-3 border-b border-[#e1e4e7] flex-shrink-0">
```
**Changes:**
- Remove `sticky top-0 z-10`
- Add `flex-shrink-0`

### Step 4: Wrap content in scrollable container
Wrap all content AFTER breadcrumb:
```tsx
<div className="flex-1 min-h-0 overflow-y-auto bg-[#f5f5f5]">
  {/* Page Title */}
  <div className="px-4 py-6 bg-white border-b border-[#e1e4e7]">
    ...
  </div>
  
  {/* All other content */}
  ...
</div>
```

### Step 5: Close container
Replace:
```tsx
    </>
  );
}
```
With:
```tsx
    </div>
  );
}
```

---

## Screens Status

### ✅ Fixed Screens (12 total)
1. **SignInHelpScreen** - Original implementation
2. **DashboardScreen** (Home)
3. **TaxReturnsScreen**
4. **PaymentsScreen**
5. **DocumentsScreen**
6. **MessagesScreen** (CRA Mail)
7. **ProfileScreen**
8. **TaxSlipsScreen**
9. **ProofOfIncomeScreen**
10. **RegisteredPlansScreen**
11. **TaxFilingScreen** (File taxes)
12. **AllBenefitsScreen** (Benefits and credits)

### ⏳ Screens That Need This Fix
Check each screen in `/components/screens/` for:
- Fragment `<>` as root element
- `sticky top-0` breadcrumbs
- Lack of scrollable container

Common candidates:
- AllBenefitsScreen
- NoticeOfAssessmentScreen
- BalanceOwingDetailsScreen
- RefundDetailsScreen
- MakePaymentScreen
- SimplifiedMakePaymentScreen
- HelpScreen
- And many others...

---

## Common Variations

### Variation 1: No Breadcrumb
Some screens don't have breadcrumbs:
```tsx
<div className="h-full bg-[#f5f5f5] flex flex-col">
  <div className="flex-shrink-0">
    <Header ... />
  </div>

  <div className="flex-1 min-h-0 overflow-y-auto bg-[#f5f5f5]">
    ...content...
  </div>
</div>
```

### Variation 2: Different Background Colors
Match the background color to your content:
- Light gray: `bg-[#f5f5f5]`
- White: `bg-white`
- Gray: `bg-[#F2F2F2]`

### Variation 3: Page Title in Fixed Area
If page title should stay fixed with breadcrumb:
```tsx
<div className="h-full bg-[#f5f5f5] flex flex-col">
  <div className="flex-shrink-0">
    <Header ... />
  </div>
  
  {/* Breadcrumb - Fixed */}
  <div className="bg-white px-4 py-3 border-b border-[#e1e4e7] flex-shrink-0">
    ...breadcrumb...
  </div>

  {/* Page Title - Also Fixed */}
  <div className="px-4 py-6 bg-white border-b border-[#e1e4e7] flex-shrink-0">
    <h1>Title</h1>
  </div>

  <div className="flex-1 min-h-0 overflow-y-auto bg-[#f5f5f5]">
    ...scrollable content...
  </div>
</div>
```

---

## Testing Checklist

After applying the fix, verify:

- [ ] Header stays completely static when scrolling
- [ ] Breadcrumb stays completely static when scrolling
- [ ] No sub-pixel shifting of header/breadcrumb
- [ ] Scrollbar appears only on content area
- [ ] Content scrolls smoothly
- [ ] Page looks identical to before (no layout changes)
- [ ] All interactive elements still work
- [ ] Mobile responsiveness maintained

---

## Notes

- **DO NOT** use this pattern on screens without headers (LoginScreen, LaunchScreen, etc.)
- **ALWAYS** preserve existing background colors
- **MAINTAIN** all existing content structure inside scrollable area
- This pattern is **consistent** across the entire app for uniformity

---

## Related Fixes

- See `FIX_HEADER.md` for header-specific fixes
- See `Guidelines.md` for general app patterns
