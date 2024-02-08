# LargeSwitch Component

A customizable segmented control component with smooth transitions and dark mode support.

## Overview

The LargeSwitch component provides a large, touch-friendly segmented control for switching between multiple options. It features smooth color transitions, theme support, and flexible option configuration.

## Props

| Prop          | Type                                | Default | Description |
|---------------|-------------------------------------|---------|-------------|
| options       | Array<{ text: string, value: string }> | -     | Array of options to display |
| onChange      | (value: string) => void             | -       | Callback when selection changes |
| selectedValue | string                              | -       | Currently selected option value |

## Features

- Multiple option support
- Smooth color transitions
- Dark mode support
- Touch-friendly design
- Flexible option configuration
- Equal width segments
- Border styling
- Responsive layout
- Visual feedback
- Theme-aware colors

## Usage

```tsx
import LargeSwitch from '@components/LargeSwitch';

const options = [
  { text: 'Option 1', value: 'opt1' },
  { text: 'Option 2', value: 'opt2' },
  { text: 'Option 3', value: 'opt3' }
];

<LargeSwitch 
  options={options}
  selectedValue="opt1"
  onChange={(value) => console.log('Selected:', value)}
/>
```

## Styling

The component uses Tailwind CSS classes:

### Container
- `flex-row items-center justify-center overflow-hidden rounded-xl border border-gray-300 dark:border-gray-400`
  - Row layout
  - Centered content
  - Hidden overflow
  - Rounded corners
  - Theme-aware border

### Option Button
- Base: `flex-1 items-center overflow-hidden py-4`
- Selected: `bg-lime-500 dark:bg-green-500`
- Transition: `transition-colors duration-500 ease-in-out`

### Option Text
- Base: `text-md`
- Selected: `text-white dark:text-black`
- Unselected: `text-black dark:text-white`

## Theme Support

### Light Mode
- Border: Gray-300
- Selected: Lime-500 background with white text
- Unselected: Transparent background with black text

### Dark Mode
- Border: Gray-400
- Selected: Green-500 background with black text
- Unselected: Transparent background with white text

## Transitions

- Property: colors
- Duration: 500ms
- Timing: ease-in-out
- Smooth state changes

## Layout

- Equal width segments
- Vertical padding: 4 units (py-4)
- Centered text
- Full width utilization
- Consistent height
- Hidden overflow

## Interactions

- Press handling per segment
- Immediate visual feedback
- Value-based selection
- Callback with selected value
- Touch-friendly areas

## Notes

- Supports any number of options
- Maintains consistent height
- Equal width distribution
- Smooth color transitions
- Theme-aware styling
- Accessible touch targets
- Flexible content width
- Proper overflow handling
- Responsive to container width
- Clean visual transitions 