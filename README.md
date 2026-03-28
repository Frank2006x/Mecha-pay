# 🚀 Mecha-Pay React SDK

[![npm version](https://img.shields.io/npm/v/mecha-pay.svg)](https://www.npmjs.com/package/mecha-pay)
[![npm downloads](https://img.shields.io/npm/dm/mecha-pay.svg)](https://www.npmjs.com/package/mecha-pay)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue.svg)](https://www.typescriptlang.org/)
[![License: ISC](https://img.shields.io/badge/License-ISC-yellow.svg)](https://opensource.org/licenses/ISC)

A beautiful, responsive React component library for Web3 subscription payments. Display stunning pricing tables, manage subscriptions, and gate premium content with just a few lines of code.

## 🌟 Why Mecha-Pay?

- **⚡ 3-Minute Integration**: Get started with just 3 props - no complex setup
- **🎨 Production-Ready UI**: Beautiful designs out-of-the-box, fully customizable
- **🔐 Secure Payments**: Built-in Web3 payment processing - no payment logic needed
- **📊 Subscription Management**: Built-in subscription status checking and verification
- **🛡️ TypeScript First**: Full type safety and IntelliSense support
- **🚀 Framework Agnostic**: Works with Next.js, CRA, Vite, Remix, and more

## 📋 Table of Contents

- [Features](#-features)
- [What's New](#-whats-new-in-v211)
- [Installation](#-installation)
- [Quick Start](#-quick-start)
- [Usage Examples](#-usage-examples)
- [Custom Styling](#-custom-styling-v20)
- [Subscription Status Checking](#-subscription-status-checking)
- [API Reference](#-api-reference)
- [API Functions](#-api-functions)
- [Troubleshooting](#-troubleshooting)
- [Changelog](#-changelog)

## ✨ Features

- 🎨 Beautiful gradient design with smooth animations
- 📱 Fully responsive across all devices
- ⚡ **Zero configuration** - just 3 required props!
- 🔄 Automatic loading and error states
- 🔗 Auto-generated payment links
- 💎 **Full TypeScript support** with complete type definitions
- ⚙️ **Framework agnostic** - works with Next.js, CRA, Vite, etc.
- 🎯 **Flexible styling** with styleConfig prop (v2.0+)
- 🔍 **Subscription checker** - check user subscription status (v2.1+)
- ♿ Accessible and keyboard-friendly
- 🔧 Easy to customize and extend

## 🆕 What's New in v2.1.1

- 🐛 **Bug Fixes**: Fixed API endpoint URL in `checkSubscriptionStatus` function
- 🛡️ **Enhanced Error Handling**: Graceful degradation when subscription check fails
- 🎯 **Improved Resilience**: Pricing table now displays even if subscription verification has temporary issues
- ✅ **Better User Experience**: Component remains functional during API downtimes

### Previous Releases

<details>
<summary>v2.1.0 - Subscription Status Checker</summary>

- ✅ **Subscription Status Checker**: New `checkSubscriptionStatus` API function
- ✅ **Content Gating**: Programmatic subscription verification
- ✅ **Real-time Status**: Check active subscriptions and remaining time
- ✅ **Full TypeScript Support**: Complete type definitions
- ✅ **Backward Compatible**: All existing code works without changes
</details>

<details>
<summary>v2.0.0 - Flexible Styling System</summary>

- ✅ **Flexible Styling System**: New `styleConfig` prop for customization
- ✅ **Production Ready**: Updated base URL to production environment
- ✅ **Enhanced TypeScript**: Added `StyleConfig` interface with full type safety
- ✅ **Better Developer Experience**: Inline styles with intelligent merging
</details>

## 🔄 Migration Guide

### Upgrading from v2.1.0 to v2.1.1

**No breaking changes!** This is a bug fix release. Simply update your package:

```bash
npm update mecha-pay
```

**What changed:**
- Fixed API endpoint in `checkSubscriptionStatus` (now correctly calls `/api/v1/status`)
- Improved error handling in `PricingTable` component
- Component now gracefully handles subscription verification failures

**Action required:** None - all existing code works without modifications.

### Upgrading from v2.0.x to v2.1.x

**No breaking changes!** The new `checkSubscriptionStatus` function is additive. Update with:

```bash
npm update mecha-pay
```

**New features available:**
```javascript
import { checkSubscriptionStatus } from 'mecha-pay';

const status = await checkSubscriptionStatus(apiKey, planId, userId);
console.log(status.active); // true/false
```

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

## 🎯 Common Use Cases

### 1. Simple Pricing Page
Display a single pricing plan - perfect for SaaS products with one tier.

### 2. Multiple Tier Pricing
Show multiple plans side-by-side for comparison (Basic, Pro, Enterprise).

### 3. Gated Content
Check subscription status to lock/unlock premium features in your app.

### 4. Subscription Dashboard
Display active subscriptions with remaining time and renewal options.

### 5. Upgrade Prompts
Show pricing tables to non-subscribers when they try to access premium features.

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

interface SubscriptionStatus {
  active: boolean;          // Whether subscription is currently active
  status: string;           // "active" | "expired" | "not_found"
  buyer: string;            // User/buyer ID
  planId: string;           // Plan ID that was checked
  subscriber?: string;      // Subscriber address (if active)
  remainingTime?: number;   // Seconds remaining (if active)
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

### Subscription Status Response

The `checkSubscriptionStatus` function calls `https://mecha-pay.vercel.app/api/v1/status` and returns:

**Active Subscription:**
```json
{
  "active": true,
  "status": "ACTIVE",
  "buyer": "user_id_001",
  "planId": "0x2d5f...",
  "subscriber": "0xb292...",
  "remainingTime": 2585477
}
```

**Inactive/Expired Subscription:**
```json
{
  "active": false,
  "status": "not purchased",
  "buyer": "user_id_999",
  "planId": "0x2d5f..."
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

### Subscription Status Checking

**New in v2.1.0** - Verify user subscriptions programmatically:

#### Basic Subscription Check

```jsx
import { checkSubscriptionStatus } from 'mecha-pay';
import { useEffect, useState } from 'react';

const ProtectedContent = ({ userId }) => {
  const [hasAccess, setHasAccess] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const verify = async () => {
      try {
        const status = await checkSubscriptionStatus(
          'mp_live_xxx',
          '0xefdc...',
          userId
        );
        setHasAccess(status.active);
      } catch (error) {
        console.error('Verification failed:', error);
      } finally {
        setLoading(false);
      }
    };
    
    verify();
  }, [userId]);

  if (loading) return <div>Verifying subscription...</div>;
  
  return hasAccess ? (
    <div>🎉 Welcome to premium content!</div>
  ) : (
    <div>⚠️ Subscription required</div>
  );
};
```

#### Display Remaining Time

```jsx
import { checkSubscriptionStatus } from 'mecha-pay';

const SubscriptionInfo = ({ userId, planId }) => {
  const [status, setStatus] = useState(null);

  useEffect(() => {
    checkSubscriptionStatus('mp_live_xxx', planId, userId)
      .then(setStatus)
      .catch(console.error);
  }, [userId, planId]);

  if (!status || !status.active) {
    return <div>No active subscription</div>;
  }

  const daysLeft = Math.floor(status.remainingTime / 86400);
  const hoursLeft = Math.floor((status.remainingTime % 86400) / 3600);

  return (
    <div className="subscription-info">
      <p>✅ Subscription Active</p>
      <p>⏰ Time Remaining: {daysLeft} days, {hoursLeft} hours</p>
      <p>📋 Plan ID: {status.planId}</p>
    </div>
  );
};
```

#### Conditional Rendering with Pricing Table

```jsx
import { PricingTable, checkSubscriptionStatus } from 'mecha-pay';

const PremiumFeature = ({ userId }) => {
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    checkSubscriptionStatus('mp_live_xxx', '0xefdc...', userId)
      .then(status => {
        setIsSubscribed(status.active);
        setChecking(false);
      })
      .catch(err => {
        console.error(err);
        setChecking(false);
      });
  }, [userId]);

  if (checking) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {isSubscribed ? (
        <div className="premium-dashboard">
          <h1>Premium Dashboard</h1>
          <p>Access to exclusive features</p>
          {/* Your premium content here */}
        </div>
      ) : (
        <div className="upgrade-prompt">
          <h1>Unlock Premium Features</h1>
          <PricingTable
            apiKey="mp_live_xxx"
            planId="0xefdc..."
            userId={userId}
          />
        </div>
      )}
    </div>
  );
};
```

#### Multi-Plan Subscription Check

```jsx
import { checkSubscriptionStatus } from 'mecha-pay';

const MultiPlanAccess = ({ userId }) => {
  const [subscriptions, setSubscriptions] = useState({});
  const plans = ['0x1abc...', '0x2def...', '0x3ghi...'];

  useEffect(() => {
    const checkAll = async () => {
      const results = await Promise.all(
        plans.map(planId =>
          checkSubscriptionStatus('mp_live_xxx', planId, userId)
            .then(status => ({ planId, active: status.active }))
        )
      );
      
      const subsMap = {};
      results.forEach(result => {
        subsMap[result.planId] = result.active;
      });
      setSubscriptions(subsMap);
    };
    
    checkAll();
  }, [userId]);

  return (
    <div>
      <h2>Your Subscriptions</h2>
      {plans.map(planId => (
        <div key={planId}>
          Plan {planId}: {subscriptions[planId] ? '✅ Active' : '❌ Inactive'}
        </div>
      ))}
    </div>
  );
};
```

#### TypeScript Usage

```tsx
import { checkSubscriptionStatus, SubscriptionStatus } from 'mecha-pay';
import { useEffect, useState } from 'react';

const SubscriptionGuard: React.FC<{ userId: string; children: React.ReactNode }> = ({ 
  userId, 
  children 
}) => {
  const [status, setStatus] = useState<SubscriptionStatus | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const verify = async (): Promise<void> => {
      try {
        const result = await checkSubscriptionStatus(
          process.env.REACT_APP_MECHAPAY_API_KEY!,
          process.env.REACT_APP_PLAN_ID!,
          userId
        );
        setStatus(result);
      } catch (error) {
        console.error('Subscription check failed:', error);
      } finally {
        setLoading(false);
      }
    };

    verify();
  }, [userId]);

  if (loading) {
    return <div>Checking access...</div>;
  }

  if (!status?.active) {
    return <div>Access denied. Please subscribe.</div>;
  }

  return <>{children}</>;
};
```

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

### `checkSubscriptionStatus(apiKey, planId, userId, baseURL?)`

**New in v2.1.0** - Check if a user has an active subscription to a plan:

```javascript
import { checkSubscriptionStatus } from 'mecha-pay';

const status = await checkSubscriptionStatus(
  'mp_live_xxx',
  '0xefdc...',
  'user_12345',
  'https://mecha-pay.vercel.app/'  // Optional, uses default
);

console.log(status.active);         // true/false
console.log(status.status);         // "active" | "expired" | "not_found"
console.log(status.remainingTime);  // seconds remaining (if active)
```

**Response Structure:**

```typescript
interface SubscriptionStatus {
  active: boolean;          // Whether subscription is currently active
  status: string;           // "ACTIVE" | "not purchased" | "expired"
  buyer: string;            // User/buyer ID
  planId: string;           // Plan ID that was checked
  subscriber?: string;      // Subscriber wallet address (only if active)
  remainingTime?: number;   // Seconds remaining (only if active)
}
```

**Important Notes:**
- The `subscriber` field (wallet address) is only present when `active: true`
- The `remainingTime` field is only present when `active: true`
- Status values: `"ACTIVE"` when subscribed, `"not purchased"` when never subscribed, `"expired"` when subscription ended

**Use Cases:**

```javascript
// 1. Gate premium content
const status = await checkSubscriptionStatus('mp_live_xxx', '0xefdc...', userId);
if (status.active) {
  // Show premium content
} else {
  // Show pricing table or upgrade message
}

// 2. Display subscription info
if (status.active && status.remainingTime) {
  const daysLeft = Math.floor(status.remainingTime / 86400);
  console.log(`Subscription active for ${daysLeft} more days`);
}

// 3. Conditional rendering in React
const [isSubscribed, setIsSubscribed] = useState(false);

useEffect(() => {
  checkSubscriptionStatus('mp_live_xxx', planId, userId)
    .then(result => setIsSubscribed(result.active))
    .catch(err => console.error(err));
}, []);
```

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

### Subscription status check failing

```jsx
// Handle errors gracefully
try {
  const status = await checkSubscriptionStatus(apiKey, planId, userId);
  console.log('Status:', status);
} catch (error) {
  console.error('Check failed:', error.message);
  // Common errors:
  // - 401: Invalid API key
  // - 404: Plan or user not found
  // - Network error: Check internet connection
  // - CORS error: Ensure API endpoint allows your domain
}
```

**Common subscription check issues:**

1. **Returns `{ active: false, status: "not purchased" }`**
   - User has never subscribed to this plan
   - Check that planId and userId are correct
   - This is the expected response for non-subscribers

2. **Returns `{ active: false, status: "expired" }`**
   - Subscription existed but has expired
   - User needs to renew subscription

3. **401 Unauthorized**
   - API key is invalid or missing
   - Verify your API key starts with `mp_live_` or `mp_test_`
   - Check API key permissions in your Mecha-Pay dashboard

4. **404 Not Found**
   - Plan ID doesn't exist
   - Verify the planId is correct and the plan exists in your account

5. **Network errors**
   - Check internet connection
   - Verify API endpoint `https://mecha-pay.vercel.app` is accessible
   - Check for CORS issues in browser console
   - Component gracefully handles these errors by defaulting to non-subscribed state

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

## ❓ Frequently Asked Questions (FAQ)

### Q: Do I need to handle payment processing myself?
**A:** No! Mecha-Pay handles all payment processing. The component generates a payment link that redirects users to the secure Mecha-Pay checkout page.

### Q: What happens after a user pays?
**A:** Users are redirected back to your `successUrl` (defaults to current page). The subscription becomes active immediately and can be verified using `checkSubscriptionStatus`.

### Q: Can I customize the pricing table design?
**A:** Yes! Use the `styleConfig` prop to customize colors, sizes, and styles, or override CSS classes for complete control.

### Q: Does this work with Next.js App Router?
**A:** Yes! Just add `'use client'` at the top of your component. See the [Next.js examples](#nextjs-app-router) above.

### Q: How do I get my API key?
**A:** Sign up at [Mecha-Pay](https://mecha-pay.vercel.app), create an account, and generate your API key from the dashboard.

### Q: Can I test without real payments?
**A:** Yes! Use test API keys (starting with `mp_test_`) for development and testing.

### Q: Is TypeScript supported?
**A:** Fully! The package includes complete TypeScript definitions for all components and functions.

### Q: How do I gate content behind a subscription?
**A:** Use the `checkSubscriptionStatus` function to verify active subscriptions before rendering premium content. See [Subscription Status Checking](#-subscription-status-checking) examples.

### Q: What if the subscription check API fails?
**A:** The component gracefully handles failures. The pricing table will still display with a "Subscribe Now" button, defaulting to a non-subscribed state.

### Q: Can I display multiple plans on one page?
**A:** Yes! Render multiple `<PricingTable>` components with different `planId` props. See [Multiple Pricing Cards](#multiple-pricing-cards) example.

### Q: How are prices formatted?
**A:** Prices in wei are automatically converted to USD (assuming 18 decimals). Example: `5000000000000000000` wei = `$5.00`.

### Q: Can I use this in a React Native app?
**A:** No, this package is designed for web applications only. It uses web-specific APIs and browser navigation.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

### How to Contribute

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 💬 Support

Need help? Here's how to get support:

- **📖 Documentation**: Read through this README and the examples
- **🐛 Bug Reports**: [Open an issue](https://github.com/Frank2006x/Mecha-pay/issues) on GitHub
- **💡 Feature Requests**: [Open an issue](https://github.com/Frank2006x/Mecha-pay/issues) with the "enhancement" label
- **📧 Email**: Contact the Mecha-Pay team for enterprise support

## 📄 License

ISC License - see the [LICENSE](LICENSE) file for details.

## 🔗 Links

- 📦 [npm Package](https://www.npmjs.com/package/mecha-pay)
- 💻 [GitHub Repository](https://github.com/Frank2006x/Mecha-pay)
- 🐛 [Report Issues](https://github.com/Frank2006x/Mecha-pay/issues)
- 🌐 [Mecha-Pay Platform](https://mecha-pay.vercel.app)
- 📚 [API Documentation](https://mecha-pay.vercel.app/api/docs)

## 📝 Changelog

### v2.1.1 (Latest - Bug Fix Release)
- 🐛 **Critical Fix**: Corrected API endpoint URL in `checkSubscriptionStatus` from `/v1/status` to `/api/v1/status`
- 🛡️ **Improved Error Handling**: Separated plan fetching from subscription checking for better resilience
- ✅ **Graceful Degradation**: Component now displays pricing even if subscription verification fails
- 📝 **Enhanced Documentation**: Added response examples and better troubleshooting guide

### v2.1.0
- ✅ Added `checkSubscriptionStatus` API function for subscription verification
- ✅ Full TypeScript support for `SubscriptionStatus` interface
- ✅ Enable content gating based on active subscriptions
- ✅ Real-time subscription status with remaining time
- ✅ Comprehensive examples for subscription checking
- ✅ Enhanced error handling for subscription checks

### v2.0.0
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

<div align="center">

Made with ❤️ by the Mecha-Pay team

**[⬆ Back to Top](#-mecha-pay-react-sdk)**

</div>
