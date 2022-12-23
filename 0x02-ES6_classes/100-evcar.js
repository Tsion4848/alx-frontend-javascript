import Car from './10-car.js'

export default class EVCar {
  constructor(brand = '', motor = '', color = '', range = '') {
    super(brand, motor, color);
    this._range = range;
  }
  
  static get [Symbol.species]() {
    return Car;
  }
}

export default EVCar;
