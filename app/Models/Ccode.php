<?php

namespace App\Models;

use App\Models\Color;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ccode extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var string[]
     */
    protected $fillable = [
        'code'
    ];
    
    /**
     * 
     * Every color code  belongs to a color name
     * 
     */
    public function color(){
        return $this->belongsTo(Color::class);
    }
}
