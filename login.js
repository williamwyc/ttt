$(document).ready(function(){
    $("#login").submit(function(e){
        $.ajax({
            type: 'post',
            url: '/login',
            contentType: "application/json;charset=UTF-8",
            data : JSON.stringify({'name': $("#name").val()}),
            dataType:"json",
            success : function(data) {
                if (data.status=='OK'){
                    window.location.href='/ttt'
                }
                else{
                    window.location.href='/'
                }
            }
        })
    })
})