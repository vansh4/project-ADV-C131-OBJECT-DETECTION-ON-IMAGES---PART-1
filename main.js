img="";
status=true;
function setup(){
    canvas= createCanvas(640,420);
    canvas.center();
    objectdetector=ml5.objectDetector('cocossd',modelLoaded)
    document.getElementById("status").innerHTML="status Detecting object";
}
function preload(){
    img=loadImage("dog_cat.jpg");
}

function draw(){
    image(img,0,0,640,420);
    fill("#ff0000");
    text("Dog",45,75);
    noFill();
    stroke("#ff0000");
    rect(30,60,450,350);

    fill("#0000ff");
text("Cat",300,100);
noFill();
stroke("#0000ff");
rect(300,88,180,280);
}

function modelLoaded(){
    console.log("Model loaded");
    status=true;
    objectdetector.detect(img,gotResult);

}

function gotResult(error,results){
    if(error){
        console.log(error);
}
    else{
        console.log(results);
    }
}
