let imagen
function preload() {
  // put preload code here
  imagen = loadImage("./images/albedo.jpg")
}

function setup() {
  // put setup code here
  createCanvas(1000,800, WEBGL)
}

function draw() {
  // put drawing code here
  background(255)
  rotateX(frameCount*0.01)
  rotateY(frameCount*0.01)
  rotateZ(frameCount*0.01)
  //textureImage(imagen)
  piramide(150)
  fill(255,0,0)
  translate(300,0,0)
  
  //piramide(50)
  
}


function piramide(t){
  textureMode(NORMAL)
  
  //base
  texture(imagen)
  fill(255,0,0)
  beginShape()
  vertex(-t,-t,-t, 0,0)
  vertex(t, -t, -t,1,0)
  vertex(t, t, -t,1,1)
  vertex(-t, t, -t,0,1)
  vertex(-t,-t, -t, 0,0)
  endShape()

  //cara 1
  fill(0,255,0)
  beginShape()
  vertex(0,0,t,0.5,0) //origen
  vertex(-t, -t, -t,0,1)
  vertex(t, -t, -t,1,1)
  vertex(0,0,t,0.5,0)
  endShape()

  //cara 2
  fill(0,0,255)
  beginShape()
  vertex(0,0,t)
  vertex(t, -t, -t)
  vertex(t, t, -t)
  vertex(0,0,t)
  endShape()
 
  //cara 3
  fill(0,255,255)
  beginShape()
  vertex(0,0,t)
  vertex(t, t, -t)
  vertex(-t, t, -t)
  vertex(0,0,t)
  endShape()

  //cara 4
  fill(255,255,0)
  beginShape()
  vertex(0,0,t)
  vertex(-t, t, -t)
  vertex(-t, -t, -t)
  vertex(0,0,t)
  endShape()


}
