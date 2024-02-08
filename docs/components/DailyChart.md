# DailyChart Component

A dynamic chart component that displays daily macronutrient distribution with animated bars and dark mode support.

## Overview

The DailyChart component visualizes daily nutritional data including fat, carbohydrates, and protein percentages. It features animated bars, detailed statistics, and adapts to both light and dark modes.

## Props

| Prop      | Type                              | Default | Description |
|-----------|-----------------------------------|---------|-------------|
| dateRange | { start: Date; end: Date }        | -       | Date range for the chart data |

## Features

- Animated percentage bars for each macronutrient
- Smooth transitions between date changes
- Dark mode support
- Detailed macronutrient breakdown in grams
- Percentage distribution display
- Fallback state for no data
- Responsive layout with Tailwind CSS

## Usage

```tsx
import DailyChart from '@components/DailyChart';

// Basic usage
<DailyChart 
  dateRange={{
    start: new Date('2023-12-01'),
    end: new Date('2023-12-01')
  }}
/>
```

## Data Display

The component displays three main types of information:
1. Macronutrient values in grams (Fat, Carbs, Protein)
2. Animated percentage bars for visual representation
3. Percentage distribution numbers

## Styling

The component uses the following Tailwind CSS classes:

### Container Styling
- Main container: `flex-1 items-center`
- Data container: `w-full gap-8 p-4`

### Macronutrient Cards
- Card container: `flex-row items-center justify-between rounded-lg border border-gray-200 p-4 dark:border-gray-700`
- Labels: `text-xl font-bold`
- Values: `text-lg font-semibold text-gray-600 dark:text-gray-300`

### Progress Bars
- Bar container: `h-8 w-full overflow-hidden rounded-lg bg-gray-200 dark:bg-gray-700`
- Fat bar: `h-full bg-yellow-600 dark:bg-yellow-400`
- Carb bar: `h-full bg-green-600 dark:bg-green-400`
- Protein bar: `h-full bg-blue-600 dark:bg-blue-400`

### Theme Colors
- Fat: Yellow (600/400)
- Carbohydrates: Green (600/400)
- Protein: Blue (600/400)

## Animations

The component includes several animations:
- Fade-in animation when data changes
- Smooth width transitions for percentage bars
- 500ms duration for bar animations
- 300ms duration for opacity transitions

## Notes

- Uses `useSummary` hook for data fetching
- Formats dates using `date-fns` library
- Displays "No data available for this day" when data is missing
- All numerical values are rounded to one decimal place
- Fully responsive to parent container width
- Supports both light and dark color schemes 