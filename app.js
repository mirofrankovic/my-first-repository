$(document).ready(function() {
    var randomQuote;
    var randomNum;
    var author;
    getQuote();
    function getQuote(){
      
      var quotes = ["Hello, World!", "Hello, Morning!", "Hello, Rain!"];
      var author = ["-Author1", "-Author2", "-Author3"];
                    
                    
      randomNum = Math.floor((Math.random()*quotes.length));
      randomQuote = quotes[randomNum];
      author = author[randomNum];
                    
      $(".quote").text(randomQuote);
      $(".author").text(author);              
    }
    $("#tweet").on("click", function(){
        window.open("https://twitter.com/intent/tweet?text="+randomQuote);
      });
    
      $("#newQuote").on("click", function(){
        getQuote();
      });
      
      
  });