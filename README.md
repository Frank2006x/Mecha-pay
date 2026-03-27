# Mecha-Pay Pricing Table

A beautiful, responsive React component for displaying pricing plans with Web3 integration. **TypeScript supported!**

## Installation

```bash
npm install mecha-pay
```

## Usage

### JavaScript

```jsx
import React from 'react';
import { PricingTable } from 'mecha-pay';

const App = () => {
  const plans = [
    {
      planId: "0xefdc...",
      price: "5000000",
      duration: "2592000",
      metadata: {
        name: "Pro Merchant",
        description: "Premium subscription plan",
        features: [
          { title: "Analytics", description: "Full dashboard access" },
          { title: "24/7 Support", description: "Priority customer service" },
          { title: "API Access", description: "Full REST API integration" }
        ]
      }
    }
  ];

  return <PricingTable plans={plans} />;
};

export default App;
```

### TypeScript

```tsx
import React from 'react';
import { PricingTable, Plan } from 'mecha-pay';

const App: React.FC = () => {
  const plans: Plan[] = [
    {
      planId: "0xefdc...",
      price: "5000000",
      duration: "2592000",
      metadata: {
        name: "Pro Merchant",
        description: "Premium subscription plan",
        features: [
          { title: "Analytics", description: "Full dashboard access" },
          { title: "24/7 Support", description: "Priority customer service" },
          { title: "API Access", description: "Full REST API integration" }
        ]
      }
    }
  ];

  return <PricingTable plans={plans} />;
};

export default App;
```

## API

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
  planId: string;        // Unique identifier (e.g., contract address)
  price: string;         // Price in wei (as string)
  duration: string;      // Duration in seconds (as string)
  metadata: PlanMetadata;
}

interface PricingTableProps {
  plans: Plan[];
}
```

### Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| plans | `Plan[]` | Yes | Array of plan objects |

## Features

- 🎨 Beautiful gradient design
- 📱 Fully responsive
- ⚡ Lightweight with no extra dependencies
- 🔗 Web3-ready (supports contract addresses and wei values)
- 💎 **TypeScript support** with full type definitions
- ♿ Accessible
- 🎯 Easy to customize

## Customization

The component uses CSS modules that can be overridden. Import your custom styles after the component:

```jsx
import { PricingTable } from 'mecha-pay';
import './my-custom-styles.css';
```

## License

ISC
