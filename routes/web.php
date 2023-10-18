<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
})->name('home');

//Route::get('/dashboard', function () {
//    return Inertia::render('Dashboard');
//})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/pacijenti', \App\Http\Controllers\IndexPatientsController::class)
    ->middleware(['auth', 'verified'])->name('dashboard');
Route::get('/pacijenti/{slug}', \App\Http\Controllers\ShowPatientController::class)
    ->middleware(['auth', 'verified'])->name('patients.show');

Route::post('/pacijenti/dodaj-karton', \App\Http\Controllers\StoreRecordController::class)
    ->middleware(['auth', 'verified'])->name('records.store');
Route::post('/pacijenti/izmeni-karton', \App\Http\Controllers\UpdateRecordController::class)
    ->middleware(['auth', 'verified'])->name('records.update');
Route::delete('/pacijenti/ukloni-karton/{id}', \App\Http\Controllers\DeleteRecordController::class)
    ->middleware(['auth', 'verified'])->name('records.delete');

Route::get('/kalendar', \App\Http\Controllers\ShowCalendarController::class)
    ->middleware(['auth', 'verified'])->name('calendar.show');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
