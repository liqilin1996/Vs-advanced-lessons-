var objProto = {
    z:3
};

var obj = Object.create(objProto);
obj.x = 1;
obj.y = 2;

console.log(obj.x);
console.log(obj.y);
console.log(obj.z);

console.log(obj.toString);

for(var k in obj){
    console.log(k,obj[k]);
}


var obj = {
    x:1,
    y:2
};

Object.defineProperty(obj,"x",{enumerable:false});
for(var k in obj){
    console.log(k,obj[k]);
}


var person = {name:"Jack"};
Object.defineProperty(person,"name",{
    writable:false,
    configurable:false,
    enumerable:true,
    value:"Mike"
});
console.log(person.name);
person.name = "Lucy";
console.log(person.name);
delete person.name;
console.log(person.name);


obj.z = 3;
for(var k in obj){
    console.log(k,obj[k]);
}

var obj = {
    x:1,
    y:2
};

obj.z = 3;


Object.defineProperty(obj,"w",{value:456,configurable:true});
for(var k in obj){
    console.log(k,obj[k]);
}


var obj2={
    _name:"Lucy",
    set name(val){this._name = val;},
    get name(){return this._name;}
};
Object.defineProperty(obj2,"name",{
    get:function (){
        return this._name+"_hihi";
    },
    set:function (val) {
        this._name = val+"_haha";
    }
});
console.log(obj2.name);
obj2.name="jack";
console.log(obj2.name);


var person = {_name:"Jack"};
Object.defineProperty(person,"name",{
    configurable:false,
    enumerable:true,
    set:function(val){this._name = val},
    get:function(){return this._name}
});
console.log(person.name);
person.name = "Lucy";
console.log(person.name);
delete person.name;
console.log(person.name);


var obj = {x:5};
Object.defineProperty(obj,"y",{
    configurable:false,
    writable:false,
    enumerable:true,
    value:6
});
Object.defineProperty(obj,"z",{
    configurable:false,
    value:7
});
Object.getOwnPropertyDescriptor(obj,"x");


var obj = {x:5};
Object.defineProperty(obj,"y",{
    configurable:false,
    writable:false,
    enumerable:true,
    value:6
});
Object.defineProperty(obj,"z",{
    configurable:false,
    value:7
});
Object.getOwnPropertyDescriptor(obj,"x");


var empty1 = {a:1};
console.log(Object.isExtensible(empty1));//true

//对象是否可以扩展与对象的属性是否可以配置无关
empty2 = Object.create({},{
    "a":{
        value : 1,
        configurable : false,//不可配置
        enumerable : true,//可枚举
        writable : true//可写
    }
});
console.log(Object.isExtensible(empty2));



(function () {
    var obj = {};
    var obj2 = Object.preventExtensions(obj);
    console.log(obj === obj2);
    var empty = {};
    console.log(Object.isExtensible(empty));
    empty.a = 1;
    Object.preventExtensions(empty);
    console.log(Object.isExtensible(empty));
    empty.b = 2;
    empty["c"] = 3;
    (function fail(){
        "use strict";
        empty.d = "4";
    })();
    Object.defineProperty(empty,"e",{value : 5});
    Object.defineProperty(empty,"a",{value : 2});
    console.log(empty.a);
})();