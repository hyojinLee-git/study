const array = [8, 16, 29, 36, 39, 41, 1];

let arr = [];
for (let i = 0; i < array.length - 1; i++) {
  //   setTimeout(() => {
  //     console.log(arr);
  //     arr = [...arr, array[i]];
  //   }, (i + 1) * 1000);
  arr = [...arr, array[i]];
  //console.log(arr);
}

let all = true;
for (let i = 0; i < 2; i++) {
  all = false;
}
//console.log(all);

const table = [
  [1, 1, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 1, 1],
];
const newTable = [...table];
let row = 2;
newTable[row] = [...table[row]];
console.log(table);
console.log(newTable);
