let sentence = 1;
let context; 
let button = {
    x: 850,
    y: 150,
    width: 500,
    height: 500
};

let buttonImg = new Image();
buttonImg.src = './button.png';

window.onload = function() {
    let canvas = document.getElementById("website");
    context = canvas.getContext("2d");
    document.addEventListener("click", click)
    context.drawImage(buttonImg, button.x, button.y, button.width, button.height);
}

let funT = "This ia a great sentence";

function click (e){
    
    let rect = document.getElementById("website").getBoundingClientRect();
    let mouseX = e.clientX - rect.left;
    let mouseY = e.clientY - rect.top;

    if (mouseX >= button.x && mouseX <= button.x + button.width && mouseY >= button.y && mouseY <= button.y + button.height) {
        if (sentence == 3) {
            context.clearRect(0, 650, 1300, 900);
            funT = "Your left elbow looks just splendid.";
            context.fillStyle = "black";
            context.font="39px sans-serif";
                context.fillText( funT, 50, 750,);
            sentence = sentence + 1;
        }
        if (sentence == 2) {
            context.clearRect(0, 650, 1300, 900);
            funT = "The lighting around you makes your skin look particularly orenge.";
            context.fillStyle = "black";
            context.font="39px sans-serif";
                context.fillText( funT, 50, 750,);
            sentence = sentence + 1;
        }
        if (sentence == 1) {
            context.clearRect(0, 650, 1300, 900);
            funT = "Your eyebrows look pleasantly simetrical today.";
            context.fillStyle = "black";
            context.font="39px sans-serif";
                context.fillText( funT, 50, 750,);
            sentence = 2;
        }
    }
}
