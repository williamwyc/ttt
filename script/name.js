$(document).ready(function(){
    $("#play").submit(function(e){
        var data = {
            name: $("#name").val(),
            date: Date.now()
        }
        $.ajax({
            type: 'post',
            url: '/',
            contentType: "application/json;charset=UTF-8",
            data : JSON.stringify(data),
            success : function() {
                $("#name").text(data.name+" ")
                $("#date").text(data.date)
            }
        })
    })
})