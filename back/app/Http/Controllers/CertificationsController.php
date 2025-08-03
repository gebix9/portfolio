<?php

namespace App\Http\Controllers;

use App\Models\Certifications;

class CertificationsController extends Controller
{
    public function index()
    {

        $certifications = Certifications::with('typeCertification')
        ->orderBy('id')
        ->get()
        ->map(function ($cert) {
            return [
                'id' => $cert->id,
                'nom' => $cert->nom,
                'type_nom' => $cert->typeCertification->nom ?? null,
                'image' => $cert->image ? base64_encode(stream_get_contents($cert->image)) : null,
            ];
        });

    return response()->json($certifications);
    }
}