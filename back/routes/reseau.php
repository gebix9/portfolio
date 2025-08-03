<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ReseauController;

Route::prefix('reseau')->group(function () {
    Route::get('/', [ReseauController::class, 'index']);
});