import GameView from '../view/gameView.js';
import GameModel from '../model/gameModel.js';
import NUMBER from '../constants/number.js';
import { showError } from '../utils/error.js';

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
      NUMBER.INPUT_MAX_LENGTH
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
    }
  }

  generateComputerInput(minDigit, maxDigit, inputMaxLength) {
    const computInput = new Set();

    while (computInput.size < inputMaxLength) {
      const randomNum = MissionUtils.Random.pickNumberInRange(minDigit, maxDigit);

      computInput.add(randomNum);
    }

    return [...computInput].join('');
  }
}
