// Make sure all the content in the css is loaded before executing this.
// Listen for the events when all the elements have been loaded
document.addEventListener("DOMContentLoaded",
  function(){

    function sayHello () {
      // The "this" is referring to the button
      console.log(this);
      // Once it is clicked, change the text of the button
      this.textContent = "Said it!";
      var name = document.getElementById("name").value;
      var message = "<h2>Hello " + name + "!</h2>";
    
      // Normal text
      // document.getElementById("content").textContent = message;
    
      // Inserting text with HTML syntax
      document.getElementById("content").innerHTML = message;
    
      // Change the title name when "student" is entered
      if (name === "student") {
        var title = document.querySelector("#title").textContent;
        title += " & Lovin' it!";
        document.querySelector("h1").textContent = title;
      }
    }
    
    // Unobtrusive event binding
    document.querySelector("button").addEventListener("click", sayHello);

    // Event argument, when mouse is moved inside the body, the coordinates are shown
    document.querySelector("body").addEventListener("mousemove",
      function(event){
        if(event.shiftKey === true){
          console.log("x: " + event.clientX);
          console.log("y: " + event.clientY);
        }
      }
    );
  }
);

//document.querySelector("button").onclick = sayHello;