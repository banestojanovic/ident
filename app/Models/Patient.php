<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Spatie\Sluggable\SlugOptions;

class Patient extends Model
{
    use HasFactory;

    protected $fillable = [
        'old_id',
        'first_name',
        'last_name',
        'slug',
        'address',
        'city',
        'phone',
        'dob',
        'data',
    ];

    protected $casts = [
        'data' => 'array',
    ];

    public function getSlugOptions(): SlugOptions
    {
        return SlugOptions::create()
            ->generateSlugsFrom('first_name', 'last_name')
            ->saveSlugsTo('slug');
    }

    public function records(): HasMany
    {
        return $this->hasMany(Record::class);
    }
}
