# FoodListItem Component

A comprehensive food item display component with nutritional information and dark mode support.

## Overview

The FoodListItem component displays detailed food information including an image, name, and key nutritional values (calories, protein, carbs, fat). It features a clean, card-like design with theme support and navigation capabilities.

## Props

| Prop | Type   | Default | Description |
|------|--------|---------|-------------|
| food | Datum   | -       | Food data object containing nutritional information |

## Features

- Food image display
- Nutritional information
- Interactive press handling
- Dark mode support
- Icon-based indicators
- Navigation integration
- Responsive layout
- Theme-aware styling
- Clean card design
- Truncated text handling

## Usage

```tsx
import FoodListItem from '@components/FoodListItem';

const foodData = {
  id: '123',
  name: 'Chicken Breast',
  image: 'https://example.com/chicken.jpg',
  energy: 165,
  protein: 31,
  carbonhydrate: 0,
  fat: 3.6
};

<FoodListItem food={foodData} />
```

## Styling

The component uses Tailwind CSS classes:

### Main Container
- `w-full bg-white p-2 py-1 dark:bg-black`
  - Full width
  - Theme-aware background
  - Consistent padding

### Card Container
- `flex-1 rounded-xl bg-gray-100 p-2 dark:bg-gray-800`
  - Rounded corners
  - Theme-aware background
  - Card-like appearance

### Food Info Section
- `mb-2 flex-row`
  - Row layout
  - Bottom margin
  - Image and text alignment

### Nutritional Info
- `mt-2 flex-row justify-between px-2`
  - Equal spacing
  - Row layout
  - Consistent padding

## Visual Elements

### Food Image
- Size: 60x60 pixels
- Border radius: 4
- Custom Image component
- Aspect ratio maintained

### Icons
- Size: 16x16 pixels (h-4 w-4)
- Right margin
- Custom tint colors
- Consistent alignment

### Typography
- Title: `text-xl font-semibold`
- Values: `text-xs font-semibold`
- Labels: `text-xs`
- Theme-aware colors

## Icon Colors

Uses predefined colors from IconColors constant:
- Energy
- Protein
- Carbohydrates
- Fat

## Navigation

Uses Expo Router for navigation:
```typescript
router.push({
  pathname: "/foodDetail",
  params: {
    foodId: food.id
  }
});
```

## Theme Support

### Light Mode
- Background: White/Gray-100
- Text: Black
- Border: Gray-200

### Dark Mode
- Background: Black/Gray-800
- Text: White
- Border: Gray-700

## Layout

### Header Section
- Food image (left)
- Food name (right)
- Single line truncation
- Vertical centering

### Nutritional Info
- Four columns layout
- Equal spacing
- Icon + label + value
- Consistent alignment

## Dependencies

- expo-router
- Custom Image component
- Local icon assets
- IconColors constants

## Notes

- Requires food data object
- Handles missing values
- Supports navigation
- Theme-aware design
- Truncates long names
- Consistent spacing
- Accessible touch target
- Clean visual hierarchy
- Responsive layout
- Icon-based indicators