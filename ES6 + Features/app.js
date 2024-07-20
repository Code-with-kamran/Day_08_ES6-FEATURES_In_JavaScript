// Template literals

let name1 = "kamran";
let age = 22;

let str = ` Name is  ${name1} and age is ${age}`;
console.log(str);
let Mlstr = `Name is ${name1} 
  and age ${age}`;
console.log(Mlstr);

// Destructuring of an array and Objects
let array = [1, 3, 4, 5, 6, 6, 8, 9];
let obj = {
  name: "Amir",
  age: 22,
  dep: "cs",
};
// Array Destructuring
const [first, , , , , , , last] = array;
console.log(`${first} and  ${last} `);
// Object Destructuring
const { name, dep } = obj;
console.log(`${name1} and ${dep} `);

// Spread operator

let newarray = [...array, 56, 78, 78];
console.log(newarray);

function useRest(...arg) {
let sum = 0;
    console.log(`function is called`);
    arg.forEach(element => {
        element.forEach((val)=>{
            sum += val;
           
        })
    });
    return sum;
}
useRest(newarray);

//  function with defaul parameters
function product(a,b=1) {
    return a*b;
}
console.log(product(3,5));
console.log(product(3));



