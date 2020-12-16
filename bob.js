class Bob{ 
    constructor(x,y,diameter){ 
      var option = { 
        'restitution':0.3, 
        'friction':0.5, 
        'density':1.2, 
        'isStatic' : true
      } 
      this.diameter = diameter; 
      this.body = Bodies.circle(x, y, diameter,option);
       //this.width = width;
        //this.height = height; 
        //Matter.Body.setAngle(this.body,angle) 
        World.add(world, this.body); 
      } 
      display(){ 
        var pos = this.body.position
         //var angle = this.body.angle;
          push(); 
          translate(this.body.position.x, this.body.position.y); 
          //rotate(angle); 
          ellipseMode(CENTER); 
          fill("brown");
           ellipse(0,0,this.diameter,this.diameter); 
           pop(); 
          }
         }