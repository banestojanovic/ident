<?php

namespace App\Http\Controllers;

use App\Models\Appointment;
use Carbon\Carbon;
use Illuminate\Http\Request;

class UpdateAppointmentsController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        $request->validate([
            'type' => 'required',
        ]);

        if ('resize' === request('type')) {
            $request->validate([
                'end_time' => 'required_if:type,resize|date',
            ]);
            $appointment = Appointment::findOrFail(request('id'))->update([
                'finish_time' => Carbon::parse(request('end_time'))->tz('Europe/Belgrade'),
            ]);
        }
        if ('drop' === request('type')) {
            $request->validate([
                'start_time' => 'required_if:type,resize|date',
            ]);
            $appointment = Appointment::findOrFail(request('id'))->update([
                'start_time' => \Illuminate\Support\Carbon::parse(request('start_time'))->tz('Europe/Belgrade'),
                'finish_time' => Carbon::parse(request('start_time'))->tz('Europe/Belgrade')->addMinutes(30),
            ]);
        }

        $request->session()->flash('notification', [
            'title' => 'Termin promenjen',
            'text' => 'Uspešno ste izmenili termin',
            'group' => 'success',
        ]);
    }
}
