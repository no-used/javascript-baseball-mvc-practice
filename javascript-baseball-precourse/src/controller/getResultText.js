const checkStrike = (computerInputNumbers, userInputNumbers) => {
  return [...userInputNumbers].reduce((acc, cur, idx) => {
    acc += [...computerInputNumbers][idx] === cur && 1;

    return acc;
  }, 0);
};

const checkBall = (computerInputNumbers, userInputNumbers) => {
  return [...userInputNumbers].reduce((acc, cur, idx) => {
    const computerInputNumbersArray = [...computerInputNumbers];

    acc += computerInputNumbersArray.includes(cur) && cur !== computerInputNumbersArray[idx] && 1;

    return acc;
  }, 0);
};

const checkResult = (computerInputNumbers, userInputNumbers) => {
  const strikeCount = checkStrike(computerInputNumbers, userInputNumbers);
  const ballCount = checkBall(computerInputNumbers, userInputNumbers);

  return [strikeCount, ballCount];
};

const transformToText = (strikeCount, ballCount) => {
  if (strikeCount === 3) return '정답';
  if (strikeCount && ballCount) return `${ballCount}볼 ${strikeCount}스트라이크`;
  if (ballCount) return `${ballCount}볼`;
  if (strikeCount) return `${strikeCount}스트라이크`;

  return '낫싱';
};

export const getResultText = (computerInputNumbers, userInputNumbers) => {
  const [strikeCount, ballCount] = checkResult(computerInputNumbers, userInputNumbers);

  const resultText = transformToText(strikeCount, ballCount);
  // console.log(resultText);
  return resultText;
};
