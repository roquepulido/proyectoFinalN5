<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use App\Models\User;


class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {

        $this->call(RolesSeeder::class);
        $this->call(BaseUsersSeeder::class);
        $this->call(CategoriasSeeder::class);
        $this->call(SalarioSeeder::class);
        $this->call(SkillsSeeder::class);
        $this->call(UbicacionSeeder::class);
        // \App\Models\User::factory(10)->create();

    }
}
