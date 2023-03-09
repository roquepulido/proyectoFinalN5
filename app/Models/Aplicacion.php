<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Aplicacion extends Model
{
    use HasFactory;
    public $timestamps = false;
    protected $fillable = [
        'email',
        'vacante_id',
        'CV'
    ];
}
