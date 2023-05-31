

      document.getElementById("form").addEventListener("submit", function(event) {

        event.preventDefault();
     
        let titulo = document.getElementById("titulo").value;
        let descripcion = document.getElementById("descripcion").value;

     

        let nuevaTarea = function(tarea){
          
          let tarea ={

            titulo: titulo,
            descripcion: descripcion
        
          }
        };

       

          
      document.getElementById("titulo_tarea").innerHTML = tarea.titulo;
                
      document.getElementById("descripcion_tarea").innerHTML = tarea.descripcion;

      });






