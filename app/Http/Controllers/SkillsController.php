<?php

namespace App\Http\Controllers;

use App\Models\Skills;
use Illuminate\Http\Request;

class SkillsController extends Controller
{
    public function index()
    {
        $skills = Skills::all();
        return $skills;
    }
}
