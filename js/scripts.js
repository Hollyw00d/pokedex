// Adding a User with jQuery Assignment
$(function() {

    var clickedFeaturesBox = $("#clicked-pokemon-features");

    // Append pokemon images to 1 to 151 inside the #pokemon-images DIV
    for(var i = 1; i < 152; i++) {
        $("#pokemon-images").find("p").append("<img src='http://pokeapi.co/media/img/" + i + ".png' id='" + i + "' />");

    }

    $(document).on("click", "img", function() {

        clickedFeaturesBox.find("#instructions, h5, p, ul").hide();

        var imgId = $(this).attr("id");

        $.get("http://pokeapi.co/api/v1/pokemon/" + imgId +"/", function (response) {

            var pokeName = response.sprites[0].name;
            // Pokemon name with first letter capitalized
            var pokeNameFirstLetterCap = pokeName.charAt(0).toUpperCase() + pokeName.slice(1);

            //var allPokeTypes = response.types[0].name;

            var allPokeTypes = "";

            for (var j = 0; j < response.types.length; j++) {
                allPokeTypes += "<li>" + response.types[j].name + "</li>";
            }

            // Pokemon height
            //var pokeHeight = response.evolutions[0].name;
            var pokeHeight = response.height;

            // Pokemon Weight
            var pokeWeight = response.weight;

            clickedFeaturesBox.append("<h5>" + pokeNameFirstLetterCap + "</h5>" +
            "<p><img src='http://pokeapi.co/media/img/" + imgId + ".png' id='" + imgId + "' /></p>" +
            "<h5>Types</h5>" +
            //"<ul id='poke-types-here'><li>" + response.types[0].name + "</li></ul>" +


            "<ul id='poke-types-here'>" + allPokeTypes + "</ul>" +







            "<h5>Height</h5><ul><li>" + pokeHeight + "</li></ul>" +
            "<h5>Weight</h5><ul><li>" + pokeWeight + "</li></ul>");

        }, "json");

    });

});