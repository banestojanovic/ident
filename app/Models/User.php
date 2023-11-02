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
            case 2:
                return '#D1D5DB';
            case 3:
                return '#F8B4B4';
            case 4:
                return '#FDBA8C';
            case 5:
                return '#84E1BC';
            case 6:
                return '#AFECEF';
            case 7:
                return '#A4CAFE';
            case 8:
                return '#B4C6FC';
            case 9:
                return '#CABFFD';
            case 10:
                return '#F8B4D9';
            default:
                return 'sky';
        }
    }

    public static function dentistColor($id)
    {
        switch ($id) {
            case 2:
                return '#f1f5f9';
            case 3:
                return '#fee2e2';
            case 4:
                return '#ffedd5';
            case 5:
                return '#dcfce7';
            case 6:
                return '#cffafe';
            case 7:
                return '#dbeafe';
            case 8:
                return '#e0e7ff';
            case 9:
                return '#f3e8ff';
            case 10:
                return '#fce7f3';
            default:
                return 'sky';
        }
    }

    public static function dentistTextColor($id)
    {
        switch ($id) {
            case 2:
                return '#334155';
            case 3:
                return '#b91c1c';
            case 4:
                return '#c2410c';
            case 5:
                return '#15803d';
            case 6:
                return '#0e7490';
            case 7:
                return '#1d4ed8';
            case 8:
                return '#4338ca';
            case 9:
                return '#7e22ce';
            case 10:
                return '#be185d';
            default:
                return 'sky';
        }
    }

    public static function dentistBorderColor($id)
    {
        switch ($id) {
            case 2:
                return '#64748b';
            case 3:
                return '#ef4444';
            case 4:
                return '#f97316';
            case 5:
                return '#22c55e';
            case 6:
                return '#06b6d4';
            case 7:
                return '#3b82f6';
            case 8:
                return '#6366f1';
            case 9:
                return '#a855f7';
            case 10:
                return '#ec4899';
            default:
                return 'sky';
        }
    }
}
