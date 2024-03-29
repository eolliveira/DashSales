import ReactApexChart from 'react-apexcharts';
import { buildPieChartConfig } from './helpers';
import { BaseCard } from '../../Style';
import { Container, Wapper } from './style';

type PieChartCardProps = {
  labels?: string[];
  name: string;
  series?: number[];
};

export function PieChartCard({ labels = [], name, series = [] }: PieChartCardProps) {
  return (
    <Container>
      <BaseCard>
        <Wapper>
          <ReactApexChart
            options={buildPieChartConfig(labels, name)}
            series={series}
            type="donut"
            width={400}
            height={400}
          />
        </Wapper>
      </BaseCard>
    </Container>
  );
}
