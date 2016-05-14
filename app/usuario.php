<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class usuario extends Model
{
    //ponerlo siempre, para que laravel no cree una vara ahi en la base de datos
    public $timestamps = false;

    protected $table = 'usuario';


}
