nosex=0;
nosey=0;
function preload(){
    clf=loadImage('https://i.postimg.cc/Qdsxz4qM/1074295-removebg-preview.png');
    mstch=loadImage('https://i.postimg.cc/3x3QzSGq/m.png');
}
function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    posenet=ml5.poseNet(video,modelLoaded);
    posenet.on('pose',gotPoses);
}
function modelLoaded(){
    console.log('poesnet is initialized');
}
function gotPoses(results){
    if (results.length>0){
        console.log(results);
        nosex=results[0].pose.nose.x-22;
        console.log("nosex="+nosex);
        nosey=results[0].pose.nose.y-10;
        console.log("nosey="+nosey);
    }
}
function draw(){
    image(video,0,0,300,300);
    image(mstch,nosex,nosey,50,50);
}
function take_snapshot(){
save('filterimage.png');
}
