let [m1 = 1, n1 = m1] = []; 
let [m2 = 1, n2 = m2] = [2]; 
let [m3 = 1, n3 = m3] = [1, 2];
console.log(m1,n1,m2,n2,m3,n3);


let a = [];
let b=[2,3,4];
[a[0],a[1],a[2]] = b;
console.log(a == b);

let a = [];
let b=[2,3,4];
a = b;
console.log(a == b);


let [x8, y8, z8] = new Set(["a", "b", "c"]);

function* fibs() {
    var a8 = 0;
    var b8 = 1;
    while (true) {
        yield a8;
        [a8, b8] = [b8, a8 + b8];
    }
}
var [first, second, third, fourth, fifth, sixth,xxx,yyy,zzz,mm,nn,pp] = fibs();
console.log(first, second, third, fourth,fifth,sixth,xxx,yyy,zzz,mm,nn,pp);


const [a, b, c, d, e] = 'hello';
console.log(a); 
console.log(b); 
console.log(c); 
console.log(d); 
console.log(e);


function move1({x = 0, y = 0} = {}) {
    return [x, y];
}
console.log(move1({x: 3, y: 4}));
console.log(move1({x: 3}));
console.log(move1({}));
console.log(move1());