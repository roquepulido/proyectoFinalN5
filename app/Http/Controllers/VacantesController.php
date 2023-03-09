<?php

namespace App\Http\Controllers;

use App\Models\Vacantes;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Illuminate\Support\Facades\Redirect;
use App\Models\Skills;
use App\Models\Categorias;
use App\Models\Salario;
use App\Models\Ubicacion;



class VacantesController extends Controller
{
    public function index()
    {
        $user_id = Auth::id();
        $vacantes = Vacantes::join('categorias', 'categorias.id', '=', "vacantes.categoria_id")
            ->join('salarios', 'salarios.id', '=', "vacantes.salario_id")
            ->join('ubicacions', 'ubicacions.id', '=', "vacantes.ubicacion_id")
            ->where('vacantes.user_id', $user_id)
            ->get(['vacantes.*', 'categorias.name as categoria', 'salarios.name as salario', 'ubicacions.name as ubicacion']);


        return Inertia::render('empresa/Vacantes', ["vacantes" => $vacantes]);
    }
    public function create(Request $request)
    {


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
        return Redirect::route('vacantes.empresa')->with(['message' => $status]);
    }
    public function delete($id)
    {
        $vacante = Vacantes::find($id);
        $vacante->delete();
        $status = "Vacante Borrada";
        return "ok";
    }
    public function get_vacante($id)
    {
        $skills = Skills::all();
        $skills_new = [];
        foreach ($skills as $skill) {
            $skills_new[] = ["label" => $skill["name"], "value" => $skill["name"], "id" => $skill["id"]];
        }
        $salarios = Salario::all();
        $categorias = Categorias::all();
        $ubicaciones = Ubicacion::all();
        $vacante = Vacantes::find($id);
        return Inertia::render('empresa/UpdateVacante', ["vacante" => $vacante, 'skills' => $skills_new, 'salarios' => $salarios, 'categorias' => $categorias, 'ubicaciones' => $ubicaciones]);
    }
    public function update(Request $request)
    {

        $vacante = Vacantes::find($request->id);
        $vacante->update([
            "titulo" => $request->titulo,
            "descripcion" => $request->descripcion,
            "experiencia" => $request->experiencia,
            "skills" => json_encode($request->skills),
            "user_id" => $request->user_id,
            "categoria_id" => $request->categoria,
            "ubicacion_id" => $request->ubicacion,
            "salario_id" => $request->salario

        ]);
        $status = "Vacante Actualizada";
        return Redirect::route('vacantes.empresa')->with(['message' => $status]);
    }
}
