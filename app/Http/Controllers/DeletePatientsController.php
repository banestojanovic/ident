<?php

namespace App\Http\Controllers;

use App\Models\Patient;
use Illuminate\Http\Request;

class DeletePatientsController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        $patient = Patient::where('id', request('id'))->firstOrFail();
        $patient->appointments()->delete();
        $patient->records()->delete();
        $patient->delete();

        $request->session()->flash('notification', [
            'title' => 'Uspešno izbrisano',
            'text' => 'Uspešno ste izbrisali pacijenta iz baze podataka',
            'group' => 'success',
        ]);

        return to_route('calendar.show');
    }
}
