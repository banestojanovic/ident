<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        \App\Models\User::factory(1)->admin()->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);

        //        $file = Storage::path('dentist/karton.xlsx');
        //
        //        try {
        //            $records = (new FastExcel)->import($file, function ($line) {
        //                if (!empty($line['BROJPR,C,5']) && !empty($line['DATUM,D']) && '01/01/00' !== $line['DATUM,D'] && !empty($line['ZUB,C,2'])) {
        //                    $patient = Patient::where('old_id', (int) $line['SIFRA,C,5'])->first();
        //                    $therapy = Therapy::where('name', $line['TERAPIJ,C,8'])->first();
        //                    return Record::create([
        //                        'patient_id' => $patient?->id ?? null,
        //                        'patient_old_id' => (int) $line['SIFRA,C,5'] ?? null,
        //                        'date' => $line['DATUM,D'] ?? now(),
        //                        'tooth' => $line['ZUB,C,2'],
        //                        'diagnosis' => $line['DIJAGNO,C,8'],
        //                        'description' => $line['OPISTER,C,22'],
        //                        'therapy' => $therapy->id ?? null,
        //                        'price' => ((float) $line['CENA,N,10,2']) * 100,
        //                        'sifop' => $line['SIFOP,C,2'],
        //                        'old_id' => (int) $line['BROJPR,C,5'],
        //                    ]);
        //                }
        //            });
        //        } catch (InvalidValueException $e) {
        //        };

        //Terapija
        //        $file = Storage::path('dentist/TERAPIJA.xlsx');
        //
        //        $collection = (new FastExcel)->import($file, function ($line) {
        //            if (!empty($line['TERAP,C,8'])) {
        //                return Therapy::create([
        //                    'name' => $line['TERAP,C,8'],
        //                    'description' => $line['NAZTER,C,45'] ?? null,
        //                    'price' => $line['CENA,N,10,2'] ?? null,
        //                ]);
        //            }
        //        });
    }
}
