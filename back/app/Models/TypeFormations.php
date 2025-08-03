<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TypeFormations extends Model
{
    use HasFactory;

    protected $fillable = ['nom'];

    public function formations()
    {
        return $this->hasMany(Formation::class);
    }
}
