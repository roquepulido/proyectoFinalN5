<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\SalarioController;
use App\Http\Controllers\SelectDataController;
use App\Http\Controllers\VacantesController;
use App\Http\Controllers\VacantesViewController;
use App\Models\Vacantes;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('index/main', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'vacantes' => Vacantes::all(),
    ]);
});
Route::get('/Vacante/{id}', [VacantesViewController::class, 'get_vacante'])->name("get.vacante");
Route::post('/Vacante', [VacantesViewController::class, 'aplicar'])->name("aplicar");

Route::get('/dashboard', function () {

    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth', 'role:empresa')->group(function () {
    Route::get('/main', function () {
        return view('admin');
    });
    Route::get('/crearVacante', [SelectDataController::class, 'index'])->name("vacante.crear");
    Route::post('/crearVacante', [VacantesController::class, 'create'])->name("vacante.crear");
    Route::get('/Vacantes', [VacantesController::class, 'index'])->name("vacantes.empresa");
    Route::get('/Vacantes/delete/{id}', [VacantesController::class, 'delete'])->name("Vacantes.delete");
    Route::get('/Vacantes/update/{id}', [VacantesController::class, 'get_vacante'])->name("Vacantes.update.get");
    Route::post('/Vacantes/update/', [VacantesController::class, 'update'])->name("vacante.update");
});
Route::middleware('auth', 'role:postulante')->group(function () {
    Route::get('/post', function () {
        return Inertia::render('Post');
    });
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('/select/salarios', [SelectDataController::class, 'salarios']);
Route::get('/select/skills', [SelectDataController::class, 'skills']);
Route::get('/select/categorias', [SelectDataController::class, 'categorias']);
Route::get('/select/ubicaciones', [SelectDataController::class, 'ubicaciones']);

require __DIR__ . '/auth.php';