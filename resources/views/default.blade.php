<!DOCTYPE html>
<?
    if($_COOKIE["idioma"]==""){
        setcookie("idioma", 'es', time() + (60 * 60 * 24 * 365250) );
        
    }
    ?>
<html>
    <head>
        <title>{{trans('general.titulo')}}</title>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js"></script>
        <script type="text/javascript" src="js/validaciones_login.js"></script>
        <script type="text/javascript" src="js/funciones_varias.js"></script>
        <link rel="shortcut icon" href="imagenes/favicon.ico">
        <link href='http://fonts.googleapis.com/css?family=Ubuntu' rel='stylesheet' type='text/css'/>
        <link rel="stylesheet" href="{{ url('/') }}./css/estilo_principal.css" type="text/css"/>
    </head>
     <body Style="background-color: #D7D7D7;">
        <div class="contenedor">

        <section style="float:right;">
            <form method="get" action="{{ url('lang', ['es']) }}" style="display:inline;">
                <input type="hidden" name="idioma" value="es">
                <input type="submit" title=" Idioma Español" value="" style="height:24px; width:34px;  background-image: url('imagenes/es.png');">
            </form>

            <form method="get" action="{{ url('lang', ['en']) }}" style="display:inline;">
                <input type="submit" title=" English Language" value="" style="height:24px; width:34px;  background-image: url('imagenes/en.png');">
            </form >
        </section>

        <img src="{{url('/')}}./imagenes/A&M-VENTAS.png">
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