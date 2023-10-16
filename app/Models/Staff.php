<?php

namespace App\Models;

use App\Enums\StaffRoleEnum;
use App\Enums\StatusEnum;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\Sluggable\SlugOptions;

class Staff extends Model
{
    use HasFactory;

    protected $fillable = [
        'first_name',
        'last_name',
        'slug',
        'role',
        'status',
        'data',
    ];

    protected $casts = [
        'role' => StaffRoleEnum::class,
        'status' => StatusEnum::class,
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
}
