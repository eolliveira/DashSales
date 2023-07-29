import { useEffect, useMemo, useState } from 'react';
import { ReactComponent as AvatarIcon } from '../../assets/avatar-icon.svg';
import { ReactComponent as BarChartIcon } from '../../assets/bar-chart-icon.svg';
import { ReactComponent as DoneIcon } from '../../assets/done-icon.svg';
import { ReactComponent as SyncIcon } from '../../assets/sync-icon.svg';
import { FilterData, SalesSummaryData } from '../../types';
import { SalesSummaryCardComponent } from './salesSummaryCard';
import { Container } from './style';
import { buildFilterParams, makeRequest } from '../../utils/request';

type SalesSummaryProps = {
  filterData?: FilterData;
};

const initialValue = {
  min: 0,
  max: 0,
  avg: 0,
  count: 0
};

export function SalesSummary({ filterData }: SalesSummaryProps) {
  const [summary, setSummary] = useState<SalesSummaryData>(initialValue);
  //só cria renderiza um filtro se for auterado a dependencia(cache)
  const params = useMemo(() => buildFilterParams(filterData), [filterData]);

  useEffect(() => {
    makeRequest
      .get<SalesSummaryData>(`/sales/summary`, { params })
      .then((response) => {
        setSummary(response.data);
      })
      .catch((error) => console.log('Erro ao buscar vendas por data: ' + error));
  }, [params]);

  return (
    <Container>
      <SalesSummaryCardComponent
        label="Média"
        value={summary?.avg?.toFixed(2)}
        icon={<DoneIcon />}
      />
      <SalesSummaryCardComponent label="Quantidade" value={summary?.count} icon={<SyncIcon />} />
      <SalesSummaryCardComponent label="Miníma" value={summary?.min} icon={<BarChartIcon />} />
      <SalesSummaryCardComponent label="Máxima" value={summary?.max} icon={<AvatarIcon />} />
    </Container>
  );
}
