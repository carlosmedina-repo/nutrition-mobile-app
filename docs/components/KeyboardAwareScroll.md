# KeyboardAwareScroll Component

A smart scrollable container that automatically adjusts content position when the keyboard appears.

## Overview

The KeyboardAwareScroll component provides an intelligent scrolling solution that responds to keyboard events, adjusting the content position based on touch location and keyboard height. It uses React Native Reanimated for smooth animations and handles keyboard interactions automatically.

## Props

| Prop     | Type         | Default | Description |
|----------|--------------|---------|-------------|
| children | ReactNode    | -       | Content to be rendered inside the scroll view |

## Features

- Automatic keyboard awareness
- Touch position tracking
- Smooth animations
- Keyboard event handling
- Pan responder integration
- Flexible content layout
- Dynamic margin adjustments
- Event cleanup
- Shared value management
- Gesture handling

## Usage

```tsx
import KeyboardAwareScroll from '@components/KeyboardAwareScroll';

<KeyboardAwareScroll>
  <TextInput placeholder="Type something..." />
  <TextInput placeholder="Another input..." />
</KeyboardAwareScroll>
```

## Implementation Details

### Animated Values
```typescript
const keyboardHeight = useSharedValue(0);
const lastTouchPosition = useSharedValue({ x: 0, y: 0 });
const isKeyboardVisible = useDerivedValue(() => keyboardHeight.value > 0);
```

### Animation Style
```typescript
const scrollViewAnimatedStyle = useAnimatedStyle(() => ({
  marginTop: withTiming(
    isKeyboardVisible.value ? -lastTouchPosition.value.y / 2 : 0,
    { duration: 250 }
  )
}));
```

## Event Handling

### Keyboard Events
```typescript
Keyboard.addListener("keyboardWillShow", (event) => {
  keyboardHeight.value = event.endCoordinates.height;
});

Keyboard.addListener("keyboardWillHide", () => {
  keyboardHeight.value = 0;
});
```

### Pan Responder
```typescript
const panResponder = PanResponder.create({
  onPanResponderRelease: (event) => {
    lastTouchPosition.value = {
      x: event.nativeEvent.pageX,
      y: event.nativeEvent.pageY
    };
  }
});
```

## Styling

The component uses Tailwind CSS classes:

### ScrollView
- `flex-1`
  - Full height utilization
  - Flexible layout

### Content Container
- `flex-1`
  - Full height content
  - Flexible layout

## Animations

- Margin adjustment duration: 250ms
- Smooth transitions
- Position-based calculations
- Dynamic height adjustments
- Touch-aware positioning

## Keyboard Behavior

### Show Event
- Captures keyboard height
- Updates shared value
- Triggers margin animation
- Adjusts based on touch position

### Hide Event
- Resets keyboard height
- Restores original position
- Smooth transition back
- Cleans up margins

## Dependencies

- react-native-reanimated
- React Native core components
- PanResponder
- Keyboard API

## Notes

- Automatically cleans up event listeners
- Handles touch position tracking
- Smooth animation transitions
- Flexible content support
- Maintains scroll position
- Responsive to keyboard events
- Gesture-aware scrolling
- Dynamic margin calculations
- Memory efficient
- Touch position optimization 