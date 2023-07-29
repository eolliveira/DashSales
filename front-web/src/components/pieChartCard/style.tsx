import { styled } from 'styled-components';

export const Wapper = styled.div`
  padding-top: 30px;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
  width: 100%;

  @media (min-width: 1370px) {
    width: 30%;
  }
`;
