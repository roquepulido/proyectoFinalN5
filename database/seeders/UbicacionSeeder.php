<?php

namespace Database\Seeders;

use App\Models\Ubicacion;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UbicacionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $ubicaciones = ["Desde Casa", "México", "EUA", "Canada", "Guatemala", "Brazil", "Argentina", "España", "Europa", "Alemania", "Japon", "Korea del Sur", "Francia",];
        foreach ($ubicaciones as $ubicacion) {
            Ubicacion::create(["name" => $ubicacion]);
        }
    }
}
