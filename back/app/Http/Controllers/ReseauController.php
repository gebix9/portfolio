<?php

namespace App\Http\Controllers;

use App\Models\Reseau;
use Illuminate\Http\JsonResponse;

class ReseauController extends Controller
{

    public function index(): JsonResponse
    {
        $reseau = Reseau::all()
        ->map(function ($res) {
            return [
                'id' => $res->id,
                'nom' => $res->nom,
                'lien' => $res->lien ?? null,
                'logo' => $res->logo ? base64_encode(stream_get_contents($res->logo)) : null,
            ];
        });
        return response()->json($reseau);
    }
}
