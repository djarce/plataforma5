let source = document.getElementById("source").textContent;

document.getElementById("destination").textContent = source;

let swap1 = document.getElementById("swap_1");
let swap2 = document.getElementById("swap_2");
let content1 = document.getElementById("swap_1").textContent;
let content2 = document.getElementById("swap_2").textContent;

swap1.textContent = content2;

swap2.textContent = content1;
