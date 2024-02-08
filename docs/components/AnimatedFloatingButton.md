# AnimatedFloatingButton Component

A visually appealing floating action button with animated gradient effects and dark mode support.

## Overview

The AnimatedFloatingButton component creates a floating button with a continuously rotating gradient background and smooth entrance animation. It's designed to be a prominent call-to-action element in the UI.

## Props

| Prop          | Type         | Default | Description |
|---------------|--------------|---------|-------------|
| onButtonPress | () => void   | -       | Callback function triggered when button is pressed |

## Features

- Continuous gradient rotation animation
- Smooth entrance animation with spring effect
- Dark mode support
- Custom gradient background
- Fixed positioning at bottom-right
- Two-line text label ("Nutri Guide")
- Responsive touch feedback
- Layered design with gradient overlay

## Usage

```tsx
import AnimatedFloatingButton from '@components/AnimatedFloatingButton';

<AnimatedFloatingButton 
  onButtonPress={() => {
    console.log('Button pressed');
  }}
/>
```

## Styling

### Container Styling
- Position: Absolute with full width/height
- Z-index: 2 for proper layering
- Pointer events: Only for the button area

### Button Styling
- Size: 60x60 pixels
- Position: 20px from bottom and right
- Border radius: 20px
- Background color: #FF6347 (Tomato)
- Overflow: Hidden for gradient containment

### Inner Content
- Background: Light gray in light mode, black in dark mode
- Margin: 3px from edges (6px total padding)
- Border radius: 18px
- Centered text alignment

## Animations

The component features two main animations:

### Gradient Rotation
- Continuous 360-degree rotation
- Duration: 2000ms (2 seconds)
- Linear easing
- Infinite repeat
- Scale: 1.5x for better gradient coverage

### Entrance Animation
- Slide in from bottom
- Duration: 1000ms
- Spring effect for natural motion
- No delay

## Theme Support

The component supports both light and dark modes:
- Light mode: Gray background with black text
- Dark mode: Black background with white text

## Notes

- Uses React Native Reanimated for smooth animations
- Requires a sweep gradient image asset
- Button size is fixed at 60x60 pixels
- Maintains touch responsiveness during animations
- Z-indexing ensures proper layering in the UI
- Text is displayed in two lines for better readability
- Gradient effect creates an engaging visual highlight
