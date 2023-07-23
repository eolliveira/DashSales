import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
`;

export const HeaderContent = styled.div``;

export const DataContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;

  @media (min-width: 764px) {
    flex-direction: row;
    align-items: end;
    justify-content: space-between;
  }
`;

export const TotalContent = styled.div`
  margin-top: 30px;
`;

export const GraphicsContent = styled.div`
  max-width: 920px;
  margin-top: 20px;
  width: 90%;
`;

export const Title = styled.div`
  color: var(--light-color);
  font-weight: 700;
  font-size: 24px;
`;

export const Total = styled.h3`
  color: var(--light-color);
  font-weight: 700;
  font-size: 36px;
`;

export const Subtitle = styled.h4`
  color: var(--grey-light-100-color);
  max-width: 250px;
  font-weight: 400;
  margin-top: 3px;
  font-size: 18px;
`;

export const Subtitle2 = styled.p`
  color: var(--green-color);
  font-weight: 400;
  font-size: 18px;
`;
