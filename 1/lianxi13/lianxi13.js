var objProto = {
    z:3
};

var obj = Object.create(objProto);
obj.x = 1;
obj.y = 2;

console.log(obj.x);//1
console.log(obj.y);//2
console.log(obj.z);//3

console.log(obj.toString);//原型链上有toString属性

for(var k in obj){//通过for...in遍历所有原型链上的属性
    console.log(k,obj[k]);//是否能遍历到toString？  
}

//修改obj属性的特性
var obj = {
    x:1,
    y:2
};
//Object.defineProperty(obj,"x",{writable:false,value:11,enumerable:false,configurable:true});
Object.defineProperty(obj,"x",{enumerable:false});
for(var k in obj){
    console.log(k,obj[k]);
}


var person = {name:"Jack"};
Object.defineProperty(person,"name",{
    writable:false,//改成true会如何 变成可写
    configurable:false,//改成true会如何 能删除
    enumerable:true,
    value:"Mike"
});
console.log(person.name);//输出什么？ JACK
person.name = "Lucy";
console.log(person.name);//输出什么？JACK
delete person.name;
console.log(person.name);


obj.z = 3;
for(var k in obj){
    console.log(k,obj[k]);
}

//Part 2222222222222222

var obj = {
    x:1,
    y:2
};
//直接添加的属性，其所有特性默认都是true
obj.z = 3;

/*通过Object.defineProperty方法添加的属性，除了手动修改，其所有特性默认都是false*/
Object.defineProperty(obj,"w",{value:456,configurable:true});//writable,enumerable没有指定，所以默认为false
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
    configurable:false,//若为true会如何  可以删除
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


var o4 = {};
o4.a = "aaa";
Object.defineProperty(o4,"b",
    {configurable:true,enumerable:false,writable:true,value:"bbb"}
);
var o5 = Object.create(o4);
o5.c = 234;
Object.defineProperty(o5,"d",{enumerable:false,value:567});
for(var k in o5){
    if(o5.hasOwnProperty(k)){
        console.log("o5 自有可遍历属性：",k,o5[k]);
    }else {
        console.log("o5 非自有可遍历属性：",k,o5[k]);
    }
}
console.log(o5.propertyIsEnumerable("a"),
    o5.propertyIsEnumerable("b"),
    o5.propertyIsEnumerable("c"),
    o5.propertyIsEnumerable("d")
);
console.log("a" in o5,"b" in o5,"c" in o5,"d" in o5);
console.log(Object.keys(o5));
console.log(Object.getOwnPropertyNames(o5));


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
    //Object.preventExtensions 将原对象变得不可扩展,并且返回原对象.
    var obj = {};
    var obj2 = Object.preventExtensions(obj);
    console.log(obj === obj2);

    //新创建的对象默认是可扩展的
    var empty = {};
    console.log(Object.isExtensible(empty));
    empty.a = 1;

    //将其变为不可扩展对象
    Object.preventExtensions(empty);
    console.log(Object.isExtensible(empty));

    //使用传统方式为不可扩展对象添加属性
    empty.b = 2;
    empty["c"] = 3;

    //在严格模式中,为不可扩展对象添加属性将抛出错误
    (function fail(){
        "use strict";
        empty.d = "4";
    })();

    //使用 Object.defineProperty方法为不可扩展对象添加新属性会抛出异常
    Object.defineProperty(empty,"e",{value : 5});
    Object.defineProperty(empty,"a",{value : 2});
    console.log(empty.a);
})();