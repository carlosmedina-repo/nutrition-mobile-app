# ValueChip Component

A compact chip component for displaying nutritional values with color-coded indicators.

## Overview

The ValueChip component displays nutritional information in a small, visually distinct chip format. Each type of nutrient (Energy, Protein, Carbs, Fat) has its own color scheme and includes a progress indicator.

## Props

| Prop    | Type                                    | Default | Description |
|---------|----------------------------------------|---------|-------------|
| type    | "Energy" \| "Protein" \| "Carbs" \| "Fat" | -     | Type of nutrient to display |
| value   | number                                 | -       | Numerical value to display |
| percent | number                                 | -       | Optional percentage for progress bar |

## Color Schemes

| Type    | Background     | Line Color | 
|---------|---------------|------------|
| Energy  | #FFA50020     | #FF8C00    |
| Protein | #FF634720     | #CD5C5C    |
| Carbs   | #00FF7F20     | #3CB371    |
| Fat     | #33669920     | #336699    |

## Features

- Color-coded by nutrient type
- Compact size (72x22 pixels)
- Progress indicator bar
- Semi-transparent backgrounds
- Bold nutrient type labels
- Rounded corners
- Fixed-width design

## Usage

```tsx
import ValueChip from '@components/ValueChip';

// Energy chip
<ValueChip 
  type="Energy"
  value={200}
  percent={50}
/>

// Protein chip
<ValueChip 
  type="Protein"
  value={30}
  percent={75}
/>

// Carbs chip
<ValueChip 
  type="Carbs"
  value={150}
  percent={60}
/>

// Fat chip
<ValueChip 
  type="Fat"
  value={45}
  percent={40}
/>
```

## Styling

### Container
- Width: 72 pixels
- Height: 22 pixels
- Border radius: 8 pixels
- Padding top: 2 pixels
- Overflow: Hidden

### Content Layout
- Flex direction: Row
- Centered content
- Gap between elements: 2 pixels

### Typography
- Type label: Extra small, bold
- Value: Extra small, medium weight
- Value color: Black

### Progress Bar
- Height: 4 pixels
- Width: Based on percent prop
- Color: Matches line color for type

## Notes

- Uses custom Text component for typography
- Semi-transparent backgrounds (20% opacity)
- Fixed dimensions for consistent layout
- Progress bar always visible
- Color schemes are predefined for each type
- Supports four nutrient types: Energy, Protein, Carbs, Fat
- No dark mode variations (uses consistent colors) 