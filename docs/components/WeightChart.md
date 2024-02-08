# WeightChart Component

A responsive SVG-based weight tracking chart with gradient fill and interactive data points.

## Overview

The WeightChart component creates a beautiful line chart for visualizing weight history over time. It features a gradient-filled area under the line, interactive data points, and a scrollable interface for viewing extended time periods.

## Props

| Prop  | Type            | Default | Description |
|-------|-----------------|---------|-------------|
| data  | WeightHistory[] | -       | Array of weight records with dates |

## Features

- Smooth line chart with gradient fill
- Interactive data points with weight values
- Horizontal scrolling for extended data
- Automatic scaling based on weight range
- Grid lines for better readability
- Date labels on x-axis
- Responsive to screen width
- Custom SVG implementation
- 10% padding for better visualization

## Usage

```tsx
import WeightChart from '@components/WeightChart';

const weightData = [
  { newWeight: 70.5, createdAt: '2023-12-01' },
  { newWeight: 70.2, createdAt: '2023-12-02' },
  { newWeight: 69.8, createdAt: '2023-12-03' }
];

<WeightChart data={weightData} />
```

## Visual Elements

### Chart Components
1. Line Graph
   - Smooth curved line
   - Green color (#4ade80)
   - 4px stroke width

2. Data Points
   - Circular indicators
   - 10px radius
   - Weight value displayed inside
   - White stroke for emphasis

3. Gradient Fill
   - Green gradient (#4ade80)
   - Fades from 40% to 0% opacity
   - Fills area under the line

4. Grid Lines
   - Horizontal guide lines
   - Vertical date separators
   - Light gray color
   - Dashed vertical lines

## Layout

### Dimensions
- Height: 220px
- Width: Max of (data points * 50px + 60px) or screen width
- 50px spacing between data points
- 30px padding on sides

### Grid System
- 5 horizontal guide lines
- Vertical lines at each data point
- Date labels below chart
- Weight values inside data points

## Calculations

### Data Scaling
- Automatic min/max weight detection
- 10% padding added to range
- Vertical scale normalized to 140px range
- Horizontal scale: 50px per data point

### Positioning
- X-axis: Linear scale with 50px intervals
- Y-axis: Normalized to chart height
- Data points centered on intersections

## Styling

### Colors
- Line and points: #4ade80 (green)
- Grid lines: lightgray
- Date text: gray
- Weight values: black
- Background gradient: green with varying opacity

### Typography
- Date labels: 10px font size, gray
- Weight values: 10px font size, bold, black
- Text centered in data points

## Notes

- Requires react-native-svg library
- Horizontally scrollable for large datasets
- Automatically adjusts to data range
- Dates formatted as DD/MM
- Maintains aspect ratio
- Bounces disabled on scroll
- Scroll indicators hidden
- Supports decimal weight values
- Grid lines provide visual reference
- Responsive to container width 