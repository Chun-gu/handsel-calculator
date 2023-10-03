import { useCallback, useState } from 'react';
import { styled } from 'styled-components';

import { InputDisplay, Keypad, ResultDisplay } from '@/components';
import calculate from '@/utils/calculate';
import keyClassfier from '@/utils/keyClassifier';

export default function HandselCalculator() {
  const [inputs, setInputs] = useState<string[]>([]);
  const [result, setResult] = useState<number | string>(0);

  const onClickKey = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      const value = e.currentTarget.dataset.value as string;
      const lastIndex = inputs.length - 1;
      const lastInputValue = inputs[lastIndex];

      // 현재 입력값이 AC 또는 C일 때
      if (keyClassfier.isClear(value)) {
        if (inputs.length === 0) return;

        if (value === 'C') {
          if (lastInputValue.length === 1) {
            setInputs((prev) => prev.slice(0, lastIndex));
            return;
          }

          const lastStringRemoved = lastInputValue?.slice(0, -1);
          setInputs((prev) => [...prev.slice(0, lastIndex), lastStringRemoved]);
          return;
        }

        if (value === 'AC') {
          setInputs([]);
          setResult(0);
          return;
        }
      }

      // 현재 입력값이 연산자일 때
      if (keyClassfier.isOperator(value)) {
        if (inputs.length === 0) return;

        // 현재 입력값과 마지막 입력값이 "+, *, /"일 때
        if (
          keyClassfier.isOperatorButNotEqual(value) &&
          keyClassfier.isOperatorButNotEqual(lastInputValue)
        ) {
          setInputs((prev) => [...prev.slice(0, lastIndex), value]);
          return;
        }

        // 현재 입력값이 "+, *, /" 연산자이고 마지막 입력값이 숫자일 때
        if (
          keyClassfier.isOperatorButNotEqual(value) &&
          Number.isFinite(Number(lastInputValue))
        ) {
          setInputs((prev) => [...prev, value]);
          return;
        }

        // 현재 입력값이 "="이고 마지막 입력값이 "+, *, /"일 때
        if (value === '=') {
          if (keyClassfier.isOperatorButNotEqual(lastInputValue)) {
            alert('숫자를 입력해 주세요.');
            return;
          }
        }

        // 현재 입력값이 "="이고 마지막 입력값이 숫자일 때
        if (value === '=' && Number.isFinite(Number(lastInputValue))) {
          const result = calculate(inputs);
          if (Number.isNaN(result)) {
            setResult('숫자 아님');
          } else if (!Number.isFinite(result)) {
            setResult('숫자 아님');
          } else if (Math.floor(result).toString().length > 10) {
            setResult('Infinity');
          } else setResult(Math.floor(result));
          return;
        }
      }

      // 현재 입력값이 숫자일 때
      if (keyClassfier.isNumber(value)) {
        if (inputs.length === 0) {
          setInputs([value]);
          return;
        }

        // 마지막 입력값이 숫자일 때
        if (Number.isFinite(Number(lastInputValue))) {
          setInputs((prev) => [
            ...prev.slice(0, lastIndex),
            lastInputValue + value,
          ]);
          return;
        }

        // 마지막 입력값이 연산자일 때
        if (keyClassfier.isOperator(lastInputValue)) {
          setInputs((prev) => [...prev, value]);
          return;
        }
      }
    },
    [inputs],
  );

  return (
    <Container>
      <InputDisplay inputs={inputs} />
      <SubContainer>
        <ResultDisplay result={result} />
        <Keypad onClickKey={onClickKey} />
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
