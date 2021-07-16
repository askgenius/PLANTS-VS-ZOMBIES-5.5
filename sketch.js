var field, fieldImage;
var peashooter, peashooterImage;
var zombiehead, zombieheadImage;
var sunflower, sunflowerImage;
var wallnut, wallnutImage;
var zombie, zombieImage;
var sun, sunImage;
var pea, peaImage;
var peaGroup, zombieGroup

function preload() {
  fieldImage = loadImage("field.png")
  peashooterImage = loadImage("peashooter.png")
  zombieheadImage = loadImage("zombiehead.png")
  sunflowerImage = loadImage("sunflower.png")
  wallnutImage = loadImage("wallnut.png")
  zombieImage = loadImage("zombie.png")
  sunImage = loadImage("sun.png")
  peaImage = loadImage("pea.png")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  field = createSprite(width / 2, height / 2)
  field.addImage(fieldImage)
  field.scale = 0.9


  peashooter = createSprite(300, height / 2)
  peashooter.addImage(peashooterImage)
  peashooter.scale = 0.5
  for (var i = 1; i <= 5; i++) {
    

  }


  peaGroup = new Group()
  zombieGroup = new Group()

}

function draw() {
  background("lightblue")
  spawnpea()

  spawnzombie()


  // peashooter = createSprite(300, height / 4 - 200)
  // peashooter.addImage(peashooterImage)
  // peashooter.scale = 0.5

  // peashooter = createSprite(300, height - 350)
  // peashooter.addImage(peashooterImage)
  // peashooter.scale = 0.5
  

  for (var i = 0; i < 5; i++) {
    if (zombieGroup.isTouching(pea)) {
      pea.lifetime=0
      
      zombieGroup[i].changeAnimation("dead")
      zombieGroup[i].velocityX = 0
    }
  }

  drawSprites();
}

function spawnpea() {
   
    
  // if (frameCount % 100 === 0) {
    pea = createSprite(300, height / 2 - 80)
    pea.addImage(peaImage)
    pea.scale = 0.5
        pea.visible = false
    //}
// peaGroup.add(pea)


if (keyDown("up")) {
  peashooter.y -= 10
  pea.y = peashooter.y

} 

if (keyDown("down")) {
  peashooter.y += 10
  pea.y = peashooter.y

} 
  // pea = createSprite(300, height / 4 - 270)
  // pea.addImage(peaImage)
  // pea.scale = 0.5
  // pea.velocityX = Math.round(random(10, 12))
  // pea.lifetime = 500

  // pea = createSprite(300, height - 400)
  // pea.addImage(peaImage)
  // pea.scale = 0.5
  // pea.velocityX = Math.round(random(10, 12))
  // pea.lifetime = 500


if (keyDown("right")) {
    
  pea.velocityX = Math.round(random(10, 12))
  pea.visible = true

}
}

function spawnzombie() {

  // zombie = createSprite(width + 100, height / 4 - 70)
  // zombie.addImage(zombieImage)
  // zombie.scale = 0.2
  // zombie.velocityX = Math.round(random(-10, -12))
  // zombie.lifetime = 500


  // zombie = createSprite(width + 100, height - 400)
  // zombie.addImage(zombieImage)
  // zombie.scale = 0.2
  // zombie.velocityX = Math.round(random(-10, -12))
  // zombie.lifetime = 500

  if (frameCount % 200 === 0) {
    zombie = createSprite(width + 100, Math.round(random(100, height)))
    zombie.addAnimation("zombie", zombieImage)
    zombie.addAnimation("dead", zombieheadImage)
    zombie.changeAnimation("zombie")
    zombie.scale = 0.2
    zombie.velocityX = Math.round(random(-10, -12))
    zombie.lifetime = 500
    zombieGroup.add(zombie)



  }
}