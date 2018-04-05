console.log("小明回家");
var xx = "小明家中（书桌-书包-铅笔盒-...）";
console.log("在家-做作业中 1 ...全局上下文");
function goToStore(){
    var yy = "文具商店中（文具店老板-出售的文具...）";
    console.log("在文具店-买文具中  ...函数1上下文");
    console.log("在文具店-买文具中  ...函数1上下文 发现没带钱");
    goToBank();
    console.log("在文具店-买好文具  ...函数1上下文 返回家");
}
function goToBank(){
    var zz = "银行中（银行职员-柜员机...）";
    console.log("在银行-取钱 ...函数2上下文 返回文具店");
}
console.log("在家-做作业中 2 ...全局上下文 发现笔没油了");
goToStore();
console.log("在家-继续做作业...全局上下文");


//断点设置
console.log("全局上下文-start");
var x = 1;
function foo(){
    console.log("foo上下文-start");		//设置断定
    var y = 2;
    function bar(){
        console.log("bar上下文-start");	//设置断点
        var z = 3;
        console.log(x+y+z);
        console.log("bar上下文-end");	//设置断点
    }
    bar();
    console.log("foo上下文-end");		//设置断点
}
foo();									//设置断点
console.log("全局上下文-end");			//设置断点


console.log("全局上下文-start");
var x = "家中环境-";
function goToStore_A(){
    console.log("goToStore_A 上下文-start");	//设置断点
    var y = "文具店A环境-";
    function goToBank_C(){
        console.log("goToBank_C 上下文-start");	//设置断点
        var z = "银行C环境-";
        console.log(x+y+z);
        console.log("goToBank_C 上下文-end");	//设置断点
    }
    function goToBank_D(){
        console.log("goToBank_D 上下文-start");	//设置断点
        var z = "银行D环境-";
        console.log(x+y+z);
        console.log("goToBank_D 上下文-end");	//设置断点
    }
    goToBank_C();								//设置断点
    console.log("goToStore_A 上下文-end");		//设置断点
}

function goToStore_B(){
    console.log("goToStore_B 上下文-start");	//设置断点
    var y = "文具店B环境-";
    function goToBank_C(){
        console.log("goToBank_C 上下文-start");	//设置断点
        var z = "银行C环境-";
        console.log(x+y+z);
        console.log("goToBank_C 上下文-end");	//设置断点
    }
    function goToBank_D(){
        console.log("goToBank_D 上下文-start");	//设置断点
        var z = "银行D环境-";
        console.log(x+y+z);
        console.log("goToBank_D 上下文-end");	//设置断点
    }
    goToBank_C();								//设置断点
    console.log("goToStore_B 上下文-end");		//设置断点
}

goToStore_A();									//设置断点
console.log("全局上下文-end");					//设置断点