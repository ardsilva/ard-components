import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { Button, Input } from './index';

const Demo: React.FC = () => {
  const [inputValue, setInputValue] = useState('');
  const [loading, setLoading] = useState(false);

  const handleButtonClick = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <div style={{ padding: '40px', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '40px', color: '#1f2937' }}>
        ARD Components Demo
      </h1>
      
      <div style={{ display: 'grid', gap: '40px' }}>
        {/* Button Examples */}
        <section>
          <h2 style={{ marginBottom: '20px', color: '#374151' }}>Button Components</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '20px' }}>
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
          </div>
          
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '20px' }}>
            <Button size="small">Small</Button>
            <Button size="medium">Medium</Button>
            <Button size="large">Large</Button>
          </div>
          
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '20px' }}>
            <Button disabled>Disabled</Button>
            <Button loading={loading} onClick={handleButtonClick}>
              {loading ? 'Loading...' : 'Click to Load'}
            </Button>
          </div>
        </section>

        {/* Input Examples */}
        <section>
          <h2 style={{ marginBottom: '20px', color: '#374151' }}>Input Components</h2>
          
          <div style={{ display: 'grid', gap: '20px', marginBottom: '20px' }}>
            <Input
              label="Basic Input"
              placeholder="Enter some text..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            
            <Input
              label="Email Input"
              type="email"
              placeholder="Enter your email"
              helperText="We'll never share your email"
            />
            
            <Input
              label="Password Input"
              type="password"
              placeholder="Enter your password"
              required
            />
          </div>
          
          <div style={{ display: 'grid', gap: '20px', marginBottom: '20px' }}>
            <Input
              label="Small Input"
              size="small"
              placeholder="Small size"
            />
            
            <Input
              label="Large Input"
              size="large"
              placeholder="Large size"
            />
          </div>
          
          <div style={{ display: 'grid', gap: '20px', marginBottom: '20px' }}>
            <Input
              label="Filled Variant"
              variant="filled"
              placeholder="Filled style"
            />
            
            <Input
              label="Outlined Variant"
              variant="outlined"
              placeholder="Outlined style"
            />
          </div>
          
          <div style={{ display: 'grid', gap: '20px', marginBottom: '20px' }}>
            <Input
              label="Error State"
              state="error"
              errorMessage="This field is required"
              placeholder="Error state"
            />
            
            <Input
              label="Success State"
              state="success"
              successMessage="Great! This looks good"
              placeholder="Success state"
            />
            
            <Input
              label="Warning State"
              state="warning"
              warningMessage="Please double-check this"
              placeholder="Warning state"
            />
          </div>
          
          <div style={{ display: 'grid', gap: '20px' }}>
            <Input
              label="Disabled Input"
              disabled
              placeholder="This is disabled"
            />
            
            <Input
              label="Read Only Input"
              readOnly
              value="This is read-only"
            />
          </div>
        </section>
      </div>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')!).render(<Demo />);
