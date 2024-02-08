# WaterOverview Component

An interactive water consumption tracker with animated water glass indicators and dark mode support.

## Overview

The WaterOverview component displays daily water consumption using a series of animated water glass icons. Each glass represents 250ml of water, with a maximum tracking capacity of 2000ml (8 glasses).

## Props

This component doesn't accept any props as it manages its own state through the `useWater` hook.

## Features

- Visual water consumption tracking
- Animated transitions between filled/empty states
- Dark mode support
- Loading state handling
- Interactive press behavior
- Navigation to water input screen
- Automatic daily tracking
- Responsive layout

## Usage

```tsx
import WaterOverview from '@components/WaterOverview';

// Basic usage
<WaterOverview />
```

## Data Management

- Uses `useWater` hook for data fetching
- Tracks daily water consumption
- Automatically formats current date
- Calculates glasses consumed (250ml per glass)
- Maximum tracking: 8 glasses (2000ml)

## Visual Elements

### Water Glass States
1. Filled Glass (`FilledWater`):
   - Blue filled water glass icon
   - Fade-in animation on appearance
   - Represents 250ml of water consumed

2. Empty Glass (`EmptyWater`):
   - Outline water glass icon
   - Fade-out animation on disappearance
   - Represents unconsumed portion

## Styling

The component uses the following Tailwind CSS classes:

### Container
- `overflow-hidden rounded-lg bg-gray-50 p-4 dark:bg-gray-800`
  - Rounded corners
  - Light/dark mode backgrounds
  - Consistent padding

### Glass Icons
- `h-16 flex-1`
  - Fixed height
  - Flexible width distribution
  - Maintains aspect ratio

## Interactions

- Pressing the component navigates to the water input screen
- Path: `/(auth)/(tabs)/(home)/addWater`
- Responsive touch feedback

## Animations

- Fade-in animation for filled glasses
- Fade-out animation for empty glasses
- Smooth transitions between states
- Uses React Native Reanimated

## States

1. Loading State:
   - Displays "Loading..." text
   - Handles data fetching period

2. Normal State:
   - Shows array of water glasses
   - Updates based on consumption

## Notes

- Automatically fetches current day's water consumption
- Each glass represents 250ml of water
- Total capacity: 2000ml (8 glasses)
- Rounds up partial glasses (Math.ceil)
- Requires water-filled.png and water-empty.png assets
- Uses Expo Router for navigation
- Supports both light and dark themes 