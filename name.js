$(document).ready(function(){
    $("#play").submit(function(e){
        var data = {
            name: $("#name").val(),
            date: Date()
        }
        $.ajax({
            type: 'post',
            url: '/',
            contentType: "application/json;charset=UTF-8",
            data : JSON.stringify(data),
            dataType:"json",
            success : function(data) {
                window.location.href='/ttt/play'
            }
        })
    })
})