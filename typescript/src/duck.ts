interface Quackable {
    quack(): void;
  }
  
  class Duck implements Quackable {
    quack() {
      console.log('꽥!');
    }
  }
  
  class Person {
    quack() {
      console.log('나도 꽥!');
    }
  }
  
  function makeSomeNoiseWith(duck: Quackable): void {
    duck.quack();
  }
  
  makeSomeNoiseWith(new Duck()); // OK
  makeSomeNoiseWith(new Person()); // OK