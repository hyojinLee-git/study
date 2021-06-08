//js
// function add(x,y){
//     return x+y;
// }
function add(x:number, y:number){
    return x+y;
}
//add(1,'2') error!
const result=add(1,2);
function sub(x:number, y:number):number{
    return x-y;
}
function buildUserInfo(name?:string, email?:string){
    return {name, email}
}
const user=buildUserInfo();

const add2=(a:number, b:number)=> a+b;

interface Storage{
    a:string;
}
interface ColdStorage{
    b:string;
}
function store(type:"통조림"):Storage
function store(type:"아이스크림"):ColdStorage

function store(type:"통조림" | "아이스크림"){   //유니온타입
    if(type==="통조림"){
        return {a: "통조림"}
    } else if(type==="아이스크림"){
        return {b:"아이스크림"}
    } else{
        throw new Error('unsupported type');
    }
}

const s=store("통조림")


