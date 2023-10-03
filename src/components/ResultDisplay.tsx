import { styled } from 'styled-components';

type Props = {
  result: number | string;
};

export default function ResultDisplay({ result }: Props) {
  return (
    <Container>
      <span>
        {typeof result === 'string' ? result : result.toLocaleString()}
      </span>
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
