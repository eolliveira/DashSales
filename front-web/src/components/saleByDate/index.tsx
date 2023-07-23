import styled from 'styled-components';
import { BaseCard } from '../../Style';
import ReactApexChart from 'react-apexcharts';
import { chartOptions } from './helpers';

export function SileByDate() {
  const initialValues = [
    {
      x: '2023-07-01',
      y: 54
    },
    {
      x: '2023-07-02',
      y: 66
    },
    {
      x: '2023-07-03',
      y: 66
    },
    {
      x: '2023-07-04',
      y: 66
    },
    {
      x: '2023-07-05',
      y: 66
    },
    {
      x: '2023-07-06',
      y: 66
    },
    {
      x: '2023-07-07',
      y: 66
    },
    {
      x: '2023-07-08',
      y: 66
    },
    {
      x: '2023-07-09',
      y: 66
    },
    {
      x: '2023-07-10',
      y: 66
    },
    {
      x: '2023-07-11',
      y: 66
    },
    {
      x: '2023-07-12',
      y: 66
    },
    {
      x: '2023-07-05',
      y: 66
    },
    {
      x: '2023-07-06',
      y: 2
    },
    {
      x: '2023-07-07',
      y: 4
    },
    {
      x: '2023-07-08',
      y: 66
    },
    {
      x: '2023-07-09',
      y: 66
    },
    {
      x: '2023-07-10',
      y: 6
    },
    {
      x: '2023-07-11',
      y: 7
    },
    {
      x: '2023-07-12',
      y: 5
    },
    {
      x: '2023-07-13',
      y: 10
    },
    {
      x: '2023-07-14',
      y: 20
    },
    {
      x: '2023-07-15',
      y: 66
    }
  ];

  return (
    <BaseCard>
      <Container>
        <HeaderContent>
          <Title>Evolução das vendas</Title>
          <Subtitle>01/01/2017 a 31/07/2017</Subtitle>
        </HeaderContent>
        <DataContent>
          <TotalContent>
            <Total>R$ 464.988,00</Total>
            <Subtitle2>Vendas no período</Subtitle2>
            <Subtitle>O gráfico mostra as vendas em todas as lojas</Subtitle>
          </TotalContent>
          <GraphicsContent>
            <ReactApexChart
              options={chartOptions}
              series={[{ name: 'Solicitações', data: initialValues }]}
              type="bar"
              width={'100%'}
              height={240}
            />
          </GraphicsContent>
        </DataContent>
      </Container>
    </BaseCard>
  );
}

const Container = styled.div`
  padding: 20px;
`;

const HeaderContent = styled.div``;

const DataContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;

  @media (min-width: 764px) {
    flex-direction: row;
    align-items: end;
    justify-content: space-between;
  }
`;

const TotalContent = styled.div`
  margin-top: 30px;
`;

const GraphicsContent = styled.div`
  max-width: 920px;
  margin-top: 20px;
  width: 90%;
`;

const Title = styled.div`
  color: var(--light-color);
  font-weight: 700;
  font-size: 24px;
`;

const Total = styled.h3`
  color: var(--light-color);
  font-weight: 700;
  font-size: 36px;
`;

const Subtitle = styled.h4`
  color: var(--grey-light-100-color);
  max-width: 250px;
  font-weight: 400;
  margin-top: 3px;
  font-size: 18px;
`;

const Subtitle2 = styled.p`
  color: var(--green-color);
  font-weight: 400;
  font-size: 18px;
`;