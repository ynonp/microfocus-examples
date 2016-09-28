import TimeConverter from 'timeconverter';
import {} from 'jasmine-jquery';

function mkView () {
  const f = setFixtures('<div class="timer"></div>');
  const $el = f.find('.timer');
  return new TimeConverter($el);
}

describe('TimeConverter', function () {
  describe('#set', function () {
    it('should set the value', function () {
      const tc = mkView();
      tc.set(60, 100);
      expect(tc.val).toEqual(6000);
    });
  });

  describe('#writeToDOM', function () {
    it('should work', function() {
      const tc = mkView();
      const f = setFixtures('<div><input data-factor="60" /></div>');
      tc.$el = f;
      tc.val = 120;
      tc.writeToDOM();

      expect(f.find('input').val()).toEqual('2');
    });
  });

  describe('#handleInput', function () {
    it('should be bound', function () {
      const tc = mkView();
      expect(tc.handleInput.name).toEqual('bound handleInput');
    });

    it('should work', function () {
      const tc = mkView();
      const ev = {
        target: {
          dataset: {
            factor: '60',
          },
          value: '120',
        }
      };

      tc.handleInput(ev);
      expect(tc.val).toEqual(7200);
    });
  });
});
