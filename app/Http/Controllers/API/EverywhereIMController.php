<?php

namespace App\Http\Controllers\API;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\Controller;
use App\Http\Controllers\ColorController;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Color;
use App\Models\Ccode;
use \Illuminate\Support\Facades\URL;
use Illuminate\Support\Facades\DB;


class EverywhereIMController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $users = DB::table('users')->get();

        return response()->json($users,200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $user = User::factory()->create();
        $color = Color::inRandomOrder()->first();
        $user->colors()->attach($color);

        return redirect('api/color');

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $user = User::get()->last();
        $user_colors = $user->colors()->get();
        $user_data = array(
            'user' => $user,
            'user_color' => $user_colors
        );


        return response()->json($user_data,200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $color = Color::inRandomOrder()->first();
        $user = User::get()->last();
        $user->colors()->attach($color);
        $user_colors = $user->colors()->get();
        return response()->json($user_colors,200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        User::get()->last()->delete();

        return 'last created user deleted';

    }
}
