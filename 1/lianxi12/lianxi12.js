var person = {
	name:liqilin,
	age:21,
	number:20111140,
	show:function(){
		console.log(this.name);
	}
};
console.log(person.name);
console.log(person.age);
person.show();


console.log(Object instanceof Function);
console.log(Object instanceof Object);
console.log(Boolean instanceof Function);
console.log(Boolean instanceof Object);
console.log(String instanceof Function);
console.log(String instanceof Object);
console.log(Number instanceof Function);
console.log(Number instanceof Object);
console.log(Function instanceof Function);
console.log(Function instanceof Object);
console.log(Array instanceof Function);
console.log(Array instanceof Object);
console.log(Date instanceof Function);
console.log(Date instanceof Object);
console.log(Math instanceof Function);
console.log(Math instanceof Object);
console.log(JSON instanceof Function);
console.log(JSON instanceof Object);


var o = {
    _x:1.0,
    get x(){
        return this._x;
    },
    set x(val){
        this._x = val;
    }
};
console.log(o.x);
o.x = 2;
console.log(o.x,o._x);


var o = {
    _x:1.0,
    get x(){
        return this._x;
    }
};
console.log(o.x);
o.x = 2;
console.log(o.x,o._x);



var o = {
    _x:1.0,
    get x(){
        return this._x;
    }
};
console.log(o.x);
o.x = 2;
console.log(o.x);


var p ={
    x:1,
    y:1,
    get r(){return Math.sqrt(this.x*this.x+this.y*this.y);},
    set r(newValue){
        var oldValue = Math.sqrt(this.x*this.x+this.y*this.y);
        var ratio = newValue/oldValue;
        this.x*=ratio;
        this.y*=ratio;
    },
    get theta(){return Math.atan2(this.y,this.x);}
};
var q = Object.create(p);
q.x = 2;
q.y = 2;
console.log(q.r);
console.log(q.theta);


var obj = {
    num:10,
    str:"Hi",
    show:function(){
        return this.str;
    }
};
console.log(obj.num);
console.log(obj.str);
console.log(obj.show());
console.log(obj.__proto__);
console.log(obj.__proto__ === Object.prototype);



function Person(name,age){
    this.name = name;
    this.age = age;
}
Person.prototype.sayName = function(){
    console.log("hello,i'm",this.name,this.age,"years old");
};
var person1 = new Person("Mike",21);
person1.sayName();


var objStr = new Object("xxx");
console.log(typeof objStr);					//object
console.log(objStr instanceof String);		//true

var objNum = new Object(23);
console.log(typeof objNum);					//object
console.log(objNum instanceof Number);		//true

var objBoolean = new Object(true);
console.log(typeof objBoolean);				//object
console.log(objBoolean instanceof Boolean);	//true



var obj3 = {};
for(var i=0;i<10;i++){
    obj3.i = i;
}

var obj4 = {};
for(var i=0;i<10;i++){
    obj4[i] = i;
}


var obj3 = {};
for(var i = 0;i<10;i++){
	obj3.i = i;
}

var obj4 = {};
for(var i= 0;i<10;i++){
	obj4[i] = i;
}
console.log(obj3);
console.log(obj4);