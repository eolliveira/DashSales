import { BaseCard } from '../../Style';
import ReactApexChart from 'react-apexcharts';
import { buildChartsSeries, chartOptions, sumSalesByDate } from './helpers';
import {
  Container,
  DataContent,
  GraphicsContent,
  HeaderContent,
  Subtitle,
  Subtitle2,
  Title,
  Total,
  TotalContent
} from './style';
import { useEffect, useState } from 'react';
import { ChartSeriesData, SalesByDate } from '../../types';
import { makeRequest } from '../../utils/request';
import { formatPrice } from '../../utils/formatters';

export function SileByDate() {
  const [salesByDate, setSalesByDate] = useState<ChartSeriesData[]>([]);
  const [totalSum, setTotalSum] = useState(0);

  useEffect(() => {
    makeRequest
      .get<SalesByDate[]>(`/sales/by-date?minDate=2017-01-01&maxDate=2017-01-31&gender=FEMALE`)
      .then((response) => {
        const newSeriesData = buildChartsSeries(response.data);
        setSalesByDate(newSeriesData);
        const sumSeriesData = sumSalesByDate(response.data);
        setTotalSum(sumSeriesData);
      })
      .catch((error) => console.log('Erro ao buscar vendas por data: ' + error));
  }, []);

  return (
    <BaseCard>
      <Container>
        <HeaderContent>
          <Title>Evolução das vendas</Title>
          <Subtitle>01/01/2017 a 31/07/2017</Subtitle>
        </HeaderContent>
        <DataContent>
          <TotalContent>
            <Total>{formatPrice(totalSum)}</Total>
            <Subtitle2>Vendas no período</Subtitle2>
            <Subtitle>O gráfico mostra as vendas em todas as lojas</Subtitle>
          </TotalContent>
          <GraphicsContent>
            <ReactApexChart
              options={chartOptions}
              series={[{ name: 'Solicitações', data: salesByDate }]}
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
