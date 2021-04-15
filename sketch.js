let array = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220);

  strokeWeight(5);
}

function draw() {

  if (mouseIsPressed ==true){
    line(mouseX, mouseY, pmouseX, pmouseY);

  }

}

function keyTyped(){

  if (key === 's'){
    saveCanvas('fileName', 'png' )
  } else if (key === 'd'){


  }

  return false;
}
