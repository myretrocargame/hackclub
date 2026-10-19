// let button = document.getElementById('buttonID')

// let funT = document.createElement("p");
// funT.style.textAlign = "center";
// document.body.appendChild(funT);

// button.addEventListener(click, function() {
//   funT.textContent = "It's alive! It's alive!";
// }
function click (e){
    let rect = document.getElementById("board").getBoundingClientRect();
    let mouseX = e.clientX - rect.left;
    let mouseY = e.clientY - rect.top;
}
