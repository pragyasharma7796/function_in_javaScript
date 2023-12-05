function fac(num){
    if(num <0){
        return "write non negative integer "
    }
    if(num <=1){
        return 1;
    }
    return num * fac(num-1);
}

console.log(fac(5));
console.log(fac(9));
console.log(fac(3));
console.log(fac(8));
console.log(fac(-7));