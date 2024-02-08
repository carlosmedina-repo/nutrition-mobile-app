# ScreenView Component

A flexible screen container component with scrolling capabilities and dark mode support.

## Overview

The ScreenView component serves as a base container for screen content, providing consistent styling and behavior across the application. It wraps content in a ScrollView with configurable scrolling, padding, and bounce effects.

## Props

| Prop       | Type         | Default | Description |
|------------|--------------|---------|-------------|
| children   | ReactNode    | -       | Content to be rendered inside the screen view |
| scrollable | boolean      | false   | Whether the content can be scrolled |
| padding    | boolean      | false   | Whether to add padding around the content |
| bounces    | boolean      | false   | Whether the scroll view bounces at the edges |

## Features

- Configurable scroll behavior
- Dark mode support
- Optional padding
- Bounce effect control
- Hidden scroll indicators
- Flexible content container
- Consistent background colors
- Full height layout

## Usage

```tsx
import ScreenView from '@components/ScreenView';

// Basic usage
<ScreenView>
  <Text>Screen content</Text>
</ScreenView>

// Scrollable with padding
<ScreenView 
  scrollable={true}
  padding={true}
>
  <Text>Scrollable content with padding</Text>
</ScreenView>

// With bounce effect
<ScreenView 
  scrollable={true}
  bounces={true}
>
  <Text>Content with bounce effect</Text>
</ScreenView>
```

## Styling

The component uses Tailwind CSS classes:

### Main Container
- `flex-1 bg-white dark:bg-black`
  - Full height layout
  - Light/dark background colors
  - Flexible content area

### Content Container
- Dynamic classes based on props:
  - Scrollable: `flex-1` when not scrollable
  - Padding: `p-4` when padding is enabled

## Scroll Configuration

- Horizontal indicator: Hidden
- Vertical indicator: Hidden
- Scroll enabled: Controlled by `scrollable` prop
- Bounce effect: Controlled by `bounces` prop
- Content container: Adapts to scroll state

## Theme Support

- Light mode: White background
- Dark mode: Black background

## Notes

- Uses React Native's ScrollView component
- Maintains consistent styling across screens
- Handles both scrollable and fixed content
- Supports nested components
- No scroll indicators for clean UI
- Optional padding for content spacing
- Full screen height by default
- Flexible content rendering