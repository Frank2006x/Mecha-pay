import React from 'react';
import PricingTable from 'mecha-pay';

/**
 * Example 1: Custom width and height
 */
export const CustomSizeExample = () => {
  const styleConfig = {
    width: '400px',
    height: '600px'
  };

  return (
    <PricingTable
      apiKey="mp_live_xxx"
      planId="0xefdc..."
      userId="user123"
      styleConfig={styleConfig}
    />
  );
};

/**
 * Example 2: Custom card styling
 */
export const CustomCardStyleExample = () => {
  const styleConfig = {
    width: '320px',
    cardStyle: {
      background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      borderRadius: '20px',
      boxShadow: '0 15px 35px rgba(0, 0, 0, 0.3)'
    }
  };

  return (
    <PricingTable
      apiKey="mp_live_xxx"
      planId="0xefdc..."
      userId="user123"
      styleConfig={styleConfig}
    />
  );
};

/**
 * Example 3: Custom button styling
 */
export const CustomButtonExample = () => {
  const styleConfig = {
    buttonStyle: {
      background: '#4CAF50',
      color: 'white',
      borderRadius: '25px',
      padding: '1.2rem',
      fontSize: '1.2rem',
      fontWeight: 'bold',
      border: '2px solid #45a049'
    }
  };

  return (
    <PricingTable
      apiKey="mp_live_xxx"
      planId="0xefdc..."
      userId="user123"
      styleConfig={styleConfig}
    />
  );
};

/**
 * Example 4: Custom container styling (for layout)
 */
export const CustomContainerExample = () => {
  const styleConfig = {
    containerStyle: {
      maxWidth: '800px',
      padding: '3rem',
      backgroundColor: '#f9f9f9'
    }
  };

  return (
    <PricingTable
      apiKey="mp_live_xxx"
      planId="0xefdc..."
      userId="user123"
      styleConfig={styleConfig}
    />
  );
};

/**
 * Example 5: Complete custom styling
 */
export const CompleteCustomExample = () => {
  const styleConfig = {
    width: '380px',
    height: 'auto',
    containerStyle: {
      padding: '2.5rem',
      backgroundColor: '#1a1a2e',
      borderRadius: '10px'
    },
    cardStyle: {
      background: 'linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)',
      borderRadius: '15px',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)'
    },
    buttonStyle: {
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white',
      borderRadius: '30px',
      padding: '1rem 2rem',
      fontSize: '1.1rem',
      fontWeight: '600',
      border: 'none',
      boxShadow: '0 5px 15px rgba(102, 126, 234, 0.4)',
      transition: 'all 0.3s ease'
    }
  };

  return (
    <PricingTable
      apiKey="mp_live_xxx"
      planId="0xefdc..."
      userId="user123"
      styleConfig={styleConfig}
    />
  );
};

/**
 * Example 6: Minimal styling override
 */
export const MinimalCustomExample = () => {
  const styleConfig = {
    width: '300px',
    cardStyle: {
      minWidth: 'unset' // Override the default min-width
    }
  };

  return (
    <PricingTable
      apiKey="mp_live_xxx"
      planId="0xefdc..."
      userId="user123"
      styleConfig={styleConfig}
    />
  );
};

/**
 * Example 7: Without custom styling (uses defaults)
 */
export const DefaultStylingExample = () => {
  return (
    <PricingTable
      apiKey="mp_live_xxx"
      planId="0xefdc..."
      userId="user123"
    />
  );
};
