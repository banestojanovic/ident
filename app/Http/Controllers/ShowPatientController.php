<?php

namespace App\Http\Controllers;

use App\Models\Patient;
use Illuminate\Http\Request;

class ShowPatientController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        if (is_numeric(request('slug'))) {
            $patient = Patient::with('records')->findOrFail(request('slug'));
        }
        $patient = Patient::where('slug', request('slug'))->with('records', 'records.therapy', 'photos')->firstOrFail();

        return inertia('Patient', [
            'patient' => $patient,
        ]);
    }
}
