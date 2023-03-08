<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('skills_vacantes', function (Blueprint $table) {
            $table->id();
            $table->foreignId("vacante_id")->constrained("vacantes");
            $table->foreignId("skill_id")->constrained("skills");
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
    }
};
