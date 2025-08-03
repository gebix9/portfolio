<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Formation extends Model
{
    use HasFactory;

    protected $table = 'formation';

    protected $fillable = ['nom', 'objectif', 'description', 'type_formations_id'];

    public function typeFormation()
    {
        return $this->belongsTo(TypeFormations::class, 'type_formations_id');
    }
}
