export default class HolbertonCourse{
  constructor(name, length, students){
    if (typeof name != 'string'){
      throw new TypeError('name should be a string');
    }
    if (typeof length != 'number'){
      throw new TypeError('length should be a number');
    }
    if (!Array.isArray(students)){
      throw new TypeError('students must be an array')
    }
    this._name = name;
    this._length = length;
    this._students = students;
  }
  
  get name(){
    return this._name;
  }
  get length(){
    return this._length;
  }
  get students(){
    return this._students;
  }
  
  set name(name){
    if (typeof name != 'string'){
      throw new TypeError('name should be a string');
    }
    this._name = name;
  }
  set length(length){
    if (typeof length != 'number'){
      throw new TypeError('length should be a number');
    }
    this._length = length;
  }
  set students(students){
    if(!Array.isArray(students){
       throw new TypeError('students should be an array');
    }
    this._students = students;
  }
}
