var winner = null
var grid = new Array(9)
for(var i = 0; i<grid.length; i++){
    grid[i] = " "
}

$(document).ready(function(){
    $.ajax({
        url:'/ttt',
        type:'post',
        contentType: "application/json;charset=UTF-8",
        dataType:'json',
        success:function(data){
            $("#name").text(data.name+" ")
            $("#date").text(data.date)
        }
    })
    $(".cell").click(function(){
        if (winner == null){
            $(this).text("X");
            i = $(this).attr("id")
            if(grid[i] == " "){
                grid[i] = "X"
                $.ajax({
                    url:"/ttt/play",
                    type:"POST",
                    data:JSON.stringify({'grid' : grid}),
                    contentType:"application/json; charset=utf-8",
                    dataType:"json",
                    success: function(data){
                        winner = data.winner;
                        grid = data.grid;
                        if(winner!=null){
                            if(winner == " "){
                                $("#winner").text("It's a draw!");
                            }
                            else{
                                $("#winner").text("Winner is: " + data.winner);
                            }
                        }
                        for(var i=0; i<9;i++){
                          $('#' + i).text(grid[i]);
                      }
                    }
                  })
            }
        }
      });
    
});