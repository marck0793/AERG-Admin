$userBD="";
$passBD="";
$correoBD="";

function validarUser(idioma){

    $user=$("#ced").val();
    $pass=$("#pass").val();

    if($user===""){

        $("#errorPass").empty();

        if ( $("#msjId").length===0 ) {
            if(idioma==="es"){
                document.getElementById("errorId").innerHTML += '<label id="msjId" style="color:red;"> Ingrese su número de identificación </label>';
            }else{
                document.getElementById("errorId").innerHTML += '<label id="msjId" style="color:red;"> Enter your identification number </label>';   
            }
        }

    }else{

        $("#errorId").empty();

        if($pass===""){
            
            if ( $("#msjPass").length===0 ) {
                if(idioma==="es"){
                    document.getElementById("errorPass").innerHTML += '<label id="msjPass" style="color:red;"> Ingrese su contraseña </label>';
                }else{
                    document.getElementById("errorPass").innerHTML += '<label id="msjPass" style="color:red;"> Enter your password </label>';   
                }
            }

        }else{

            $("#errorPass").empty();
            $("#errorId").empty();

            comprobarUsuario($user);

            if($userBD===""){

            if(idioma==="es"){
                document.getElementById("errorId").innerHTML += '<label id="msjId" style="color:red;"> No hay usuarios asociados a esta identificación </label>';
            }else{
                document.getElementById("errorId").innerHTML += '<label id="msjId" style="color:red;"> No associated users to this identification </label>';   
            
        }

            }else{

                $("#errorPass").empty();
                $("#errorId").empty();

                comprobarPass($user);

                if($passBD!==$pass){

                    if(idioma==="es"){
                        document.getElementById("errorPass").innerHTML += '<label id="msjPass" style="color:red;"> Contraseña incorrecta </label>';
                    }else{
                        document.getElementById("errorPass").innerHTML += '<label id="msjPass" style="color:red;"> Wrong password </label>';   
                    }

                }else{
                    $("#formLogIn").submit();
                }

            }

        }

    }
}

function comprobarCorreo(){

    $correo = $("#correo").val();

    obtenerCorreo($correo);
    if($correo===""){
        $("#msjCorreo").css('visibility', 'visible');
        $("#msjCorreo").text("*Ingrese un correo electrónico");
    }else{

    if($correoBD===""){
        $("#msjCorreo").css('visibility', 'visible');
        $("#msjCorreo").text("*No hay ninguna cuenta asociada a este correo");
    }else{
        $("#rest").submit();
    }
}

}

/*function obtenerCorreo($correo){

    $.ajax({
        async: false,
        type: "POST",
        url: "./data/data_usuario.php",
        data: { accion: 3, correo: $correo}
        }).done(function( msg ) {
            $correoBD=msg;
        });

}*/

function comprobarUsuario($identificacion){

    $.ajax({
        async: false,
        type: "POST",
        url: "./datos/data_usuario.php",
        data: { accion: 1, identificacion: $identificacion}
        }).done(function( msg ) {
            $userBD=msg;
        });
}

function comprobarPass($identificacion){

    $.ajax({
        async: false,
        type: "POST",
        url: "./datos/data_usuario.php",
        data: { accion: 2, identificacion: $identificacion}
        }).done(function( msg ) {
            $passBD=msg;
        });
}

function enterLogIn(e, idioma){

    if (e.which == 13) {
        validarUser(idioma);
    }
    return false;
}

/*function validateMail()
{
    //Creamos un objeto 
    object=document.getElementById("correo");
    valueForm=object.value;
 
    // Patron para el correo
    var patron=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    if(valueForm.search(patron)==0)
    {
        //Mail correcto
        object.style.color="#000";
        return;
    }else{
        //Mail incorrecto
          object.style.color="#f00";
          document.getElementById("correo").value = '';
          alert('¡Ingrese un correo electrónico válido!'); 
    }
}*/        