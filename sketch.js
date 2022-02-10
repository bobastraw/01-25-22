let x = 1;
let y = 1;
let easing = 0.05;
let value = 0;


function setup() {
  createCanvas(windowWidth, windowHeight);

}


function draw() {
  background(0);

    let targetX = mouseX;
    let dx = targetX - x;
    x += dx * easing;
  
    let targetY = mouseY;
    let dy = targetY - y;
    y += dy * easing;
      fill(255);
      ellipse(x, y, 80, 80);
      fill(value*3, value+67, value+170);
      ellipse(x, y, 40, 40);
      fill(0);
      ellipse(x, y, 20, 20);

      fill(255); 
      ellipse(mouseX+20, y, 80, 80);
      fill(value-36, value+100, value+80);
      ellipse(mouseX+20, y, 40, 40);
      fill(0);
      ellipse(mouseX+20, y, 20, 20);

      fill(255);
      ellipse(mouseX, y/2, 80, 80);
      fill(value+167, value+200, value-35);
      ellipse(mouseX, y/2, 40, 40);
      fill(0);
      ellipse(mouseX, y/2, 20, 20);

      fill(255);
      ellipse(x, mouseY, 80, 80);
      fill(value*6, value+175, value+250);
      ellipse(x, mouseY, 40, 40);
      fill(0);
      ellipse(x, mouseY, 20, 20);

      fill(255);
      ellipse(mouseX, mouseY, 80, 80);
      fill(value+234, value-56, value+67);
      ellipse(mouseX, mouseY, 40, 40);
      fill(0);
      ellipse(mouseX, mouseY, 20, 20);

      fill(255);
      ellipse(x/.77, y, 80, 80);
      fill(value+200, value+179, value-30);
      ellipse(x/.77, y, 40, 40);
      fill(0);
      ellipse(x/.77, y, 20, 20);

      fill(255);
      ellipse(x/.88, y, 80, 80);
      fill(value+289, value+157, value-43);
      ellipse(x/.88, y, 40, 40);
      fill(0);
      ellipse(x/.88, y, 20, 20);

      fill(255);
      ellipse(x/.66, y, 80, 80);
      fill(value+199, value+67, value-78);
      ellipse(x/.66, y, 40, 40);
      fill(0);
      ellipse(x/.66, y, 20, 20);

    if (keyIsPressed == true){
      fill(250);
      ellipse (x, y, 80, 80);
    }

}

function mousePressed(){
  value = value + 5;
      
    if (value > 255) {
        value = 0;
    }

}


