// <<<<<<< HEAD
// var holidayCard = (function() {
//   var color = "blue";
//   var type = "sedan";

//   return {
//     manufacture_date: new Date(),
//     getColor: function() {
//       return color;
//     },
//     setColor: function(newColor) {
//       color = newColor;
//     },
//     getType: function() {
//       return type;
//     }
//   };
// })();

// holidayCard.setColor("green");  // this works

// console.log(holidayCard);
// console.log(holidayCard.getColor());
// =======




var text;
var current;

$("#button").on("click", function() {
  text = $("#text").val().toLowerCase().split(" ");
  console.log("text = ",text);
  for (i=0; i<text.length; i++) {
    current = text[i];
    console.log(current);
  }
});

var demoText = {"merry":"god", "christmas":"jul", "and":"och", "happy":"gott", "new":"nytt", "year":"år"}
var keyValues = [];
for(var key in demoText) {
    var value = demoText[key];
    keyValues.push(value);
}

console.log("object keys = ", Object.keys(demoText));
console.log("values = ", keyValues);








