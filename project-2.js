console.log("\n\nProject#02");

const one = () => console.log('one');
const two = () => console.log('two');
const three = () => {
    console.log('three');
    two();
    one();
}
const four = () => {
    console.log('four');
    setTimeout(one, 1000);
    three();
}
four();