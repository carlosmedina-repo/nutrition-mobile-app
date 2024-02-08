# SearchBar Component

A stylish search input component with integrated camera scan functionality and dark mode support.

## Overview

The SearchBar component provides a text input field for food search with an integrated camera scan button. It features a clean design with border styling, dark mode support, and navigation capabilities.

## Props

| Prop         | Type                    | Default | Description |
|--------------|-------------------------|---------|-------------|
| onChangeText | (text: string) => void  | -       | Callback function triggered when search text changes |

## Features

- Text input for food search
- Integrated camera scan button
- Dark mode support
- Responsive layout
- Custom placeholder styling
- Border styling
- Navigation integration
- Icon integration
- Touch feedback

## Usage

```tsx
import SearchBar from '@components/SearchBar';

<SearchBar 
  onChangeText={(text) => {
    console.log('Search text:', text);
  }}
/>
```

## Visual Elements

### Search Input
- Placeholder text: "Search for foods"
- Custom placeholder color: #666666
- Left padding for text
- Flexible width
- Dark mode text color support

### Scan Button
- Ionicons scan-circle-outline icon
- Size: 30px
- Color: #666666
- Right-rounded corners
- Press handling with navigation

## Styling

The component uses Tailwind CSS classes:

### Main Container
- `h-20 w-full flex-row items-center justify-center bg-white p-2 dark:bg-black`
  - Fixed height: 20 units
  - Full width
  - Centered content
  - Light/dark backgrounds
  - Consistent padding

### Search Container
- `flex-row items-center justify-center rounded-2xl border border-gray-600 bg-white p-1 dark:bg-black`
  - Row layout
  - Centered content
  - Rounded corners
  - Border styling
  - Theme-aware background

### Input Field
- `flex-1 pl-3 dark:text-white`
  - Flexible width
  - Left padding
  - Dark mode text color

### Scan Button
- `rounded-r-lg bg-white p-2 dark:bg-black`
  - Right-rounded corners
  - Theme-aware background
  - Consistent padding

## Navigation

- Uses Expo Router
- Camera scan button navigates to "camera" route
- Handles navigation through router.push

## Theme Support

- Light mode:
  - White background
  - Gray border
  - Dark text
  - Gray placeholder

- Dark mode:
  - Black background
  - Gray border
  - White text
  - Gray placeholder

## Notes

- Requires @expo/vector-icons for Ionicons
- Uses expo-router for navigation
- Maintains consistent height
- Supports text input events
- Preserves border styling in both themes
- Icon color remains consistent in both themes
- Full width container for proper alignment
- Flexible input field width
- Touch feedback on scan button
