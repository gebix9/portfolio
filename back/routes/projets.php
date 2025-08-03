<?php

use App\Http\Controllers\ProjetsController;
use Illuminate\Support\Facades\Route;

Route::prefix('projets')->group(function () {
    Route::get('/', [ProjetsController::class, 'index']);
});