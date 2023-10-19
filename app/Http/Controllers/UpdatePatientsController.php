<?php

namespace App\Http\Controllers;

use App\Models\Patient;
use Illuminate\Http\Request;

class UpdatePatientsController extends Controller
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

        $patient = Patient::where('id', request('id'))->firstOrFail();

        $patient->update(request()->all());

        $request->session()->flash('notification', [
            'title' => 'Podaci sačuvani',
            'text' => 'Uspešno ste sačuvali podatke o pacijentu',
            'group' => 'success'
        ]);

        return back();
    }
}
