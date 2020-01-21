let buttons = document.getElementsByTagName("button");

let canvas = document.getElementById("notova_linka");
let ctx = canvas.getContext("2d");


function repaint(note) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let img = new Image();
    img.src = 'h_klic.png';
    img.onload = () => { 
        ctx.drawImage(img, 0, 0); 
        ctx.beginPath();
        ctx.fillStyle = 'black';
        ctx.arc(100, note.y, 9, 0, 2 * Math.PI);
        ctx.fill();        
        ctx.moveTo(109,note.y);
        ctx.lineTo(109,note.y - 50);
        ctx.stroke();
        if (note.tone.indexOf('is') > 0) {
            ctx.font = "20px Arial";
            ctx.fillText("#", 75, note.y + 7);
        }
        if (note.tone.indexOf('b') > 0) {
            ctx.font = "20px Arial";
            ctx.fillText("b", 75, note.y + 7);
        }
    }
}

let tones = [
    {tone: 'C', key: 'z', y: 125},
    {tone: 'Cis', key: 's', y: 125},
    {tone: 'D', key: 'x', y: 116},
    {tone: 'Dis', key: 'x', y: 116},
    {tone: 'E', key: 'x', y: 107},
    {tone: 'F', key: 'x', y: 98},
    {tone: 'Fis', key: 'x', y: 98},
    {tone: 'G', key: 'x', y: 89},
    {tone: 'Gis', key: 'x', y: 89},
    {tone: 'A', key: 'x', y: 80},
    {tone: 'Bb', key: 'x', y: 71},
    {tone: 'B', key: 'x', y: 71},
    {tone: 'C1', key: 'x', y: 62},
    {tone: 'Cis1', key: 'x', y: 62},
    {tone: 'D1', key: 'x', y: 53},
    {tone: 'Dis1', key: 'x', y: 53},
    {tone: 'E1', key: 'x', y: 44},
    {tone: 'F1', key: 'x', y: 35},
];

function findNote(tone) {
    for (let i = 0; i < tones.length; i++) {
        if (tones[i].tone == tone) {
            return tones[i];
        }
    }
}

function playNote(n) {
    let note = findNote(n);
    new Audio(note.tone + ".wav").play();
    repaint(note);
}

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", () => {
        playNote(buttons[i].innerText);
    });
}

document.addEventListener("keydown", event => {
    console.log(event.key);
    switch (event.key) {
        case "z":
            playNote('C');
            break;
        case "s":
            playNote('Cis');
            break;
        case "x":
            playNote('D');
            break;
        case "d":
            playNote('Dis');
            break;
        case "c":
            playNote('E');
            break;
        case "v":
            playNote('F');
            break;
        case "g":
            playNote('Fis');
            break;
        case "b":
            playNote('G');
            break;
        case "h":
            playNote('Gis');
            break;
        case "n":
            playNote('A');
            break;
        case "j":
            playNote('Bb');
            break;
        case "m":
            playNote('B');
            break;
        case "q":
            playNote('C1');
            break;
        case "2":
            playNote('Cis1');
            break;
        case "w":
            playNote('D1');
            break;
        case "3":
            playNote('Dis1');
            break;
        case "e":
            playNote('E1');
            break;
        case "r":
            playNote('F1');
            break;
    }
});

/*
function nota(x, y, ton) {
    this.x = x,
    this.y = y,
    this.ton = ton,
    this.paint = function() {
        ctx.beginPath();
        ctx.fillStyle = 'black';
        ctx.arc(this.x, this.y, 10, 0, 2 * Math.PI);
        ctx.fill();
        ctx.stroke();
    }
}
*/