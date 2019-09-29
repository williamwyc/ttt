$(document).ready(function(){
    $("#logout").submit(function(e){
        $.ajax({
            type: 'post',
            url: '/logout',
            contentType: "application/json;charset=UTF-8",
            data : JSON.stringify({}),
            dataType:"json",
            success : function(data) {
                window.location.href='/'
            }
        })
    })
})