import { $ } from './DOMHelper.js';

export default class GameView {
  constructor() {
    this.$userInput = $('#user-input');
    this.$userInputForm = $('#user-input-form');
    this.$result = $('#result');
  }

  resetUserInput() {
    this.$userInput.value = '';
  }

  renderResult(resultText) {
    this.$result.innerHTML = resultText;
  }
}
