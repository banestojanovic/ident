<?php

namespace App\Http\Controllers;

use App\Models\Patient;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class ShowPatientController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        $relations = ['records', 'records.therapy', 'photos'];
        if (is_numeric(request('slug'))) {
            $patient = Patient::with($relations)->findOrFail(request('slug'));
        } else {
            $patient = Patient::where('slug', request('slug'))->with($relations)->firstOrFail();
        }

        $patient->photos = $patient->photos->each(function ($photo) {
            $photo->src = Storage::url($photo->src);
            $photo->created_at_human = $photo->created_at->translatedFormat('d. M Y. - H:i');

            return $photo;
        });

        return inertia('Patient', [
            'patient' => $patient,
        ]);
    }
}
