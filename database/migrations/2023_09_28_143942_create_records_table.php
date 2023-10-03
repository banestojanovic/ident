<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('records', function (Blueprint $table) {
            $table->id();
            $table->foreignId('patient_id')->nullable()->constrained()->references('id')->on('patients')->cascadeOnDelete();
            $table->foreignId('patient_old_id')->nullable();
            $table->foreignId('therapy')->nullable()->constrained()->references('id')->on('therapies')->nullOnDelete();
            $table->dateTime('date')->default(now())->nullable();
            $table->string('tooth')->default('11');
            $table->string('diagnosis')->nullable();
            $table->text('description')->nullable();
            $table->string('sifop')->nullable();
            $table->unsignedBigInteger('price')->nullable();
            $table->unsignedBigInteger('old_id')->nullable();
            $table->text('data')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('records');
    }
};
