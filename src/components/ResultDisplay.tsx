import { styled } from 'styled-components';

export default function ResultDisplay() {
  return (
    <Container>
      <span>9,999,999,999</span>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  max-width: 280px;
  background-color: ${({ theme }) => theme.color.slate3};
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  padding: 10px;
`;
