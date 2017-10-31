  $(document).ready(function(){
    var quoteSource=[
    {
      quote: "Everything you can imagine is real.",
      name:"Pablo Picasso"
      },
      {
        quote:"A life spent making mistakes is not only more honorable, but more useful than a life spent doing nothing.",
        name:"George Bernard Shaw"
      },
      {
        quote:"It does not matter how slowly you go as long as you do not stop.",
        name:"Confucius"
      },
      {
        quote:"Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.",
        name:"Thomas A. Edison"
      },
      {
        quote:"The will to win, the desire to succeed, the urge to reach your full potential... these are the keys that will unlock the door to personal excellence.",
        name:"Confucius"
      },
      {
        quote:"Don't watch the clock; do what it does. Keep going.",
        name:" Leonardo da Vinci"
      },
      {
        quote:"Painting is poetry that is seen rather than felt, and poetry is painting that is felt rather than seen.",
        name:"Ayn Rand"
      },
      {
        quote:"It is good to love many things, for therein lies the true strength, and whosoever loves much performs much, and can accomplish much, and what is done in love is well done.",
        name:"Vincent van Gogh"
      },
      {
        quote:"Expect problems and eat them for breakfast.",
        name:"Alfred A. Montapert"
      },
      {
        quote:"Start where you are. Use what you have. Do what you can.",
        name:"Arthur Ashe"
      },
      {
        quote:"Ever tried. Ever failed. No matter. Try Again. Fail again. Fail better.",
        name:"Samuel Beckett"
      },
      {
        quote:"Be yourself; everyone else is already taken.",
        name:"Oscar Wilde"
      },
      {
        quote:"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
        name:"Albert Einstein"
      },
      {
        quote:"Imagination governs the world.",
        name:"Napoléon Bonaparte"
      },
      {
        quote:"Do not take life too seriously. You will never get out of it alive.",
        name:"Elbert Hubbard"
      },
      {
        quote:"People who think they know everything are a great annoyance to those of us who do.",
        name:"Isaac Asimov"
      },
      {
        quote:"Procrastination is the art of keeping up with yesterday.",
        name:"Don Marquis"
      },
      {
        quote:"Get your facts first, then you can distort them as you please.",
        name:"Mark Twain"
      },
      {
        quote:"Paris is the only city in the world where starving to death is still considered an art.",
        name:"Carlos Ruiz Zafón"
      },
      {
        quote:"Art is not what you see, but what you make others see.",
        name:"Edgar Degas"
      },
      {
        quote:"Creativity takes courage.",
        name:"Henri Matisse"
      },
      {
        quote:"Nature is a haunted house--but Art--is a house that tries to be haunted.",
        name:"Emily Dickinson"
      },
      {
        quote:"The role of the artist is to ask questions, not answer them.",
        name:"Anton Chekhov"
      },
      {
        quote:"Hapiness is not something ready made. It comes from your own actions.",
        name:"Dalai Lama"
      }

  ];
    

    $('#btn').click(function(evt){
      //define the containers of the info we target
      var quote = $('#quoteContainer p').text();
      var quoteAuthor = $('#quoteAuthor').text();
      //prevent browser's default action
      evt.preventDefault();
      //getting a new random number to attach to a quote and setting a limit
      var sourceLength = quoteSource.length;
      var randomNumber= Math.floor(Math.random()*sourceLength);
      //set a new quote
      for(i=0;i<=sourceLength;i+=1){
      var newQuoteText = quoteSource[randomNumber].quote;
      var newquoteAuthor = quoteSource[randomNumber].name;
      //console.log(newQuoteText,newquoteAuthor);
      var timeAnimation = 500;
      var quoteContainer = $('#quoteContainer');
      //fade out animation with callback
      quoteContainer.fadeOut(timeAnimation, function(){
        quoteContainer.html('');
        quoteContainer.append('<p>'+newQuoteText+'</p>'+'<p id="quoteAuthor">'+'- '+newquoteAuthor+'</p>');
        
        //fadein animation.
        quoteContainer.fadeIn(timeAnimation);
      });  
      
      break;
    };//end for loop
  
  });//end btn function
    
    
});//end document ready

