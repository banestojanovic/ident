<?php

namespace App\Http\Controllers;

use App\Models\Patient;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Storage;
use Intervention\Image\Facades\Image;

class StorePhotoController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        $request->validate([
            'patient_id' => 'required',
            'photo.*' => 'required|max:5120',
            'name' => 'required',
        ]);

        $patient = Patient::where('id', request('patient_id'))->firstOrFail();

        if ($files = $request->file('photo')) {
            collect($files)->each(function ($file) use ($patient) {
                $name = Carbon::now()->timestamp.'__'.pathinfo($file->getClientOriginalName(), PATHINFO_FILENAME);
                $img = Image::make($file->getRealPath());

                if ($file->getSize() > 512 * 1024) {
                    $img->resize(1024, null, function ($constraint) {
                        $constraint->aspectRatio();
                        $constraint->upsize();
                    });
                    $img->orientate()->encode('webp', 80);
                } else {
                    $img->orientate()->encode('webp', 100);
                }

                Storage::disk()->put("images/teeth/$patient->id/$name.webp", $img);

                $patient->photos()->create([
                    'photoable_id' => $patient->id,
                    'photoable_type' => Patient::class,
                    'name' => request('name'),
                    'src' => "images/teeth/$patient->id/$name.webp",
                    'description' => request('description'),
                ]);
            });
        }

        $request->session()->flash('notification', [
            'title' => 'Snimak sačuvan',
            'text' => 'Uspešno ste sačuvali snimak u bazu podataka',
            'group' => 'success',
        ]);

        return back();
    }
}
