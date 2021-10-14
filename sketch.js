var form,player,gameState=0;
var database,allPlayers;
var playerCount,gameObject;
var car1,car2,car3,car4,cars;
var track,car1img,car2img,car3img,car4img;
function preload(){
    car1img=loadImage("images/car1.png");
    car2img=loadImage("images/car2.png");
    car3img=loadImage("images/car3.png");
    car4img=loadImage("images/car4.png");
    track=loadImage("images/track.jpg");
}
function setup(){
    createCanvas(displayWidth-50,displayHeight-150);
    database=firebase.database();
    gameObject=new Game();
    gameObject.getGameState();
     gameObject.start();
}

function draw(){
    if(playerCount==4){
        gameObject.updateGameState(1);
    }
    if(gameState==1){
        clear();
        gameObject.play();
    }
    if(gameState==2){
        gameObject.end();
    }
}
   


