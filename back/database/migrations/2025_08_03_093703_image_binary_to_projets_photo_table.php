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
        Schema::table('photo_projets', function (Blueprint $table) {
            $table->dropColumn('image'); 
            $table->binary('image')->nullable()->after('nom'); 
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('photo_projets', function (Blueprint $table) {
            $table->dropColumn('image');
            $table->string('image')->nullable()->after('nom');
        });
    }
};
