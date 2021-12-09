//사용자가 값을 입력하고 확인 버튼을 눌러 값을 제출한다.
import GameView from '../view/gameView.js';
import GameModel from '../model/gameModel.js';

export default class GameController {
  constructor() {
    this.gameView = new GameView();
    this.GameModel = new GameModel();

    this.addEvents();
  }

  addEvents() {
    this.gameView.$userInputForm.addEventListener('submit', this.handleUserInput.bind(this));
  }

  handleUserInput(e) {
    e.preventDefault();

    const userInput = this.gameView.$userInput.value;

    this.GameModel.setUserInput(userInput);
  }
}
