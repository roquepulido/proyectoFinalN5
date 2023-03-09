<?php

namespace Database\Seeders;

use App\Models\Salario;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class SalarioSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $salarios = ["No mostrado", "0 - 5,000", "5,000 - 10,000", "10,000 - 20,000", "20,000 - 30,000", "30,000 - 50,000", "50,000 - 100,000", "+ 100,000",];
        foreach ($salarios as $salario) {
            Salario::create(["name" => $salario]);
        }
    }
}
