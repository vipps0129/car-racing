class Player{
    constructor(){
        this.index=null
        this.distance=0
        this.name-null
        this.rank=null
    }
    getCount(){
     var c=database.ref("playerCount")
     c.on("value",(count)=>{
     playercount=count.val()
     })
    }
    updateCount(p){
        database.ref("/").update({playerCount:p})
    }
   update(){
  var index="players/player"+this.index
    database.ref(index).update({name:this.name,distance:this.distance})
   }
//creating a static function to get ALL THE INFORMATION ABOUT players from the database
//staticfunctions are those functions which are called by the class instead of its object
static getInfo(){
    var playerInfo=database.ref("players")
    playerInfo.on("value",(data)=>{
        info=data.val()
    })

}
getRank(){
var r=database.ref("carsatend")
r.on("value",(data)=>{
    this.rank=data.val()
})
}
static updateRank(r){
    database.ref("/").update({carsatend:r})


} 

}