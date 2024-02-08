# WeeklyChart Component

An animated weekly nutrition distribution chart with stacked bars and dark mode support.

## Overview

The WeeklyChart component displays daily macronutrient distributions over a week using animated stacked bar charts. Each day shows the percentage breakdown of fat, carbohydrates, and protein, with support for empty states and dark mode.

## Props

| Prop      | Type                              | Default | Description |
|-----------|-----------------------------------|---------|-------------|
| dateRange | { start: Date; end: Date }        | -       | Date range for the chart data |

## Features

- Animated stacked bar charts
- Daily macronutrient breakdown
- Dark mode support
- Empty state handling
- Date formatting for each day
- Responsive layout
- Smooth animations
- Color-coded nutrients

## Color Scheme

| Nutrient  | Light Mode    | Dark Mode     |
|-----------|---------------|---------------|
| Fat       | Yellow-300    | Yellow-400    |
| Carbs     | Green-300     | Green-400     |
| Protein   | Blue-300      | Blue-400      |

## Usage

```tsx
import WeeklyChart from '@components/WeeklyChart';

// Display chart for current week
<WeeklyChart 
  dateRange={{
    start: new Date('2023-12-01'),
    end: new Date('2023-12-07')
  }}
/>
```

## Components

### Bar Component
- Animated height transitions
- Percentage display when > 20%
- Nutrient name display
- Color-coded by nutrient type
- Rounded corners

### EmptyBar Component
- Gray placeholder bar
- "No data" text display
- Reduced opacity
- Maintains consistent layout

## Styling

The component uses Tailwind CSS classes:

### Main Container
- `flex-1 flex-row items-center justify-center gap-2`
  - Flexible row layout
  - Centered content
  - Consistent spacing

### Day Container
- `h-full flex-1 items-center justify-center rounded-lg`
  - Full height
  - Equal width distribution
  - Rounded corners

### Bar Container
- `w-full flex-1 gap-2 pb-10`
  - Full width
  - Spacing between bars
  - Bottom padding for dates

### Date Display
- Day: `text-center text-lg font-semibold`
- Weekday: `text-center text-sm`
- Month: `text-center text-sm`

## Animations

- Smooth height transitions for bars
- Uses React Native Reanimated
- Configurable timing functions
- Percentage-based animations

## Data Management

- Uses `useSummary` hook for data fetching
- Processes date ranges with date-fns
- Handles missing or incomplete data
- Calculates daily percentages

## Notes

- Requires date-fns for date manipulation
- Supports variable date ranges
- Automatically formats dates (DD, EE, MMM)
- Shows empty state when data is missing
- Percentage values are rounded to integers
- Responsive to container width
- Maintains consistent height across days
- Text color adapts to light/dark mode 