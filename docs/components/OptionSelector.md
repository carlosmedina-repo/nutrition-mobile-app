# OptionSelector Component

A horizontal option selector with navigation arrows and dark mode support.

## Overview

The OptionSelector component provides a navigation interface for cycling through options using forward and back arrows. It features a centered label display, theme support, and responsive touch controls.

## Props

| Prop           | Type         | Default | Description |
|----------------|--------------|---------|-------------|
| onPressBack    | () => void   | -       | Callback for back arrow press |
| onPressForward | () => void   | -       | Callback for forward arrow press |
| value          | Option       | -       | Current option object with label and value |

## Types

```typescript
type Option = {
  label: string;
  value: string;
};
```

## Features

- Bidirectional navigation
- Dark mode support
- Centered label display
- Responsive touch areas
- Theme-aware icons
- Border styling
- Single line truncation
- Consistent spacing
- Visual feedback

## Usage

```tsx
import OptionSelector from '@components/OptionSelector';

const options = [
  { label: 'Option 1', value: 'opt1' },
  { label: 'Option 2', value: 'opt2' }
];

<OptionSelector 
  value={options[0]}
  onPressBack={() => console.log('Back pressed')}
  onPressForward={() => console.log('Forward pressed')}
/>
```

## Styling

The component uses Tailwind CSS classes:

### Container
- `container py-4`
  - Container width
  - Vertical padding

### Option Container
- `flex-row items-center justify-between rounded-md border border-gray-300 py-4 dark:border-gray-600`
  - Row layout
  - Centered alignment
  - Space distribution
  - Border styling
  - Theme support
  - Rounded corners

### Navigation Buttons
- `px-4`
  - Horizontal padding
  - Touch area spacing

### Label
- `text-md font-semibold dark:text-white`
  - Medium text size
  - Semi-bold weight
  - Theme-aware color

## Navigation Controls

### Back Button
- Icon: Ionicons 'chevron-back'
- Size: 22
- Theme-aware color
- Left-aligned
- Pressable area

### Forward Button
- Icon: Ionicons 'chevron-forward'
- Size: 22
- Theme-aware color
- Right-aligned
- Pressable area

## Theme Support

### Light Mode
- Border: Gray-300
- Text: Default (black)
- Icons: Black
- Background: Transparent

### Dark Mode
- Border: Gray-600
- Text: White
- Icons: White
- Background: Transparent

## Layout

- Horizontal arrangement
- Centered content
- Equal padding
- Fixed height
- Full width
- Responsive spacing

## Dependencies

- @expo/vector-icons (Ionicons)
- nativewind
- React Native core components

## Notes

- Label text truncates with ellipsis
- Supports long option labels
- Maintains consistent height
- Equal touch areas for buttons
- Theme adapts automatically
- Flexible container width
- Accessible touch targets
- Visual hierarchy through styling
- Smooth theme transitions
- Responsive to container width 