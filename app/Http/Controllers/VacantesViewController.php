<?php

namespace App\Http\Controllers;

use App\Models\Aplicacion;
use App\Models\Vacantes;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;


class VacantesViewController extends Controller
{
    public function get_vacante($id)
    {

        $vacante = Vacantes::join('categorias', 'categorias.id', '=', "vacantes.categoria_id")
            ->join('salarios', 'salarios.id', '=', "vacantes.salario_id")
            ->join('ubicacions', 'ubicacions.id', '=', "vacantes.ubicacion_id")
            ->where('vacantes.id', $id)
            ->get(['vacantes.*', 'categorias.name as categoria', 'salarios.name as salario', 'ubicacions.name as ubicacion']);
        return Inertia::render('vista/Vacante', ["vacante" => $vacante,]);
    }
    public function aplicar(Request $request)
    {
        $path = $request->CV->store('CV');
        Aplicacion::create(
            [
                'email' => $request->email,
                'vacante_id' => $request->vacante_id,
                'CV' => $path
            ]
        );
        $status = "Solicitud Enviada, Buena Suerte";
        return Redirect::route('get.vacante', ["id" => $request->vacante_id])->with(['message' => $status]);
    }
}
