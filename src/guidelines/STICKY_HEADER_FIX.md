# Sticky Header Fix Pattern

## Problem
Currently, the back button and H1 page title scroll with the content. For better iOS UX, these should remain fixed/static at the top while only the content below scrolls.

## Solution
Restructure screens to have three distinct layers:
1. **Fixed Header** - HeaderIOS component (already fixed)
2. **Fixed Page Title Area** - Back button + H1 title + optional subtitle (NEW - make this fixed)
3. **Scrollable Content** - Everything else scrolls

## New Structure Pattern

### Standard Pattern (Single-line Title)
```tsx
<div className="h-full bg-[#f2f2f7] flex flex-col">
  {/* 1. Fixed Header */}
  <div className="flex-shrink-0">
    <HeaderIOS 
      title="My Account"
      onNavigateHome={onNavigateHome}
      onLogoClick={onNavigateHome}
      hasUnreadMail={hasUnreadMail}
      onMenuClick={() => setShowMenu(true)}
      showSearch={true}
      showMenu={true}
      largeTitle={true}
    />
  </div>

  {/* 2. Fixed Page Title Area */}
  <div className="flex-shrink-0 px-4 pt-2 pb-3 bg-[#f2f2f7]">
    <div className="flex items-center gap-3">
      <button
        onClick={onBack}
        className="flex items-center justify-center w-[30.6px] h-[30.6px] rounded-full border-2 border-[#007AFF] bg-transparent text-[#007AFF] cursor-pointer hover:bg-[#007AFF] hover:border-[#007AFF] hover:text-white active:opacity-70 transition-all flex-shrink-0"
      >
        <ChevronLeft className="h-5 w-5" strokeWidth={3} />
      </button>
      <h1 className="text-[28px] font-bold text-black m-0 tracking-tight">Page Title</h1>
    </div>
  </div>

  {/* 3. Scrollable Content Area */}
  <div className="flex-1 min-h-0 overflow-y-auto bg-[#f2f2f7]">
    {/* All page content goes here */}
    <div className="px-4 pb-20">
      {/* Content */}
    </div>
  </div>
</div>
```

### Pattern with Subtitle
```tsx
{/* 2. Fixed Page Title Area */}
<div className="flex-shrink-0 px-4 pt-2 pb-3 bg-[#f2f2f7]">
  <div className="flex items-center gap-3 mb-1">
    <button
      onClick={onBack}
      className="flex items-center justify-center w-[30.6px] h-[30.6px] rounded-full border-2 border-[#007AFF] bg-transparent text-[#007AFF] cursor-pointer hover:bg-[#007AFF] hover:border-[#007AFF] hover:text-white active:opacity-70 transition-all flex-shrink-0"
    >
      <ChevronLeft className="h-5 w-5" strokeWidth={3} />
    </button>
    <h1 className="text-[28px] font-bold text-black m-0 tracking-tight">Page Title</h1>
  </div>
  <p className="text-black text-[15px] m-0 opacity-80">Optional subtitle description text</p>
</div>
```

### Pattern with Multi-line Title
```tsx
{/* 2. Fixed Page Title Area */}
<div className="flex-shrink-0 px-4 pt-2 pb-3 bg-[#f2f2f7]">
  <div className="flex items-start gap-3">
    <button
      onClick={onBack}
      className="flex items-center justify-center w-[30.6px] h-[30.6px] rounded-full border-2 border-[#007AFF] bg-transparent text-[#007AFF] cursor-pointer hover:bg-[#007AFF] hover:border-[#007AFF] hover:text-white active:opacity-70 transition-all flex-shrink-0 mt-[2px]"
    >
      <ChevronLeft className="h-5 w-5" strokeWidth={3} />
    </button>
    <h1 className="text-[28px] font-bold text-black m-0 tracking-tight">Long Title That Wraps to Multiple Lines</h1>
  </div>
</div>
```

## Key Changes

### Old Pattern (INCORRECT)
```tsx
<div className="flex-1 min-h-0 overflow-y-auto bg-[#f2f2f7]">
  {/* Back Button and Page Title */}
  <div className="px-4 pt-2 pb-3 bg-[#f2f2f7]">
    <div className="flex items-center gap-3">
      <button onClick={onBack}>Back</button>
      <h1>Title</h1>
    </div>
  </div>
  
  <div className="px-4">
    {/* Content */}
  </div>
</div>
```

### New Pattern (CORRECT)
```tsx
{/* Fixed Title Area */}
<div className="flex-shrink-0 px-4 pt-2 pb-3 bg-[#f2f2f7]">
  <div className="flex items-center gap-3">
    <button onClick={onBack}>Back</button>
    <h1>Title</h1>
  </div>
</div>

{/* Scrollable Content */}
<div className="flex-1 min-h-0 overflow-y-auto bg-[#f2f2f7]">
  <div className="px-4 pb-20">
    {/* Content */}
  </div>
</div>
```

## Implementation Notes

1. **Extract the title section** - Move the "Back Button and Page Title" div OUT of the scrollable container
2. **Make it flex-shrink-0** - Add `flex-shrink-0` class to prevent collapsing
3. **Keep same styling** - Maintain `px-4 pt-2 pb-3 bg-[#f2f2f7]` classes
4. **Adjust content padding** - The scrollable content should start with `px-4 pb-20` (no `pt` since spacing comes from fixed title area)
5. **Preserve all interactive elements** - Keep all event handlers, refs, and state logic

## Special Cases

### Screens with Keyboards
For screens with custom keyboards (SimplifiedMakePaymentScreen, EditNameScreen, etc.):
- The keyboard scroll logic should still work
- The activeField scrolling targets elements in the scrollable content area
- The title area remains fixed above the keyboard

### Screens with Tabs or Filters
For screens with tab navigation or filters in the title area:
- Include tabs/filters in the fixed title area if they're part of page navigation
- If they're content filters, keep them in the scrollable area

## Benefits
1. **Better Navigation** - Back button and title always visible for context
2. **iOS Pattern** - Matches native iOS app behavior
3. **Improved Scrolling** - More content space, clearer scroll area
4. **Reduced Cognitive Load** - Users always know where they are

## Files to Update
All screen files with the "Back Button and Page Title" pattern (approximately 64 screens).
