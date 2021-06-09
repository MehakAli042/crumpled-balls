class PaperBall{
    
    constructor(){
        var options = {
            density:0.5
            
        }
        this.body = Bodies.circle(400,650,50,options);
        World.add(world,this.body)
        
        this.paperImg = loadImage("paper.png");

    }
    display(){
       imageMode(CENTER);
       image(this.paperImg,this.body.position.x,this.body.position.y,50,70)
    }
}
