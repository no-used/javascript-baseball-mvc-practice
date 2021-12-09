import { isValiUserInput } from './validator.js';
import { throwError } from '../utils/error.js';
import MESSAGE from '../constants/message.js';

export default class GameModel {
  constructor() {
    this.userInput = '';
    this.computerInput = '';
  }

  setUserInput(userInput) {
    if (isValiUserInput(userInput)) {
      this.userInput = userInput;
    } else {
      throwError(MESSAGE.ERROR.USER_INPUT);
    }
  }

  setComputerInput(computerInput) {
    this.computerInput = computerInput;
    // console.log(this.computerInput);
  }
}
