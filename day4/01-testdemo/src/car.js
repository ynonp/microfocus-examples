export default class Car {
  constructor (color, speed = 0) {
    this.drive(speed);
    this.color = color;
  }

  drive (speed) {
    this.speed = speed;
  }

  isFasterThan (otherCar) {
    return this.speed > otherCar.speed;
  }
}

