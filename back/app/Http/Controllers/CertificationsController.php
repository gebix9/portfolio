<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;

class CertificationsController extends Controller
{
    public function index()
    {
        $certs = DB::table('certifications')
            ->select(
                'certifications.id as id',
                'certifications.nom as nom',
                'type_certifications.nom as type_nom',
                'certifications.image as image'
            )
            ->join('type_certifications', 'certifications.type_certification_id', '=', 'type_certifications.id')
            ->orderBy('certifications.id')
            ->get();

        // Convertir image binaire en base64
        $certs = $certs->map(function ($cert) {
            if ($cert->image) {
                $cert->image = base64_encode(stream_get_contents($cert->image));
            }
            return $cert;
        });

        return response()->json($certs);
    }
}