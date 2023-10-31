<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Patient;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class SearchPatientsController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {

        return response()->json([
            'patients' => empty(request('query')) ? [] : Patient::when(!empty(request('query')),
                fn($q) => $q->orWhere(DB::raw("concat(first_name, ' ', last_name)"), 'LIKE', '%'.request('query').'%')
                    ->orWhere(DB::raw("concat(last_name, ' ', first_name)"), 'LIKE', '%'.request('query').'%')
                    ->orWhere(DB::raw("phone"), 'LIKE', '%'.request('query').'%')
                    ->orWhere(DB::raw("address"), 'LIKE', '%'.request('query').'%')
                    ->orWhere(DB::raw("city"), 'LIKE', '%'.request('query').'%'))
                ->take(8)
                ->get(),
        ]);
    }
}
