function NuevoCliente(producto){

	//llenar Modal nuevo cliente
	$("#tituloModal").html(producto['descripcionProducto']);
	$("#imagenModal").attr('src',producto['imagen']);
	$("#codigo").text(producto['codigo']);

}