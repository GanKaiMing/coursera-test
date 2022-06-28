// Object literals and "this"
var literalCircle = { // new Object() - the curly braces is the same as creating a new object
  radius: 10,

  getArea: function () {
    var self = this;
    console.log(self);
    console.log(this);

    var increaseRadius = function () {
      self.radius = 20;
    };
    increaseRadius();
    console.log(this.radius);

    return Math.PI * Math.pow(this.radius, 2);
  }
};

console.log(literalCircle.getArea());