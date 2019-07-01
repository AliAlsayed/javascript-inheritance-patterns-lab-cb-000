function Point(x, y) {
  this.x = x;
  this.y = y;
}

Point.prototype.toString = function() {
  return("(" + this.x + "," + this.y + ")");
}

function Shape(){}

Shape.prototype.addToPlane = function(x, y){
  this.prototype.position = new Point(x, y)
}

Shape.prototype.move = function(x, y){
  this.prototype.position = new Point(x, y)
}

function Circle(radius){
  this.radius = radius
}

Circle.prototype = Object.create(Shape.prototype)
