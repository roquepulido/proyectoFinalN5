<?php

namespace App\Http\Controllers;

use App\Models\Categorias;
use App\Models\Salario;
use Illuminate\Http\Request;
use App\Models\Skills;
use App\Models\Ubicacion;

class SelectDataController extends Controller
{
    public function skills()
    {
        $data = Skills::all();
        return $data;
    }
    public function salarios()
    {
        $data = Salario::all();
        return $data;
    }
    public function categorias()
    {
        $data = Categorias::all();
        return $data;
    }
    public function ubicaciones()
    {
        $data = Ubicacion::all();
        return $data;
    }
}
