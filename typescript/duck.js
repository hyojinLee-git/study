class Duck {
  quack() {
    console.log('꽥!');
  }
}

class Person {
  quack() {
    console.log('나도 꽥!');
  }
}

function makeSomeNoiseWith(duck) {
  duck.quack();
}

makeSomeNoiseWith(new Duck());
makeSomeNoiseWith(new Person());
