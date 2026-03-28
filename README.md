# Mecha-Pay Pricing Table

[![npm version](https://img.shields.io/npm/v/mecha-pay.svg)](https://www.npmjs.com/package/mecha-pay)
[![npm downloads](https://img.shields.io/npm/dm/mecha-pay.svg)](https://www.npmjs.com/package/mecha-pay)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue.svg)](https://www.typescriptlang.org/)
[![License: ISC](https://img.shields.io/badge/License-ISC-yellow.svg)](https://opensource.org/licenses/ISC)

A beautiful, responsive React component for displaying Mecha-Pay pricing plans with full TypeScript support and flexible styling options.

## ✨ Features

- 🎨 Beautiful gradient design with smooth animations
- 📱 Fully responsive across all devices
- ⚡ **Zero configuration** - just 3 required props!
- 🔄 Automatic loading and error states
- 🔗 Auto-generated payment links
- 💎 **Full TypeScript support** with complete type definitions
- ⚙️ **Framework agnostic** - works with Next.js, CRA, Vite, etc.
- 🎯 **Flexible styling** with styleConfig prop (v2.0+)
- ♿ Accessible and keyboard-friendly
- 🔧 Easy to customize and extend

## 🆕 What's New in v2.0.0

- ✅ **Flexible Styling System**: New `styleConfig` prop for customizing width, height, and styles
- ✅ **Production Ready**: Updated base URL to `https://mecha-pay.vercel.app/`
- ✅ **Enhanced TypeScript**: Added `StyleConfig` interface with full type safety
- ✅ **Better Developer Experience**: Inline styles support with intelligent merging
- ✅ **Backward Compatible**: All existing code works without changes

## 📦 Installation

```bash
npm install mecha-pay
```

Or with yarn:

```bash
yarn add mecha-pay
```

## 🚀 Quick Start

Simply provide three required props: `apiKey`, `planId`, and `userId`. That's it!

### JavaScript

```jsx
import React from 'react';
import { PricingTable } from 'mecha-pay';

const App = () => {
  return (
    <PricingTable 
      apiKey="mp_live_your_api_key_here"
      planId="0xefdc..."
      userId="user_12345"
    />
  );
};

export default App;
```

### TypeScript

```tsx
import React from 'react';
import { PricingTable } from 'mecha-pay';

const App: React.FC = () => {
  return (
    <PricingTable 
      apiKey="mp_live_your_api_key_here"
      planId="0xefdc..."
      userId="user_12345"
    />
  );
};

export default App;
```

## 📚 Usage Examples

### With Error Handling

```jsx
<PricingTable 
  apiKey="mp_live_your_api_key_here"
  planId="0xefdc..."
  userId="user_12345"
  onError={(error) => {
    console.error('Failed to load plan:', error);
    // Handle error (e.g., show notification to user)
  }}
/>
```

### Next.js App Router

```jsx
'use client';

import { PricingTable } from 'mecha-pay';
import { useUser } from '@/hooks/useAuth';

export default function PricingPage() {
  const { userId } = useUser();

  return (
    <PricingTable 
      apiKey={process.env.NEXT_PUBLIC_MECHAPAY_API_KEY}
      planId="0xefdc..."
      userId={userId}
    />
  );
}
```

### Next.js Pages Router

```jsx
import { PricingTable } from 'mecha-pay';

export default function PricingPage({ userId }) {
  return (
    <PricingTable 
      apiKey={process.env.NEXT_PUBLIC_MECHAPAY_API_KEY}
      planId="0xefdc..."
      userId={userId}
    />
  );
}
```

## 🎨 Custom Styling (v2.0+)

### Complete Custom Styling

```jsx
import { PricingTable } from 'mecha-pay';

const App = () => {
  const styleConfig = {
    width: '400px',
    height: 'auto',
    containerStyle: {
      padding: '3rem',
      backgroundColor: '#f9f9f9',
      borderRadius: '10px'
    },
    cardStyle: {
      background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      borderRadius: '20px',
      boxShadow: '0 15px 35px rgba(0, 0, 0, 0.3)'
    },
    buttonStyle: {
      background: '#4CAF50',
      color: 'white',
      borderRadius: '25px',
      padding: '1.2rem',
      fontSize: '1.2rem',
      fontWeight: 'bold'
    }
  };

  return (
    <PricingTable 
      apiKey="mp_live_your_api_key_here"
      planId="0xefdc..."
      userId="user_12345"
      styleConfig={styleConfig}
    />
  );
};
```

### Quick Styling Examples

**Custom Card Size:**
```jsx
<PricingTable 
  apiKey="mp_live_xxx"
  planId="0xefdc..."
  userId="user_12345"
  styleConfig={{ width: '400px', height: '600px' }}
/>
```

**Custom Card Background:**
```jsx
<PricingTable 
  apiKey="mp_live_xxx"
  planId="0xefdc..."
  userId="user_12345"
  styleConfig={{
    cardStyle: {
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    }
  }}
/>
```

**Custom Button Style:**
```jsx
<PricingTable 
  apiKey="mp_live_xxx"
  planId="0xefdc..."
  userId="user_12345"
  styleConfig={{
    buttonStyle: {
      background: '#ff6b6b',
      borderRadius: '30px',
      fontSize: '1.2rem'
    }
  }}
/>
```

**Dark Theme Example:**
```jsx
<PricingTable 
  apiKey="mp_live_xxx"
  planId="0xefdc..."
  userId="user_12345"
  styleConfig={{
    containerStyle: {
      backgroundColor: '#1a1a2e'
    },
    cardStyle: {
      background: 'linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)',
      border: '1px solid rgba(255, 255, 255, 0.1)'
    },
    buttonStyle: {
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    }
  }}
/>
```

## 🔧 How It Works

1. **Provide 3 Required Props:**
   - `apiKey` - Your Mecha-Pay API key
   - `planId` - The plan ID to display
   - `userId` - Current user's ID

2. **Component Automatically:**
   - Fetches plan details from `https://mecha-pay.vercel.app/api/v1/plans/{planId}`
   - Displays pricing card with features
   - Generates payment link: `https://mecha-pay.vercel.app/pay/{planId}?userId={userId}&successUrl={currentURL}`

3. **User Clicks "Subscribe Now":**
   - Redirected to: `https://mecha-pay.vercel.app/pay/0xefdc...?userId=user_12345&successUrl=https://yoursite.com`

## 📖 API Reference

### Component Props

#### Required Props

| Prop | Type | Description |
|------|------|-------------|
| `apiKey` | `string` | Your Mecha-Pay API key (e.g., `"mp_live_..."`) |
| `planId` | `string` | The plan ID to fetch and display (e.g., `"0xefdc..."`) |
| `userId` | `string` | User ID for payment link generation |

#### Optional Props

| Prop | Type | Description |
|------|------|-------------|
| `onError` | `(error: Error) => void` | Callback function triggered when an error occurs |
| `styleConfig` | `StyleConfig` | Custom styling configuration object (v2.0+) |

### StyleConfig Interface

```typescript
interface StyleConfig {
  /** Card width (default: '350px') */
  width?: string;
  
  /** Card height (default: 'auto') */
  height?: string;
  
  /** Custom styles for the outer container */
  containerStyle?: React.CSSProperties;
  
  /** Custom styles for the pricing card */
  cardStyle?: React.CSSProperties;
  
  /** Custom styles for the subscribe button */
  buttonStyle?: React.CSSProperties;
}
```

### TypeScript Types

```typescript
interface Feature {
  title: string;
  description?: string;
}

interface PlanMetadata {
  name: string;
  description: string;
  features: Feature[];
}

interface Plan {
  planId: string;
  price: string;        // Price in wei (smallest unit)
  duration: string;     // Duration in seconds
  metadata: PlanMetadata;
}

interface PricingTableProps {
  apiKey: string;
  planId: string;
  userId: string;
  onError?: (error: Error) => void;
  styleConfig?: StyleConfig;
}
```

## 🌐 API Response Structure

The component fetches from `https://mecha-pay.vercel.app/api/v1/plans/{planId}` and expects this response:

```json
{
  "planId": "0xefdc...",
  "price": "5000000000000000000",
  "duration": "2592000",
  "metadata": {
    "name": "Pro Plan",
    "description": "Perfect for growing businesses",
    "features": [
      {
        "title": "Advanced Analytics",
        "description": "Full dashboard access with real-time data"
      },
      {
        "title": "Priority Support",
        "description": "24/7 dedicated support team"
      },
      {
        "title": "Custom Integrations",
        "description": "API access and webhooks"
      }
    ]
  },
  "activeSubscribers": []  // Optional, not used by component
}
```

### Price Formatting

- The component automatically converts `price` from wei to a readable format
- Example: `"5000000000000000000"` wei → `$5.00` USD
- Assumes 18 decimal places (standard for most tokens)

### Duration Formatting

- Duration is provided in seconds
- Component automatically formats to human-readable format:
  - `86400` → "1 day"
  - `2592000` → "1 month"
  - `7776000` → "3 months"

## 🎨 CSS Class Names

If you prefer to override styles with CSS instead of using `styleConfig`, here are the available class names:

```css
.pricing-table-container  /* Outer container */
.pricing-card             /* Main pricing card */
.pricing-header           /* Header section */
.pricing-title            /* Plan name */
.pricing-description      /* Plan description */
.pricing-price            /* Price section */
.price-amount             /* Price value */
.price-duration           /* Duration text */
.pricing-features         /* Features section */
.features-title           /* "Features" heading */
.features-list            /* Features list */
.feature-item             /* Individual feature */
.feature-icon             /* Checkmark icon */
.feature-content          /* Feature text wrapper */
.feature-title            /* Feature title */
.feature-description      /* Feature description */
.pricing-button           /* Subscribe button */
.pricing-loading          /* Loading state */
.pricing-error            /* Error state */
.pricing-empty            /* Empty state */
```

### CSS Override Example

```css
/* my-custom-styles.css */

.pricing-card {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%) !important;
  max-width: 400px !important;
}

.pricing-button {
  background: #4CAF50 !important;
  font-size: 1.2rem !important;
}

.feature-item:hover {
  background: rgba(255, 255, 255, 0.2) !important;
}
```

Then import it after the component:

```jsx
import { PricingTable } from 'mecha-pay';
import './my-custom-styles.css';
```

## 🛠️ Advanced Usage

### Multiple Pricing Cards

Display multiple plans side-by-side:

```jsx
import { PricingTable } from 'mecha-pay';

const PricingPage = () => {
  const plans = [
    { id: '0xabc...', name: 'Basic' },
    { id: '0xdef...', name: 'Pro' },
    { id: '0xghi...', name: 'Enterprise' }
  ];

  return (
    <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
      {plans.map(plan => (
        <PricingTable
          key={plan.id}
          apiKey="mp_live_xxx"
          planId={plan.id}
          userId="user_12345"
        />
      ))}
    </div>
  );
};
```

### Conditional Styling

Apply different styles based on plan type:

```jsx
const PricingPage = () => {
  const isPremium = true;

  const styleConfig = isPremium ? {
    cardStyle: {
      background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      border: '3px solid gold'
    },
    buttonStyle: {
      background: 'gold',
      color: '#000'
    }
  } : {};

  return (
    <PricingTable
      apiKey="mp_live_xxx"
      planId="0xefdc..."
      userId="user_12345"
      styleConfig={styleConfig}
    />
  );
};
```

### With Custom Error UI

```jsx
import { PricingTable } from 'mecha-pay';
import { useState } from 'react';

const PricingPage = () => {
  const [error, setError] = useState(null);

  return (
    <>
      {error && (
        <div className="custom-error-banner">
          <p>Failed to load pricing: {error.message}</p>
          <button onClick={() => window.location.reload()}>
            Retry
          </button>
        </div>
      )}
      
      <PricingTable
        apiKey="mp_live_xxx"
        planId="0xefdc..."
        userId="user_12345"
        onError={setError}
      />
    </>
  );
};
```

## 🔒 API Functions

The package also exports API functions for direct use:

### `getPlan(apiKey, planId, baseURL?)`

Fetch a single plan:

```javascript
import { getPlan } from 'mecha-pay';

const plan = await getPlan(
  'mp_live_xxx',
  '0xefdc...',
  'https://mecha-pay.vercel.app/'  // Optional, uses default
);

console.log(plan.metadata.name);
```

### `getPlans(apiKey, baseURL?)`

Fetch all plans:

```javascript
import { getPlans } from 'mecha-pay';

const plans = await getPlans(
  'mp_live_xxx',
  'https://mecha-pay.vercel.app/'  // Optional, uses default
);

plans.forEach(plan => {
  console.log(plan.metadata.name);
});
```

## 🐛 Troubleshooting

### Component not displaying

1. Check that you've provided all required props
2. Verify your API key is valid
3. Check browser console for errors
4. Ensure the plan ID exists in your Mecha-Pay account

### Styling not applying

1. If using CSS overrides, add `!important` or increase specificity
2. If using `styleConfig`, ensure you're passing a valid object
3. Check that React.CSSProperties types are correct (TypeScript)

### API errors

```jsx
<PricingTable
  apiKey="mp_live_xxx"
  planId="0xefdc..."
  userId="user_12345"
  onError={(error) => {
    console.error('Error details:', error);
    // Common errors:
    // - 401: Invalid API key
    // - 404: Plan not found
    // - Network error: Check internet connection
  }}
/>
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

ISC License - see the [LICENSE](LICENSE) file for details.

## 🔗 Links

- [npm Package](https://www.npmjs.com/package/mecha-pay)
- [GitHub Repository](https://github.com/Frank2006x/Mecha-pay)
- [Report Issues](https://github.com/Frank2006x/Mecha-pay/issues)

## 📝 Changelog

### v2.0.0 (Latest)
- ✅ Added flexible `styleConfig` prop for custom styling
- ✅ Updated base URL to production (`https://mecha-pay.vercel.app/`)
- ✅ Enhanced TypeScript definitions with `StyleConfig` interface
- ✅ Improved documentation and examples
- ✅ Backward compatible with v1.x

### v1.0.0
- 🎉 Initial release
- ✅ Basic pricing table component
- ✅ TypeScript support
- ✅ Automatic API integration

---

Made with ❤️ by the Mecha-Pay team
