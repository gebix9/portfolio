<?php

namespace App\Http\Controllers;

use App\Models\Projets;
use Illuminate\Http\Request;

class ProjetsController extends Controller
{
    public function index()
    {

    $projets = Projets::with(['typeProjet', 'photosProjet'])
        ->orderBy('id')
        ->get()
        ->map(function ($projet) {
            return [
                'id' => $projet->id,
                'nom' => $projet->nom,
                'descriptif' => $projet->descriptif,
                'type_nom' => $projet->typeProjet->nom ?? null,
                'lien' => $projet->lien,
                'image' => $projet->image ? base64_encode(stream_get_contents($projet->image)) : null,
                'photos' => $projet->photosProjet->map(function ($photo) {
                    return [
                        'id' => $photo->id,
                        'nom' => $photo->nom,
                        'image' => $photo->image ? base64_encode(stream_get_contents($photo->image)) : null,
                    ];
                }),
            ];
        });

    return response()->json($projets);

    }
}
