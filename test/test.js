let data = JSON.parse(sessionStorage.getItem('apiCallResults'));


$(document).ready(function () {


$("#search-button").on("click", function () {
    console.log (data)
    displayRecipes(data);
});
})

    //Displays recipes based on API call
    //Display Recipe API Call http://api.yummly.com/v1/api/recipe/recipe-id?_app_id=23c56a38&_app_key=0e54a8ce40a665ee3dc2dc122f3dbac7
    //Specific display receipe API call is a seperate function and not needed at this time for our uses
    //Using info generated by original API call
    function displayRecipes(data) {
        console.log(data)
        $("#placeholderRecipeDisplay2").empty();
        var results = data.matches;
        for (var i = 0; i < results.length; i++) {
            var recipeID = "<div class='recipeID'> Recipe ID: " + (results[i].id) + " </div>";
            var image = '<img src= " ' + results[i].imageUrlsBySize[90].slice(0, -6)
                + '" class="recipeImages" style= "width:380px;">'
                + recipeID;
    
            image2 = "<div class='col-md-4'>" + image + "</div>";
            $('#placeholderRecipeDisplay2').append(image2);
            sessionStorage.removeItem('apiCallResults');
            sessionStorage.clear();
        }
    }

// window.onload = (function() {
//     console.log (data)
//     displayRecipes(data);
//   });
function onLoadFunction(){
    displayRecipes(data);
}
