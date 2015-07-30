var holidayCard = function() {
  var portuguese = {"merry":"alegre", "christmas":"Natal", "and":"e", "happy":"feliz", "new":"novo", "year":"ano"};
  var translateToPortuguese;

  return {
    getportuguese: function() {
      return portuguese;
    },
    // settranslateToPortuguese: function() {
    //   var transPort = [];
    //   for(var key in holidayCard.getportuguese) {
    //     var value = holidayCard.getportuguese[key];
    //     transPort.push(value);
    //     console.log(transPort);
    //   }
    // }
  }
}();