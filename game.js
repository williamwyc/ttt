$(document).ready(function(){
    $.ajax({
        url:'/ttt/play',
        type:'post',
        contentType: "application/json;charset=UTF-8",
        dataType:'json',
        success:function(data){
            console.log(data)
            $("#name").text(data.name+" ")
            $("#date").text(data.date)
        }
    })
});