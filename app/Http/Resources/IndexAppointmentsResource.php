<?php

namespace App\Http\Resources;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class IndexAppointmentsResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'title' => "{$this?->dentist?->name}",
            'start' => $this->start_time,
            'end' => $this->finish_time,
            'dentist' => $this->dentist,
            'patient' => $this->patient,
            'color' => User::dentistColor($this->dentist?->id),
        ];
    }
}
