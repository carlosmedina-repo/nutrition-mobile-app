# Image Component

A wrapper around Expo Image with loading state handling and theme-aware loading indicator.

## Overview

The Image component extends Expo's Image component by adding a loading indicator, smooth opacity transitions, and theme support. It provides visual feedback during image loading and maintains consistent styling.

## Props

Extends all Expo Image props (`ImageProps`)

## Features

- Loading state management
- Theme-aware loading indicator
- Smooth opacity transitions
- Consistent border radius
- Loading feedback
- Absolute positioning
- Centered loading indicator
- Automatic state handling
- Style inheritance
- Dark mode support

## Usage

```tsx
import Image from '@components/Image';

// Basic usage
<Image 
  source="https://example.com/image.jpg"
  style={{ width: 200, height: 200 }}
/>

// With custom styling
<Image 
  source={require('./local-image.png')}
  style={{
    width: 300,
    height: 200,
    borderRadius: 12
  }}
  contentFit="cover"
/>
```

## Styling

### Container
- Default View wrapper
- Maintains original dimensions
- Preserves layout context

### Loading Indicator Container
```typescript
{
  justifyContent: "center",
  alignItems: "center",
  position: "absolute",
  zIndex: 1
}
```
- Centered content
- Absolute positioning
- Top layer placement
- Inherits parent dimensions

### Image
- Default border radius: 24
- Opacity transitions:
  - Loading: 0
  - Loaded: 1
- Inherits provided styles

## Loading States

### Initial State
- Opacity: 0
- Loading indicator visible
- Theme-aware indicator color

### Loading Complete
- Opacity: 1
- Loading indicator hidden
- Smooth transition

## Theme Support

### Light Mode
- Loading indicator: Black

### Dark Mode
- Loading indicator: White

## Event Handling

### Load Events
```typescript
onLoad={() => {
  setLoaded(true);
}}

onLoadEnd={() => {
  setLoaded(true);
}}
```
- Handles both load events
- Updates loading state
- Triggers opacity transition

## Dependencies

- expo-image
- nativewind
- React Native core components

## Notes

- Uses Expo Image for better performance
- Maintains aspect ratio of original image
- Supports all Expo Image props
- Handles loading edge cases
- Smooth visual transitions
- Consistent border radius
- Theme-aware loading states
- Preserves original styling
- Centered loading indicator
- Proper z-index handling
- Supports local and remote images