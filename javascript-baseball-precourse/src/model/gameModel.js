import { isValiUserInput } from './validator.js';

export default class GameModel {
  constructor() {
    this.userInput = '';
    this.computerInput = '';
  }

  setUserInput(userInput) {
    if (isValiUserInput(userInput)) {
      this.userInput = userInput;
      console.log(userInput, this.userInput);
    }
  }

  setComputerInput(computerInput) {
    this.computerInput = computerInput;
  }
}
