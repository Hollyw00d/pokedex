// Adding a User with jQuery Assignment
$(function() {

    // Append pokemon images to 1 to 151 inside the #pokemon-images DIV
    for(var i = 1; i < 152; i++) {
        $("#pokemon-images").find("p").append("<img src='http://pokeapi.co/media/img/" + i + ".png' />");
    }

});