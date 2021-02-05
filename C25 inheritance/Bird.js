/*
1. change the class name --> extends
2. remain the constructor and image unchanged
3. replace the words 'this.body = Bodies.rectangle' with super
4. remove 'options'
*/


class Bird extends BaseClass{
    constructor(x, y) {
      
      super(x, y, 50, 50);
    
      this.image = loadImage("sprites/bird.png")
      
    };
    display(){
      super.display();
      this.body.position.x = mouseX;
      this.body.position.y = mouseY;
      
    };
  };
  