import { styled } from 'styled-components';

type Props = {
  inputs: string[];
};

export default function InputDisplay({ inputs }: Props) {
  return (
    <Container>
      <ul>
        {inputs.map((input, index) => (
          <li key={`${input}-${index}`}>
            <Input defaultValue={input} />
          </li>
        ))}
      </ul>
    </Container>
  );
}

const Container = styled.div`
  flex-grow: 1;
  min-height: 2rem;
  background-color: ${({ theme }) => theme.color.slate3};
  overflow: hidden;
  position: relative;

  & > ul {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    overflow-y: scroll;
    padding: 10px 20px;
  }
`;

const Input = styled.input`
  display: block;
  width: 100%;
  border: none;
  background-color: transparent;
  text-align: end;
`;
