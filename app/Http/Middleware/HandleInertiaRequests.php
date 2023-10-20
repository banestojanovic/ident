<?php

namespace App\Http\Middleware;

use App\Enums\TeethEnum;
use App\Enums\UserRoleEnum;
use App\Models\Therapy;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Middleware;
use Tightenco\Ziggy\Ziggy;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        return [
            ...parent::share($request),
            'auth' => [
                'user' => $request->user(),
            ],
            'ziggy' => fn () => [
                ...(new Ziggy)->toArray(),
                'location' => $request->url(),
            ],
            'global' => fn () => [
                'dentists' => fn() => User::where('role', UserRoleEnum::dentist)->get()->pluck('name', 'id')->prepend('Izaberite doktora', 0),
                'teeth' => fn () => TeethEnum::toArray(),
                'therapies' => fn () => Therapy::get(),
            ],
            'notification' => fn () => $request->session()->get('notification'),
        ];
    }
}
