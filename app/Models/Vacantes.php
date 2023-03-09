<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Vacantes extends Model
{
    use HasFactory;
    protected $fillable = [
        'titulo',
        'experiencia',
        'descripcion',
        'skills',
        "user_id",
        'categoria_id',
        'ubicacion_id',
        'salario_id'


    ];
    public function categoria(): BelongsTo
    {
        return $this->belongsTo(Categorias::class);
    }
    public function ubicacion(): BelongsTo
    {
        return $this->belongsTo(Ubicacion::class);
    }
    public function salario(): BelongsTo
    {
        return $this->belongsTo(Salario::class);
    }
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
