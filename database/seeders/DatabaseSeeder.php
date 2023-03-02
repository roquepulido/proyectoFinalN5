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

        // $this->call("RolesSeeder"::class);
        // $this->call("BaseUsersSeeder"::class);
        // \App\Models\User::factory(10)->create();
        Role::create(['name' => 'empresa']);
        Role::create(['name' => 'postulante']);

        $user = User::factory()->create([
            'name' => 'Test User',
            'email' => 'test@example.com',
        ]);
        $user->assignRole("empresa");
        $user = User::factory()->create([
            'name' => 'Test User',
            'email' => 'test2@example.com',
        ]);
        $user->assignRole("postulante");
    }
}
