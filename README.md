# ARD Components

A collection of reusable React components built with TypeScript and modern CSS.

## Installation

```bash
npm install ard-components
```

## Usage

```tsx
import { Button, Input } from 'ard-components';

function App() {
  return (
    <div>
      <Button variant="primary" size="medium">
        Click me
      </Button>
      <Input 
        label="Email" 
        type="email" 
        placeholder="Enter your email"
        helperText="We'll never share your email"
      />
    </div>
  );
}
```

## Components

### Button

A customizable button component with multiple variants and sizes.

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `React.ReactNode` | - | The content of the button |
| `variant` | `'primary' \| 'secondary' \| 'outline' \| 'ghost'` | `'primary'` | The variant of the button |
| `size` | `'small' \| 'medium' \| 'large'` | `'medium'` | The size of the button |
| `disabled` | `boolean` | `false` | Whether the button is disabled |
| `loading` | `boolean` | `false` | Whether the button is in loading state |
| `type` | `'button' \| 'submit' \| 'reset'` | `'button'` | The type of the button |
| `onClick` | `(event: React.MouseEvent<HTMLButtonElement>) => void` | - | Click handler |
| `className` | `string` | - | Additional CSS class name |
| `style` | `React.CSSProperties` | - | Additional styles |

#### Examples

```tsx
// Basic usage
<Button>Click me</Button>

// With variant and size
<Button variant="outline" size="large">
  Large Outline Button
</Button>

// With loading state
<Button loading={isLoading} onClick={handleSubmit}>
  Submit
</Button>

// Disabled button
<Button disabled>Cannot click</Button>
```

### Input

A flexible input component with various types, states, and styling options.

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `type` | `'text' \| 'email' \| 'password' \| 'number' \| 'tel' \| 'url' \| 'search'` | `'text'` | The type of the input |
| `placeholder` | `string` | - | The placeholder text |
| `value` | `string` | - | The value of the input |
| `defaultValue` | `string` | - | The default value of the input |
| `disabled` | `boolean` | `false` | Whether the input is disabled |
| `required` | `boolean` | `false` | Whether the input is required |
| `readOnly` | `boolean` | `false` | Whether the input is read-only |
| `size` | `'small' \| 'medium' \| 'large'` | `'medium'` | The size of the input |
| `variant` | `'default' \| 'filled' \| 'outlined'` | `'default'` | The variant of the input |
| `state` | `'default' \| 'error' \| 'success' \| 'warning'` | `'default'` | The state of the input |
| `label` | `string` | - | The label for the input |
| `helperText` | `string` | - | The helper text |
| `errorMessage` | `string` | - | The error message |
| `successMessage` | `string` | - | The success message |
| `warningMessage` | `string` | - | The warning message |
| `onChange` | `(event: React.ChangeEvent<HTMLInputElement>) => void` | - | Change handler |
| `onBlur` | `(event: React.FocusEvent<HTMLInputElement>) => void` | - | Blur handler |
| `onFocus` | `(event: React.FocusEvent<HTMLInputElement>) => void` | - | Focus handler |
| `className` | `string` | - | Additional CSS class name |
| `style` | `React.CSSProperties` | - | Additional styles |

#### Examples

```tsx
// Basic usage
<Input placeholder="Enter text" />

// With label and helper text
<Input 
  label="Email" 
  type="email" 
  placeholder="Enter your email"
  helperText="We'll never share your email"
/>

// With error state
<Input 
  label="Password" 
  type="password" 
  state="error"
  errorMessage="Password is required"
/>

// Different variants
<Input variant="filled" placeholder="Filled input" />
<Input variant="outlined" placeholder="Outlined input" />

// Different sizes
<Input size="small" placeholder="Small input" />
<Input size="large" placeholder="Large input" />
```

## Development

### Prerequisites

- Node.js 16+ 
- npm or yarn

### Setup

1. Clone the repository:
```bash
git clone git@github.com:ardsilva/ard-components.git
cd ard-components
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

4. Build the package:
```bash
npm run build
```

### Publishing

1. Build the package:
```bash
npm run build
```

2. Publish to npm:
```bash
npm publish
```

## License

MIT

## Repository

[GitHub Repository](https://github.com/ardsilva/ard-components)