<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Reseau extends Model
{
    use HasFactory;

    protected $table = 'reseaux';

    protected $fillable = ['nom', 'lien', 'logo'];
}
