<?php

use App\Http\Controllers\CertificationsController;
use Illuminate\Support\Facades\Route;

Route::prefix('certifications')->group(function () {
    Route::get('/', [CertificationsController::class, 'index']);
});