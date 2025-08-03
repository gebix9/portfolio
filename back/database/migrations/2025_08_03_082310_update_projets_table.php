<?php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('projets', function (Blueprint $table) {
            $table->renameColumn('nom', 'titre');
            $table->renameColumn('objectif', 'descriptif');

            $table->string('image')->nullable()->after('descriptif');

            $table->foreignId('photo_projet_id')
                  ->nullable()
                  ->after('type_projet_id')
                  ->constrained('photo_projets')
                  ->onDelete('set null');
        });
    }

    public function down(): void
    {
        Schema::table('projets', function (Blueprint $table) {
            $table->renameColumn('titre', 'nom');
            $table->renameColumn('descriptif', 'objectif');
            $table->dropColumn('image');
            $table->dropForeign(['photo_projet_id']);
            $table->dropColumn('photo_projet_id');
        });
    }
};