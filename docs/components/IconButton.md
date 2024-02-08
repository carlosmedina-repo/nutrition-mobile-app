# IconButton Component

A reusable button component that wraps an icon with press functionality and visual feedback.

## Overview

The IconButton component provides a consistent way to create interactive icon buttons with proper touch feedback and dark mode support. It's designed to be simple, flexible, and themeable.

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| icon | React.ReactNode | - | The icon element to display |
| onPress | () => void | - | Callback function when button is pressed |

## Features

- Circular touch target
- Press state feedback
- Dark mode support
- Pointer events handling
- Consistent padding
- Accessible touch area
- Theme-aware styling

## Usage

```tsx
import IconButton from '@components/IconButton';
import { Ionicons } from '@expo/vector-icons';

<IconButton 
  icon={<Ionicons name="add" size={24} color="black" />}
  onPress={() => console.log('Pressed')}
/>
```

## Styling

The component uses Tailwind CSS classes:

### Button Container
- `rounded-full p-2`
- Active state (light): `active:bg-gray-200`
- Active state (dark): `dark:active:bg-gray-700`

## Best Practices

1. Icon Sizing
   - Recommended icon sizes: 16-24px
   - Consider touch target size (44x44px)

2. Color Handling
   - Use theme-aware colors
   - Ensure sufficient contrast
   - Support dark mode variants

3. Accessibility
   - Maintain minimum touch target size
   - Use semantic icon names
   - Consider adding labels when needed

## Dependencies

- react-native
- Tailwind CSS

## Notes

- Simple, focused implementation
- Flexible icon support
- Theme-aware design
- Touch feedback states
- Pointer event isolation
- Consistent touch area
- Dark mode ready
- Minimal dependencies 