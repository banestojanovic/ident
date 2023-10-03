<?php

namespace App\Models;

use App\Enums\AppointmentStatusEnum;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Appointment extends Model
{
    use HasFactory;

    protected $fillable = [
        'staff_id',
        'patient_id',
        'appointment_datetime',
        'diagnosis',
        'description',
        'status',
        'data',
    ];

    protected $casts = [
        'status' => AppointmentStatusEnum::class,
        'data' => 'array',
    ];
}
