import { styled } from 'styled-components';

export function Header() {
  return (
    <Container>
      <Title className="main-header-title">DashSales</Title>
    </Container>
  );
}

const Container = styled.header`
  display: flex;
  align-items: center;
  height: 80px;
  background-color: var(--primary-color);
`;

const Title = styled.h1`
  margin-left: 30px;
`;
