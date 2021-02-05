/*
form contains input box and a button to login.On pressing the button,players name should get resistered in data base
and a new player should be created
to create a form we are using HTML DOM model
DOM means document objct model(used to create any content like a form)
*/
class Form{
    constructor(){
        this.title=createElement("h1")
        this.input=createInput("")
        this.button=createButton("Play")
        this.reset=createButton("Reset")
        this.welcome=createElement("h2")
        this.rankDisplay=createElement("h1")
    }
    display(){
 
 this.title.html("CAR RACING")
this.title.position(innerWidth/2-100,40)
this.reset.position(20,30)
 this.reset.mousePressed(()=>{
   player.updateCount(0)
   game.update(0)
   Player.updateRank(0)
 })
 this.input.position(innerWidth/2-80,250)

 
 this.button.position(innerWidth/2-60,300)

 //var input1=createInput("")
 this.button.mousePressed(()=>{
 this.input.hide()
 this.button.hide() 
 playercount+=1
 player.index=playercount
   player.name=this.input.value()
 
 this.welcome.html("WELCOME "+player.name+" ! wait for others to join")
 this.welcome.position(innerWidth/2-185,200)
  
 player.update(player.name)
 player.updateCount(player.index)
 })
    }
}