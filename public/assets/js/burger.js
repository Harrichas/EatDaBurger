$(document).ready(function(){
    console.log("ready");
    $("#submit").on("click", function(event) {
        console.log("test");
        event.preventDefault();
        var name = $("#ba").val()
        console.log(name);
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
        console.log(id)
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