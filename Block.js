class Block{
    constructor(x, y, width, height){

      var options={
        density:1,
        restitution:0.2,
        friction:0.5



      }

     
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.w = width;
      this.h = height;

      World.add(world,this.body);
    }
  


    display(){

      
     var pos =this.body.position;
   
     
      push();
      translate(pos.x,pos.y);
      rectMode(CENTER);
      rect(0,0,this.w, this.h);
      pop();





    }
  }
  