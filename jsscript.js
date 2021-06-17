 function(){ 

    var rows = document.getElementsByTagName("tr");   

    for(i = 0; i < rows.length; i++){           

  

      if(i % 2 == 0){ 

        

      }else{ 

        rows[i].style.background= "black";
        rows[i].className = "white";
        

      }       

    } 

  } 
