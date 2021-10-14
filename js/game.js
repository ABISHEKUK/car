class Game{
   constructor(){}

   getGameState(){
       var gameStateRef=database.ref("gameState");
       gameStateRef.on("value",function(data){
             gameState=data.val();
       });   
   
   }
   updateGameState(state){
       database.ref("/").update({
           gameState:state  
       })                   
   }
   async start(){ 
       if(gameState==0){
        player=new Player();
        var tempc=await database.ref('playerCount').once("value");
        if(tempc.exists()){
            playerCount=tempc.val()
            player.getPlayerCount();
        }
        
        form=new Form();
        form.display();
       }
       car1=createSprite(200,200);
       car1.addImage(car1img);
       car2=createSprite(400,200);
       car2.addImage(car2img);
       car3=createSprite(600,200);
       car3.addImage(car3img);
       car4=createSprite(800,200);
       car4.addImage(car4img);
       cars=[car1,car2,car3,car4]

   }
   play(){
       form.hide();    
        Player.getAllPlayerDetails()
        player.getCarsatEnd()
        background("#4C4C4C");
        image(track,0,-height*4,width,height*5);
        if(allPlayers){
            var x=260;
            var y;
            var i=0
           for(var plr in allPlayers){
               y=height-allPlayers[plr].distance;
               cars[i].x=x;
               cars[i].y=y;
               

               if(plr==="player"+player.index){
                   fill("red");
                 ellipse(x,y,60,60);
                camera.position.x=width/2;
                camera.position.y=cars[i].y;
               }
               i=i+1;
                  x=x+150;
            } 
            if(keyDown("up")&& player.index!=null){
                player.distance=player.distance+20
                player.updatePlayer();
                console.log(player.distance);
            

            }
            if(player.distance>3100){
                gameState=2;
                player.rank=player.rank+1
                player.updateCarsatEnd(player.rank);
                y=height-player.distance;
                fill("red");
                textSize(30);
                text("your rank "+player.rank,width/2-50,y-120)

            }
            
        }
        drawSprites();

   }
   end(){
       console.log("game ended");
   }
    }