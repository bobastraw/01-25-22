let x = 1;
let y = 1;
let easing = 0.05;
let value = 0;



function setup() {
  createCanvas(windowWidth, windowHeight);
  window.alert('Move mouse around and the eyes will follow. Click the mouse to change the color of the eyes. Press any key to "be seen".')
  r = random(255);
  g = random(255);
  b = random (255);
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
      fill(r, g, b);
      ellipse(x, y, 40, 40);
      fill(0);
      ellipse(x, y, 20, 20);

      fill(255); 
      ellipse(mouseX+20, y, 80, 80);
      fill(r, g, b);
      ellipse(mouseX+20, y, 40, 40);
      fill(0);
      ellipse(mouseX+20, y, 20, 20);

      fill(255);
      ellipse(mouseX, y/2, 80, 80);
      fill(r, g, b);
      ellipse(mouseX, y/2, 40, 40);
      fill(0);
      ellipse(mouseX, y/2, 20, 20);

      fill(255);
      ellipse(x, mouseY, 80, 80);
      fill(r, g, b);
      ellipse(x, mouseY, 40, 40);
      fill(0);
      ellipse(x, mouseY, 20, 20);

      fill(255);
      ellipse(mouseX, mouseY, 80, 80);
      fill(r, g, b);
      ellipse(mouseX, mouseY, 40, 40);
      fill(0);
      ellipse(mouseX, mouseY, 20, 20);

      fill(255);
      ellipse(x/.77, y, 80, 80);
      fill(r, g, b);
      ellipse(x/.77, y, 40, 40);
      fill(0);
      ellipse(x/.77, y, 20, 20);

      fill(255);
      ellipse(x/.88, y, 80, 80);
      fill(r, g, b);
      ellipse(x/.88, y, 40, 40);
      fill(0);
      ellipse(x/.88, y, 20, 20);

      fill(255);
      ellipse(x/.66, y, 80, 80);
      fill(r, g, b);
      ellipse(x/.66, y, 40, 40);
      fill(0);
      ellipse(x/.66, y, 20, 20);

      fill(255);
      ellipse(x, y/.88, 80, 80);
      fill(r, g, b);
      ellipse(x, y/.88, 40, 40);
      fill(0);
      ellipse(x, y/.88, 20, 20);

      fill(255);
      ellipse(x, y/.77, 80, 80);
      fill(r, g, b);
      ellipse(x, y/.77, 40, 40);
      fill(0);
      ellipse(x, y/.77, 20, 20);

      fill(255);
      ellipse(x, y/.66, 80, 80);
      fill(r, g, b);
      ellipse(x, y/.66, 40, 40);
      fill(0);
      ellipse(x, y/.66, 20, 20);

    if (keyIsPressed == true){
      y = 100;
      for (let x = 30; x <= 1500; x += 80) {
      for (let y = 30;  y <= 1500; y += 80) {
        fill(255);
        ellipse(x, y, 80, 80);
        fill(175, 49, 200);
        ellipse(x, y, 40, 40);
        fill(0);
        ellipse(x, y, 20, 20);
    }
  }
    }

}

function mousePressed(){
  r = random(255);
  g = random(255);
  b = random(255);
}




