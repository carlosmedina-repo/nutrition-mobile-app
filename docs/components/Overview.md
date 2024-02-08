# Overview Component

A comprehensive nutritional overview dashboard with calorie tracking and macronutrient breakdown.

## Overview

The Overview component provides a detailed view of daily nutritional intake, including total calories, remaining/exceeded calories, and macronutrient distribution. It features circular and linear progress indicators, dark mode support, and internationalization.

## Props

| Prop      | Type   | Default | Description |
|-----------|--------|---------|-------------|
| startDate | string | -       | Start date for the overview period |
| endDate   | string | -       | End date for the overview period |

## Features

- Calorie tracking with circular progress
- Macronutrient breakdown (Carbs, Protein, Fat)
- Progress bars for each macronutrient
- Dark mode support
- Internationalization (i18n)
- Visual indicators for exceeded limits
- Responsive layout
- Icon-based nutrient display

## Data Management

- Uses `useMeals` hook for meal data
- Uses `useMe` hook for user nutritional needs
- Automatic calorie calculations
- Default nutritional values if user data unavailable
- Real-time progress tracking

## Visual Elements

### Calorie Section
1. Total Calories
   - Daily target display
   - Unit display (kcal)
   - Bold typography

2. Circular Progress
   - Visual representation of consumed calories
   - Dynamic color indicators
   - Centered in layout

3. Remaining/Exceeded
   - Dynamic text based on consumption
   - Color coding for exceeded values
   - Responsive calculations

### Macronutrient Section
- Individual sections for Carbs, Protein, Fat
- Icon representation for each nutrient
- Current vs. Maximum values
- Linear progress indicators
- Color-coded elements

## Usage

```tsx
import Overview from '@components/Overview';

<Overview 
  startDate="2023-12-01"
  endDate="2023-12-01"
/>
```

## Styling

The component uses Tailwind CSS classes:

### Main Container
- `overflow-hidden rounded-lg bg-gray-50 dark:bg-gray-800`
  - Rounded corners
  - Light/dark backgrounds
  - Overflow protection

### Calorie Display
- Container: `flex w-1/3 flex-col items-center justify-center`
- Values: `text-lg font-bold dark:text-gray-100`
- Labels: `text-sm font-semibold text-gray-400 dark:text-gray-300`

### Macronutrient Section
- Container: `h-20 w-full flex-row bg-gray-100 dark:bg-gray-700`
- Individual sections: `h-full flex-1 items-center justify-center`
- Icons: `mr-1 h-6 w-6`
- Values: `text-sm font-semibold dark:text-gray-100`

## Internationalization

Supports multiple languages through i18n:
- Overview.TOTAL
- Overview.REMAINING
- Overview.EXCEEDED
- General.CARBS
- General.PROTEIN
- General.FAT
- General.GR

## Color Scheme

Uses predefined colors from IconColors constant:
- Carbohydrates: Custom theme color
- Protein: Custom theme color
- Fat: Custom theme color

## Notes

- Requires ChartCircle and ChartLine components
- Uses custom icon assets
- Handles missing user data gracefully
- Supports decimal precision for nutrients
- Automatic dark mode adaptation
- Responsive to container width
- Uses conditional styling for exceeded values
- Maintains consistent spacing and alignment 