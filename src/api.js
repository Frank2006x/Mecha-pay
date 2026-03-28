import axios from 'axios';

/**
 * Fetches a plan from the Mecha-Pay API
 * @param {string} apiKey - Your Mecha-Pay API key (e.g., "mp_live_...")
 * @param {string} planId - The plan ID to fetch (e.g., "0xefdc...")
 * @param {string} baseURL - Optional base URL (defaults to https://mecha-pay.vercel.app)
 * @returns {Promise<Object>} The plan data
 */
export const getPlan = async (apiKey, planId, baseURL = 'https://mecha-pay.vercel.app') => {
  try {
    const response = await axios.get(`${baseURL}/api/v1/plans/${planId}`, {
      headers: {
        'x-api-key': apiKey,
        'Content-Type': 'application/json'
      }
    });
    
    return response.data;
  } catch (error) {
    if (error.response) {
      // Server responded with error status
      throw new Error(`API Error: ${error.response.status} - ${error.response.data.message || error.response.statusText}`);
    } else if (error.request) {
      // Request made but no response received
      throw new Error('Network Error: No response from server');
    } else {
      // Something else happened
      throw new Error(`Request Error: ${error.message}`);
    }
  }
};

/**
 * Fetches all plans from the Mecha-Pay API
 * @param {string} apiKey - Your Mecha-Pay API key (e.g., "mp_live_...")
 * @param {string} baseURL - Optional base URL (defaults to https://mecha-pay.vercel.app)
 * @returns {Promise<Array>} Array of plans
 */
export const getPlans = async (apiKey, baseURL = 'https://mecha-pay.vercel.app') => {
  try {
    const response = await axios.get(`${baseURL}/api/v1/plans`, {
      headers: {
        'x-api-key': apiKey,
        'Content-Type': 'application/json'
      }
    });
    
    return response.data;
  } catch (error) {
    if (error.response) {
      throw new Error(`API Error: ${error.response.status} - ${error.response.data.message || error.response.statusText}`);
    } else if (error.request) {
      throw new Error('Network Error: No response from server');
    } else {
      throw new Error(`Request Error: ${error.message}`);
    }
  }
};

/**
 * Checks if a user is subscribed to a plan
 * @param {string} apiKey - Your Mecha-Pay API key (e.g., "mp_live_...")
 * @param {string} planId - The plan ID to check (e.g., "0xefdc...")
 * @param {string} userId - The user/buyer ID to check
 * @param {string} baseURL - Optional base URL (defaults to https://mecha-pay.vercel.app)
 * @returns {Promise<Object>} Subscription status data with { active, status, buyer, planId, subscriber?, remainingTime? }
 */
export const checkSubscriptionStatus = async (apiKey, planId, userId, baseURL = 'https://mecha-pay.vercel.app') => {
  try {
    const response = await axios.get(`${baseURL}/v1/status`, {
      params: {
        planId: planId,
        buyer: userId
      },
      headers: {
        'x-api-key': apiKey,
        'Content-Type': 'application/json'
      }
    });
    
    return response.data;
  } catch (error) {
    if (error.response) {
      throw new Error(`API Error: ${error.response.status} - ${error.response.data.message || error.response.statusText}`);
    } else if (error.request) {
      throw new Error('Network Error: No response from server');
    } else {
      throw new Error(`Request Error: ${error.message}`);
    }
  }
};

export default getPlan;
