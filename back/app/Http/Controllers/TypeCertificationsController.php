<?php

namespace App\Http\Controllers;

use App\Models\TypeCertifications;

class TypeCertificationsController extends Controller
{
    public function index()
    {
        $typeCertifications = TypeCertifications::all();

        return response()->json($typeCertifications);
    }
}