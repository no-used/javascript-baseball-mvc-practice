import { $ } from './DOMHelper.js';

export default class GameView {
  constructor() {
    this.$userInput = $('#user-input');
    this.$userInputForm = $('#user-input-form');
    this.$result = $('#result');

    this.initResult();
  }

  initResult() {
    this.$result.innerHTML = '';
  }

  resetUserInput() {
    this.$userInput.value = '';
  }

  renderResult(resultText) {
    this.$result.innerHTML = resultText;
  }
}
