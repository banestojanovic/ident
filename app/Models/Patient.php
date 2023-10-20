<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\Relations\MorphMany;
use Spatie\Sluggable\HasSlug;
use Spatie\Sluggable\SlugOptions;

class Patient extends Model
{
    use HasFactory, HasSlug;

    protected $fillable = [
        'old_id',
        'first_name',
        'last_name',
        'slug',
        'address',
        'city',
        'phone',
        'dob',
        'sms',
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
        return $this->hasMany(Record::class)->orderByDesc('date');
    }

    public function lastRecord(): HasOne
    {
        return $this->hasOne(Record::class)->latest();
    }

    public function photos(): MorphMany
    {
        return $this->morphMany(Photo::class, 'photoable')->orderByDesc('created_at');
    }
}
