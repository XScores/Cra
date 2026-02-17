# Search Menu Link Pattern

## Problem
When adding a new item to the Search menu, the link may not work from all screens because the navigation prop isn't being passed through the entire component chain.

## Root Cause
The Search menu is rendered inside HeaderMaster, which is used by 55+ authenticated screens. Each screen must pass ALL search navigation props to HeaderMaster, or the search menu links will be undefined when opened from that screen.

## Solution Pattern (8 Steps)

When adding a new search menu item that navigates to a screen:

### 1. Add prop to HeaderMaster interface (`/components/HeaderMaster.tsx`)
```typescript
interface HeaderMasterProps {
  // ... existing props
  onNewFeature?: () => void;  // Add new prop
}
```

### 2. Add prop to HeaderMaster destructuring (`/components/HeaderMaster.tsx`)
```typescript
export function HeaderMaster({
  // ... existing props
  onNewFeature,  // Add to destructuring
}: HeaderMasterProps) {
```

### 3. Pass prop from HeaderMaster to SearchMenu (`/components/HeaderMaster.tsx`)
```typescript
<SearchMenu
  isOpen={showSearchMenu}
  onClose={() => setShowSearchMenu(false)}
  // ... existing props
  onNewFeature={onNewFeature}  // Add prop
/>
```

### 4. Add handler function in App.tsx
```typescript
const handleShowNewFeature = () => {
  setShowNewFeature(true);
  scrollToTop();
};
```

### 5. Add prop to EVERY screen's interface that uses HeaderMaster
```typescript
interface DashboardScreenProps {
  // ... existing props
  onNewFeature?: () => void;  // Add to interface
}
```

### 6. Add prop to EVERY screen's destructuring
```typescript
export function DashboardScreen({
  // ... existing props
  onNewFeature  // Add to destructuring
}: DashboardScreenProps) {
```

### 7. Pass prop to HeaderMaster in EVERY screen
```typescript
<HeaderMaster 
  // ... existing props
  onNewFeature={onNewFeature}  // Pass to HeaderMaster
/>
```

### 8. Pass prop from App.tsx to EVERY screen instance
```typescript
<DashboardScreen 
  // ... existing props
  onNewFeature={handleShowNewFeature}  // Pass handler
/>
```

## Critical Notes

- **ALL 55+ authenticated screens** must be updated, not just the destination screen
- The prop must flow through: App.tsx → Screen → HeaderMaster → SearchMenu
- If ANY screen is missing the prop, the search link won't work when opened from that screen
- Use file_search to find all screens that have `onFHSAEligibility` to identify which screens need updating

## Quick Search Command
```
file_search: content_pattern="onFHSAEligibility={onFHSAEligibility}" name_pattern="**/*.tsx"
```
This finds all screens that pass props to HeaderMaster and need the new prop added.

## Example: Lifelong Learning Plan
The "Lifelong Learning Plan" link was broken because:
- ✅ HeaderMaster had the prop
- ✅ SearchMenu had the prop  
- ✅ LifelongLearningPlanScreen had the prop
- ❌ DashboardScreen (and 36 other screens) were missing the prop

When opening search from Dashboard, `onLifelongLearningPlan` was undefined → link didn't work.

**Fix:** Added `onLifelongLearningPlan` prop to DashboardScreen's interface, destructuring, HeaderMaster call, and App.tsx render.

## Screens That Need Updating (55+ total)
When adding a new search link, update all these screens:
- DashboardScreen
- TaxReturnsScreen  
- PaymentsScreen
- DocumentsScreen
- MessagesScreen
- ProfileScreen
- MakePaymentScreen
- ConfirmPaymentScreen
- PaymentSuccessScreen
- TaxFilingScreen
- NoticeOfAssessmentScreen
- CRAMailScreen
- EditEmailScreen
- EditPhoneScreen
- TwoStepVerificationScreen
- ChangePasswordScreen
- LanguagePreferenceScreen
- PrivacyScreen
- TermsScreen
- HelpScreen
- RegisteredPlansScreen
- LearnRegisteredPlansScreen
- FHSAEligibilityScreen
- BalanceOwingDetailsScreen
- RefundDetailsScreen
- AllBenefitsScreen
- FAQFileTaxesScreen
- FAQRefundScreen
- FAQMakePaymentScreen
- FAQUpdateAddressScreen
- FAQNoticeOfAssessmentScreen
- TaxSlipsScreen
- FHSAQualifyingWithdrawalScreen
- ViewFHSAContributionRoomScreen
- RepresentativeScreen
- BecomeRepresentativeScreen
- HomeBuyersPlanScreen
- LifelongLearningPlanScreen
- ...and more

(Use the file_search command above to get the complete current list)
