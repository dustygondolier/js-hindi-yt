const name ="utkarsh"
const repoCount = 50

// console.log(name + repoCount + "Values");//old way of writing strings donot use

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName =new String('utkarshjiii')
console.log(gameName[0]);
console.log(gameName.__proto__);//this has all u t k a r s h j i i i aise with their indices

console.log(gameName.length);
console.log(gameName.toLocaleUpperCase());

console.log(gameName.charAt(2));
console.log(gameName.indexOf('k'));

const newString = gameName.substring(0,4);
console.log(newString)

const anotherString = gameName.slice(-2,4);
console.log(anotherString)//?

const newStringOne ="    utkarsh    ";
console.log(newStringOne);
console.log(newStringOne.trim());

// const url= "https//google.com";
// console.log(url().replace('@08','-'));

// console.log(url.includes('sundar'));
// console.log(url.split('-'));
