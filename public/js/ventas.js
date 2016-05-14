$producto=[];
var listaProductos=[];

function venta(){
    
    $("#vender").css("visibility","visible");
    $("#cancelar").css("visibility","visible");
    $("#msjImp").css("visibility","visible");
    
    $cantidad=0;
    if($("#cantidad").val()==""){
        $cantidad=1;
    }else{
        $cantidad=parseInt($("#cantidad").val());
    }

    $prod=$("#producto").val();

    obtenerProducto($prod);
    var vectProducto = $producto;
    var precioTotal;

    var precioNeto=obtenerPrecio(vectProducto);
    var precioTabla=precioNeto;
    if(precioNeto[precioNeto.length-1]==="*"){
        precioNeto=precioNeto.substring(0, precioNeto.length-1);
    }

    precioTotal=precioNeto*$cantidad;

    for (var i=0; i<=listaProductos.length; i++){

        if(vectProducto['codigoProducto']==listaProductos[i]){

            $("#cantidad"+vectProducto['codigoProducto']).text(parseInt($("#cantidad"+vectProducto['codigoProducto']).text())+parseInt($cantidad));
            $("#precioTotal"+vectProducto['codigoProducto']).text(parseInt($("#precioTotal"+vectProducto['codigoProducto']).text())+precioTotal);
            break;
        
        }else if( i===listaProductos.length){

           listaProductos.push(vectProducto['codigoProducto']);

                document.getElementById("tbody").innerHTML += "<tr id='"+vectProducto['codigoProducto']
    +"' onClick="+"mostrarProducto('"+vectProducto['imagen']+"','"+vectProducto['nombreCategoria']+"','"
        +vectProducto['nombreSubCategoria']+"')"+"> <td style='width:17%'>"+vectProducto['codigoProducto']
+"</td> <td style='width:38%'>"+vectProducto['descripcionProducto']+"</td> <td  id='cantidad"+vectProducto['codigoProducto']+"'>"+$cantidad+"</td> <td >"+vectProducto['moneda']+" "+precioTabla
+"</td> <td> <p style='display:inline;'>"+vectProducto['moneda']+"</p> <p style='display: inline;'id='precioTotal"+vectProducto['codigoProducto']+"'>"+precioTotal+"</td> <td><button id='btnDel"+vectProducto['codigoProducto']
+"' class='btnEliminar' data-toggle='modal' data-target='#myModal2' onClick='setId("+vectProducto['codigoProducto']+","
    +precioNeto+")'>x</button></td> </tr>";
        break;

        }
    }

    $("#moneda").text(vectProducto['moneda']);
    $("#montoTotal").text(parseInt($("#montoTotal").text())+precioNeto*(parseInt($cantidad)));


    mostrarProducto(vectProducto['imagen'],vectProducto['nombreCategoria'],vectProducto['nombreSubCategoria']);

    for (var i=0; i<=listaProductos.length; i++){   
        mostrarX(listaProductos[i]);
    }

     //   document.getElementById("TIC").innerHTML +="<th colspan=5 style='border-top: 0px;'> Costo total de producir "+$cantidad+" unidades: ₡"+$costoTotal+" </th> \n\
      //      </table>";

    /*$val=1;
    $total=parseInt($("#totalF").val());
    
        if($("#total").length>0){
        
        label = document.getElementById("total");
        padre = label.parentNode;
        padre.removeChild(label);
            
        }
        
        if($("#inicio").val()==="0"){
            
          //  $volver="location.href = 'MenuVentas.php'";
            
            document.getElementById("fv").innerHTML +="<input type='text' name='cliente' class='cliente' id='text'  \n\
            placeholder='Nombre de Cliente' style=' position: fixed; top: 20.9%; left:43%; height: 8%;' required/>";
            
            document.getElementById("seccion1").innerHTML +="<input type='number' name='cobrar' class='cobrar' id='text'  \n\
            placeholder='monto a cobrar' style=' position: fixed; top: 30.9%; left:43%; height: 8%;'\n\
            title='Monto a Cobrar'/>";
        
            $(".pago").show();
        
            document.getElementById("seccion1").innerHTML +="<input type='number' name='cambio' class='cambio' id='text'  \n\
            placeholder='cambio' style=' position: fixed; top: 40.9%; left:43%; height: 8%;'\n\
            title='Ingrese el monto recibido para calcular el cambio'/>";
            
            document.getElementById("fv").innerHTML +="<button class'vender' type='submit' form='fv' id='boton' \n\
             style=' position: fixed; top: 50.9%; left:43%; width: 30%; height: 10%;'>\n\
            Registrar Venta<img src='../imagenes/caja.png' ALIGN='absmiddle' id='iconos'>\n\
            </button>";
            
            document.getElementById("fv").innerHTML +="<button class'salir' type='button' id='boton' \n\
            onClick='volver()' style=' position: fixed; top: 61.2%; left:43%; width: 20%; height: 10%;'>\n\
            Cancelar<img src='../imagenes/x.png' ALIGN='absmiddle' id='iconos'>\n\
            </button>";
            
            $("#inicio").val("1");
            
        }
        
        $("#seccion1").ready(function(){
  
        $(".pago").bind('keypress',function(e){
            if(e.keyCode===13){
            
           $cobrar=$(".cobrar").val();
           $recibido=$(".pago").val();
        
           $(".cambio").val(($recibido-$cobrar));
        
        }
        });

        });
    
    for (var i = 0; i < id.length; i++){
        
        if($prod===id[i]){
            
            document.getElementById("TPV").innerHTML +="<tr> <td> "+nombre[i]+" </td>\n\
             <td> "+$cantidad+" </td> <td> ₡"+precio[i]+"</td><td> ₡"+$cantidad*precio[i]+" </td>  </tr>";
            
            $total=$total+($cantidad*precio[i]);
            
            $("#totalF").val($total);
            $("#impF").val(($total*0.13));
            $("#totalImpF").val(($total+($total*0.13)));
                
            document.getElementById("TPV").innerHTML +="<th align='right' colspan=5 style='border-top: 0px;' id='total' \n\
                > \n\
                Subtotal: ₡"+$total+" Impuesto: ₡"+($total*0.13)+" Total: ₡"+($total+($total*0.13))+"</th>";
            
            $a=parseInt($("#tp").val());
            $a=($a+1);
            $("#tp").val($a);
            
            $(".cobrar").val(($total+($total*0.13)));
            
            document.getElementById("fv").innerHTML +="<input id='"+$a+"' name='"+$a+"' type='hidden' value='"+$prod+"'>";
            document.getElementById("fv").innerHTML +="<input id='c"+$a+"' name='c"+$a+"' type='hidden' value='"+$cantidad+"'>";
            
        }
        
    } */
   
}

function mostrarProducto(imagen,nombreCategoria,nombreSubCategoria){

    $("#imagenProd").css('visibility','visible');
    $("#categoria").css('visibility','visible');
    $("#subcategoria").css('visibility','visible');     

    $("#imagenProd").attr('src',imagen);
    $("#categoria").text(nombreCategoria);
    $("#subcategoria").text(nombreSubCategoria); 
}

function obtenerProducto($codigo){

    $.ajax({
        async: false,
        type: "POST",
        url: "./datos/data_inventario.php",
        data: { accion: 1, codigo: $codigo}
        }).done(function( msg ) {
            $producto=jQuery.parseJSON(msg);
        });
}

function obtenerPrecio(producto){

    var precioFinal;

    if(producto['ivi']==1){
        var impuesto = (parseFloat(producto['impuestoVenta'])/100);
        var precioImpuesto = (parseFloat(producto['precioBruto'])*impuesto);
        precioFinal = (parseFloat(producto['precioBruto'])+precioImpuesto);
        return precioFinal+"*";
    }else{
        precioFinal = parseFloat(producto['precioBruto']);
        return precioFinal;
    }

}

function mostrarX(idProd){

$("#"+idProd).ready(function(){
    $("#"+idProd).hover(function(){
        $("#btnDel"+idProd).css("visibility","visible");//document.getElementById(vectProducto['codigoProducto']).innerHTML+="<button>X</button>";
        }, function(){
        $("#btnDel"+idProd).css("visibility","hidden");
        });
    });    

}    

function borrarProd(){

    $("#imagenProd").css('visibility','hidden');
    $("#categoria").css('visibility','hidden');
    $("#subcategoria").css('visibility','hidden'); 

    for (var i=0; i<=listaProductos.length; i++){
        if(listaProductos[i] == $("#idProdDel").val()) {
            listaProductos.splice(i, 1);
            break;
        }
    }

    $cantidad = parseInt($("#cantidad"+$("#idProdDel").val()).text());
    $precio = parseInt($("#precioProdDel").val());
    $resta=($precio*$cantidad);

    $("#montoTotal").text(parseInt($("#montoTotal").text())-$resta);

    label = document.getElementById($("#idProdDel").val());
    padre = label.parentNode;
    padre.removeChild(label);


}

function setId(id,precio){
    $("#precioProdDel").val(precio);
    $("#idProdDel").val(id);
}