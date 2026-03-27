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

export interface PricingTableProps {
  plans: Plan[];
}

export const PricingTable: FC<PricingTableProps>;
export default PricingTable;
