# MeasurementsSheet Component

A bottom sheet component for displaying measurements with gesture support and snap points.

## Overview

The MeasurementsSheet component implements a bottom sheet interface using @gorhom/bottom-sheet, providing a gesture-responsive overlay that can be pulled up from the bottom of the screen. It supports multiple snap points and gesture handling.

## Features

- Interactive bottom sheet
- Gesture support
- Multiple snap points
- Smooth animations
- Ref-based control
- Change event handling
- Customizable content
- Full gesture handler support
- Flexible height states
- Default positioning

## Implementation

### Snap Points
```typescript
const snapPoints = ["25%", "50%"];
```
- Two defined positions
- Percentage-based heights
- Memoized for performance

### Sheet Reference
```typescript
const bottomSheetRef = useRef<BottomSheet>(null);
```
- Allows programmatic control
- Maintains sheet state
- TypeScript support

## Usage

```tsx
import MeasurementsSheet from '@components/MeasurementsSheet';

const MyScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <MeasurementsSheet />
    </View>
  );
};
```

## Styling

The component uses React Native StyleSheet:

### Container
```typescript
{
  flex: 1,
  backgroundColor: "grey"
}
```

### Content Container
```typescript
{
  flex: 1,
  padding: 36,
  alignItems: "center"
}
```

## Component Structure

### Root View
- Uses GestureHandlerRootView
- Full screen container
- Grey background
- Gesture handling support

### Bottom Sheet
- Default index: 1 (50% height)
- Two snap points
- Change event handling
- Reference-based control

### Content View
- Centered content
- Large padding (36)
- Flexible height
- Custom content support

## Props & Configuration

### BottomSheet Props
- `ref`: BottomSheet reference
- `onChange`: Change event handler
- `index`: Initial snap point index
- `snapPoints`: Array of height positions

## Event Handling

```typescript
const handleSheetChanges = (index: number) => {
  console.log("handleSheetChanges", index);
};
```
- Tracks sheet position changes
- Callback memoization
- Index-based tracking

## Dependencies

- @gorhom/bottom-sheet
- react-native-gesture-handler
- React Native core components

## Notes

- Requires GestureHandlerRootView wrapper
- Supports both percentage snap points
- Initial position at 50% height
- Memoized callbacks for performance
- Flexible content container
- TypeScript definitions included
- Gesture-based interaction
- Smooth animations built-in
- Customizable appearance
- Programmatic control available 