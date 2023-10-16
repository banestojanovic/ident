<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Storage;

class IndexPatientsResource extends JsonResource
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
            'first_name' => $this->first_name,
            'last_name' => $this->last_name,
            'slug' => $this->slug,
            'email' => $this?->email ?? 'djex808@gmail.com',
            'phone' => $this->phone,
            'address' => $this?->address ?? null,
            'city' => $this?->city ?? null,
            'photo' => $this?->photo?->src ? Storage::url($this?->photo?->src) : null,
            'dob' => $this->dob,
            'last_record' => Carbon::parse($this->lastRecord?->date)->translatedFormat('jS M, Y.'),
        ];

        return parent::toArray($request);
    }
}
