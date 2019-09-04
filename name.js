$(document).ready(function(){
    $("#play").submit(function(e){
        var data = {
            name: $("#name").val(),
            date: Date.now()
        }
        console.log("data got") // 1
        e.preventDefault();
        $.ajax({
            type: 'post',
            url: '/play',
            contentType: "application/json;charset=UTF-8",
            data : JSON.stringify(data),
            dataType:"json",
            success : function(data) {
                console.log("data sent" + data);
                window.location.href='/play'
                $("#name").text(data.name+" ")
                $("#date").text(data.date)
            }
        })
    })
})