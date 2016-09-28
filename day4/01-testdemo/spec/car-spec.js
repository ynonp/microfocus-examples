import Car from 'car';

describe('Car', function () {
  describe('#ctor', function () {
    it('should assign speed', function () {
      const c = new Car('blue', 10);
      expect(c.speed).toEqual(10);
    });

    it('should have default speed', function () {
      const c = new Car('blue');
      expect(c.speed).toEqual(0);
    });
  });

  describe('#drive', function () {
    it('should set speed', function () {
      const c = new Car('blue', 20);
      c.drive(30);
      expect(c.speed).toEqual(30);
    });
  });

  describe('#isFasterThan', function () {
    it('should show which is faster', function () {
      const c = new Car('blue', 20);
      const d = new Car('red', 30);
      expect(d.isFasterThan(c)).toBe(true);
    });
  });
});
