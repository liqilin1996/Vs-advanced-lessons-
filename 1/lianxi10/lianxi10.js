(function max( x,y){
    console.log("the max is",x>y?x:y);
}(2,3));

(function (x,y){
    console.log("the min is",x<y?x:y);
})(2,3);

(function() {
    console.log("111");
})();
(function () {
    console.log("222");
})()

var i = function(){
    return 10;
}(); 


true && function(a,b){
    return a>b?a:b;
}(5,9);


!function(x,y){
    return x==y?true:false;
}("5",5);

(function () { 
    var x = 10;
    document.onclick = function () {
        //console.log("x = ",x);
        alert("x = "+x);
    };
})();  


function f(){
    var getNumFuncs = [];
    for(var i=0;i<10;i++){
        (function (j) {
            getNumFuncs[j] = function(){return j;};
        })(i);
    }
    return getNumFuncs;
}
var tmp = f();
tmp[3]();


var tabs = document.getElementsByClassName('tabs')[0].children;
var contents = document.getElementsByClassName('show')[0];

for(var i=0;i<tabs.length;i++) {
    (function (i) {
        tabs[i].onclick=function(){
            for (var j = 0; j < tabs.length; j++) {
                tabs[j].className = '';
            }
            this.className = "active";
            contents.innerHTML = "导航" + i + "内容";
        };
    }(i));
}


var max = 10;
var fn = function (x) {
    if(x > max){
        console.log(x);
    }
};
(function (f) {
    var max = 100;
    f(15);
})(fn);