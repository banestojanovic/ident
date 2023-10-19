<?php

namespace App\Http\Controllers;

use App\Models\Patient;
use Illuminate\Http\Request;

class UpdatePhotoController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        $request->validate([
            'patient_id' => 'required',
            'photo_id' => 'required',
            'name' => 'required',
        ]);

        $patient = Patient::where('id', request('patient_id'))->firstOrFail();

        $patient->photos()->where('id', request('photo_id'))->update([
            'name' => request('name'),
            'description' => request('description'),
        ]);

        $request->session()->flash('notification', [
            'title' => 'Snimak izmenjen',
            'text' => 'Uspešno ste sačuvali izmene snimka u bazi podataka',
            'group' => 'success'
        ]);

        return back();
    }
}
