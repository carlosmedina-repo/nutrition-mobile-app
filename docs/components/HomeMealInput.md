# HomeMealInput Component

A stylish meal input interface component that provides quick access buttons for adding different types of meals.

## Overview

The HomeMealInput component displays three distinct buttons for adding breakfast, lunch, and dinner meals. Each button features a unique color scheme and icon, creating an intuitive and visually appealing interface.

## Features

- Three meal type buttons (Breakfast, Lunch, Dinner)
- Unique color coding for each meal type
- Custom icons for meal categories
- Shadow effects for depth
- Responsive layout
- Consistent spacing
- Interactive press states

## Styling

The component uses Tailwind CSS classes:

### Container
- `flex-1 items-center justify-center px-6`
- Centered layout
- Consistent padding

### Card
- `w-full items-center justify-around gap-2 rounded-3xl bg-white p-4`
- Shadow properties:
  ```javascript
  shadowColor: "#000"
  shadowOffset: { width: 0, height: 0 }
  shadowOpacity: 0.1
  shadowRadius: 6
  ```

### Meal Buttons
- Common: `flex-1 flex-row items-center justify-center rounded-md px-2 py-3`
- Breakfast: `bg-blue-50`
- Lunch: `bg-green-50`
- Dinner: `bg-red-50`

## Icons

Uses Expo Vector Icons (Ionicons):
- Breakfast: `beer-outline` (darkblue)
- Lunch: `fast-food-outline` (darkgreen)
- Dinner: `pizza-outline` (darkred)
- Add button: `add-outline` (black)

## Usage

```tsx
import HomeMealInput from '@components/HomeMealInput';

<HomeMealInput />
```

## Layout Structure

```
Container
└── Card
    ├── Breakfast Button
    │   ├── Icon
    │   ├── Text
    │   └── Add Icon
    ├── Lunch Button
    │   ├── Icon
    │   ├── Text
    │   └── Add Icon
    └── Dinner Button
        ├── Icon
        ├── Text
        └── Add Icon
```

## Visual Design

### Colors
- Breakfast: Blue-50 background
- Lunch: Green-50 background
- Dinner: Red-50 background
- Text: Gray-500
- Icons: Dark variants of respective colors

### Typography
- Text size: Large
- Font weight: Medium
- Consistent padding

## Dependencies

- @expo/vector-icons
- react-native
- Tailwind CSS

## Notes

- Clean, minimalist design
- Intuitive meal categorization
- Consistent visual hierarchy
- Touch-friendly button sizes
- Responsive layout adaptation
- Shadow effects for depth
- Clear visual feedback
- Accessible touch targets 