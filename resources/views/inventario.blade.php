@extends('header')

<head>
	<script type="text/javascript" src="js/inventario.js"></script>
    <link href="css/estilo_inventario.css" type="text/css"/>
</head>

@section('content')
     <select>
      <option value="1">Esta sucursal</option>
      <option value="2">Todas las sucursales</option>
    </select>

    <section class="seccionTabla">
      <table class="table table-hover">
        <thead>
        	<th>{{trans('inventario.codigo')}}</th>
    	    <th>{{trans('inventario.descripcion')}}</th>
    	    <th>{{trans('inventario.existencias')}}</th>
    	    <th>{{trans('inventario.precio')}}</th>
        </thead>
        <tbody>
        <tbody>
@endsection