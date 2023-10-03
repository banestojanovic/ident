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
        Schema::create('appointments', function (Blueprint $table) {
            $table->id();
            $table->foreignId('staff_id')->nullable()->constrained()->references('id')->on('staff')->nullOnDelete();
            $table->foreignId('patient_id')->nullable()->constrained()->references('id')->on('patients')->nullOnDelete();
            $table->dateTime('appointment_datetime');
            $table->text('diagnosis')->nullable();
            $table->text('description')->nullable();
            $table->integer('status')->default(0);
            $table->text('data')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('appointments');
    }
};
