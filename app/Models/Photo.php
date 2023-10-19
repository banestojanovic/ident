<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

class Photo extends Model
{
    use HasFactory;

    protected $fillable = [
        'photoable_type',
        'photoable_id',
        'name',
        'src',
        'description',
        'type',
        'data',
    ];

    protected $casts = [
        'src' => 'array',
        'data' => 'array',
    ];

    public function photoable()
    {
        return $this->morphTo();
    }

    protected static function booted()
    {
        static::deleted(function (Photo $photo) {
            if (is_array($photo->src)) {
                foreach ($photo->src as $img) {
                    if (Storage::exists($img)) {
                        Storage::delete($img);
                    }
                }
            } else {
                if (Storage::exists($photo->src)) {
                    Storage::delete($photo->src);
                }
            }
        });
    }

}
