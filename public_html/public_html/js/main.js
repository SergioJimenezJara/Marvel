$(document).ready(function () {
    // show the data onclick
    
    $("#captain").click(function () {     
        if ($("#captainData").is(':hidden')) {
            $(".superhero").css("background-color","#666666");
            $("#captain").css("background-color","red");
            $(".superheroData").slideUp("slow");
            $("#captainData").slideDown("slow");
        } else {
            $("#captainData").slideUp("slow");
            $("#captain").css("background-color","#666666");
            
        }
    });

    $("#iron").click(function () {
        if ($("#ironData").is(':hidden')) {
            $(".superhero").css("background-color","#666666");
            $("#iron").css("background-color","red");
            
            $(".superheroData").slideUp("slow");
            $("#ironData").slideDown("slow");
        } else {
            $("#ironData").slideUp("slow");
            $("#iron").css("background-color","#666666");
        }
    });

    $("#thor").click(function () {
        if ($("#thorData").is(':hidden')) {
            $(".superhero").css("background-color","#666666");
            $("#thor").css("background-color","red");
            $(".superheroData").slideUp("slow");
            $("#thorData").slideDown("slow");
        } else {
            $("#thorData").slideUp("slow");
            $("#thor").css("background-color","#666666");
        }
    });
    
   
});








