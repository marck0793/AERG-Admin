<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;

class controlUsuario extends Controller
{
    //
    public function validar($cedula){
    	$usuario = usuario::find($cedula);
    	dd($usuario);
    }
}
