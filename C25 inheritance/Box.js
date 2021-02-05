/*
1. change the class name --> extends BaseClass
2. remain the constructor and image unchanged
3. replace the words 'this.body = Bodies.rectangle' with super
4. remove 'options'
*/

class Box extends BaseClass {
  constructor(x, y, width, height) {
   
    super(x, y, width, height);
    
    this.image = loadImage("sprites/wood1.png")
  }
};
