class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.image1=loadImage("sprites/smoke.png");
    this.trajectory = []
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    console.log(this.body.velocity.x)
    console.log(this.body.position.x)
    if(this.body.velocity.x>10 && this.body.position.x>200){
      
    var position = [this.body.position.x, this.body.position.y]
    this.trajectory.push(position)
  }
    for(var smoke=0; smoke<this.trajectory.length; smoke++){
      image(this.image1, this.trajectory[smoke][0] , this.trajectory[smoke][1])
    }

    super.display();
  }
}
