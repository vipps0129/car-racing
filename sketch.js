var database,gameState=0,form,player,game,playercount;
var info
var c1,c2,c3,c4,cars;
var c1i,c2i,c3i,c4i,s1,s2,track;

function preload(){
  track=loadImage("assets/track.jpg")
  c1i=loadImage("assets/car1.png")
  c2i=loadImage("assets/car2.png")
  c3i=loadImage("assets/car3.png")
  c4i=loadImage("assets/car4.png")
  s1=loadSound("assets/cars.mp3")
  s2=loadSound("assets/s2.mp3")
}
function setup(){
  database = firebase.database();
  
  createCanvas(innerWidth-40,innerHeight-22);
game=new Game()
game.getState()
game.start()

}

function draw(){
  
  if(playercount===2){
    game.update(1)
  }
  if(gameState===1){
    clear()
    game.play()
  }
  if(gameState===2){
    game.end()
  }
}

