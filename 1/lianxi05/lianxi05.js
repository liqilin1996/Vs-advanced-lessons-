var a = 34;
if(a = 45){
	console.log("是否会输出？");
}

var b = 23;
if(45 = b){  //反写只能判断数值是否与b的值相等，正常写的浏览器可
	console.log("是否会输出？");  //能会出现赋值。
}
console.log("1"+"2");
console.log("1"+2);
console.log(1+{});
consoel.log(true+true);
console.log("5"-2);

var i = 1;
var y = ++i + ++i + ++i;
consloe.log(y);

var obj1 = new String("xyz");              
var obj2 = new String("xyz");              
console.log("xyz" === obj1);			   //false
console.log(obj1 == obj2);	               //false
console.log(obj1 === obj2);                //false
console.log(obj1 == new String("xyz"));    //false

var obj1 = new String("xyz");              
var obj2 = new String("xyz");
console.log("xyz" != obj1);                //false
console.log(obj1 !==obj2);                 //false
console.log(obj1 != obj2);                 //false
console.log(obj1 != new String("xyz"));    //false


console.log(2>1&&4<5);
console.log(true&&(!2));             //全真为真
console.log(false&&("2" == 2));
console.log(false&&false);

console.log(2>1||4<5);
console.log(true||(!2));			 //一真则为真，全假才为假
console.log(false||("2" == 2));
console.log(false||false);

console.log(2&&4);					//4
console.log(0&&4);					//0
console.log({x:2}&&{name:"Jack"});	//{name:"Jack"}
console.log(null&&"hello");			//null
console.log({}&&"world");			//"world"

console.log(2||4);					//2
console.log(0||4);					//4
console.log({x:2}||{name:"Jack"});	//{x:2}
console.log(null||"hello");			//"hello"
console.log({}||"world");			//{}