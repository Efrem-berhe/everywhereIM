<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Color extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var string[]
     */
    protected $fillable = [
        'name', 'color_code'
    ];

    /**
     *
     * Get users associated with a given color
     *
     */
    public function user(){
        return $this->belongsToMany(User::class)->withTimestamps();
    }

     /**
     *
     * A color has unique color code #hex
     *
     */
}
