$(document).ready(function(){
    $("#play").submit(function(e){
        $.ajax({
            type: 'post',
            url: '/ttt',
            contentType: "application/json;charset=UTF-8",
            data : JSON.stringify({'name': $("#name").val()}),
            dataType:"json",
            success : function(data) {
                
            }
        })
    })
})