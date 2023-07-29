import { BaseCard } from '../../../Style';
import { Container, Icon, Label, Value, Wapper } from './style';

type SalesSummaryCardComponentProps = {
  label: string;
  value: number | string;
  icon: React.ReactNode;
};

export function SalesSummaryCardComponent({ label, value, icon }: SalesSummaryCardComponentProps) {
  return (
    <Wapper>
      <BaseCard>
        <Container>
          <Icon>{icon}</Icon>
          <Value>{value}</Value>
          <Label>{label}</Label>
        </Container>
      </BaseCard>
    </Wapper>
  );
}
