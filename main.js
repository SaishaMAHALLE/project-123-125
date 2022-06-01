function setup() {
    video=createCapture(VIDEO);
    video.size(600, 650);
    video.position(100, 100);

    canvas=createCanvas(600, 450);
    canvas.position(800, 200);

    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on("pose" , gotposes);
}

function modelLoaded() {
    console.log("poseNet is initialized");
}

leftwristX=0;
rightwristX=0;

difference=0;

function gotposes(results) {

if(results.length > 0){
    console.log(results);

    leftwristX=results[0].pose.leftWrist.x;

    rightwristX=results[0].pose.rightWrist.x;

    difference=floor(leftwristX - rightwristX);

    console.log("left wrist x = " + leftwristX + " ,right wrist x = " + rightwristX + " ,difference = " + difference);
}
}

function draw() {
    background("#ef71bb");
    textSize(difference);
    fill("FFE787");
    text('Saisha', 50, 400);

}