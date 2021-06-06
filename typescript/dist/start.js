"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var hello = 'hello world';
let hello2 = 'hello2';
// let timeoutPromise=new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve('1 sec');
//     },1000);
// });
// timeoutPromise.then(console.log);
const util_1 = require("./util");
const val = util_1.default(1, 2);
console.log(val);
