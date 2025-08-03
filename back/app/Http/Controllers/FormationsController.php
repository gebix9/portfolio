<?php

namespace App\Http\Controllers;

use App\Models\Formation;
use Illuminate\Http\JsonResponse;

class FormationsController extends Controller
{
public function index(): JsonResponse
{
    $formations = Formation::with('typeFormation')
        ->orderBy('id')
        ->get();

    return response()->json($formations);
}
}