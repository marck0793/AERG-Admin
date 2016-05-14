function soloNumeros(e){

    var keynum = window.event ? window.event.keyCode : e.which;
    if ((keynum == 8) || (keynum == 46)){
        return true;
    }
       
    return /\d/.test(String.fromCharCode(keynum));
}

function cerrarSesion($codigo){

    $.ajax({
        async: false,
        type: "POST",
        url: "./datos/data_inventario.php",
        data: { accion: 1, codigo: $codigo}
        }).done(function( msg ) {
            $producto=jQuery.parseJSON(msg);
        });
}

function a(){
	window.open("http://www.google.es","venta","");
}