$(document).ready(function(){
    $("#adduser").submit(function(e){
        data = {
            username: $("#name").val(),
            password: $("#password").val(),
            email: $("#email").val()
        }
        $.ajax({
            type: 'post',
            url: '/adduser',
            contentType: "application/json;charset=UTF-8",
            data : JSON.stringify(data),
            dataType:"json",
            success : function(data) {
                
            }
        })
    })
})