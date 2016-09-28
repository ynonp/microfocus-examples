import Race from 'race';
import Car from 'car';

describe('#winner', function () {
  it('should find the winner when there is one', function () {
    const c1 = new Car('blue', 10);
    const c2 = new Car('red', 20);
    const c3 = new Car('yellow', 15);

    const r = new Race();
    r.addCars(c1, c2, c3);

    expect(r.winner()).toEqual(c2);
  });
});
