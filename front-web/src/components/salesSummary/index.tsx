import { ReactComponent as AvatarIcon } from '../../assets/avatar-icon.svg';
import { ReactComponent as BarChartIcon } from '../../assets/bar-chart-icon.svg';
import { ReactComponent as DoneIcon } from '../../assets/done-icon.svg';
import { ReactComponent as SyncIcon } from '../../assets/sync-icon.svg';
import { SalesSummaryCard } from './salesSummaryCard';
import { Container } from './style';

export function SalesSummary() {
  return (
    <Container>
      <SalesSummaryCard label="Média" value={56125} icon={<DoneIcon />} />
      <SalesSummaryCard label="Quantidade" value={1741} icon={<SyncIcon />} />
      <SalesSummaryCard label="Miníma" value={45415} icon={<BarChartIcon />} />
      <SalesSummaryCard label="Máxima" value={631} icon={<AvatarIcon />} />
    </Container>
  );
}
