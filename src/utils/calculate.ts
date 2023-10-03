export default function calculate(arr: string[]) {
  let result = parseInt(arr[0]);

  for (let i = 1; i < arr.length; i += 2) {
    const operator = arr[i];
    const operand = parseInt(arr[i + 1]);

    if (operator === '+') {
      result += operand;
    } else if (operator === '*') {
      result *= operand;
    } else if (operator === '/') {
      result /= operand;
    }
  }

  return result;
}
