<?php

namespace App\Http\Controllers;

use App\Models\Record;
use Illuminate\Http\Request;

class DeleteRecordController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        Record::where('id', request('id'))->delete();

        $request->session()->flash('notification', [
            'title' => 'Karton izbrisan',
            'text' => 'Uspešno ste izbrisali karton pacijenta',
            'group' => 'success',
        ]);

        return back();
    }
}
