class Form{
    constructor(){
        this.input=createInput("name");
        this.button=createButton("play");
        this.greeting=createElement("h2");
        this.title=createElement("h1");
        this.reset=createButton("Reset")
    }
    hide(){
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
        this.title.hide();
    }
    display(){
        this.reset.position(width-50,20);
        this.reset.mousePressed(()=>{
            player.updatePlayerCount(0);
            gameObject.updateGameState(0);
            database.ref("/").update({
                players:null,
                carsatend:0
            });
        })
        this.title.position(width/2-80,0)
        this.title.html("car racing game")
        this.input.position(width/2-40,height/2-50)
        this.button.position(width/2,height/2-10)
        this.button.mousePressed(()=>{
            console.log(this);
            this.input.hide();
            this.button.hide();
            player.name=this.input.value();
            playerCount=playerCount+1;
            player.index=playerCount
            player.updatePlayerCount(playerCount);
            player.updatePlayer();
            this.greeting.position(width/2-50,height/2-50);
            this.greeting.html("welcome"+player.name);

        });
    }

}