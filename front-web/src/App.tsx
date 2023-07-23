import './App.css';
import styled from 'styled-components';
import { Filter } from './components/filter';
import { Header } from './components/header';
import { SileByDate } from './components/saleByDate';
import { SalesSummary } from './components/salesSummary';

export default function App() {
  return (
    <>
      <Header />
      <Wapper>
        <Filter />
        <SileByDate />
        <SalesContainer>
          <SalesSummary />
          <div>grafico 1</div>
          <div>grafico 2</div>
        </SalesContainer>
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
