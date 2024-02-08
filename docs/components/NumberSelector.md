# NumberSelector Component

A weight selection component with increment/decrement controls, bounds checking, and dark mode support.

## Overview

The NumberSelector component provides an interface for weight selection with plus/minus controls, value display, and a confirmation system for updates. It features dark mode support, internationalization, and value bounds protection.

## Features

- Increment/decrement controls
- Value bounds protection (35-174 kg)
- Dark mode support
- Internationalization
- Confirmation dialog
- User data integration
- Responsive layout
- Visual feedback
- Unit display (kg)
- Update confirmation

## Implementation

### Value Bounds
```typescript
const BOUNDS = {
  min: 35,
  max: 174
};
```

### State Management
- Uses local state for immediate updates
- Integrates with user data
- Clamps values within bounds
- Handles undefined states

## Usage

```tsx
import NumberSelector from '@components/NumberSelector';

<NumberSelector />
```

## Styling

The component uses Tailwind CSS classes:

### Main Container
- `flex-col items-center justify-center gap-4 space-x-4 rounded-md bg-gray-50 p-4 dark:bg-gray-800`
  - Column layout
  - Centered content
  - Consistent spacing
  - Rounded corners
  - Theme-aware background

### Control Buttons
- `flex-1 items-center justify-center rounded-md bg-gray-200 p-2 dark:bg-slate-700`
  - Equal width
  - Centered icons
  - Rounded corners
  - Theme-aware background
  - Touch padding

### Value Display
- `text-2xl font-bold color-slate-900 dark:color-slate-100`
  - Large text size
  - Bold weight
  - Theme-aware color
  - Unit indicator

## Controls

### Increment Button
- Icon: Ionicons 'add'
- Increases value by 1
- Respects maximum bound
- Theme-aware icon color

### Decrement Button
- Icon: Ionicons 'remove'
- Decreases value by 1
- Respects minimum bound
- Theme-aware icon color

## Update Process

### Confirmation Dialog
```typescript
Alert.alert(
  t("NumberSelector.UPDATE_WEIGHT"),
  t("NumberSelector.UPDATE_WEIGHT_MESSAGE", { currentValue }),
  [
    {
      text: t("General.CANCEL"),
      style: "cancel"
    },
    {
      text: t("General.OK"),
      onPress: async () => {
        await updateMe({ weight: currentValue });
      }
    }
  ]
);
```

## Internationalization

Supports translations for:
- Update weight title
- Update weight message
- Cancel button
- OK button

## Theme Support

### Light Mode
- Background: Gray-50
- Controls: Gray-200
- Text: Slate-900
- Icons: Black

### Dark Mode
- Background: Gray-800
- Controls: Slate-700
- Text: Slate-100
- Icons: White

## Dependencies

- @expo/vector-icons (Ionicons)
- lodash (clamp)
- i18next
- nativewind
- Custom Button component

## Notes

- Uses custom Button component for updates
- Integrates with useMe hook for user data
- Handles undefined initial values
- Prevents out-of-bounds values
- Provides immediate visual feedback
- Confirms before updating
- Supports internationalization
- Maintains consistent layout
- Accessible touch targets
- Smooth theme transitions 