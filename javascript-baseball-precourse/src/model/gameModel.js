export default class GameModel {
  constructor() {
    this.userInput = '';
    this.computerInput = '';
  }

  setUserInput(userInput) {
    this.userInput = userInput;
  }

  setComputerInput(computerInput) {
    this.computerInput = computerInput;

    console.log(this.computerInput);
  }
}
