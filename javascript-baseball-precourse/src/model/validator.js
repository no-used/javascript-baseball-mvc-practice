import NUMBER from '../constants/number.js';

const isEveryNumberInRange = (value, minDigit, maxDigit) => {
  return [...value].every((num) => num >= minDigit && num <= maxDigit);
};

const isNotDuplicatedNum = (value) => {
  const valueSet = new Set(value);

  return value.length === valueSet.size;
};

export const isValiUserInput = (value) => {
  return (
    !Number.isNaN(Number(value)) &&
    isEveryNumberInRange(value, NUMBER.MIN_DIGIT, NUMBER.MAX_DIGIT) &&
    isNotDuplicatedNum(value)
  );
};
