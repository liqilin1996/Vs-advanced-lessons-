function max(a,b){
	return a>b?a:b;
}
max(2,3);					//函数声明，要有函数名

var max = function(a,b){
	return a>b?a:b;			//函数表达式，可以没有函数名，有
};							//名的话方便调用栈追踪	
max(2,3);					

var max = Function("a","b","return a>b?a:b");
max(2,3);                   //Function构造函数
							//优点可以动态的改变函数

//例：
var str ="return a>b?a:b";
var max = new Function("a","b",str/*str，是可以随着用户改变的*/);
max(2,3);

function test1(){
	console.log("this is",this);
}
test1(); //window 

var obj = {
    name:"obj",
    x:23,
    test:function(){
        console.log(this.x,this);
    }
};
obj.test(); //方法调用

//通过call调用
objA = {name:"aa"};
objB = {name:"bb"};
objA.foo = function(){
	console.log(this.name);
};
objA.foo();			//aa
objB.foo.call();	//bb

var fish ={
	name:"fish",
	swim:function(m,n){
		console.log("i'm" + this.name + "i can swim ___",m,n);
	}
};
var bird = {
	name:"polly",
	fly:function(m,n){
		console.log("i'm" + this.name + "i can fly ___",m,n);
	}
};
var me = {
	name:"abc"
};
bird.fly(5,6);
fish.swim.call(me,3,4);
bird.fly.call(me,7,8);

//实参大于形参
function test(){
	console.log(arguments);
	//console.log(test.arguments == arguments,arguments);	//false
	//console.log(arguments.length);						//2
	//console.log(typeof arguments);						//object
	//console.log(arguments instanceof Array);				//false
	//console.log(arguments instanceof Object);				//true
	console.log(Array.prototype.slice.call(arguments));		//"hello,world"
	var s = "";
	for(var i = 0;i<arguments.length;i++){
		s += arguments[i];
	}
	return s;
}
test("hello,","world!");

//实参小于形参
var sum = function(a,b,c){
	b = b||4;
	c = c||5;
	return a+b+c;
};
console.log(sum(1,2,3));		//6
console.log(sum(1,2));			//8
console.log(sum(1));			//10
