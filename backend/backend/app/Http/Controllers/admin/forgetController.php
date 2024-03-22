<?php

namespace App\Http\Controllers\admin;

use Laravel\Lumen\Routing\Controller as BaseController;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class forgetController extends BaseController
{
    // public function emailforgate(Request $request){

    //     $email = $request->input('email');
        

    //     $user = DB::table('signup')->select('*')->where('email', $email)->get();
       
    //    if (sizeof($user) > 0) {
    //             $response = response()->json(['status' => 1, 'data' => $user]);
    //     }
    //     else{
    //         $response = response()->json(['status' => 0, 'message' => 'Invalid Username Or Password']);
    //     }
    //     return $response;  

    // }





public function emailforgate(Request $request){

    $email = $request->input('email');

    $add_data=DB::table('signup')->insert(["email"=>$email]); 

        if ($add_data) {        
          $response = response()->json(['status' => 1, 'message' => 'Successfully Added']);
        }else {
          $response = response()->json(['status' => 0, 'message' => 'Something Error']);
        }
        return $response;
    }

}