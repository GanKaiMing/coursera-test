// DOM manipulation
console.log(document.getElementById("title"));
console.log(document instanceof HTMLDocument);

function sayHello () {
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
    document.querySelector("#title").textContent = title;
  }
}