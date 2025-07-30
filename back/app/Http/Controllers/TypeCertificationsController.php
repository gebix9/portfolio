<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;

class TypeCertificationsController extends Controller
{
    public function index()
    {
        return DB::table('type_certifications')
            ->select('id', 'nom')
            ->orderBy('id')
            ->get();
    }
}