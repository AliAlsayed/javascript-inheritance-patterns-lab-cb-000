function Point(x, y) {
  this.x = x;
  this.y = y;
}

Point.prototype.toString = function() {
  return("(" + this.x + "," + this.y + ")");
}

function Shape(){}

Shape.prototype.addToPlane = function(x, y){
  Shape.prototype.position = new Point(x, y)
}


