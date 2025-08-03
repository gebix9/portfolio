<?php

namespace App\Http\Controllers;

use App\Models\TypeFormations;
use Illuminate\Http\JsonResponse;

class TypeFormationsController extends Controller
{
    public function index(): JsonResponse
    {
        $typeFormations = TypeFormations::all();

        return response()->json($typeFormations);
    }
}