import { styled } from 'styled-components';

import { InputDisplay, Keypad, ResultDisplay } from '@/components';

export default function HandselCalculator() {
  return (
    <Container>
      <InputDisplay />
      <SubContainer>
        <ResultDisplay />
        <Keypad />
      </SubContainer>
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  flex-direction: row;
  height: 100%;
  gap: 20px;
  & > div {
    width: 50%;
  }

  ${({ theme }) => theme.media.mobile`
    flex-direction: column;
    align-items: center;
    gap: 10px;
    & > div {
      width: 100%;
      max-width: 280px;
    }
  `}
`;

const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  ${({ theme }) => theme.media.mobile`
  `}
`;
