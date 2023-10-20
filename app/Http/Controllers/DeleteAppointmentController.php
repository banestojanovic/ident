<?php

namespace App\Http\Controllers;

use App\Models\Appointment;
use Illuminate\Http\Request;

class DeleteAppointmentController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        Appointment::where('id', request('id'))->delete();

        $request->session()->flash('notification', [
            'title' => 'Termin izbrisan',
            'text' => 'Uspešno ste izbrisali termin iz baze podataka',
            'group' => 'success',
        ]);

        return back();
    }
}
