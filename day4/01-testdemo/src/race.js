export default class Race {
  constructor () {
    this.cars = [];
  }

  addCars (...cars) {
    this.cars = [...this.cars, ...cars];
  }

  winner () {
    return this.cars.sort((a, b) => b.isFasterThan(a))[0];
  }
}
