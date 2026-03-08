function setup() {
  createCanvas(600, 600);
  date = new Date();
  startUpTime = date.getTime();
  oldTime = date.getTime();
}

function draw() {
  background(0);
  
  circle(circX,circY,circRadius);
  circX-=5;
  if(circX <= 0-circRadius/2){
    circX = 600;
  }
  hello();
}