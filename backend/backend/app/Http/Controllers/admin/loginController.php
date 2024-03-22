<?php

namespace App\Http\Controllers\admin;

use Laravel\Lumen\Routing\Controller as BaseController;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class loginController extends BaseController
{

    public function logindata(Request $request)
    {

        $user_name = $request->input('username');
        $password = $request->input('password');

        $user = DB::table('signup')->select('*')->where('username', $user_name)->where('password', $password)->get();

        if (sizeof($user) > 0) {
            $response = response()->json(['status' => 1, 'message' => 'Welcome ' .$user->first()->username, 'data' => $user]);
        } else {
            $response = response()->json(['status' => 0, 'message' => 'Invalid Username Or Password']);
        }
        return $response;
    }
}
