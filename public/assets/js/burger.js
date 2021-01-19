$(document).ready(function(){

    $("#submit").on("click", function(event) {
        
        event.preventDefault();
        var name = $("#ba").val()
        
        $.ajax({
            url: "/api/burgers", 
            method: "post",
            data: {burger_name: name},
            success: function(results){
                console.log(results)
            }
        })
        location.href = "/"
    })
    $(".burger-item").on("click", function(event) {
        event.preventDefault();
        var id = $(this).data("id")
        
        $.ajax({
            url: "/api/burgers/" + id, 
            method: "put",
            data: {},
            success: function(results){
                console.log(results)
            }
        })
        location.href = "/"
    })
})