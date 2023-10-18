<?php

namespace App\Http\Controllers;

use App\Models\Patient;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;

class UpdateRecordController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        $request->validate([
            'patient_id' => 'required',
            'date' => 'required',
            'tooth' => 'required',
            'diagnosis' => 'required',
            'therapy' => 'required',
            'record' => 'required',
        ]);

        $patient = Patient::where('id', request('patient_id'))->firstOrFail();

        $patient->records()->where('id', request('record'))->update([
            'date' => Carbon::parse(request('date')),
            'tooth' => request('tooth'),
            'diagnosis' => request('diagnosis'),
            'therapy' => request('therapy')['id'] ?? null,
            'description' => request('description'),
        ]);

        $request->session()->flash('notification', [
            'title' => 'Karton sačuvan',
            'text' => 'Uspešno ste sačuvali podatke za karton pacijenta',
            'group' => 'success'
        ]);

        return back();
    }
}
