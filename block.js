class box{
    constructor(x,y,width,height) {
       
        this.body = Bodies.rectangle(x , y , width , height );
        this.width = width;
        this.height = height;
        this.color=color(random(0, 255), random(0, 255), random(0, 255));
        this.Visiblity = 255
        World.add(world, this.body);
       
    }
    display()
    {
    if(this.body.speed < 5){
        
        fill(this.color)
        rectMode(CENTER);
        rect(this.body.position.x,this.body.position.y,this.width,this.height);
    }
     else
    {push();
        World.remove(world, this.body);
        this.Visiblity = this.Visiblity - 5;
        tint(255,this.Visiblity);
        rect(this.x, this.y,20,30);
        pop();
    
    }
    }
}