# TextInput Component

A customizable text input component for React Native applications with icon support and dark mode compatibility.

## Overview

The TextInput component is a wrapper around React Native's TextInput that provides additional styling, icon support, error states, and dark mode compatibility. It's designed to provide a consistent look and feel across the application.

## Props

| Prop           | Type                | Default  | Description |
|----------------|---------------------|----------|-------------|
| placeholder    | string             | -        | Placeholder text for the input |
| keyboardType   | KeyboardType       | 'default'| Type of keyboard to display |
| autoCapitalize | 'none' \| 'sentences' \| 'words' \| 'characters' | 'none' | Auto-capitalization behavior |
| icon           | MaterialIcons name | -        | Icon to display on the left side |
| secureTextEntry| boolean           | false    | Whether to hide the input text |
| error          | boolean           | false    | Whether to show error state |
| onChangeText   | (text: string) => void | -   | Callback when text changes |
| onBlur         | () => void        | -        | Callback when input loses focus |
| value          | string            | -        | Current value of the input |
| postFix        | string            | -        | Text to display after the input |
| onPress        | () => void        | -        | Callback when input is pressed |
| editable       | boolean           | true     | Whether the input is editable |

## Features

- Material Icons support
- Error state styling
- Dark mode support
- Custom keyboard types
- Secure text entry option
- Post-fix text support
- Auto-capitalization options
- Customizable placeholder color
- Border styling with error states

## Usage

```tsx
import TextInput from '@components/TextInput';

// Basic usage
<TextInput 
  placeholder="Enter text"
  onChangeText={(text) => console.log(text)}
/>

// With icon and error state
<TextInput 
  placeholder="Email"
  icon="email"
  error={true}
  keyboardType="email-address"
/>

// Password input
<TextInput 
  placeholder="Password"
  icon="lock"
  secureTextEntry={true}
/>

// With postfix
<TextInput 
  placeholder="Weight"
  keyboardType="numeric"
  postFix="kg"
/>
```

## Styling

The component uses the following Tailwind CSS classes:
- Container: `flex-row items-center rounded-xl border border-gray-300 px-4 dark:border-gray-400`
- Input: `flex-1 py-4 color-black dark:text-white`

### Theme Variations
- Light mode: Gray borders with black text
- Dark mode: Darker borders with white text
- Error state: Red borders (different shades for light/dark mode)
- Icon colors adapt to theme

## Notes

- Automatically adapts keyboard appearance to match system theme
- Error states are visually indicated through border color changes
- Icons are positioned on the left side of the input
- Post-fix text is non-editable and positioned on the right
- Full width by default with consistent padding
- Supports all standard React Native TextInput props 