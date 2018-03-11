console.log(typeof 123);
console.log(typeof true);
console.log(typeof "abc");
console.log(typeof null);
console.log(typeof undefined);
console.log(typeof {name:"MiKe",age:20});
console.log(typeof function foo(){});
console.log(typeof Array);
console.log(typeof Function);
console.log(typeof Date);
console.log(typeof Number);
console.log(typeof Math);
console.log(typeof JSON);
var a = {name:"MiKe",age:20};
console.log(a instanceof Object);
var b = [12,34,{},""];
console.log(b instanceof Array);
var person = function(){

};
var p1 = new person();
console.log(p1 instanceof person);