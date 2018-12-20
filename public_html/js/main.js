$(document).ready(function () {
	
    var superHeroTags = [];
  // read the json with the superheroes
    $.getJSON("../json/avengers.json",function (data) { 
        // iterate and append the data
       $.each(data, function(i, obj) {

            // create a list with the tags    
            superHeroTags.push(obj.tag);

            // append the json's data
            $(`#${obj.tag}Name`).append(obj.heroName);
            $(`#${obj.tag}History`).append(obj.history);
            
            // read multiple powers
            $.each(obj.powers, function(i, power){
                $(`#${obj.tag}Powers`).append(power+" ");
            });        
            
        });

        $.each(superHeroTags, function(i, value){
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
});








