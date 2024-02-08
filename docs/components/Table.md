# Table Component

A responsive nutritional information table with dark mode support and scrollable content.

## Overview

The Table component displays nutritional information in a clean, organized format with a fixed header and scrollable content area. It supports dark mode and provides consistent styling for nutritional values and their units.

## Props

| Prop  | Type                                              | Default | Description |
|-------|---------------------------------------------------|---------|-------------|
| items | Array<{ name: string, value: number, unit?: string }> | []    | Array of nutritional items to display |

## Features

- Fixed header design
- Scrollable content area
- Dark mode support
- Rounded corners
- Consistent spacing
- Unit display support
- Maximum height constraint
- Hidden scroll indicators
- Responsive layout
- Border styling

## Usage

```tsx
import Table from '@components/Table';

const nutritionData = [
  { name: 'Protein', value: 20, unit: 'g' },
  { name: 'Carbohydrates', value: 30, unit: 'g' },
  { name: 'Fat', value: 10, unit: 'g' },
  { name: 'Sodium', value: 400 }  // uses default unit (mg)
];

<Table items={nutritionData} />
```

## Styling

The component uses Tailwind CSS classes:

### Container
- `flex flex-col overflow-hidden rounded-lg`
  - Vertical layout
  - Hidden overflow
  - Rounded corners

### Header
- `flex-row items-center justify-between border-b border-gray-300 bg-gray-200 p-4 dark:border-gray-800 dark:bg-gray-600`
  - Row layout
  - Centered items
  - Border bottom
  - Theme-aware colors
  - Consistent padding

### Content Row
- `flex-row items-center justify-between bg-gray-100 p-4 dark:bg-gray-800`
  - Row layout
  - Centered items
  - Theme-aware background
  - Consistent padding

### Typography
- Header: `text-md font-bold text-gray-500 dark:text-gray-400`
- Row Name: `text-md font-semibold text-gray-500 dark:text-gray-400`
- Row Value: `text-md text-gray-500 dark:text-gray-400`

## Scroll Configuration

### ScrollView Props
```typescript
{
  showsVerticalScrollIndicator: false,
  style: { maxHeight: 400 },
  contentContainerStyle: { 
    flexGrow: 1, 
    paddingBottom: 140 
  },
  bounces: false
}
```

## Theme Support

### Light Mode
- Header: Gray-200 background
- Rows: Gray-100 background
- Border: Gray-300
- Text: Gray-500

### Dark Mode
- Header: Gray-600 background
- Rows: Gray-800 background
- Border: Gray-800
- Text: Gray-400

## Layout

- Maximum height: 400px
- Bottom padding: 140px
- Consistent row padding: 16px (p-4)
- Flexible row height
- Full width utilization
- Centered content alignment

## Notes

- Default unit is "mg" if not specified
- Supports variable number of items
- Maintains consistent row height
- Prevents bounce effect
- Hidden scroll indicators
- Bottom padding for better scrolling
- Responsive to container width
- Supports long content scrolling
- Theme-aware color scheme
- Accessible text contrast 