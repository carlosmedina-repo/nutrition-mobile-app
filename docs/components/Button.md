# Button Component

A customizable button component for React Native applications with loading state and dark mode support.

## Overview

The Button component is a reusable, styled button that supports loading states, disabled states, and automatically adapts to light/dark mode. It features a lime/green color scheme and provides visual feedback on press.

## Props

| Prop     | Type       | Default | Description |
|----------|------------|---------|-------------|
| label    | string     | -       | The text to display on the button |
| onPress  | () => void | -       | Function to call when button is pressed |
| disabled | boolean    | false   | Whether the button is disabled |
| loading  | boolean    | false   | Whether to show a loading indicator |

## Features

- Responsive touch feedback with active states
- Loading state with ActivityIndicator
- Dark mode support
- Disabled state with opacity adjustment
- Rounded corners with border
- Full width by default

## Usage

```tsx
import Button from '@components/Button';

// Basic usage
<Button 
  label="Click Me"
  onPress={() => console.log('Button pressed')}
/>

// With loading state
<Button 
  label="Loading"
  loading={true}
  disabled={true}
/>

// Disabled button
<Button 
  label="Disabled"
  disabled={true}
/>
```

## Styling

The component uses the following Tailwind CSS classes:
- Container: `w-full items-center justify-center rounded-xl border border-lime-200 bg-green-500 py-4`
- Text: `font-semibold text-white dark:text-black`
- Loading indicator: `absolute right-0 mr-4`

### Theme Variations
- Light mode: Green background with white text
- Dark mode: Lime background with black text
- Active state: Slightly darker shade of background color
- Disabled state: 50% opacity

## Notes

- The button spans full width of its container
- Loading indicator appears on the right side when loading prop is true
- Visual feedback is provided through active states
- Automatically adapts to system dark/light mode