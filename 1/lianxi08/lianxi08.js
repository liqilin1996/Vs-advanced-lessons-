console.log(typeof new Function());   //function 
console.log(typeof new Array());	  //object
console.log(typeof new Date());		  //object

console.log(Function instanceof Function);	//true
console.log(Function instanceof Object);	//true
console.log(Array instanceof Function);		//true
console.log(Array instanceof Object);		//true
console.log(Date instanceof Function);		//true
console.log(Date instanceof Object);		//true
console.log(Math instanceof Function);		//false
console.log(Math instanceof Object);		//true
console.log(JSON instanceof Function);		//false
console.log(JSON instanceof Object);		//true


var foo = function(){
	console.log(arguments);
	console.log(arguments === test.arguments);
	console.log(arguments.length);
	var args = Array.prototype.splice.call(arguments,0);
	console.log(args);
};
foo(1,2,3,4);

function test(){
	if(test.caller == null){
		console.log("asfasf");
	}else{
		console.log("sflsfsd");
		console.log(test.caller.toString());
	}
}

var func = function(n){
	if(n <= 0)
		return 1;
	else
		return n * func(n-1);
};
console.log(func(4));	//24

(function(n){
	if(n<=0)
		return 1;
	else
		return n * arguments.callee(n-1);
}(4));					//24


function Man(name, age) {
    this.name = name;
    this.age = age;
}
Man.prototype.sex = "M";
Man.prototype.sayHi = function () {
    console.log("Hi,i'm",this.name);
};
var li = new Man("Leo", 10);
li.sayHi();//
console.log(li.sex);//M

Man.prototype.isStrong = true;
console.log(li.isStrong);//true


function swim(m,n){
    console.log("i'm:"+this.name+" i can swim ___",m,n);
}
var bird = {
    name:"polly",
    fly:function(m,n){
        console.log("i'm:"+this.name+" i can fly ___",m,n);
    }
};

var me = {
    name:"ABC"
};
swim(1,2);
swim.call(me,3,4);
bird.fly(5,6);
bird.fly.call(me,7,8);
bird.fly.apply(me,[7,8]);
swim.call(null,1,2);

//绑定
var x = 45;
var obj = {
    x:23,
    test:function(){
		function foo(){
			console.log(this.x);
		}
		foo.bind(this)();//var fee = foo.bind(this); fee();
		foo();
    }
};
obj.test();					//23  45


function foo(x,y,c1,c2){
	return 2*c1(x)-3*c2(y);
}
function f1(x){
	return x+1;
}
function f2(x){
	return x-1;
}
function f3(x){
	return x*x;
}
foo(1,1,f1,f3);//1
foo(1,1,f3,f2);//2
foo(1,1,f1,f2);//4