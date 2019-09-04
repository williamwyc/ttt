$(document).ready(function(){
    $("#play").submit(function(e){
        console.log($("#name").val())
        var data = {
            name: $("#name").val(),
            date: Date.now()
        }
        console.log(data)
        $.ajax({
            type: 'post',
            url: '/name',
            contentType: "application/json;charset=UTF-8",
            data : JSON.stringify(data),
            success : function() {
                $("#name").text(data.name+" ")
                $("#date").text(data.date)
                window.location.href("../play.html")
            }
        })
    })
})