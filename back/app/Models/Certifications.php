<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Certifications extends Model
{
    use HasFactory;

    protected $fillable = ['type_certification_id', 'nom', 'image'];

    public function typeCertification()
    {
        return $this->belongsTo(TypeCertifications::class);
    }
}
