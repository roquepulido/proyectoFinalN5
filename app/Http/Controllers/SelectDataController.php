<?php

namespace App\Http\Controllers;

use App\Models\Categorias;
use App\Models\Salario;
use Illuminate\Http\Request;
use App\Models\Skills;
use App\Models\Ubicacion;
use App\Models\Vacantes;
use Inertia\Inertia;
use Illuminate\Support\Facades\Redirect;

class SelectDataController extends Controller
{
    public function index()
    {

        $skills = Skills::all();
        $skills_new = [];
        foreach ($skills as $skill) {
            $skills_new[] = ["label" => $skill["name"], "value" => $skill["name"], "id" => $skill["id"]];
        }
        $salarios = Salario::all();
        $categorias = Categorias::all();
        $ubicaciones = Ubicacion::all();

        return Inertia::render('empresa/CrearVacante', ['skills' => $skills_new, 'salarios' => $salarios, 'categorias' => $categorias, 'ubicaciones' => $ubicaciones,]);
    }
}
