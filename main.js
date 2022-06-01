lipsX=0;
lipsY=0;

function preload() {
robo_lips = loadImage('https://e7.pngegg.com/pngimages/776/375/png-clipart-moustache-moustache.png');
}

function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    posenet = ml5.poseNet(video, modelLoded);
    posenet.on('pose', gotPoses);
}

function modelLoded() {
    console.log('PoseNet Is Initialized');
}

function gotPoses(results){
    if(results.length > 0)
    {
        console.log(results);
        lipsX = results[0].pose.lipsX.x;
        lipsY = results[0].pose.lips.y;
        
        console.log("lips x = " + lipsX);
        console.log("lips y = " + lipsY);
    }
}

function draw(){
image(video, 0, 0, 300, 300);
image(robo_lips,lipsX,lipsY,30,30);
}

function take_snapshot(){
    save('myFilterImage.png');
}