# Checkbox Component

A customizable checkbox component with label support, animations, and theme awareness.

## Overview

The Checkbox component provides a toggleable checkbox with a label, featuring smooth animations, dark mode support, and consistent styling. It uses Material Design icons for the checkbox states.

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| label | string | - | Text label to display next to checkbox |
| checked | boolean | - | Current state of the checkbox |
| onChange | () => void | - | Callback function when checkbox state changes |

## Features

- Material Design icons
- Animated state transitions
- Dark mode support
- Label integration
- Touch feedback
- Theme-aware colors
- Consistent spacing
- Full width layout

## Usage

```tsx
import Checkbox from '@components/Checkbox';

<Checkbox 
  label="Enable notifications"
  checked={true}
  onChange={() => console.log('Checkbox toggled')}
/>
```

## Styling

The component uses Tailwind CSS classes:

### Container
- `w-full flex-row items-center gap-2 rounded-lg`
- Full width layout
- Row alignment
- Consistent spacing

### Icon Container
- Rotation animation: `rotate-0` (checked) / `rotate-90` (unchecked)
- Transition: `transition-all`

### Colors
- Checked: `#84cc16` (lime-500)
- Unchecked: `#9ca3af` (gray-400)
- Label: `color-gray-500` (light) / `dark:text-gray-400` (dark)

## Icons

Uses Material Icons:
- Checked: `check-box`
- Unchecked: `check-box-outline-blank`
- Size: 24px

## Animations

- Smooth rotation transition between states
- Hardware accelerated animations
- Visual feedback on state changes

## Theme Support

### Light Mode
- Unchecked color: Gray-400
- Label color: Gray-500
- Background: Transparent

### Dark Mode
- Unchecked color: Gray-400
- Label color: Gray-400
- Background: Transparent

## Dependencies

- @expo/vector-icons (MaterialIcons)
- nativewind
- react-native

## Best Practices

1. Label Text
   - Keep labels concise
   - Use clear, actionable text
   - Consider localization

2. Touch Target
   - Full width pressable area
   - Sufficient spacing
   - Clear visual feedback

3. State Management
   - Controlled component pattern
   - Immediate visual feedback
   - Smooth transitions

## Notes

- Clean, minimal design
- Accessible touch targets
- Smooth animations
- Theme-aware styling
- Material Design icons
- Consistent spacing
- Full width layout
- Hardware accelerated