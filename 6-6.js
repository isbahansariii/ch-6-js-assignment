console.log("\n\n6.6");

function calcFactorial(number) {
    // console.log(number);
    if (number === 0) {
        return 1;
    }
    else {
        return number * calcFactorial(--number);
    }
}
let n=3;
console.log("Factorial of " + n + " is: " + calcFactorial(n));