class Player{
   
    constructor(){
        this.index=null;
        this.name=null;
        this.distance=0;
        this.rank=0;
    }
    getPlayerCount(){
        var playerCountRef=database.ref("playerCount");
        playerCountRef.on("value",function(data){
            playerCount=data.val();
            console.log(playerCount);
        })
    }
    updatePlayerCount(count){
        database.ref("/").update({
            playerCount:count
        }); 
    }
    updatePlayer(){
        var playerNode="players/player"+this.index
        database.ref(playerNode).set({
            name:this.name,
            distance:this.distance
        });
    }
    static getAllPlayerDetails(){
        database.ref("players").on("value",function(data)
        {
            allPlayers=data.val()
        })
    }
    getCarsatEnd(){
       database.ref("carsatend").on("value",(data)=>{
           this.rank=data.val()
       })
    }
    updateCarsatEnd(rank){
     database.ref("/").update({
         carsatend:rank
     })
    }
}
