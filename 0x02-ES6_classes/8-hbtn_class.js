export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  // number representation of an object
  valueOf() {
    return this._size;
  }

  // string representation of an object
  get [Symbol.toStringTag]() {
    return this._location;
  }
}
