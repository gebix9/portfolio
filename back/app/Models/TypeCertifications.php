<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TypeCertifications extends Model
{
    use HasFactory;

    protected $fillable = ['nom'];

    public function certifications()
    {
        return $this->hasMany(Certifications::class);
    }
}
