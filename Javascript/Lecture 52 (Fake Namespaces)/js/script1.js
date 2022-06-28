(function (window) {
  var yaakovGreeter = {};
  yaakovGreeter.name = "Yaakov";
  var greeting = "Hello ";
  yaakovGreeter.sayHello = function () {
    console.log(greeting + yaakovGreeter.name);
  }

  // have to define yaakovGreeter when IIFE is used to wrap the content
  window.yaakovGreeter = yaakovGreeter;

})(window);