console.log("\n\n6.7");

let start = 10;
function loop1(value) {
    console.log(value);
    if (value < 1) {
        return;
    }
    return loop1(value - 1);
}

function loop2(value) {
    console.log(value);
    if (value > 0) {
        value--;
        return loop2(value);
    }
    return;
}
console.log("Loop 1: ")
loop1(start);
console.log("\nLoop 2: ")
loop2(start);