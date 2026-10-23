let sentence = 1;
let fromlasttofirstsentence = 0;
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
        if (sentence == 5) {
            context.clearRect(0, 650, 1300, 900);
            funT = "The way you pronounce the word moustache is like music to my ears.";
            context.fillStyle = "black";
            context.font="39px sans-serif";
                context.fillText( funT, 50, 750,);
        }
        if (sentence == 4) {
            context.clearRect(0, 650, 1300, 900);
            funT = "Your prefrontal cortex is beautiful right now.";
            context.fillStyle = "black";
            context.font="39px sans-serif";
                context.fillText( funT, 50, 750,);
            sentence = sentence + 1;
        }
        if (sentence == 3) {
            context.clearRect(0, 650, 1300, 900);
            funT = "Your left elbow looks just splendid today.";
            context.fillStyle = "black";
            context.font="39px sans-serif";
                context.fillText( funT, 50, 750,);
            sentence = sentence + 1;
        }
        if (sentence == 2) {
            context.clearRect(0, 650, 1300, 900);
            funT = "The lighting around you makes your skin look particularly orange.";
            context.fillStyle = "black";
            context.font="39px sans-serif";
                context.fillText( funT, 50, 750,);
            sentence = sentence + 1;
        }
        if (fromlasttofirstsentence == 5){
            sentence = 1;
        }
        if (sentence == 1) {
            context.clearRect(0, 650, 1300, 900);
            funT = "Your eyebrows look pleasantly simetrical today.";
            context.fillStyle = "black";
            context.font="39px sans-serif";
                context.fillText( funT, 50, 750,);
            sentence = 2;
        }
        fromlasttofirstsentence = fromlasttofirstsentence + 1;
    }
}
