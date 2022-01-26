
$(document).ready(function() {
    
    let animals = ["dog","cat","rabbit","hamster","frog"]


    for (let i = 0; i< animals.length;i++){
     let a = $("<button>")

    a.addClass("animal-button")
    a.attr("data-type",animals[i])
    a.text(animals[i])
    $("#animal-buttons").append(a)
    }


    $("#animal-buttons").on("click", ".animal-button", function() {
    $("#animals").empty()
    let search = $(this).attr("data-type")
    let queryURL = "https://api.giphy.com/v1/gifs/search?q=" + search + "&api_key=TUq7ND2wHH5Wj7afEYPVsrsVAeXPABzd&limit=10";
    $.ajax({
    url: queryURL
    })
    
    .then (function(response){
     let results = response.data

    for (let i = 0; i < results.length; i++){
     let animalDiv = $("<div class= \"animal-item\">")
     let rating = results[i].rating
     let p = $("<p>").text("Rating: " + rating)
     let animalImage = $("<img>")
    animalImage.attr("src",results[i].images.fixed_height_still.url)
    animalImage.attr("data-still",results[i].images.fixed_height_still.url)
    animalImage.attr("data-animate",results[i].images.fixed_height.url )
    animalImage.attr("data-state","still")
    animalDiv.append(p)
    animalDiv.append(animalImage)
    $("#animals").append(animalDiv)
     }}) 
 
    })


    $("#animals").on("click","img",function(){
      let state = $(this).attr("data-state")
      if (state === "still") {
          $(this).attr("src", $(this).attr("data-animate"));
          $(this).attr("data-state", "animate");
        }
        else {
          $(this).attr("src", $(this).attr("data-still"));
          $(this).attr("data-state", "still");
        }
    
  })

    
      $(document).on("click", "#add-animal", function (e) {
        e.preventDefault();
        let button = $(`<button class="animal-button">`);
        button.text($("#animal-input").val());
        $("#animal-buttons").append(button);
        $("#animal-input").val("");
      });


      $(document).on("click", ".animal-button", function (e) {
        e.preventDefault();
        animalDiv($(this).text());
      });
      
     
    });





    