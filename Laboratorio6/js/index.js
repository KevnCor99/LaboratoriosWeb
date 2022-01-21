$(".agregar").on("click", function(event) {
    
    event.preventDefault()

    let additem = $("#newText").val()
    $(".Lista").append( $("<li>").addClass("lis").append( $("<p>").text(additem).addClass("itemShop").append( $("<button>").text("Check").addClass("checar")).append( $("<button>").text("Delete").addClass("del")
            )
        )
    )
})

$(".Lista").on("click", ".checar", function(event) {
    event.preventDefault()
    $(this).parent()
    $(this).parent().toggleClass("check")
})

$(".Lista").on("click", ".del", function(event) {
    event.preventDefault()
    $(this).parent().parent().remove()

})

