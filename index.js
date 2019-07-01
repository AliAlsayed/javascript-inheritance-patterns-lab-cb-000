function Point(x, y) {
  this.x = x;
  this.y = y;
}

Point.prototype.toString = function() {
  return("(" + this.x + "," + this.y + ")");
}

function Side(length){
  this.length = length;
}

function Shape(){}

Shape.prototype.addToPlane = function(x, y){
  this.position = new Point(x, y)
}

Shape.prototype.move = function(x, y){
  this.position = new Point(x, y)
}

function Circle(radius){
  this.radius = radius
}

Circle.prototype = Object.create(Shape.prototype)
Circle.prototype.constructor = Circle

Circle.prototype.diameter = function() {
  return(this.radius*2);
}
Circle.prototype.area = function() {
  return(Math.PI * this.radius ** 2);
}
Circle.prototype.circumference = function() {
  return(2 * Math.PI * this.radius);
}


function Polygon(sides){
  Shape.call = this
  this.sides = sides
}

Polygon.prototype = Object.create(Shape.prototype)
Polygon.prototype.constructor = Polygon


Polygon.prototype.perimeter = function() {
  var p = 0;
  for(var i=0;i< this.sides.length; i++) {
    p += this.sides[i].length;
  }
  return(p);
}

Polygon.prototype.numberOfSides = function() {
  return(this.sides.length);
}

function Quadrilateral(s1, s2, s3, s4){
  Polygon.call(this, [new Side(s1), new Side(s2), new Sides(3), new Sides(4)])
}

Quadrilateral.prototype = Object.create(Polygon.prototype)
Quadrilateral.prototype.constructor = Quadrilateral

function Triangle(s1, s2, s3){
  Polygon.call(this, [new Side(s1), new Side(s2), new Side(s3)])
}

Triangle.prototype = Object.create(Polygon.prototype)
Triangle.prototype.constructor = Triangle



function Rectangle(width, height){
  Quadrilateral.call(this, width, height, width, height);
  this.width = width;
  this.height = height;
}

Rectangle.prototype = Object.create(Quadrilateral.prototype);
Rectangle.prototype.constructor = Rectangle;

Rectangle.prototype.area = function() {
  return this.width * this.height;
}
