export default class HolbertonCourse {
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  set name(value) {
    if (typeof value !== 'string') throw TypeError('Name must be a string');
    this._name = value;
  }

  get name() {
    return this._name;
  }

  set length(value) {
    if (typeof value !== 'number') throw TypeError('Length must be a number');
    this._length = value;
  }

  get length() {
    return this._length;
  }

  set students(arr) {
    if (!Array.isArray(arr) || !arr.every((val) => typeof val === 'string')) {
      throw TypeError('Students must be an array of strings');
    }
    this._students = arr;
  }

  get students() {
    return this._students;
  }
}
