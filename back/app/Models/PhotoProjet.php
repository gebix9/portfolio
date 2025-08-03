<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PhotoProjet extends Model
{
    use HasFactory;

    protected $fillable = [
        'nom',
        'image',
    ];

    // Un PhotoProjet peut être lié à plusieurs projets
    public function projets()
    {
        return $this->hasMany(Projets::class);
    }
}
