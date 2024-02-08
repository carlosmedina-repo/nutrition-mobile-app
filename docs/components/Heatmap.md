# Heatmap Component

A calendar-style heatmap component that displays daily macro nutrient distributions with a clean, interactive interface.

## Overview

The Heatmap component provides a month-view calendar that shows daily macro nutrient distributions through color-coded progress bars. It supports dark mode, animations, and interactive date selection.

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| year | number | - | The year to display |
| month | number | - | The month to display (1-12) |
| onPressDate | (date: Date) => void | - | Callback function when a date is pressed |

## Features

- Monthly calendar view
- Daily macro nutrient visualization
- Weekend day highlighting
- Dark mode support
- Smooth animations
- Interactive date selection
- Responsive layout
- Current month highlighting
- Macro distribution progress bars

## Sub-Components

### Square
```typescript
type SquareProps = {
  isInCurrentMonth: boolean;
  date: Date;
  onPress?: () => void;
  macros?: {
    fat: number;
    protein: number;
    carbonhydrate: number;
  };
};
```
- Individual day display
- Date formatting
- Macro progress bars
- Weekend styling
- Month opacity

### Row
- Horizontal container for days
- Evenly spaced layout
- Consistent padding

## Usage

```tsx
import Heatmap from '@components/Heatmap';

<Heatmap 
  year={2024}
  month={1}
  onPressDate={(date) => console.log(date)}
/>
```

## Styling

The component uses Tailwind CSS classes:

### Day Container
- `h-full w-full items-center justify-evenly rounded-md`
- Weekend: `bg-gray-200 dark:bg-gray-900`
- Weekday: `bg-gray-100 dark:bg-gray-800`

### Progress Bar
- `h-2 w-10 overflow-hidden rounded-full`
- Carbs: `bg-green-600 dark:bg-green-400`
- Protein: `bg-blue-600 dark:bg-blue-400`
- Fat: `bg-yellow-600 dark:bg-yellow-400`

## Animations

- Uses React Native Reanimated
- Fade-in animation on month change
- Smooth opacity transitions
- Performance optimized

## Data Management

### Date Handling
- Uses date-fns for calculations
- Week starts on Monday
- Handles month boundaries
- Formats dates consistently

### Macro Distribution
- Shows percentage-based progress
- Color-coded nutrients
- Combined progress bar
- Handles missing data

## Theme Support

### Light Mode
- Weekday: Gray-100
- Weekend: Gray-200
- Text: Gray-800
- Border: Gray-400

### Dark Mode
- Weekday: Gray-800
- Weekend: Gray-900
- Text: Gray-100
- Border: Gray-600

## Dependencies

- date-fns
- react-native-reanimated
- lodash
- Custom hooks (useSummary, useMe)

## Notes

- Responsive to screen width
- Handles month transitions
- Supports data loading states
- Accessible touch targets
- Clean visual hierarchy
- Efficient date calculations
- Memory optimized
- Theme-aware design 