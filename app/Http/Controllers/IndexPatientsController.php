<?php

namespace App\Http\Controllers;

use App\Http\Resources\IndexPatientsResource;
use App\Models\Patient;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class IndexPatientsController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        $keyword = request('keyword');
        $phone = request('phone');

        return inertia('Patients', [
            'patients' => IndexPatientsResource::collection(
                Patient::with('lastRecord')
                    ->when(! empty($keyword),
                        fn ($q) => $q->orWhere(DB::raw("concat(first_name, ' ', last_name)"), 'LIKE', '%'.$keyword.'%'))
                    ->orderByDesc('id')
                    ->paginate(12)
                    ->onEachSide(1)
            ),
        ]);
    }
}
