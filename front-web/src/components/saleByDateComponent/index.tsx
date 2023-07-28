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
import { useEffect, useMemo, useState } from 'react';
import { ChartSeriesData, FilterData, SalesByDate } from '../../types';
import { buildFilterParams, makeRequest } from '../../utils/request';
import { formatDate, formatPrice } from '../../utils/formatters';

type SalesByDateProps = {
  filterData?: FilterData;
};

export function SalesByDateComponent({ filterData }: SalesByDateProps) {
  const [salesByDate, setSalesByDate] = useState<ChartSeriesData[]>([]);
  const [totalSum, setTotalSum] = useState(0);

  //só cria renderiza um filtro se for auterado a dependencia(cache)
  const params = useMemo(() => buildFilterParams(filterData), [filterData]);

  useEffect(() => {
    makeRequest
      .get<SalesByDate[]>(`/sales/by-date`, { params })
      .then((response) => {
        const newSeriesData = buildChartsSeries(response.data);
        setSalesByDate(newSeriesData);
        const sumSeriesData = sumSalesByDate(response.data);
        setTotalSum(sumSeriesData);
      })
      .catch((error) => console.log('Erro ao buscar vendas por data: ' + error));
  }, [filterData, params]);

  return (
    <BaseCard>
      <Container>
        <HeaderContent>
          <Title>Evolução das vendas</Title>
          {filterData?.dates && (
            <Subtitle>
              {formatDate(filterData?.dates?.[0]) + ' até ' + formatDate(filterData?.dates?.[0])}
            </Subtitle>
          )}
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
