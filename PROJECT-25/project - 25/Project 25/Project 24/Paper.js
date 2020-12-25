class Paper{
  constructor(x, y,radius) {
    var options = {
        'restitution':0.8,
        'friction':1,
        'density':1.0
    }
    this.body = Bodies.circle(x, y,radius, options);
   this.radius = radius;

   
   World.add(world, this.body);
   this.image = loadImage("paper.jpg");
    
  }
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;
   
   
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(RADIUS);

    strokeWeight(4);
    stroke("black");
    fill(255);
    ellipse(0, 0, this.radius, this.radius);
    pop();
  }
};
     