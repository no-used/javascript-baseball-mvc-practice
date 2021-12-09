import GameView from '../view/gameView.js';
import GameModel from '../model/gameModel.js';
import NUMBER from '../constants/number.js';
import { showError } from '../utils/error.js';
import { getResultText } from './getResultText.js';

export default class GameController {
  constructor() {
    this.gameView = new GameView();
    this.gameModel = new GameModel();

    this.init();
  }

  init() {
    this.saveComputerInput(NUMBER.MIN_DIGIT, NUMBER.MAX_DIGIT, NUMBER.INPUT_LENGTH);
    this.addEvents();
  }

  saveComputerInput(minDigit, maxDigit, inputLength) {
    const computerRandomInput = this.generateComputerInput(minDigit, maxDigit, inputLength);

    this.gameModel.setComputerInput(computerRandomInput);
  }

  addEvents() {
    this.gameView.$userInputForm.addEventListener('submit', this.handleUserInput.bind(this));
    this.gameView.$result.addEventListener('click', this.restartGame.bind(this));
  }

  handleUserInput(e) {
    e.preventDefault();
    const userInput = this.gameView.$userInput.value;

    try {
      this.gameModel.setUserInput(userInput);
    } catch (err) {
      showError(err);
      this.gameView.resetUserInput();
    }

    const resultText = this.play(this.gameModel.computerInput, this.gameModel.userInput);
    this.gameView.renderResult(resultText);
  }

  generateComputerInput(minDigit, maxDigit, inputLength) {
    const computInput = new Set();

    while (computInput.size < inputLength) {
      // eslint-disable-next-line no-undef
      const randomNum = MissionUtils.Random.pickNumberInRange(minDigit, maxDigit);

      computInput.add(randomNum);
    }

    return [...computInput].join('');
  }

  play(computerInputNumbers, userInputNumbers) {
    const resultText = getResultText(computerInputNumbers, userInputNumbers);
    return resultText;
  }

  restartGame() {
    this.gameView.resetUserInput();
    this.gameView.initResult();
    this.saveComputerInput(NUMBER.MIN_DIGIT, NUMBER.MAX_DIGIT, NUMBER.INPUT_LENGTH);
  }
}
