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

    public function create(Request $request)
    {
        dd($request);

        Vacantes::create(
            [
                "titulo" => $request->titulo,
                "descripcion" => $request->descripcion,
                "experiencia" => $request->experiencia,
                "skills" => json_encode($request->skills),
                "user_id" => $request->user_id,
                "categoria_id" => $request->categoria,
                "ubicacion_id" => $request->ubicacion,
                "salario_id" => $request->salario

            ]
        );

        $status = "Vacante creada";
        return Redirect::route('vacantes.empresa')->with(['status' => $status]);
    }
    public function share(Request $request)
    {
        return array_merge(parent::share($request), [
            'flash' => [
                'message' => fn () => $request->session()->get('message')
            ],
        ]);
    }
}
