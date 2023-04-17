noseX = 0;
noseY = 0;

function preload() {
    nose = loadImage("https://i.postimg.cc/MGdMHQ8C/Clown-Nose.png");
}

function setup() {
    canvas = createCanvas(400, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(600, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelReady);
    poseNet.on('pose', gotPoses);
}

function modelReady() {
    console.log("poseNet is ready!")
}

function gotPoses(results) {
    if (results.length > 0) {

        console.log(results);
        noseX = results[0].pose.nose.x - 120;
        noseY = results[0].pose.nose.y - 15;
        console.log("nose x = " + noseX);
        console.log("nose y = " + noseY);

    }
}

function draw() {
    image(video, 0, 0, 400, 300);
    image(nose, noseX, noseY, 30, 30);
}

function take_snapshot() {
    save("my_clown_picture.png");
}