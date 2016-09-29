import $ from 'jquery';
import Game from 'game';

export default class GameSwitcher {
  constructor ($el, $contentEl) {
    this.socket = this.socket || io.connect('https://socket-magic.herokuapp.com/');
    this.$el = $el;
    this.$contentEl = $contentEl;
    this.games = {};
    this.addGame = this.handleAddButton.bind(this);
    this.switchGame = this.switchGame.bind(this);

    this.$el.on('click', '.switchgame', this.switchGame);
    this.$el.find('#btn-new-game').on('click', this.handleAddButton);
  }

  handleAddButton () {
    const newGameId = prompt("Game ID");
    if (newGameId === null) {
      return;
    }
    this.addGame(newGameId);
  }

  addGame (newGameId) {
    this.games[newGameId] = new Game(newGameId, this.socket);
    this.$el.append(`<button class="switchgame" data-gameid=${newGameId}>${newGameId}</button>`);
  }


  switchGame (ev) {
    const gameid = ev.target.dataset.gameid;
    const game = this.games[gameid];
    game.initDOM(this.$contentEl);

    this.$el.find('.switchgame').removeClass('active-game');
    $(ev.target).addClass('active-game');
  }
}

