console.log("\n\n6.2");

const adj = ["super", "wonderful", "bad", "angry", "careful"];

function myFun(){
    let ques = prompt("Enter your name: ");
    let fun = Math.floor(Math.random() * adj.length);
    console.log(adj[fun] + " " + ques);
}
myFun();