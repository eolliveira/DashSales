import { styled } from 'styled-components';
import { BaseCard } from '../../../Style';
import { Container, Icon, Label, Value, Wapper } from './style';

type SalesSummaryCardProps = {
  label: string;
  value: number;
  icon: React.ReactNode;
};

export function SalesSummaryCard({ label, value, icon }: SalesSummaryCardProps) {
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
