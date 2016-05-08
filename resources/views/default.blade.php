<!DOCTYPE html>
<html>
    <head></head>
    <body>
        <div class="contenedor">

        <section style="float:right;">
            <form method="post" action="default.php" style="display:inline;">
                <input type="hidden" name="idioma" value="es">
                <input type="submit" title=" Idioma Español" value="" style="height:24px; width:34px;  background-image: url('imagenes/es.png');">
            </form>

            <form method="post" action="default.php" style="display:inline;">
                <input type="hidden" name="idioma" value="en">
                <input type="submit" title=" English Language" value="" style="height:24px; width:34px;  background-image: url('imagenes/en.png');">
            </form >
        </section>

        <img src="imagenes/A&M-VENTAS.png">
        <br><br>

        <section class="login">

            <form id="formLogIn" method="post" action="aplicacion/crear_sesion.php">

                <h1>{{trans('auth.iniciodesesion')}}</h1>
                <input type="hidden" name="idioma" value="{{ trans('auth.idioma')}}">

                <input id="ced" name="ced" type="text" 
                placeholder="{{trans('auth.cedula')}}" onkeypress=" enterLogIn(event, '{{trans('auth.idioma')}}'); 
                return soloNumeros(event);" required autofocus title="{{trans('auth.idioma')}}">
                
                <div id="errorId"></div>
                <br>

                <input id="pass" name="pass" type="password" 
                placeholder="{{trans('auth.contraseña')}}" onkeypress=" enterLogIn(event, '{{trans('auth.idioma')}}');" required
                title="{{trans('auth.password')}}">
                <div id="errorPass"></div>
                <br>

                <center>
                    <button type="button" class="botonNormal" onclick="validarUser('{{trans('auth.idioma')}}')">
                        {{trans('botones.btnlogin')}}
                    </button>    
                </center>
            </form>
        </section>
</div>
</body>
</html>