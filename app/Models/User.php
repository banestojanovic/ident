<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use App\Enums\UserRoleEnum;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\Relations\MorphOne;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'role',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'password' => 'hashed',
        'role' => UserRoleEnum::class,
    ];

    public function avatar(): MorphOne
    {
        return $this->morphOne(Photo::class, 'photoable');
    }

    public static function dentistBaseColor($id)
    {
        switch ($id) {
            case 1:
                return 'orange';
            case 2:
                return 'emerald';
            case 3:
                return 'red';
            default:
                return 'sky';
        }
    }

    public static function dentistColor($id)
    {
        switch ($id) {
            case 1:
                return '#fff7ed';
            case 2:
                return '#ecfdf5';
            case 3:
                return '#fef2f2';
            default:
                return '#f0f9ff';
        }
    }

    public static function dentistTextColor($id)
    {
        switch ($id) {
            case 1:
                return '#9a3412';
            case 2:
                return '#065f46';
            case 3:
                return '#991b1b';
            default:
                return '#075985';
        }
    }

    public static function dentistBorderColor($id)
    {
        switch ($id) {
            case 1:
                return '#fed7aa';
            case 2:
                return '#a7f3d0';
            case 3:
                return '#fecaca';
            default:
                return '#bae6fd';
        }
    }
}
