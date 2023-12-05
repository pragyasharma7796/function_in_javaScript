//add two number by using curry function 

function addNumber(num1){
    return function (num2){
        return num1 +  num2;
    }
}

console.log(addNumber(4)(6));
console.log(addNumber(8)(6));
console.log(addNumber(6)(6));
console.log(addNumber(4)(12));