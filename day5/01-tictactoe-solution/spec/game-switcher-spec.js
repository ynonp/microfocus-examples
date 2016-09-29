import GameSwitcher from 'game-switcher';
import {} from 'jasmine-jquery';

window.io = {
  connect: function () {
    return {
      on: function () { },
      emit: function () { },
    }
  },
};

function mkView () {
  const f = setFixtures(`
    <div class="col-xs-3" id="switcher">
      <button id="btn-new-game">New Game</button>
    </div>
    <div class="col-xs-9" id="game"></div>
  `);

  return new GameSwitcher(f.find('#switcher'), f.find('#game'));
}

describe('Game Switcher', function () {
  describe('#addGame', function () {
    it('should add a game', function () {
      const v = mkView();
      const newGameId = 'demo';

      v.addGame(newGameId);

      expect(v.games[newGameId]).toBeDefined();
    });
  });

  describe('#switchGame', function () {
  });
});
