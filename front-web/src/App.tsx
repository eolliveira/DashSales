import './App.css';
import styled from 'styled-components';
import SalesTable from './components/salesTable';
import { Filter } from './components/filter';
import { Header } from './components/header';
import { SalesByDateComponent } from './components/saleByDateComponent';
import { SalesSummary } from './components/salesSummary';
import { PieChartCard } from './components/pieChartCard';
import { FilterData, PieChartConfig, SalesByPaymentMethod, SalesByStore } from './types';
import { useEffect, useMemo, useState } from 'react';
import { buildFilterParams, makeRequest } from './utils/request';
import { buildSalesByPayment, buildSalesByStore } from './helpers';

export default function App() {
  const [filterData, setFilterData] = useState<FilterData>();
  const [salesByStore, setSalesByStore] = useState<PieChartConfig>();
  const [salesByPayment, setSalesByPayment] = useState<PieChartConfig>();
  const params = useMemo(() => buildFilterParams(filterData), [filterData]);

  const onFilterChange = (filterData: FilterData) => setFilterData(filterData);

  useEffect(() => {
    makeRequest
      .get<SalesByStore[]>(`/sales/by-store`, { params })
      .then((response) => {
        const newBuildSalesByStore = buildSalesByStore(response.data);
        setSalesByStore(newBuildSalesByStore);
      })
      .catch((error) => console.log('Erro ao buscar vendas por loja: ' + error));
  }, [filterData, params]);

  useEffect(() => {
    makeRequest
      .get<SalesByPaymentMethod[]>(`/sales/by-payment-method`, { params })
      .then((response) => {
        const newBuildSalesByPayment = buildSalesByPayment(response.data);
        setSalesByPayment(newBuildSalesByPayment);
      })
      .catch((error) => console.log('Erro ao buscar vendas por tipo de pagamento: ' + error));
  }, [filterData, params]);

  return (
    <>
      <Header />
      <Wapper>
        <Filter onFilterChange={onFilterChange} />
        <SalesByDateComponent filterData={filterData} />
        <SalesContainer>
          <SalesSummary filterData={filterData} />
          <PieChartCard name="Lojas" labels={salesByStore?.labels} series={salesByStore?.series} />
          <PieChartCard
            name="Pagamento"
            labels={salesByPayment?.labels}
            series={salesByPayment?.series}
          />
        </SalesContainer>
        <SalesTable />
      </Wapper>
    </>
  );
}

const Wapper = styled.div`
  padding: 30px;
`;

const SalesContainer = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
`;
