//there are broadly 2 types of data 
//Primitive
//7 types: string,number,boolean,null,undefined,BigInt,Symbol
const score=100;
const scoreValue=100.3;//(koi float vghr ni hota isme)

const isLoggedIn=true;
const outsideTemp=null;
let userEmaill;

const id=Symbol('123');
const anotherId=Symbol('123');

console.log(id==anotherId);

const bigNumber=3423555335555n;//(adding n gets it as bigint)


//Refrence type(Non - Primitive)

//Array, Objects,Functions

const heros=["suresh","ramesh"];

let myObj = {
    name: "suresh",
    age: 22,
}

const myFunction=function(){
    console.log("Hello World");
}

console.log(typeof myObj);

