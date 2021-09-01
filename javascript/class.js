class Student {
  constructor(name) {
    this.name = name;
  }
  sayName() {
    console.log(`my name is ${this.name}`);
  }
  sayhi() {
    console.log(`hi ${this.name}`);
  }
}
const myeong = new Student('myeong');
myeong.sayName();
myeong.sayhi();
console.log(myeong.name);
