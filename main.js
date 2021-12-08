nosex = 0;
nosey = 0;
function preload(){
    clown_nose = loadImage('https://i.postimg.cc/rpKwBW7N/red-ball-shining-circle-602179bfc92ba-774x680.png');

}
function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();

poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose', gotPoses);
}
function modelLoaded(){
    console.log('poseNet IS Initialized');
}
function draw(){
    image(video,0,0,300,300);
image(clown_nose,nosex,nosey,25,25);

}
function take_snapshot(){
    save('My-joker.png');
}
function gotPoses(results){

  if(results.length > 0){
      console.log(results);
      nosex =results[0].pose.nose.x-15;
      nosey =results[0].pose.nose.y-10;
  }  
}