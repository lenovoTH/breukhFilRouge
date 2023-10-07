<?php

use App\Models\ModuleProf;
use App\Models\ClasseOuverte;
use App\Models\AnneeScolaireSemestre;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

return new class extends Migration
{
    /**
     * Run the migrations.
     */

    public function up(): void
    {
        Schema::create('cours', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(AnneeScolaireSemestre::class)->constrained()->onDelete('cascade');
            $table->foreignIdFor(ClasseOuverte::class)->constrained()->onDelete('cascade');
            $table->foreignIdFor(ModuleProf::class)->constrained()->onDelete('cascade');
            $table->integer('nbre_heure');
            $table->boolean('etat')->default(0);
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('cours');
    }
};
