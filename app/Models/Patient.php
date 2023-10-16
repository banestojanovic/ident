<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;
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

    public function getFullNameAttribute()
    {
        return ucfirst($this->first_name).' '.ucfirst($this->last_name);
    }

    public function records(): HasMany
    {
        return $this->hasMany(Record::class);
    }

    public function lastRecord(): HasOne
    {
        return $this->hasOne(Record::class)->latest();
    }
}
