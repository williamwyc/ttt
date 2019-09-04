$(document).ready(function(){
    $("#play").submit(function(e){
        var data = {
            name: $("#name").val(),
            date: Date.now()
        }
        $.ajax({
            type: 'post',
            url: '/play',
            contentType: "application/json;charset=UTF-8",
            data : JSON.stringify(data),
            dataType:"json",
            success : function(data) {
                // $("#name").text(data.name+" ")
                // $("#date").text(data.date)
            }
        })
    })
})