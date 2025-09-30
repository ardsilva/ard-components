# Usage Guide

## Installation

```bash
npm install ard-components
```

## Basic Usage

```tsx
import React from 'react';
import { Button, Input } from 'ard-components';

function App() {
  return (
    <div>
      <Button variant="primary">Click me</Button>
      <Input label="Email" placeholder="Enter your email" />
    </div>
  );
}

export default App;
```

## Important Notes

1. **React Version**: Make sure you have React 16.8.0 or higher installed in your project.

2. **CSS Import**: The components come with built-in CSS. If you're using a bundler that doesn't automatically include CSS, you may need to import it:

```tsx
import 'ard-components/dist/style.css';
```

3. **TypeScript**: The package includes full TypeScript definitions.

## Troubleshooting

### "Cannot read properties of undefined (reading 'ReactCurrentDispatcher')" Error

This error occurs when there are multiple React instances. To fix:

1. **Check your package.json**: Ensure React is not duplicated in dependencies
2. **Clear node_modules**: Delete `node_modules` and `package-lock.json`, then run `npm install`
3. **Check for React conflicts**: Make sure no other packages are bundling React

### Common Solutions

```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install

# Check for React duplicates
npm ls react
```

## Examples

### Button Variants

```tsx
<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
```

### Input States

```tsx
<Input label="Normal" placeholder="Normal input" />
<Input label="Error" state="error" errorMessage="This field is required" />
<Input label="Success" state="success" successMessage="Looks good!" />
<Input label="Warning" state="warning" warningMessage="Please verify" />
```

### Loading States

```tsx
const [loading, setLoading] = useState(false);

<Button loading={loading} onClick={() => setLoading(true)}>
  {loading ? 'Loading...' : 'Submit'}
</Button>
```
