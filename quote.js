//UNIVERSAL GLOBAL VARIABLES
//array for first quote
    var countries = ["America", "Kenya", "Thailand"];
    var capitals = ["Washington", "Nairobi", "Bankok"];
    var currency = ["dollar","shilling", "baht"];
//array for second quote
    var myQuotes=["Success is not final; failure is not fatal: It is the courage to continue that counts.-- Winston S. Churchill","It is better to fail in originality than to succeed in imitation.-- Herman Melville","The road to success and the road to failure are almost exactly the same.-- Colin R. Davis"];

//  TWO GENERATORS
//write a function to concatenate the 3 arrays and make one quote.
function partialSentenceSelect(){
  var randomCountry = Math.floor(Math.random() * countries.length);
  var randomCapital = Math.floor(Math.random() * capitals.length);
  var randomCurrency = Math.floor(Math.random() * currency.length);
  var firstquote = "The capital of " + countries[randomCountry] + " is " + capitals[randomCapital] + "." + "It's currency is " + currency[randomCurrency] + ".";
  return firstquote
  // document.getElementById("firstquote").innerHTML=firstquote;
}
// console.log('firstSelect()', firstSelect());

//write a function to use the second array to generate one quote.
function sentenceFullSelect(){
  var secongQuoteIndex = Math.floor(Math.random() * myQuotes.length)
  var secondQuote = myQuotes[secongQuoteIndex];
  return secondQuote;
  // console.log('secondQuote', secondQuote);
  // document.getElementById('fullSelect').innerHTML=myQuotes[secondQuote];
}
// console.log('sentenceFullSelect()', sentenceFullSelect());

//write a function to select either of the two quotes.
// function selectGenerator(){
//   var myChoice = document.getElementById("quoteChoice").value;
//   console.log('myChoice', myChoice);
//   if (myChoice === 'a') {
//   partialSentenceSelect();
//   } else if (myChoice === 'b') {
//    sentenceFullSelect();
//   }
//   else {
//     alert('enter a or b');
//   }
// }


// write a function to generate a chosen number of quotes.
// var firstquote = "";
// var secondQuote = "";
//
// function chosenQuoteNumber() {
//
//   var requiredQuotes= parseInt(document.getElementById("Quotes").value);
//
//
//   var myChoice= document.getElementById("quoteChoice").value;
//   console.log('myChoice', myChoice);
//
//   var randomCountry = Math.floor(Math.random() * countries.length);
//   var randomCapital = Math.floor(Math.random() * capitals.length);
//   var randomCurrency = Math.floor(Math.random() * currency.length);
//
//   for (var i = 0; i <requiredQuotes; i++) {
//     if (myChoice==='a'){
//         firstquote += "The capital of " + countries[randomCountry] + " is " + capitals[randomCapital] + "." + "It's currency is " + currency[randomCurrency] + "." + '<br>';
//         document.getElementById("givenQuotes").innerHTML=firstquote;
//       }
//
//       else if (myChoice==='b'){
//         secondQuote = Math.floor(Math.random() * myQuotes.length);
//         document.getElementById('givenQuotes').innerHTML=myQuotes[secondQuote];
//       }
//     }
//   }


//RUN GENERATORS
function runGenerators() {
  //get the number of quotes needed by user
  var requiredQuotes= parseInt(document.getElementById("Quotes").value);
  // get the generator selected by the user
  var myChoice = document.getElementById("quoteChoice").value;

  // create and store senteces needed
  var choosenSentences = [];

  for(var i = 0; i < requiredQuotes; i++) {

    if( myChoice === 'b'){
      choosenSentences.push( sentenceFullSelect() )
      // console.log('choosenSentences', choosenSentences);
    } else {
      choosenSentences.push( partialSentenceSelect() );
      // console.log('choosenSentences', choosenSentences);
    }
  }
  // console.log('choosenSentences', choosenSentences);
  return choosenSentences
}


//EVENT LISTENER(S)
$( document ).ready(function() {
  // WHEN THE BUTTON IS CLICKED, render the sentences to the HTML div
  $('#selectQuote').on('click', function() {
    //empty out quote div
    $('#givenQuotes').empty();
    // console.log('button click working');
    var selectedQuotes = runGenerators();
    // console.log('selectedQuotes', selectedQuotes);
    //iterate over chosenSentences array and for each item in the array we wnat to put each sencetence into an HTML structure.
    for(var j = 0; j < selectedQuotes.length; j++) {
      $('#givenQuotes').append('<p>'+ selectedQuotes[j] +'<p>');
    }
  })
});
