import './App.css';
import styled from 'styled-components';
import { Filter } from './components/filter';
import { Header } from './components/header';
import { SileByDate } from './components/saleByDate';
import { SalesSummary } from './components/salesSummary';
import { PieChartCard } from './components/pieChartCard';
import SalesTable from './components/salesTable';

export default function App() {
  return (
    <>
      <Header />
      <Wapper>
        <Filter />
        <SileByDate />
        <SalesContainer>
          <SalesSummary />
          <PieChartCard
            name="Lojas"
            labels={['Campo Mourão', 'Araruna', 'Maringá']}
            series={[10, 50, 40]}
          />
          <PieChartCard
            name="Pagamento"
            labels={['Crédito', 'Débito', 'Dinheiro']}
            series={[60, 20, 20]}
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
