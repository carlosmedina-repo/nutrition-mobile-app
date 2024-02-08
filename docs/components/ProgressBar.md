# ProgressBar Component

A customizable animated progress bar component for React Native applications.

## Overview

The ProgressBar component displays a horizontal progress bar that animates to show the progress of a task or process. It uses React Native's Animated API for smooth transitions and supports customizable progress values.

## Props

| Prop  | Type   | Default | Description |
|-------|--------|---------|-------------|
| value | number | 0       | The progress value to display (0-100) |

## Features

- Smooth animation using React Native's Animated API
- Progress value ranges from 0 to 100
- Built-in animation duration of 1600ms
- Styled with Tailwind CSS
- Lime green progress indicator
- Rounded corners
- Gray background track

## Usage

```tsx
import ProgressBar from '@components/ProgressBar';

// Basic usage
<ProgressBar value={50} />

// Progress bar at 0% (default)
<ProgressBar />

// Progress bar at 100%
<ProgressBar value={100} />
```

## Styling

The component uses the following Tailwind CSS classes:
- Container: `w-64 h-4 bg-gray-200 rounded-full overflow-hidden`
- Progress indicator: `h-full bg-lime-500`

## Implementation Details

- Uses `Animated.View` for smooth progress transitions
- Progress animation is triggered whenever the value prop changes
- Native driver is disabled to support layout animations
- Progress width is interpolated from 0% to 100% based on the input value

## Notes

- The component automatically handles value updates and re-renders
- The progress animation will restart whenever the value prop changes
- The component is designed to be lightweight and reusable 