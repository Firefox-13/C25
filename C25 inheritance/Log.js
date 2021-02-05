/*
1. change the class name --> extends
2. remain the constructor and image unchanged
3. replace the words 'this.body = Bodies.rectangle' with super
4. remove 'options'
*/

class Log  extends BaseClass {
    constructor(x, y, height, angle) {
      super(x, y, 20, height);
    
      this.image = loadImage("sprites/wood2.png")

      Matter.Body.setAngle(this.body, angle);
      
       }
 };
  