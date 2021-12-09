const checkStrike = (computerInputNumbers, userInputNumbers) => {
  let strikeCount = 0;

  for (let i = 0; i < computerInputNumbers.length; i += 1) {
    strikeCount += computerInputNumbers[i] === userInputNumbers[i] && 1;
  }

  return strikeCount;
};

const checkResult = (computerInputNumbers, userInputNumbers) => {
  const strikeCount = checkStrike(computerInputNumbers, userInputNumbers);

  console.log(strikeCount);
};

export const getResultText = (computerInputNumbers, userInputNumbers) => {
  checkResult(computerInputNumbers, userInputNumbers);

  const resultText = '';
  return resultText;
};
