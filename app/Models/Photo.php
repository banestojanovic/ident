<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Photo extends Model
{
    use HasFactory;

    protected $fillable = [
        'photoable_type',
        'photoable_id',
        'name',
        'src',
        'type',
    ];

    protected $casts = [
        'src' => 'array',
    ];

    public function photoable()
    {
        return $this->morphTo();
    }
}
