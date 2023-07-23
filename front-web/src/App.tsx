import styled from 'styled-components';
import './App.css';
import { Filter } from './components/filter';
import { Header } from './components/header';
import { SileByDate } from './components/saleByDate';

export default function App() {
  return (
    <>
      <Header />
      <Wapper>
        <Filter />
        <SileByDate />
      </Wapper>
    </>
  );
}

const Wapper = styled.div`
  padding: 30px;
`;
