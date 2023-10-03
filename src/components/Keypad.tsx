import { styled } from 'styled-components';

export default function Keypad() {
  return (
    <Grid>
      <Number>1</Number>
      <Number>2</Number>
      <Number>3</Number>
      <Operator>+</Operator>
      <Number>4</Number>
      <Number>5</Number>
      <Number>6</Number>
      <Operator>*</Operator>
      <Number>7</Number>
      <Number>8</Number>
      <Number>9</Number>
      <Operator>/</Operator>
      <Clear>AC</Clear>
      <Clear>C</Clear>
      <Number>0</Number>
      <Operator>=</Operator>
    </Grid>
  );
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  grid-gap: 8px;
  aspect-ratio: 1/1;
  width: 100%;
  max-width: 280px;
`;

const Number = styled.button`
  background-color: ${({ theme }) => theme.color.slate3};
  &:hover {
    background-color: ${({ theme }) => theme.color.slate5};
  }
`;

const Operator = styled.button`
  background-color: ${({ theme }) => theme.color.yellow5};
  &:hover {
    background-color: ${({ theme }) => theme.color.yellow7};
  }
`;

const Clear = styled.button`
  background-color: ${({ theme }) => theme.color.red5};
  &:hover {
    background-color: ${({ theme }) => theme.color.red7};
  }
`;
