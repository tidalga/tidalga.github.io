function keyPressed(){
  date = new Date();
  let newTime = date.getTime();
  print("Since last: " + (newTime-oldTime));
  print("Total: " + (newTime-startUpTime));
  oldTime = newTime;
  
  print("MouseX: " + mouseX);
  print("MouseY: " + mouseY);
  if(mouseX <= circX+circRadius/2 && mouseX >= circX-circRadius/2 
     && mouseY <= circY+circRadius/2 && mouseY >= circY-circRadius/2){
    circX = 600+circRadius/2;
    circY = random(circRadius,600-circRadius);
  }
}

function mouseClicked(){
  // print("MouseX: " + mouseX);
  // print("MouseY: " + mouseY);
  // if(mouseX <= circX+circRadius/2 && mouseX >= circX-circRadius/2 
  //    && mouseY <= circY+circRadius/2 && mouseY >= circY-circRadius/2){
  //   circX = 600+circRadius/2;
  //   circY = random(circRadius,600-circRadius);
  // }
}