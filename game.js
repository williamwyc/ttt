$(document).ready(function(){
    var winner
    var grid
    $.ajax({
        url:"/ttt/unfinished",
        type:"POST",
        data:JSON.stringify({}),
        contentType:"application/json; charset=utf-8",
        dataType:"json",
        success: function(data){
            grid = data.grid;
            for(var i=0; i<9;i++){
              $('#' + i).text(grid[i]);
            }
        }
    })
    $(".cell").click(function(){
        if (winner == null){
            $(this).text("X");
            i = $(this).attr("id")
            if(grid[i] == " "){
                $.ajax({
                    url:"/ttt/play",
                    type:"POST",
                    data:JSON.stringify({'move' : i}),
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