import { FC } from 'react';

export interface Feature {
  title: string;
  description?: string;
}

export interface PlanMetadata {
  name: string;
  description: string;
  features: Feature[];
}

export interface Plan {
  planId: string;
  price: string;
  duration: string;
  metadata: PlanMetadata;
}

export interface StyleConfig {
  /** Width of the pricing card (default: '350px') */
  width?: string;
  /** Height of the pricing card (default: 'auto') */
  height?: string;
  /** Custom styles for the container div */
  containerStyle?: React.CSSProperties;
  /** Custom styles for the card div */
  cardStyle?: React.CSSProperties;
  /** Custom styles for the subscribe button */
  buttonStyle?: React.CSSProperties;
}

export interface PricingTableProps {
  /** Your Mecha-Pay API key (required) */
  apiKey: string;
  /** The plan ID to fetch and display (required) */
  planId: string;
  /** User ID for generating payment links (required) */
  userId: string;
  /** Optional error callback function */
  onError?: (error: Error) => void;
  /** Optional style configuration object */
  styleConfig?: StyleConfig;
}

export const PricingTable: FC<PricingTableProps>;
export default PricingTable;

// API Functions
export function getPlan(apiKey: string, planId: string, baseURL?: string): Promise<Plan>;
export function getPlans(apiKey: string, baseURL?: string): Promise<Plan[]>;
