var balloon;
var background, backgroundImg;

function preload() {
  backgroundImg = loadImage("background.png");
  balloonImage = loadImage("balloon03.png");
}

function setup() {
  database = firebase.database();
  console.log(database);
  createCanvas(800, 400);


  balloon = createSprite(250, 100, 20, 20);
  balloon.addImage(balloonImage, "balloon");
  balloon.scale = 0.3;

}

function draw() {
  background(backgroundImg, "Background");

  fill("black");
  text("Use Arrow Keys to move the Balloon!", 10, 30);

  if (keyDown(LEFT_ARROW)) {
    balloon.x = balloon.x - 10;
  }
  else if (keyDown(RIGHT_ARROW)) {
    balloon.x = balloon.x + 10;
  }
  else if (keyDown(UP_ARROW)) {
    balloon.y = balloon.y - 10;
    balloon.scale = 0.35;
  }
  else if (keyDown(DOWN_ARROW)) {
    balloon.y = balloon.y + 10;
    balloon.scale = 0.25;
  }

  drawSprites();
}

function changePosition(x, y) {
  ball.x = ball.x + x;
  ball.y = ball.y + y;
}

function readValue(data) {
  position = data.val();

  ball.x = position.x;
  ball.y = position.y;

}

function showError() {
  console.log("Error in connecting to Database");
}

function updateHeight(x, y) {
  database.ref('balloon/position').set({
    'x': position.x + x,
    'y': position.y + y,
  })
}

function readHeight(data) {
  height = data.val();
  balloon.x = height.x;
  balloon.y = height.y;
}