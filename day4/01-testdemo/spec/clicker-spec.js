import Clicker from 'clicker';
import $ from 'jquery';
import {} from 'jasmine-jquery';

function mkView() {
  const f = setFixtures('<div class="clicker"></div>');
  const $el = f.find('.clicker');
  return new Clicker($el);
}

describe('Clicker Logic', function () {
  describe('#ctor', function () {
    it('should start at 0', function () {
      const c = mkView();
      expect(c.clicks).toEqual(0);
    });

    it('should automatically call initDOM with the element', function () {
      const spy = spyOn(Clicker.prototype, 'initDOM');
      const c = mkView();
      expect(spy).toHaveBeenCalled();
    });
  });

  describe('#click', function () {
    it('should increase clicks', function () {
      const c = mkView();
      c.click();
      c.click();
      c.click();
      c.click();
      c.click();

      expect(c.clicks).toEqual(5);
    });

    it('should call updateDOM', function () {
      const c = mkView();
      const spy = spyOn(c, 'updateDOM');
      c.click();
      expect(spy).toHaveBeenCalled();
    });
  });
});

describe('Clicker DOM', function () {
  describe('#initDOM', function () {
    it('should create a button', function () {
      const c = mkView();
      expect(c.$el).toContainElement('button');
    });

    it('should create initial value 0', function () {
      const c = mkView();
      expect(c.$el.find('.val')).toHaveText('0');
    });

    it('should have a value', function () {
      const c = mkView();
      expect(c.$el).toContainElement('.val');
    });

    it('should call this.click after user clicks the button', function () {
      const c = mkView();
      expect(c.$el).toHandleWith('click', c.click);
    });
  });
});





