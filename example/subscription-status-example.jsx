import React from 'react';
import { PricingTable, checkSubscriptionStatus } from 'mecha-pay';

/**
 * Example 1: Basic usage with automatic subscription check
 * The component automatically checks subscription status and shows appropriate UI
 */
export const BasicExample = () => {
  return (
    <PricingTable
      apiKey="mp_live_xxx"
      planId="0x2d5f..."
      userId="user_id_001"
      onError={(error) => console.error('Error:', error)}
    />
  );
};

/**
 * Example 2: Manual subscription status check
 * Check subscription status programmatically before rendering
 */
export const ManualCheckExample = () => {
  const [status, setStatus] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const checkStatus = async () => {
      try {
        const result = await checkSubscriptionStatus(
          'mp_live_xxx',
          '0x2d5f...',
          'user_id_001'
        );
        setStatus(result);
        setLoading(false);
      } catch (error) {
        console.error('Failed to check status:', error);
        setLoading(false);
      }
    };

    checkStatus();
  }, []);

  if (loading) {
    return <div>Checking subscription status...</div>;
  }

  return (
    <div>
      <h2>Subscription Status</h2>
      <p>Active: {status.active ? 'Yes' : 'No'}</p>
      <p>Status: {status.status}</p>
      {status.remainingTime && (
        <p>Remaining Time: {Math.floor(status.remainingTime / 86400)} days</p>
      )}
      
      <PricingTable
        apiKey="mp_live_xxx"
        planId="0x2d5f..."
        userId="user_id_001"
      />
    </div>
  );
};

/**
 * Example 3: Conditional rendering based on subscription
 */
export const ConditionalRenderExample = () => {
  const [isSubscribed, setIsSubscribed] = React.useState(false);

  React.useEffect(() => {
    checkSubscriptionStatus('mp_live_xxx', '0x2d5f...', 'user_id_001')
      .then(status => setIsSubscribed(status.active))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      {isSubscribed ? (
        <div>
          <h2>Welcome Back!</h2>
          <p>Your subscription is active.</p>
          {/* Show subscriber-only content */}
        </div>
      ) : (
        <div>
          <h2>Subscribe to Get Started</h2>
          <PricingTable
            apiKey="mp_live_xxx"
            planId="0x2d5f..."
            userId="user_id_001"
          />
        </div>
      )}
    </div>
  );
};

/**
 * Example 4: Multiple plans with subscription checks
 */
export const MultiplePlansExample = () => {
  const plans = [
    { id: '0x2d5f...', name: 'Basic' },
    { id: '0x3e6g...', name: 'Pro' },
    { id: '0x4f7h...', name: 'Enterprise' }
  ];

  return (
    <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
      {plans.map(plan => (
        <PricingTable
          key={plan.id}
          apiKey="mp_live_xxx"
          planId={plan.id}
          userId="user_id_001"
        />
      ))}
    </div>
  );
};

/**
 * Example 5: With custom error handling for subscription check
 */
export const CustomErrorHandlingExample = () => {
  const [error, setError] = React.useState(null);

  return (
    <>
      {error && (
        <div className="error-banner">
          <p>⚠️ {error.message}</p>
          <button onClick={() => window.location.reload()}>
            Retry
          </button>
        </div>
      )}
      
      <PricingTable
        apiKey="mp_live_xxx"
        planId="0x2d5f..."
        userId="user_id_001"
        onError={setError}
      />
    </>
  );
};

/**
 * Example 6: TypeScript usage
 */
export const TypeScriptExample: React.FC = () => {
  const [status, setStatus] = React.useState<{
    active: boolean;
    status: string;
    remainingTime?: number;
  } | null>(null);

  React.useEffect(() => {
    const fetchStatus = async () => {
      try {
        const result = await checkSubscriptionStatus(
          'mp_live_xxx',
          '0x2d5f...',
          'user_id_001'
        );
        setStatus(result);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchStatus();
  }, []);

  return (
    <PricingTable
      apiKey="mp_live_xxx"
      planId="0x2d5f..."
      userId="user_id_001"
      onError={(error: Error) => console.error(error)}
    />
  );
};
