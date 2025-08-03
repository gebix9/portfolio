<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Projets extends Model
{
    use HasFactory;

    protected $fillable = [
        'titre',
        'descriptif',
        'image',
        'lien',
        'type_projet_id',
        'photo_projet_id',
    ];

    public function typeProjet()
    {
        return $this->belongsTo(TypeProjets::class);
    }

    public function photoProjet(){
        return $this->belongTo(PhotoProjet::class);
    }
}
