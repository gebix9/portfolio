<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Projets extends Model
{
    use HasFactory;

    protected $fillable = ['type_projet_id', 'nom', 'objectif', 'lien'];

    public function typeProjet()
    {
        return $this->belongsTo(TypeProjets::class);
    }
}
