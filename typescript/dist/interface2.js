let person = {
    name: 'Capt',
    age: 28
};
function logAge(obj) {
    console.log(obj.age); // 28
}
logAge(person); //28
function logAge2(obj) {
    console.log(obj.age);
}
let person2 = { name: 'Capt', age: 28 };
logAge2(person);
