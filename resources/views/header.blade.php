<!DOCTYPE html>
<html> 
    <head>
        <title>{{trans('general.titulo')}}</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximun scale=1.0, minimum-scale=1.0">
        <script src="https://code.jquery.com/jquery-2.2.3.min.js"   integrity="sha256-a23g1Nt4dtEYOj7bR+vTu7+T8VP13humZFBJNIYoEJo=" crossorigin="anonymous"></script>
        <script type="text/javascript" src="js/funciones_varias.js"></script>
        <link rel="shortcut icon" href="imagenes/favicon.ico">
        <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
        <script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
        <link href='http://fonts.googleapis.com/css?family=Ubuntu' rel='stylesheet' type='text/css'/>
        <link rel="stylesheet" href="css/estilo_principal.css">
    </head>
    <body Style="background-color: #D7D7D7;">

   
<header>
  <nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" href="ventas.php"><img style="width:170px; height:50px; margin-top:-15px;" src="imagenes/A&M-VENTAS.png"></a>
    </div>
    <ul class="nav navbar-nav">
      <li class="dropdown"><a class="dropdown-toggle" data-toggle="dropdown" href="#">{{trans('general.ventas')}} <span class="caret"></span></a>
        <ul class="dropdown-menu">
          <li><a href="#">Page 1-1</a></li>
          <li><a href="#">Page 1-2</a></li>
          <li><a href="#">Page 1-3</a></li>
        </ul>
      </li>
      <li class="dropdown"><a class="dropdown-toggle" data-toggle="dropdown" href="#">{{trans('general.administracion')}} <span class="caret"></span></a>
        <ul class="dropdown-menu">
          <li><a href="clientes.php">{{trans('general.clientes')}}</a></li>
          <li><a href="#">{{trans('general.proveedores')}}</a></li>
          <li><a href="inventario.php">{{trans('general.inventario')}}</a></li>
        </ul>
      </li>
      <li class="dropdown"><a class="dropdown-toggle" data-toggle="dropdown" href="#"><span class="glyphicon glyphicon-cog"></span>{{" ".trans('general.sistema')}}<span class="caret"></span></a>
        <ul class="dropdown-menu">
          <li><a href="config.php">{{trans('general.preferencias')}}</a></li>
          <li><a href="#">Page 1-2</a></li>
          <li><a href="#">Page 1-3</a></li>
        </ul>
      </li>
      
    </ul>
    <ul class="nav navbar-nav navbar-right">
      <li><a href="#"><span class="glyphicon glyphicon-user"></span> <!-- aqui va session.nombre --> </a></li>
      <li><a href="aplicacion/cerrar_sesion.php?cerrarSesion=1"><span class="glyphicon glyphicon-log-in"></span> {{" ".trans('auth.cerrarsesion')}}</a></li>
    </ul>
  </div>
</nav>
    
    </header>
    <div class="container">
            @yield('content')
        </div>

    </body>
</html>