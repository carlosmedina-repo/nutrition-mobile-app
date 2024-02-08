# TabView Component

A horizontal swipeable tab view component with page-like navigation and scroll event handling.

## Overview

The TabView component provides a horizontally scrollable container that supports page-by-page navigation between different screens. It uses React Native's FlatList for optimal performance and includes scroll event handling for tab index changes.

## Props

| Prop          | Type                        | Default | Description |
|---------------|----------------------------|---------|-------------|
| screens       | Array<{ id: string, content: ReactNode }> | - | Array of screen objects with unique IDs and content |
| onIndexChange | (index: number) => void    | -       | Callback when active tab index changes |
| ref           | Ref<FlatList<any>>         | -       | Forward ref for FlatList control |

## Features

- Horizontal swipe navigation
- Page-like scrolling
- Screen width adaptation
- Scroll event handling
- Performance optimized
- Smooth transitions
- Index change tracking
- Ref forwarding
- Bounce control
- Hidden scroll indicators

## Usage

```tsx
import TabView from '@components/TabView';

const screens = [
  {
    id: '1',
    content: <View><Text>Screen 1</Text></View>
  },
  {
    id: '2',
    content: <View><Text>Screen 2</Text></View>
  }
];

const MyComponent = () => {
  const tabViewRef = useRef<FlatList>(null);

  return (
    <TabView 
      ref={tabViewRef}
      screens={screens}
      onIndexChange={(index) => {
        console.log('Current tab:', index);
      }}
    />
  );
};
```

## Scroll Behavior

### Event Handling
- Throttled scroll events (16ms)
- Index calculation based on screen width
- Prevents duplicate index updates
- Smooth transition tracking

### Paging
- Enabled page snapping
- Full-width pages
- Horizontal scrolling
- Disabled bouncing
- Hidden indicators

## Styling

The component uses Tailwind CSS classes:

### Container
- `flex-1`
  - Full height utilization
  - Flexible layout

### Screen Container
- Width: Matches window width
- Dynamic content rendering
- Maintains aspect ratio

## Performance

- Uses FlatList for efficient rendering
- Scroll event throttling
- Minimal re-renders
- Optimized content display
- Memory efficient

## Implementation Details

### Screen Width Calculation
```typescript
const { width } = useWindowDimensions();
```
- Automatically adapts to screen width
- Maintains responsive layout
- Ensures proper paging

### Index Tracking
```typescript
const lastIndexRef = useRef<number>(0);
```
- Prevents redundant updates
- Maintains scroll state
- Efficient change detection

## Notes

- Requires unique IDs for screens
- Supports any React Node as content
- Forward ref pattern for external control
- No vertical scrolling support
- Bounce effect disabled by default
- Scroll indicators hidden
- Full width utilization
- Smooth page transitions
- Memory efficient rendering
- TypeScript support included 