let numValue:number;
let stringValue:string;
let boolenValue: boolean;
let undefinedValue: undefined;
let nullValue: null;
let objValue: object;
let symbolValue:symbol;
let anyValue:any;

numValue=3;
stringValue="hello";

objValue=new String('hi');  //형변환 ㄴㄴ new 연산자 사용하면 객체가 반환이라 ㅇㅇ
console.log(objValue);

symbolValue=Symbol();

let nameList:string[];
nameList=["1","5"];

let user1:{name: string, score:number};
user1={
    name:'jay',
    score:30
}
let tuple2:[number, string];