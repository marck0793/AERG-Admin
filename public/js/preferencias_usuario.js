	function cambiarColor(color){
            
            $("header").css('background-color',color);
            $("footer").css('background-color',color);
        };

    function cambiarIdioma(idioma){
    	
    	document.getElementById("idioma").value=idioma;
    	if(idioma== "es"){
    		document.getElementById("idiomaActual").src= "../imagenes/es.png"
    	}else{
    		document.getElementById("idiomaActual").src= "../imagenes/en.png"
    	}
    	
    }
