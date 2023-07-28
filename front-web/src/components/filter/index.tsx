import React, { useState } from 'react';
import styled from 'styled-components';
import { BaseCard } from '../../Style';
import { Portuguese } from 'flatpickr/dist/l10n/pt';
import Flatpickr from 'react-flatpickr';
import flatpickrLib from 'flatpickr';
import { FilterData, Gender } from '../../types';
import 'flatpickr/dist/themes/material_green.css';
flatpickrLib.localize(Portuguese);
import './style.css';

type FilterProps = {
  onFilterChange: (filter: FilterData) => void;
};

export function Filter({ onFilterChange }: FilterProps) {
  const [dates, setDates] = useState<Date[]>();
  const [gender, setGender] = useState<Gender>();

  const onChangeDate = (dates: Date[]) => {
    if (dates.length === 2) {
      setDates(dates);
      onFilterChange({ dates, gender });
    }
  };

  const onChangeGender = (event: React.ChangeEvent<HTMLSelectElement>) => {
    //toda a alteração de estado é feita de forma assincrona
    setGender(event.target.value as Gender);
    onFilterChange({ dates, gender: event.target.value as Gender });
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
          <select className="input-style" value={gender} onChange={onChangeGender}>
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
