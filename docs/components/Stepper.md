# Stepper Component

A horizontal step indicator component with active state highlighting and connecting lines.

## Overview

The Stepper component displays a sequence of steps with visual indicators for the current active step. It features dots connected by lines, with each dot containing text and supporting active/inactive states.

## Props

| Prop       | Type     | Default | Description |
|------------|----------|---------|-------------|
| steps      | string[] | -       | Array of step names to display |
| activeStep | number   | -       | Index of the currently active step |

## Features

- Horizontal step visualization
- Active step highlighting
- Connecting lines between steps
- Scale animation for active step
- Custom text for each step
- Responsive layout
- Consistent spacing
- Visual hierarchy through styling

## Usage

```tsx
import Stepper from '@components/Stepper';

const steps = ['Step 1', 'Step 2', 'Step 3'];

<Stepper 
  steps={steps}
  activeStep={1}
/>
```

## Components

### Dot Component
- Displays step name
- Handles active/inactive states
- Rounded shape
- Scale transform on active state
- Custom text styling per state

### Line Component
- Connects adjacent dots
- Consistent width and height
- Gray background color
- Hidden for last step

## Styling

### Container Styling
```typescript
{
  height: 50,
  width: "100%",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  paddingHorizontal: 16
}
```

### Dot Styling
- Active:
  - Background: #84cc16 (Lime green)
  - Scale: 1.1
  - Z-index: 10
  - Text color: white

- Inactive:
  - Background: #e5e5e5 (Gray)
  - Scale: 1
  - Text color: black

### Line Styling
- Height: 4px
- Width: 16px
- Color: #e5e5e5 (Gray)

### Text Styling
- Font size: 12px
- Centered alignment
- Color based on state

## Layout

### Main Container
- Full width
- Fixed height: 50px
- Horizontal layout
- Centered content
- Horizontal padding: 16px

### Step Container
- Horizontal layout
- Centered alignment
- Flexible spacing

### Dot Container
- Rounded corners (border-radius: 999)
- Horizontal padding: 16px
- Vertical padding: 4px
- Centered content

## Notes

- Uses React Native's StyleSheet for optimized styling
- Supports any number of steps
- Automatically adjusts spacing
- Last step doesn't show connecting line
- Active step has elevated appearance (z-index)
- Scale animation provides subtle emphasis
- Text remains readable in both states
- Consistent heights across all elements
- Maintains visual connection through lines 