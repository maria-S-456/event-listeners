$(document).ready(function() {
  
  var fizzbuzzbox = "<div class='fizz-buzz-item'>";
  $("#number-chooser").submit(function(event) 
     {
      event.preventDefault();
      $(".js-results").empty();
    
      var myNum = parseInt( $(event.currentTarget).find(
      'input[name="number-choice"]').val());
    
      for(var x = 0; x < myNum; x++)
       {
         //function to send myNum to test which class to give it will be called here
         var myClass = whatClassAreYou(x + 1);
         $('.fizz-buzz-item').addClass(myClass);
         $('.js-results').append
        (
          "<div class='fizz-buzz-item'><span>" + (x + 1) + "</span></div>"
        );
         
       }//end of for statement
     });//end of submit function
  
  function whatClassAreYou(num)
    {
      var chosenClass = "";
      
      if(num % 3 === 0 && num % 5 === 0)
        {
          chosenClass = "fizz buzz";
        }
      if(num % 3 === 0 && num % 5 !== 0)
        {
          chosenClass = "fizz";
        }
      if(num % 3 !== 0 && num % 5 === 0)
        {
          chosenClass = "buzz";
        }
      return chosenClass;
    }
    

});

/*
$(document).ready(function() {
  
  $("#submitButton").click(function(event) 
     {
        $(".js-results").append
        (
          "<div class='fizz-buzz-item'><span>1</span></div>"
        );
     });
});

all this makes a single div element with each click of the button.
whatever number is entered doesn't matter.
*/