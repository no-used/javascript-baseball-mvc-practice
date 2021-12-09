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
    const computerRandomInput = this.generateComputerInput(
      NUMBER.MIN_DIGIT,
      NUMBER.MAX_DIGIT,
      NUMBER.INPUT_LENGTH
    );

    this.gameModel.setComputerInput(computerRandomInput);
    this.addEvents();
  }

  addEvents() {
    this.gameView.$userInputForm.addEventListener('submit', this.handleUserInput.bind(this));
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
      const randomNum = MissionUtils.Random.pickNumberInRange(minDigit, maxDigit);

      computInput.add(randomNum);
    }

    return [...computInput].join('');
  }

  play(computerInputNumbers, userInputNumbers) {
    const resultText = getResultText(computerInputNumbers, userInputNumbers);
    return resultText;
  }
}
