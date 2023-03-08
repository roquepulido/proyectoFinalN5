<?php

namespace Database\Seeders;

use App\Models\Skills;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class SkillsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $skills = ["CSS", "HTML", "JavaScript", "UI/UX Design", "Python", "Java", "PHP", "laravel", "codeignater", "bootstrap", "tailwind", "NodeJS", "Django", "C++", "MySQL", "Postgrest", "mongoDB", "Objective-C", "Agile Methodologies", "Visual Design", "C#", "Creativity and problem-solving", "Ruby", "PHP", "SQL"];
        foreach ($skills as $skill) {
            Skills::create(['name' => $skill]);
        }
    }
}
