<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCcodesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('ccodes', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('color_id')->unsigned()->indexed();
            $table->binary('code');
            $table->timestamps();

            $table->foreign('color_id')->references('id')->on('colors')
            ->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('ccodes');
    }
}
