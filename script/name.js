$(document).ready(function(){
    $("#play").submit(function(e){
        var data = {
            name: $("#name").val(),
            date: Date.now()
        }
        e.preventDefault();
        $.ajax({
            type: 'post',
            url: '/',
            contentType: "application/json;charset=UTF-8",
            data : JSON.stringify(data),
            success : function() {
                console.log("Success data")
                $("#name").text(data.name+" ")
                $("#date").text(data.date)
                window.location.href("../play.html")
            }
        })
    })
})