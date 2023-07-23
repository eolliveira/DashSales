import styled from 'styled-components';
import { BaseCard } from '../../Style';
import { Portuguese } from 'flatpickr/dist/l10n/pt';
import Flatpickr from 'react-flatpickr';
import flatpickrLib from 'flatpickr';
import 'flatpickr/dist/themes/material_green.css';
flatpickrLib.localize(Portuguese);
import './style.css';

export function Filter() {
  const onChangeDate = (dates: Date[]) => {
    console.log(dates);
  };

  return (
    <Container>
      <BaseCard>
        <Content>
          <Flatpickr
            className="input-style"
            placeholder="Selecione um periodo"
            onChange={onChangeDate}
            options={{
              mode: 'range',
              dateFormat: 'd/m/Y',
              showMonths: 2
            }}
          />
          <select className="input-style">
            <option value={''}>Selecione um gênero</option>
            <option value={'MALE'}>Masculino</option>
            <option value={'FEMALE'}>Feminino</option>
            <option value={'OTHER'}>Outro</option>
          </select>
        </Content>
      </BaseCard>
    </Container>
  );
}

const Container = styled.div`
  margin-bottom: 30px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;

  @media (min-width: 710px) {
    flex-direction: row;
  }
`;
