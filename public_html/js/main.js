$(document).ready(function () {
   
   // must read the json with the superheroes
   
   
   // create a list with the superheroes names 
   list= ["captain","iron","thor"];
   
   
   // must create as divs (boxes with the superheroes) as the json's superheroes has
   // OR create manually the divs (easy way lol)
   
   
   // fill the divs with the json content
   
   
   // function to show data of the superheroes 
   $.each(list, function(i, value){
       $("#"+value).click(function () {     
        if ($("#"+value+"Data").is(':hidden')) {
            $(".superhero").css("background-color","#666666");
            $("#"+value).css("background-color","red");
            $(".superheroData").slideUp("slow");
            $("#"+value+"Data").slideDown("slow");
        } else {
            $("#"+value+"Data").slideUp("slow");
            $("#"+value).css("background-color","#666666");          
        }
    });
   });
        
   
});








