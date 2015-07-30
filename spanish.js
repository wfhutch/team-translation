var holidayCard = (function(spanishTranslate) {
  var spanishTranslateLang = {"merry":"feliz", "christmas":"Navidad", "and":"y", "happy":"feliz", "new":"nuevo", "year":"año"};
  var TranslateToSpanish = "" ;


  spanishTranslate.setTranslateToSpanish = function(input) {
    if(input === spanishTranslateLang) {
      spanishTranslateLang = TranslateToSpanish;
    }else {
      throw "Sorry! I don't understand the word : " + TranslateToSpanish;
    }
  };

  spanishTranslate.getTranslateToSpanish = function() {
    return spanishTranslateLang;
  };


    return spanishTranslateLang;

})(holidayCard);

holidayCard.setTranslateToSpanish("merry");

console.log(holidayCard);
console.log(holidayCard.getTranslateToSpanish());
