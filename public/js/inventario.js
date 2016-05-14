
function llenarModal(producto){

	//llenar Modal Info Procucto
	$("#tituloModal").html(producto['descripcionProducto']);
	$("#imagenModal").attr('src',producto['imagen']);
	$("#codigoModal").text(producto['codigoProducto']);
	$("#proveedorModal").text(producto['nombreProveedor']);
	$("#categoriaModal").text(producto['nombreCategoria']);
	$("#subcategoriaModal").text(producto['nombreSubCategoria']);
	$("#costoModal").text(producto['costo']);
	$("#preciobrutoModal").text(producto['moneda']+calcularPrecioBruto(producto['costo'],producto['utilidad']));
	if(parseInt(producto['ivi'])!=0){
		$("#impuestoModal").text(producto['impuestoVenta']);
	}else{
		$("#impuestoModal").text("0");
	}
	$(".monedaModal").text(producto['moneda']);
	$("#precionetoModal").text(calcularNeto(calcularPrecioBruto(producto['costo'],producto['utilidad']),producto['impuestoVenta'],producto['ivi']));

	//llenar Modal Modificar
	$("#tituloModalModificar").val(producto['descripcionProducto']);
	$("#imagenModalModificar").attr('src',producto['imagen']);
	$("#codigoModalModificar").val(producto['codigoProducto']);
	$("#codigoAntiguo").val(producto['codigoProducto']);
	$("#costoModalModificar").val(producto['costo']);
	$("#preciobrutoModalModificar").val(calcularPrecioBruto(producto['costo'],producto['utilidad']));
	if(parseInt(producto['ivi'])!=0){
		$("#precionetoModalModificar").text(calcularNeto(calcularPrecioBruto(producto['costo'],producto['utilidad']),producto['impuestoVenta']),producto['ivi']);
	}else{
		$("#precionetoModalModificar").text(calcularPrecioBruto(producto['costo'],producto['utilidad']));
	}
	

	$("#codiguito").val(producto['codigoProveedorFK']);
	$("#categoria").val(producto['idCategoriaFK']);

}

function calcularNeto(precioBruto,impuestoVenta,ivi){
	$neto=0;
	if(parseInt(ivi) !=0){
		$impuesto=(impuestoVenta/100);
		$impuestoCalculado=(precioBruto*$impuesto);
		$neto=(parseFloat(precioBruto)+$impuestoCalculado);
	}else{
		$neto=precioBruto;
	}
	return $neto;
}

function calcularPrecioBruto(costo,utilidad){
	$precio = 0;
	$utilidad = (parseFloat(costo)*(parseInt(utilidad)/100));
	$precio= parseFloat(costo) + $utilidad;
	return $precio;
}

function resizeInput(id) {
    $("#"+id).attr("size",$("#"+id).val().length);
    
}

function resizeTodos(){
	 $("#tituloModalModificar").attr("size",$("#tituloModalModificar").val().length);
	 $("#codigoModalModificar").attr("size",$("#codigoModalModificar").val().length);
	 $("#costoModalModificar").attr("size",$("#costoModalModificar").val().length);
	 $("#preciobrutoModalModificar").attr("size",$("#costoModalModificar").val().length);
	 //$("#impuestoModalModificar").attr("size",$("#impuestoModalModificar").val().length);

	 elegirProveedor();
	 elegirCategoria();

}

function imprimirSubCategorias(subcategorias){
	
		$str ="";
		for(i=0; i<subcategorias.length;i++){
			$str+="<option value='"+subcategorias[i].idSubCategoria+"'>"+$subcategorias[i].nombreSubCategoria+"</option>";
		}	
		$("#subcategoriaModalModificar").html($str);
}

function agregarSubCategorias(){

    $categoria=$("#categoriaModalModificar").val();
  $.ajax({
        async: false,
        type: "POST",
        url: "./datos/data_inventario.php",
        data: { accion: 2, categoria: $categoria}
        }).done(function( msg ) {
           $subcategorias=jQuery.parseJSON(msg);
           var sub = $subcategorias;
           imprimirSubCategorias($subcategorias);
        });
    
}

function elegirProveedor(){
	
	 var combo = document.getElementById("proveedorModalModificar");
   	var cantidad = combo.length;

   for (i = 0; i < cantidad; i++) {
      if (combo[i].value == $("#codiguito").val()) {
         combo[i].selected = true;
      }   
   }
}

function elegirCategoria(){
	var combo = document.getElementById("categoriaModalModificar");
   	var cantidad = combo.length;

   for (i = 0; i < cantidad; i++) {
      if (combo[i].value == $("#categoria").val()) {
         combo[i].selected = true;
      }   
   }

   agregarSubCategorias();
}

