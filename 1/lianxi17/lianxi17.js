window.onload = function (e) {
    var div1 = document.getElementById("div1");
    var div2 = document.getElementById("div2");
    var eventHandler = function (e) {
        console.log(e.clientX,e.clientY);
    }
    div1.onclick = eventHandler;
    div1.onclick = function(){
        console.log("xx");
    };
    div2.onclick = eventHandler;
}


window.onload = function (e) {
    var div1 = document.getElementById("div1");
    var div2 = document.getElementById("div2");
    var eventHandler = function (e) {
        console.log(e.clientX,e.clientY);
    }
    div1.addEventListener("click",eventHandler);
    div1.addEventListener("click",function(){
        console.log("xx");
    })


window.onload = function (e) {
    var div1 = document.getElementById("div1");
    var div2 = document.getElementById("div2");
    var eventHandler = function (e) {
        var myEvent = new Event("MyEvent");
        div1.dispatchEvent(myEvent);

    }
    div1.onclick = eventHandler;
    div2.addEventListener("MyEvent",function (e) {
        console.log("div2 listener",e.type);
    },false);

    document.addEventListener("MyEvent",function (e) {
        console.log("document handler");
    },true);

    document.body.addEventListener("MyEvent",function (e) {
        console.log("body handler");
    },true);
   
}