const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const operators = ['+', '*', '/', '='];
const operatorsExceptEqual = ['+', '*', '/'];
const clears = ['AC', 'C'];

const keyClassfier = {
  isNumber: (value: string) => numbers.includes(value),
  isOperator: (value: string) => operators.includes(value),
  isOperatorButNotEqual: (value: string) =>
    operatorsExceptEqual.includes(value),
  isClear: (value: string) => clears.includes(value),
};

export default keyClassfier;
