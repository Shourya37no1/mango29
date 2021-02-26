class mango{
    constructor(x,y,radius,options){
        var options={
            isStatic:true,
            restitution:0.4,
            friction:1
          }
        this.body = Bodies.circle(x, y,radius, options);
      this.radius = radius;
      this.image=loadImage("sprites/mango.png")
     World.add(world, this.body);
    }
    display(){
        var pos =this.body.position;
        push();
        imageMode(CENTER);
        image(this.image, pos.x,pos.y, 50,50);
        pop();
    }

};