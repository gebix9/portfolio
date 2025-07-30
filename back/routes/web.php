<?php

use App\Http\Controllers\CertificationsController;
use App\Http\Controllers\TypeCertificationsController;
use Illuminate\Support\Facades\Route;

Route::get('/certifications/get/certifications', [CertificationsController::class, 'index']);