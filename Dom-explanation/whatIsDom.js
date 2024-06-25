var element = document.getElementById("myElement");
console.log(element);
var newElement = document.createElement("div");
newElement.textContent = "I am a new element";
document.body.appendChild(newElement);
console.log(newElement);
