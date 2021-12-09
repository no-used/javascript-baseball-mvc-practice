const checkStrike = (computerInputNumbers, userInputNumbers) => {
  let strikeCount = 0;

  for (let i = 0; i < computerInputNumbers.length; i += 1) {
    strikeCount += computerInputNumbers[i] === userInputNumbers[i] && 1;
  }

  return strikeCount;
};

const checkBall = (computerInputNumbers, userInputNumbers) => {
  return [...userInputNumbers].reduce((acc, cur, idx) => {
    const computerInputNumbersArray = [...computerInputNumbers];

    if (computerInputNumbersArray.includes(cur) && cur !== computerInputNumbersArray[idx]) acc += 1;

    return acc;
  }, 0);
};

const checkResult = (computerInputNumbers, userInputNumbers) => {
  const strikeCount = checkStrike(computerInputNumbers, userInputNumbers);
  const ballCount = checkBall(computerInputNumbers, userInputNumbers);
  console.log(ballCount);
};

export const getResultText = (computerInputNumbers, userInputNumbers) => {
  checkResult(computerInputNumbers, userInputNumbers);

  const resultText = '';
  return resultText;
};
