var a = 123;
var b = new Number(a);
console.log(a == b);
console.log(a === b);
var str = "abcde";
console.log(str.length);
str.length = 1;
console.log(str.length,str);
var arr = [1,2,3,4];
console.log(arr.length);
arr.length = 1;
console.log(arr.length,arr);
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(true));
console.log(Boolean(false));
console.log(Boolean(0));
console.log(Boolean(NaN));
console.log(Boolean(1));
console.log(Boolean(""));
console.log(Boolean("abc"));
console.log(Boolean({}));
if(new Boolean(false)){
	console.log("执行");
}

//Number
console.log(Number(undefined));
console.log(Number(null));
console.log(Number(true));
console.log(Number(false));
console.log(Number(""));
console.log(Number("abc"));
console.log(Number("123.456xx"));
console.log(Number("32343,345xx"));
console.log(Number({x:1,y:2}));



console.log(parseFloat("123.456xx"));
console.log(parseFloat("32343,345xx"));
console.log(parseInt("123.456xx"));
console.log(parseInt("32343,345xx"));


//string
console.log(String(undefined));
console.log(String(null));
console.log(String(true));
console.log(String(false));
console.log(String(0));
console.log(String(234));
console.log(String({x:1,y:2}));


//隐式类型转换
var a = 3;
var b = 4;
console.log(typeof(a>b),a>b);   //false
console.log(typeof(a==b),a==b); //false
console.log(typeof(a<b),a<b);   //true


var c = "img" + 3 +".jpg";
var d = "23" - 5;
console.log(c,d);               //c:"img3.jpg"  d=18


var e = !23;                    //false
var f = !!0;                    //false
var f = !!"abc";                //true
var g = !!{};                   //true


var h = {x:1};
if(h){
	console.log("h:",h);
}                               //h = {x:1}