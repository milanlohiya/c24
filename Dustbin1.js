class Dustbin1 {
   constructor(x, y){
       this.x = x 
       this.y = y ;
       this.dustbinWidth = 200;
       this.dustbinHeight = 100;
       this.angle = 0;
       this.wallThickness = 20;

       this.bottomBody = Bodies.rectangle(this.x , this.y ,this.dustbinWidth, this.wallThickness, {isStatic : true});
       this.leftWallBody = Bodies.rectangle(this.x -this.dustbinWidth/2 , this.y -this.dustbinHeight/2 , this.wallThickness, {isStatic : true});
       Matter.Body.setAngle(this.leftWallBody,this.angle);

       this.rightWallBody = Bodies.rectangle(this.x +this.dustbinWidth/2 , this.y +this.dustbinHeight/2 , this.wallThickness, {isStatic : true});
       Matter.Body.setAngle(this.leftWallBody,this.angle*-1);

       World.add(world, this.bottomBody);
       World.add(world, this.leftWallBody);
       World.add(world, this.rightWallBody);

   }

   display(){

    var posBottom = this.bottomBody.position;
    var posLeft = this.leftWallBody.position;
    var posRight = this.rightWallBody.position;

    push ();

    translate(posLeft.x, posLeft.y);
    angleMode(RADIANS);
    rotate(this.angle);
    rect(0,0,this.wallThickness, this.dustbinHeight);
    pop();

    push ();

    translate(posRight.x, posRight.y);
    angleMode(RADIANS);
    rotate(this.angle * -1 );
    rect(0,0,this.wallThickness, this.dustbinHeight);
    pop();

    push ();

    translate(posBottom.x, posBottom.y);
    angleMode(RADIANS);
    
    rect(0,0,this.dustbinWidth, this.wallThickness);
    pop();



   }

   
}
