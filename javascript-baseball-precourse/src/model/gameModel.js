export default class GameModel {
  constructor() {
    this.userInput = '';
  }

  setUserInput(userInput) {
    this.userInput = userInput;

    console.log(this.userInput);
  }
}
