$(document).ready(function(){
    $("#verify").submit(function(e){
        data = {
            email: $("#email").val(),
            key: $("#key").val()
        }
        $.ajax({
            type: 'post',
            url: '/verify',
            contentType: "application/json;charset=UTF-8",
            data : JSON.stringify(data),
            dataType:"json",
            success : function(data) {
                
            }
        })
    })
})