var winner = null
var grid = new Array(9)
for(var i = 0; i<grid.length; i++){
    grid[i] = " "
}
$(document).ready(function(){
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