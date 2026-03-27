import React from 'react';
import './PricingTable.css';

const PricingTable = ({ plans }) => {
  const formatPrice = (price) => {
    // Convert from wei to a more readable format (assuming 18 decimals)
    const formatted = (parseInt(price) / 1e18).toFixed(2);
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

  return (
    <div className="pricing-table-container">
      {plans.map((plan) => (
        <div key={plan.planId} className="pricing-card">
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

          <button className="pricing-button">
            Subscribe Now
          </button>
        </div>
      ))}
    </div>
  );
};

export default PricingTable;
