import React, { useEffect, useState } from 'react';
import { getPlan, checkSubscriptionStatus } from './api';
import './PricingTable.css';

const BASE_URL = 'https://mecha-pay.vercel.app';

// Default styling configuration
const defaultStyleConfig = {
  width: '350px',
  height: 'auto',
  containerStyle: {},
  cardStyle: {},
  buttonStyle: {}
};

const PricingTable = ({ 
  apiKey, 
  planId, 
  userId, 
  onError,
  styleConfig = defaultStyleConfig 
}) => {
  const [plan, setPlan] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [subscriptionStatus, setSubscriptionStatus] = useState(null);
  const [checkingSubscription, setCheckingSubscription] = useState(true);

  // Merge user-provided style config with defaults
  const mergedConfig = {
    ...defaultStyleConfig,
    ...styleConfig,
    containerStyle: { ...defaultStyleConfig.containerStyle, ...styleConfig.containerStyle },
    cardStyle: { ...defaultStyleConfig.cardStyle, ...styleConfig.cardStyle },
    buttonStyle: { ...defaultStyleConfig.buttonStyle, ...styleConfig.buttonStyle }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Fetch plan data (required)
        const planData = await getPlan(apiKey, planId, BASE_URL);
        setPlan(planData);
        setLoading(false);
        
        // Fetch subscription status (optional - don't fail if this errors)
        try {
          const statusData = await checkSubscriptionStatus(apiKey, planId, userId, BASE_URL);
          setSubscriptionStatus(statusData);
        } catch (statusErr) {
          console.warn('Failed to check subscription status:', statusErr);
          // Set a default "not subscribed" state on error
          setSubscriptionStatus({ active: false, status: 'unknown', buyer: userId, planId });
        }
        setCheckingSubscription(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
        setCheckingSubscription(false);
        if (onError) {
          onError(err);
        }
      }
    };

    fetchData();
  }, [apiKey, planId, userId, onError]);

  const generatePaymentLink = () => {
    const currentURL = typeof window !== 'undefined' ? window.location.origin : '';
    const params = new URLSearchParams({
      userId: userId,
      successUrl: currentURL
    });
    return `${BASE_URL}/pay/${planId}?${params.toString()}`;
  };

  const formatPrice = (price) => {
    // Convert from wei to a more readable format (assuming 18 decimals)
    const formatted = (parseInt(price) / 1e6).toFixed(2);
    return `$${formatted}`;
  };

  const formatDuration = (seconds) => {
    const days = Math.floor(seconds / 86400);
    if (days >= 30) {
      const months = Math.floor(days / 30);
      return `${months} ${months === 1 ? 'month' : 'months'}`;
    }
    return `${days} ${days === 1 ? 'day' : 'days'}`;
  };

  const formatRemainingTime = (seconds) => {
    const days = Math.floor(seconds / 86400);
    const hours = Math.floor((seconds % 86400) / 3600);
    
    if (days > 0) {
      return `${days} ${days === 1 ? 'day' : 'days'}`;
    } else if (hours > 0) {
      return `${hours} ${hours === 1 ? 'hour' : 'hours'}`;
    } else {
      return 'Less than an hour';
    }
  };

  if (loading) {
    return (
      <div className="pricing-table-container" style={mergedConfig.containerStyle}>
        <div className="pricing-loading">Loading plan...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="pricing-table-container" style={mergedConfig.containerStyle}>
        <div className="pricing-error">
          <span className="error-icon">⚠️</span>
          <p className="error-message">{error}</p>
        </div>
      </div>
    );
  }

  if (!plan) {
    return (
      <div className="pricing-table-container" style={mergedConfig.containerStyle}>
        <div className="pricing-empty">No plan found</div>
      </div>
    );
  }

  return (
    <div className="pricing-table-container" style={mergedConfig.containerStyle}>
      <div 
        className="pricing-card" 
        style={{
          width: mergedConfig.width,
          height: mergedConfig.height,
          ...mergedConfig.cardStyle
        }}
      >
        <div className="pricing-header">
          <h2 className="pricing-title">{plan.metadata.name}</h2>
          <p className="pricing-description">{plan.metadata.description}</p>
        </div>
        
        <div className="pricing-price">
          <span className="price-amount">{formatPrice(plan.price)}</span>
          <span className="price-duration">/{formatDuration(plan.duration)}</span>
        </div>

        <div className="pricing-features">
          <h3 className="features-title">Features</h3>
          <ul className="features-list">
            {plan.metadata.features.map((feature, index) => (
              <li key={index} className="feature-item">
                <svg 
                  className="feature-icon" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M5 13l4 4L19 7" 
                  />
                </svg>
                <div className="feature-content">
                  <strong className="feature-title">{feature.title}</strong>
                  {feature.description && (
                    <p className="feature-description">{feature.description}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>

        {subscriptionStatus && subscriptionStatus.active ? (
          <div 
            className="pricing-button pricing-button-active"
            style={{
              ...mergedConfig.buttonStyle,
              cursor: 'default',
              opacity: 0.8
            }}
          >
            ✓ Active Subscription
            {subscriptionStatus.remainingTime && (
              <span style={{ display: 'block', fontSize: '0.9rem', marginTop: '0.5rem' }}>
                {formatRemainingTime(subscriptionStatus.remainingTime)} remaining
              </span>
            )}
          </div>
        ) : (
          <a 
            href={generatePaymentLink()} 
            className="pricing-button"
            style={mergedConfig.buttonStyle}
          >
            Subscribe Now
          </a>
        )}
      </div>
    </div>
  );
};

export default PricingTable;
