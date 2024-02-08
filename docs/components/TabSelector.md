# TabSelector Component

A segmented control component for time period selection with dark mode support and animated transitions.

## Overview

The TabSelector component provides a three-way toggle between daily, weekly, and monthly views. It features responsive buttons with active state highlighting, dark mode support, and smooth transitions.

## Props

| Prop        | Type                                          | Default | Description |
|-------------|-----------------------------------------------|---------|-------------|
| onChange    | (tab: "daily" \| "weekly" \| "monthly") => void | -     | Callback function when tab selection changes |
| selectedTab | "daily" \| "weekly" \| "monthly"               | -     | Currently selected tab |

## Features

- Three-state selection
- Active state highlighting
- Dark mode support
- Smooth transitions
- Equal width distribution
- Responsive touch areas
- Border styling
- Consistent spacing
- Visual feedback

## Usage

```tsx
import TabSelector from '@components/TabSelector';

<TabSelector 
  selectedTab="daily"
  onChange={(tab) => {
    console.log('Selected tab:', tab);
  }}
/>
```

## Styling

The component uses Tailwind CSS classes:

### Container
- `flex flex-row justify-between gap-2`
  - Horizontal layout
  - Equal spacing
  - 2-unit gap between tabs

### Tab Buttons
- Base styles:
  ```
  flex-1 items-center justify-center rounded-xl 
  border border-gray-300 p-2 py-4 
  transition-colors duration-500 
  dark:border-gray-600
  ```
  - Equal width (flex-1)
  - Centered content
  - Rounded corners
  - Border styling
  - Padding
  - Transition animation

### Active State
- Light mode: `bg-green-500`
- Dark mode: `bg-lime-500`

### Text
- `font-semibold text-black dark:text-white`
  - Semi-bold weight
  - Theme-aware text color

## States

### Default State
- Gray border
- Transparent background
- Theme-aware text color

### Active State
- Green/Lime background
- Maintained border
- 500ms color transition
- Theme-aware colors

## Theme Support

### Light Mode
- White background
- Gray borders
- Black text
- Green active state

### Dark Mode
- Transparent background
- Dark gray borders
- White text
- Lime active state

## Layout

- Equal width distribution
- 2-unit gap between tabs
- Consistent vertical padding (4 units)
- Consistent horizontal padding (2 units)
- Centered text alignment
- Full width container

## Transitions

- Color transitions
- Duration: 500ms
- Affects background color
- Smooth state changes

## Notes

- Uses Pressable for better touch feedback
- Maintains consistent height across states
- Supports dynamic text content
- Equal spacing between all tabs
- Full-width container layout
- Responsive to container width
- Maintains border in both states
- Smooth visual transitions
- Accessible touch targets 