function isprime(n){
    
    if(n<2 ){
        return false;

    }
    if(n==2){
        return true;
    }

    for(let i=2;i<=Math.sqrt(n);i++){
        if(n%i==0){
            return false;
        }
        else {
            return true;
        }
    }
}
let n = 8;
if(isprime(n)){
    console.log("it is prime")
}
else{
    console.log("not prime");
}