function setup() {
  createCanvas(1000, 800);
   background("rgb(233,211,93)");
}


function draw() {
  
  stroke ("rgb(109,109,196)");
  fill ("rgb(109,109,196)");
 
  
  // console.log(mouseIsPressed);
  
  if (mouseIsPressed){
    circle(mouseX, mouseY, 20, 35);
  }
}
