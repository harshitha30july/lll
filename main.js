LipsX=0;
LipsY=0;
function preload() {
    girl_lips_img=loadImage("https://i.postimg.cc/zBfHcYrn/l1-removebg-preview.png");
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();

    video = createCapture(VIDEO);
    video.size(300, 300);

    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);

}

function modelLoaded() {
    console.log("model loaded!!");
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        LipsX=results[0].pose.lips.x;
        LipsY=results[0].pose.lips.y;
        console.log("lips x= "+LipsX);
        console.log("lips y= "+LipsY);
    }
}

function draw() {
    image(video, 0, 0, 300, 300);

    image(girl_lips_img,LipsX-15,LipsY-15,30,30);
    
}
function download_img() 
{
    save("beauty lips.png")
}