let largest;
var lar = (num1,num2,num3) => {
if(num1 >= num2 && num1 >= num3) {
    largest = num1;
}
else if (num2 >= num1 && num2 >= num3) {
    largest = num2;
}
else {
    largest = num3;
}
return largest;

}
console.log(lar(3,7,4));