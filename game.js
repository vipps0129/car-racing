/*this class object  should be able to read the game states and update to data base
it shoud be able to start itself and display the game on the screen depending on the game state
when game state is 0 we want a form and player object to be created*/
class Game{
    constructor(){

    }
//read game statee from data base
    getState(){
 var g=database.ref("gamestate")
 g.on("value",(data)=>{
  gameState=data.val()
 

 })

    }
  //write game state in data base
    update(s){

        database.ref("/").update({gamestate:s})
    }
    start(){
        if(gameState===0){
            form=new Form()
            form.display()
            player=new Player()
            player.getCount()
           // s2.play()
        }
        c1=createSprite(300,400)
        c1.addImage("c1",c1i)
        c2=createSprite(500,400)
        c2.addImage("c2",c2i)
        //c3=createSprite(700,400)
       // c4=createSprite(900,400)
        cars=[c1,c2]
    }
    play(){
    form.welcome.hide()
    form.title.hide()
    Player.getInfo()
    player.getRank()
    if(info!==undefined){
        background("brown")
        image(track,0,-displayHeight*9,innerWidth,displayHeight*10)
 var x=45
 var y
 var index=0
 for(var i in info){
     x=x+500
     y=innerHeight-info[i].distance; //500-0
     index=index+1
    cars[index-1].x=x
    cars[index-1].y=y
    textSize(20)
    fill("yellow")
    text(info[i].name,x-30,y+70)
    if(index===player.index){
 fill("yellow")
 ellipse(x,y,70,70)
 camera.position.x=innerWidth/2
 camera.position.y=cars[index-1].y
    }
 }
 
 
    }
    if(keyDown("up")&&player.distance<8400&&player.index!=null){
        player.distance+=100
        console.log(player.distance)
        player.update()
        //s1.play()
    }

    if(player.distance>8299){
        
        //s1.stop()
        if(player.distance===8300){
        player.rank+=1
        form.rankDisplay.html("RANK : "+player.rank)
        form.rankDisplay.position(50,50)
        
        Player.updateRank(player.rank)
        }
    
        //if(player.distance>8300){gameState=2}
        
    }
    drawSprites()
    }
    end(){
console.log("game ended"+player.rank)
    }
}
