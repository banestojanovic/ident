<?php

namespace App\Http\Controllers;

use App\Models\Appointment;
use Carbon\Carbon;
use Illuminate\Http\Request;

class UpdateAppointmentsUsersController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        $request->validate([
            'dentist_id' => 'required',
            'patient_id' => 'required'
        ]);

        $appointment = Appointment::findOrFail(request('id'))->update([
            'patient_id' => $patient?->id ?? request('patient_id')['id'],
            'user_id' => request('dentist_id')['id'],
        ]);

        $request->session()->flash('notification', [
            'title' => 'Podaci promenjeni',
            'text' => 'Uspešno ste izmenili podatke termina',
            'group' => 'success',
        ]);

        return back();
    }
}
