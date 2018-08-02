var generator = {
  partialSentenceSelect: function() {
    //array for first quote
    var countries = ["America", "Kenya", "Thailand"];
    var capitals = ["Washington", "Nairobi", "Bankok"];
    var currency = ["dollar","shilling", "baht"];

    var randomCountry = Math.floor(Math.random() * countries.length);
    var randomCapital = Math.floor(Math.random() * capitals.length);
    var randomCurrency = Math.floor(Math.random() * currency.length);
    var firstquote = "The capital of " + countries[randomCountry] + " is " + capitals[randomCapital] + "." + "It's currency is " + currency[randomCurrency] + ".";
    return firstquote
  },
  sentenceFullSelect: function() {
    //array for second quote
    var myQuotes=["Success is not final; failure is not fatal: It is the courage to continue that counts.-- Winston S. Churchill","It is better to fail in originality than to succeed in imitation.-- Herman Melville","The road to success and the road to failure are almost exactly the same.-- Colin R. Davis"];

    var secongQuoteIndex = Math.floor(Math.random() * myQuotes.length)
    var secondQuote = myQuotes[secongQuoteIndex];
    return secondQuote;
  },
  runGenerators: function() {
    //get the number of quotes needed by user
    var requiredQuotes= parseInt(document.getElementById("Quotes").value);
    // get the generator selected by the user
    var myChoice = document.getElementById("quoteChoice").value;

    // create and store senteces needed
    var choosenSentences = [];

    for(var i = 0; i < requiredQuotes; i++) {
      if( myChoice === 'b'){
        choosenSentences.push( generator.sentenceFullSelect() )
      } else {
        choosenSentences.push( generator.partialSentenceSelect() );
      }
    }
    return choosenSentences
  }
}

//EVENT LISTENER(S)
$( document ).ready(function() {
  // WHEN THE BUTTON IS CLICKED, render the sentences to the HTML div
  $('#selectQuote').on('click', function() {
    //empty out quote div
    $('#givenQuotes').empty();
    var selectedQuotes = generator.runGenerators();
    //iterate over chosenSentences array and for each item in the array we wnat to put each sencetence into an HTML structure.
    for(var j = 0; j < selectedQuotes.length; j++) {
      $('#givenQuotes').append('<p>'+ selectedQuotes[j] +'<p>');
    }
  })
});
