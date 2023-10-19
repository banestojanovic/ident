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
        //Patient::where('id', request('id'))->delete();

        $request->session()->flash('notification', [
            'title' => 'Uspešno obrisano',
            'text' => 'Uspešno ste izbrisali pacijenta iz baze podataka',
            'group' => 'success'
        ]);

        return to_route('dashboard');
    }
}
