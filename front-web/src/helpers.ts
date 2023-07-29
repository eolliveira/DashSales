import { SalesByPaymentMethod, SalesByStore } from './types';

export const buildSalesByStore = (sales: SalesByStore[]) => {
  const labels = sales.map((s) => s.storeName);
  const series = sales.map((s) => s.sum);

  return {
    labels,
    series
  };
};

export const buildSalesByPayment = (sales: SalesByPaymentMethod[]) => {
  const labels = sales.map((s) => s.description);
  const series = sales.map((s) => s.sum);

  return {
    labels,
    series
  };
};
