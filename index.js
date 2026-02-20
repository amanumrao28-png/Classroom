function add(a, b){
    return a+b;
}
console.log(add(10,20));
//arrow function
const multiply=(p,q)=>p*q;
console.log(multiply(5,4));

let arr=[1,2,3,4,5];
arr.push(6);

console.log(arr);
//object
let person={
    name:"vikas",
    age:20,
    course:"b,tech"
};
console.log(person.name);
console.log(person.age);
console.log(person.course);

let today=new Date();
console.log(today);

console.time("test");
for(let i=0;i<10000;i++){

}
console.timeEnd("test");

console.group("my group");

console.count("a");
console.count("a");
console.count("b");
console.count("a");
console.count("b");
console.groupEnd("my group");

let students={name:"vikas",age:20,course:"b,tech"};
console.table(students);
