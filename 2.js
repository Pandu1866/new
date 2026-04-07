let a = 0
let b =1
let n = 10
console.log(a + " " + b);

for(let i=0;i<n;i++){
    let c = a+b;
    console.log(c);
    a=b;
    b=c;

}