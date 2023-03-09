<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Salario;

class SalarioController extends Controller
{
    public function index()
    {
        $salarios = Salario::all();
        return $salarios;
    }
}
