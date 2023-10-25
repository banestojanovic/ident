<?php

namespace App\Http\Controllers;

use App\Models\Appointment;
use App\Models\Patient;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;

class StoreAppointmentController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        $request->validate([
            'date' => 'required',
            'patient_id' => 'required_if:new_patient,false',
            'dentist_id' => 'required|min:0|not_in:0',
            'new_patient' => 'required',
            'first_name' => 'required_if:new_patient,true',
            'last_name' => 'required_if:new_patient,true',
            'phone' => 'required_if:new_patient,true',
        ]);

        $patient = null;
        if ($request->has('new_patient') && true === request('new_patient')) {
            $patient = Patient::create($request->all());
        }

        Appointment::create([
            'start_time' => Carbon::parse(request('date'))->tz('Europe/Belgrade'),
            'finish_time' => Carbon::parse(request('date'))->tz('Europe/Belgrade')->addMinutes(15),
            'patient_id' => $patient?->id ?? request('patient_id')['id'],
            'user_id' => request('dentist_id')['id'],
        ]);

        $request->session()->flash('notification', [
            'title' => 'Termin zakazan',
            'text' => 'Uspešno ste zakazali termin',
            'group' => 'success',
        ]);

        return back();
    }
}
