<?php

namespace App\Http\Controllers;

use App\Http\Resources\IndexAppointmentsResource;
use App\Models\Appointment;
use App\Models\Patient;
use Illuminate\Http\Request;

class ShowCalendarController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {

        return inertia('Calendar', [
            'patient' => Patient::where('id', request('patient_id'))->first(),
            'bookings' => IndexAppointmentsResource::collection(Appointment::with('dentist', 'patient')->get()),
        ]);
    }
}
