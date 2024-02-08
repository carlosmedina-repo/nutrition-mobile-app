# Meals Component

A comprehensive meal tracking interface with daily meal sections, calorie tracking, and interactive meal items.

## Overview

The Meals component provides a complete interface for displaying and managing daily meals. It features separate sections for breakfast, lunch, and dinner, with calorie tracking, meal addition capabilities, and animated meal items.

## Props

| Prop      | Type   | Default | Description |
|-----------|--------|---------|-------------|
| startDate | string | -       | Start date for meal data |
| endDate   | string | -       | End date for meal data |

## Features

- Separate meal type sections
- Calorie distribution tracking
- Interactive meal items
- Animated item entries
- Dark mode support
- Internationalization
- Image caching
- Record limiting
- Navigation integration
- Loading states

## Sub-Components

### MealHeader
```typescript
type MealsProps = {
  title: string;
  calories: number;
  mealTime: string;
  startDate: string;
  endDate: string;
};
```
- Displays meal section title
- Shows calorie allocation
- Add meal button
- Theme-aware styling

### MealItem
```typescript
type MealItemProps = {
  title: string;
  calories: number;
  image: string;
  description: string;
  onPress: () => void;
};
```
- Food item details
- Thumbnail image
- Calorie display
- Interactive press
- Animated entry

## Usage

```tsx
import Meals from '@components/Meals';

<Meals 
  startDate="2023-12-01"
  endDate="2023-12-01"
/>
```

## Styling

The component uses Tailwind CSS classes:

### Main Container
- `overflow-hidden rounded-lg bg-gray-50 p-2 dark:bg-gray-800`
  - Rounded corners
  - Theme-aware background
  - Consistent padding

### Section Header
- `flex flex-row items-center justify-between rounded-lg bg-gray-100 px-2 dark:bg-gray-700`
  - Row layout
  - Space distribution
  - Theme-aware background

### Meal Item
- `flex flex-row items-center justify-between px-4 py-3`
  - Row layout
  - Centered alignment
  - Consistent spacing

## Calorie Distribution

Default meal calorie allocation:
- Breakfast: 30% of daily total
- Lunch: 40% of daily total
- Dinner: 30% of daily total

## Animations

- Uses React Native Reanimated
- LightSpeedInLeft entry animation
- Smooth transitions
- Performance optimized

## Data Management

### Meal Records
- Maximum 3 records shown per section
- Sorted by calorie content
- Additional records count display
- Empty state handling

### Image Handling
- Memoized image components
- Border styling
- Aspect ratio maintenance
- Loading optimization

## Internationalization

Supports translations for:
- Meal type names
- Calorie units
- No records message
- Additional records message

## Theme Support

### Light Mode
- Background: Gray-50
- Section: Gray-100
- Text: Black/Gray-400

### Dark Mode
- Background: Gray-800
- Section: Gray-700
- Text: Gray-100/Gray-300

## Dependencies

- expo-image
- expo-router
- react-native-reanimated
- @expo/vector-icons
- i18next
- Custom IconButton component

## Notes

- Requires user nutritional data
- Handles missing meal data
- Supports navigation
- Memoized components
- Responsive layout
- Accessible interactions
- Performance optimized
- Theme-aware design
- Translation ready
- Image caching support 