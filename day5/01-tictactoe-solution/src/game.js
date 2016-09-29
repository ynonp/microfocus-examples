import $ from 'jquery';

export default class Game {
  constructor (gameId, socket) {
    this.gameId = gameId;

    this.state = {
      isGameOver: false,
      turn: 0,
      board: [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
    };

    this.handleMove = this.handleMove.bind(this);
    this.receiveNewState = this.receiveNewState.bind(this);
    this.socket = socket;

    socket.on('data', this.receiveNewState);
  }

  initDOM ($el) {
    $el.html(`
      <p class="status"></p>
      <div class="game"></div>
    `);
    this.$el = $el;
    this.render();

    $el.find('.game').on('click', '.cell', this.handleMove);
  }

  receiveNewState (newState) {
    if (newState.gameId !== this.gameId) {
      return;
    }

    this.state = newState;

    this.render();
    const sign = (this.state.turn % 2 === 0) ? 'X' : 'O';

    if (this.checkWinner(sign)) {
      this.gameOver(sign);
    }
  }

  sendStateOverTheWire (state) {
    const stateWithId = Object.assign({}, state, { gameId: this.gameId });
    this.socket.emit('data', stateWithId);
  }

  render () {
    this.$el.find('.game').empty();
    this.initBoard();
  }

  checkTriplet (x, y, z, player) {
    const state = this.state;
    if ((state.board[x] === state.board[y]) &&
        (state.board[y] === state.board[z]) &&
        (state.board[z] === player)) {
      return true;
    }
    return false;
  }

  initBoard () {
    const game = this.$el.find('.game')[0];

    for (let i = 0; i < 3; i++) {
      let row = document.createElement('div');
      row.classList.add('game-row');
      for (let j = 0; j < 3; j++) {
        const btn = document.createElement('div');
        btn.classList.add('cell');
        btn.idx = (i * 3 + j);
        btn.textContent = this.state.board[btn.idx];
        row.appendChild(btn);
      }
      game.appendChild(row);
    }
  }

  checkWinner (sign) {
    return this.checkTriplet(0, 1, 2, sign) ||
      this.checkTriplet(3, 4, 5, sign) ||
      this.checkTriplet(6, 7, 8, sign) ||
      this.checkTriplet(0, 3, 6, sign) ||
      this.checkTriplet(1, 4, 7, sign) ||
      this.checkTriplet(2, 5, 8, sign) ||
      this.checkTriplet(0, 4, 8, sign) ||
      this.checkTriplet(2, 4, 6, sign);
  }

  gameOver (sign) {
    $('.status', this.$el).text(`Game Over ${sign} won`);
    this.state.isGameOver = true;
  }

  handleMove (ev) {
    const state = this.state;
    const newState = {
      isGameOver: state.isGameOver,
      turn: state.turn,
      board: [...state.board]
    };

    const idx = ev.target.idx;

    if ((state.board[idx] !== ' ') || state.isGameOver) {
      return;
    }
    const sign = (state.turn % 2 === 1) ? 'X' : 'O';

    newState.board[idx] = sign;
    newState.turn += 1;
    this.sendStateOverTheWire(newState);
  }
}
