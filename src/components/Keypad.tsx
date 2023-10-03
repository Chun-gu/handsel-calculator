import { styled } from 'styled-components';

import Key from './Key';

type Props = {
  onClickKey: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export default function Keypad({ onClickKey }: Props) {
  return (
    <Grid>
      <Key value={'1'} onClickKey={onClickKey} />
      <Key value={'2'} onClickKey={onClickKey} />
      <Key value={'3'} onClickKey={onClickKey} />
      <Key value={'+'} onClickKey={onClickKey} />
      <Key value={'4'} onClickKey={onClickKey} />
      <Key value={'5'} onClickKey={onClickKey} />
      <Key value={'6'} onClickKey={onClickKey} />
      <Key value={'*'} onClickKey={onClickKey} />
      <Key value={'7'} onClickKey={onClickKey} />
      <Key value={'8'} onClickKey={onClickKey} />
      <Key value={'9'} onClickKey={onClickKey} />
      <Key value={'/'} onClickKey={onClickKey} />
      <Key value={'AC'} onClickKey={onClickKey} />
      <Key value={'C'} onClickKey={onClickKey} />
      <Key value={'0'} onClickKey={onClickKey} />
      <Key value={'='} onClickKey={onClickKey} />
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
