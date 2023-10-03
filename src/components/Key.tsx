import { styled } from 'styled-components';

import findKeyColor from '@/utils/findKeyColor';

type Props = {
  value: string;
  onClickKey: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export default function Key({ value, onClickKey }: Props) {
  const [$bgColor, $hoverBgColor] = findKeyColor(value);

  return (
    <KeyButton
      onClick={onClickKey}
      data-value={value}
      $bgColor={$bgColor}
      $hoverBgColor={$hoverBgColor}>
      {value}
    </KeyButton>
  );
}

const KeyButton = styled.button<{ $bgColor: string; $hoverBgColor: string }>`
  background-color: ${({ $bgColor }) => $bgColor};
  &:hover {
    background-color: ${({ $hoverBgColor }) => $hoverBgColor};
  }
`;
