<?php

namespace App\Http\Controllers;

use App\Models\Patient;
use Illuminate\Http\Request;

class StorePatientController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        $request->validate([
            'first_name' => 'required',
            'last_name' => 'required',
        ]);

        Patient::create(request()->all());

        $request->session()->flash('notification', [
            'title' => 'Pacijent dodat',
            'text' => 'Uspešno ste dodali novog pacijenta u bazu podataka',
            'group' => 'success',
        ]);

        return back();
    }
}
