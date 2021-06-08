let person = { 
    name: 'Capt', 
    age: 28 
};

function logAge(obj: { age: number }) {
  console.log(obj.age); // 28
}
logAge(person); //28

interface personAge {
  age: number;
}

function logAge2(obj: personAge) {
  console.log(obj.age);
}
let person2 = { name: 'Capt', age: 28 };
logAge2(person);