<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Record extends Model
{
    use HasFactory;

    protected $fillable = [
        'patient_id',
        'patient_old_id',
        'date',
        'tooth',
        'diagnosis',
        'description',
        'therapy',
        'sifop',
        'price',
        'old_id',
        'data',
    ];

    protected $casts = [
        'data' => 'array',
    ];

    public function therapy(): BelongsTo
    {
        return $this->belongsTo(Therapy::class, 'therapy');
    }
}
