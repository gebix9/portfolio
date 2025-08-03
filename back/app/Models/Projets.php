<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Projets extends Model
{
    use HasFactory;

    protected $fillable = [
        'titre',
        'descriptif',
        'image',
        'lien',
        'type_projet_id',
    ];

    public function typeProjet(): BelongsTo
    {
        return $this->belongsTo(TypeProjets::class);
    }

    public function photosProjet(): HasMany
    {
        return $this->hasMany(PhotoProjet::class);
    }
}
