<?php

namespace App\Http\Controllers;

use App\Models\Reseau;
use Illuminate\Http\JsonResponse;

class ReseauController extends Controller
{

    public function index(): JsonResponse
    {
        $reseau = Reseau::all();
        return response()->json($reseau);
    }
}
