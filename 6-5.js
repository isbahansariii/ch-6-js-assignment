console.log("\n\n6.5");

let val = "1000";
(function () {
    let val = "100";
    console.log(val);
})();

let result = (function () {
    let val = "Isbah";
    return val;
})();

console.log(result);
console.log(val);

(function (val) {
    console.log(`My name is ${val}`);
})("Isbah");