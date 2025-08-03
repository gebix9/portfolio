<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\FormationsController;

Route::prefix('formations')->group(function () {
    Route::get('/', [FormationsController::class, 'index']);
});