$(document).ready(function () {
	
   // read the json with the superheroes
   $.getJSON( "../json/avengers.json", function( result ) {
       alert();
		
	});
   
   // create a list with the superheroes names 
   superheroNames= ["fantastic","invisible","torch","thing"];   
   
   // fill the divs with the json content
   
   // function to show data of the superheroes 
   $.each(superheroNames, function(i, value){
       $("#"+value).click(function () {     
        if ($("#"+value+"Data").is(':hidden')) {
            $(".superhero").css("background-color","#484848");
            $("#"+value).css("background-color","#666666");
            $(".superheroData").slideUp("slow");
            $("#"+value+"Data").slideDown("slow");
        } else {
            $("#"+value+"Data").slideUp("slow");
            $("#"+value).css("background-color","#484848");          
        }
    });
   });
        
   
});








