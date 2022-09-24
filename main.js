song = "";

song2 = "";

function preload(){
song = loadSound("astalosTheme.mp3");
song = loadSound("chamelosTheme.mp3");
}

function setup(){
    canvas = createCanvas(567, 456);
    canvas.center();
    video = createCapture(VIDEO);
     video.hide();
}

function draw(){
    image(video, 200, 190, 567, 456);
}