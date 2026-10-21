let sentence = 1;
let context; 
let button = {
    x: 1000,
    y: 250,
    width: 400,
    height: 400
};

window.onload = function() {
    let canvas = document.getElementById("website");
    context = canvas.getContext("2d");
    document.addEventListener("click", click)
}

let funT = "This ia a great sentence";

function click (e){
    
    let rect = document.getElementById("website").getBoundingClientRect();
    let mouseX = e.clientX - rect.left;
    let mouseY = e.clientY - rect.top;

    if (mouseX >= button.x && mouseX <= button.x + button.width && mouseY >= button.y && mouseY <= button.y + button.height) {
        if (sentence == 2) {
            context.clearRect(0, 0, 1000, 900);
            funT = "sentence 2";
            context.fillStyle = "black";
            context.font="39px sans-serif";
                context.fillText( funT, 500, 300,);
        }
        if (sentence == 1) {
            context.clearRect(0, 0, 1000, 900);
            funT = "sentence 1";
            context.fillStyle = "black";
            context.font="39px sans-serif";
                context.fillText( funT, 500, 300,);
            sentence = 2;
        }
    }
}
