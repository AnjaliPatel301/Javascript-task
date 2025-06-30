// Task 7: Simple Calculator using if-else

let num1=parseInt(prompt("enter num1 :"));
let num2=parseInt(prompt("enter num2 :"));
let oprator=prompt("enter oprator(+,-,*,/)");
let result;

if(oprator == "+"){
    result = num1+num2;
}
else if(oprator == "-"){
    result =num1-num2;
}
else if(oprator == "*"){
    result =num1*num2;
}
else if(oprator == "/"){
    result =num1/num2;
}
else{
    result ="not found😂"

}
console.log(result)
