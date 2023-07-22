import styled from 'styled-components';
import './App.css';
import { Filter } from './components/filter';
import { Header } from './components/header';

export default function App() {
  return (
    <>
      <Header />
      <Wapper>
        <Filter />
      </Wapper>
    </>
  );
}

const Wapper = styled.div`
  padding: 30px;
`;
