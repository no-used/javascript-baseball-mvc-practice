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
  console.log(strikeCount, ballCount);
};

export const getResultText = (computerInputNumbers, userInputNumbers) => {
  checkResult(computerInputNumbers, userInputNumbers);

  const resultText = '';
  return resultText;
};
