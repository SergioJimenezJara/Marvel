    //Variable tipo array para poder enlazar con los id de html y hacer la animacion
    var superHeroTags = [];
    // Leo el JSON de los super heroes
      $.getJSON("../assets/fantastic4.json",function (data) { 
          // Itero de forma que obtengo todos los datos
         $.each(data, function(i, obj) {
              // Creo la lista de tags   
              superHeroTags.push(obj.tag);
              // Relleno con los datos del JSON en el lugar correspondiente
              $(`#${obj.tag}Name`).append(obj.heroName);
              $(`#${obj.tag}History`).append(obj.history);
              // Los poderes, al ser de tipo lista, deben ser recorridos por un bucle
              $.each(obj.powers, function(i, power){
                  $(`#${obj.tag}Powers`).append(power+", ");
              });         
          });
          // Control del desplegable
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








