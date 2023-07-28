import { useEffect, useMemo, useState } from 'react';
import { ReactComponent as AvatarIcon } from '../../assets/avatar-icon.svg';
import { ReactComponent as BarChartIcon } from '../../assets/bar-chart-icon.svg';
import { ReactComponent as DoneIcon } from '../../assets/done-icon.svg';
import { ReactComponent as SyncIcon } from '../../assets/sync-icon.svg';
import { FilterData, SalesSummaryData } from '../../types';
import { SalesSummaryCard } from './salesSummaryCard';
import { Container } from './style';
import { buildFilterParams, makeRequest } from '../../utils/request';

type SalesSummaryProps = {
  filterData?: FilterData;
};

export function SalesSummary({ filterData }: SalesSummaryProps) {
  const initialValue = {};

  const [salesSummary, setSalesSummary] = useState<SalesSummaryData>();
  //só cria renderiza um filtro se for auterado a dependencia(cache)
  const params = useMemo(() => buildFilterParams(filterData), [filterData]);

  useEffect(() => {
    makeRequest
      .get<SalesSummaryData>(`/sales/summary`, { params })
      .then((response) => {
        setSalesSummary(response.data);
      })
      .catch((error) => console.log('Erro ao buscar vendas por data: ' + error));
  }, [params]);

  return (
    <Container>
      <SalesSummaryCard label="Média" value={salesSummary?.avg.toFixed(2)} icon={<DoneIcon />} />
      <SalesSummaryCard label="Quantidade" value={salesSummary?.count} icon={<SyncIcon />} />
      <SalesSummaryCard label="Miníma" value={salesSummary?.min} icon={<BarChartIcon />} />
      <SalesSummaryCard label="Máxima" value={salesSummary?.max} icon={<AvatarIcon />} />
    </Container>
  );
}
