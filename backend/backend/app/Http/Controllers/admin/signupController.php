<?php

namespace App\Http\Controllers\admin;

use Laravel\Lumen\Routing\Controller as BaseController;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class signupController extends BaseController
{

  public function Insertsignupdata(Request $request)
  {
    // echo "hii";
    // exit();
    $username = $request->input('username');
    $number = $request->input('number');
    $age = $request->input('age');
    $email = $request->input('email');
    $password = $request->input('password');

    $add_data = DB::table('signup')->insert([
      "username" => $username, "number" => $number, "age" => $age, "email" => $email, "password" => $password
    ]);

    if ($add_data) {
      $response = response()->json(['status' => 1, 'message' => 'Successfully Added']);
    } else {
      $response = response()->json(['status' => 0, 'message' => 'Something Error']);
    }
    return $response;
  }
  //select

  public function profileselect(Request $request)
  {

$userid =  $request->input('userid');


    $view_data = DB::table('signup')->select('id', 'username', 'number', 'email','profileimg', 'imagepath')->where('id','=',$userid)->get();


    if ($view_data) {
      $response = response()->json(['status' => 1, 'data' => $view_data]);
    } else {
      $response = response()->json(['status' => 0, 'message' => 'Data Not Found']);
    }

    return $response;
  }

  //update

  public function insertprofilepage(Request $request)
  {
    $todate = date('Ymdhis');
    $random = rand(1000, 9999);
    $id = $request->input('id');
    $name = $request->input('Name');
    $file = $request->file('file');
    if ($file != '') {
    $originalNameold = $file->getClientOriginalExtension();
    $originalName = $todate . '-' . $random . '.' . $originalNameold;
    $uploadPath = "fileupload";
    $file->move($uploadPath, $originalName);

    
      $add_mode = DB::table('signup')->where('id', '=', $id)->update(["username" => $name, "profileimg" => $originalName, "imagepath" => $uploadPath]);
    } else {
      
      $add_mode = DB::table('signup')->where('id', '=', $id)->update(["username" => $name]);
    }
    if ($add_mode) {
      $response = response()->json(['status' => 1, 'message' => 'Successfully Added']);
    } else {
      $response = response()->json(['status' => 0, 'message' => 'Something Error']);
    }
    return $response;
  }






  public function updatePassword(Request $request)
  {

    $id = $request->input('id');
    $newPassword = $request->input('Password');
    $oldPassword = $request->input('oldpassword');


    $com_oldpass = DB::table('signup')->where('id', $id)->value('password');


    if ($com_oldpass !== $oldPassword) {
      $response = response()->json(['status' => 0, 'message' => 'Old password is incorrect']);
      return $response;
    }


    $update = DB::table('signup')->where('id', $id)->update(['password' => $newPassword]);

    if ($update) {
      $response = response()->json(['status' => 1, 'message' => 'Password updated successfully']);
    } else {
      $response = response()->json(['status' => 0, 'message' => 'Failed to update password']);
    }

    return $response;
  }




  // public function ViewAttendance(){
  //     $view_attendance = DB::table('attendance_tb')->select('*')->where('status', 1)->orderBy('id')->get(); 
  //     if ($view_attendance){
  //       $response = response()->json($view_attendance);      
  //     }else{
  //             $response = response()->json(['status' => 0, 'message' => 'Data Not Found']);  
  //         }
  //       return $response;  
  //    }



  // public function updateimg(Request $request)
  // {

  //   $file = $request->file('file');

  //   $originalName = $file->getClientOriginalExtension();
  //   $uploadPath = "fileupload";
  //   $file->move($uploadPath, $originalName);

  //   $add_data = DB::table('signup')->insert([
  //     "profileimg" => $originalName,
  //     "imagepath" => $uploadPath
  //   ]);

  //   if ($add_data) {
  //     $response = response()->json(['status' => 1, 'message' => 'Successfully Added']);
  //   } else {
  //     $response = response()->json(['status' => 0, 'message' => 'Something Error']);
  //   }
  //   return $response;
  // }


  //profile view

  // public function profileselectdataa()
  // {

  //   $view_data = DB::table('signup')->select('id','' ,'profileimg', 'imagepath')->get();

  //   if ($view_data) {
  //     $response = response()->json(['status' => 1, 'data' => $view_data]);
  //   } else {
  //     $response = response()->json(['status' => 0, 'message' => 'Data Not Found']);
  //   }

  //   return $response;
  // }
}
