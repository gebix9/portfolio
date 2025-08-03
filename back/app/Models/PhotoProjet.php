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
        'projets_id',
    ];

    public function projets()
    {
        return $this->belongsTo(Projets::class);
    }
}
