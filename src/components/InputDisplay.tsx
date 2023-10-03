import { styled } from 'styled-components';

export default function InputDisplay() {
  return (
    <Container>
      <ul>
        <li>
          <Input type="text" value={203} />
        </li>
        <li>
          <Input type="text" value={203} />
        </li>
        <li>
          <Input type="text" value={203} />
        </li>
        <li>
          <Input type="text" value={203} />
        </li>
        <li>
          <Input type="text" value={203} />
        </li>
        <li>
          <Input type="text" value={203} />
        </li>
        <li>
          <Input type="text" value={203} />
        </li>
        <li>
          <Input type="text" value={203} />
        </li>
        <li>
          <Input type="text" value={203} />
        </li>
        <li>
          <Input type="text" value={203} />
        </li>
        <li>
          <Input type="text" value={203} />
        </li>
        <li>
          <Input type="text" value={203} />
        </li>
        <li>
          <Input type="text" value={203} />
        </li>
        <li>
          <Input type="text" value={203} />
        </li>
        <li>
          <Input type="text" value={203} />
        </li>
        <li>
          <Input type="text" value={203} />
        </li>
        <li>
          <Input type="text" value={203} />
        </li>
        <li>
          <Input type="text" value={203} />
        </li>
        <li>
          <Input type="text" value={203} />
        </li>
        <li>
          <Input type="text" value={203} />
        </li>
        <li>
          <Input type="text" value={203} />
        </li>
        <li>
          <Input type="text" value={203} />
        </li>
        <li>
          <Input type="text" value={203} />
        </li>
        <li>
          <Input type="text" value={203} />
        </li>
        <li>
          <Input type="text" value={203} />
        </li>
        <li>
          <Input type="text" value={203} />
        </li>
        <li>
          <Input type="text" value={203} />
        </li>
        <li>
          <Input type="text" value={203} />
        </li>
        <li>
          <Input type="text" value={203} />
        </li>
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
