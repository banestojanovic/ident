<?php

namespace App\Http\Controllers;

use App\Http\Resources\IndexAppointmentsResource;
use App\Models\Appointment;
use App\Models\Patient;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;

class ShowCalendarController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        $dentists = request('dentists');

        return inertia('Calendar', [
            'patient' => Patient::where('id', request('patient_id'))->first(),
            'bookings' => IndexAppointmentsResource::collection(
                Appointment::with('dentist', 'patient')
                    ->whereIn('user_id', $dentists ?? [])
                    ->whereDate('start_time', '>', Carbon::now()->tz('Europe/Belgrade')->addDay(-1))
                    ->get()
            ),
            'query' => [
                'dentists' => request('dentists') ? request('dentists') : [],
            ],
        ]);
    }
}
