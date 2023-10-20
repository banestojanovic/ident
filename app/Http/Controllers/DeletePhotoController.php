<?php

namespace App\Http\Controllers;

use App\Models\Photo;
use Illuminate\Http\Request;

class DeletePhotoController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {

        Photo::where('id', request('id'))->delete();

        $request->session()->flash('notification', [
            'title' => 'Snimak izbrisan',
            'text' => 'Uspešno ste izbrisali snimak iz baze podataka',
            'group' => 'success',
        ]);

        return back();
    }
}
