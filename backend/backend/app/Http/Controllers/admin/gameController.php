<?php

namespace App\Http\Controllers\admin;

use Illuminate\Http\Request;
use Illuminate\support\Facades\DB;
use Laravel\Lumen\Routing\Controller as BaseController;

class gameController extends BaseController
{

  /**
   * Create a new controller instance.
   *
   * @return void
   */
  public function creategame(Request $request)
  {
    // print_r($request);
    // return ;

    // $todate = date('Ymdhis');
    // $random = rand(1000, 9999);
    // $id = $request->input('id');
    // $name = $request->input('Name');
    // $file = $request->file('file');
    // if ($file != '') {
    // $originalNameold = $file->getClientOriginalExtension();
    // $originalName = $todate . '-' . $random . '.' . $originalNameold;
    // $uploadPath = "fileupload";
    // $file->move($uploadPath, $originalName);



    $todate = date('Ymdhis');
    $random = rand(1000, 9999);
    //unique

    $gamename = $request->input('gamename');
    $file = $request->file('file');
    //.pnj

    $originalNameold = $file->getClientOriginalExtension();

    $originalName = $todate . '-' . $random . '.' . $originalNameold;
    $uploadPath = "fileupload";
    $file->move($uploadPath, $originalName);

    $add_game = DB::table('games')
      ->insert([
        "game_name" => $gamename, "img" => $originalName, "img_path" => $uploadPath
      ]);

    if ($add_game) {
      $response = response()->json(['status' => 1, 'message' => 'Successfully Added']);
    } else {
      $response = response()->json(['status' => 0, 'message' => 'Something Error']);
    }
    return $response;
  }


  public function ViewGame()
  {
    $view_data = DB::table('games')
      ->select('id', 'game_name', 'img', 'img_path')->where('status','=', 1)->orderBy('id')->get(); 
    if ($view_data) {
      $response = response()->json(['status' => 1, 'data' => $view_data]);
    } else {
      $response = response()->json(['status' => 0, 'message' => 'Data Not Found']);
    }

    return $response;
  }

//update game

  public function UpdateGame(Request $request)

  {

   $todate = date('Ymdhis');
    $random = rand(1000, 9999);
    $id = $request->input('id');
    $gameename = $request->input('gamenam');
    $file = $request->file('file');
   
    $originalNameold = $file->getClientOriginalExtension();
    $originalName = $todate . '-' . $random . '.' . $originalNameold;
    $uploadPath = "fileupload";
    $file->move($uploadPath, $originalName);

    
      $add_mode = DB::table('games')->where('id', '=', $id)->update([ "game_name" => $gameename, "img" => $originalName, "img_path" => $uploadPath]);
   
    if ($add_mode) {
      $response = response()->json(['status' => 1, 'message' => 'Successfully Added']);
    } else {
      $response = response()->json(['status' => 0, 'message' => 'Something Error']);
    }
    return $response;
  }

// delete game

  public function deletegame(Request $request)
  {

    //return "deleteimg" ;
   //print_r($request);

    $id = $request->input('id');
   //return $id;
    $update_img = DB::table('games')->where('id', $id)->update([
     
      'status'=> 0]);
   
    if ($update_img) {
      $response = response()->json(['status' => 1, 'message' => 'click the delete button']);
    } else {
      $response = response()->json(['status' => 0, 'message' => 'delete Successfully']);
    }
    return $response;
  }








  //  public function ViewGamae() {

  //   $view_game = DB::table('games')->select('*')->orderBy('id')->get(); 
  //   return $view_game;
  //   if ($view_game){
  //     $response = response()->json(['status' => 1, 'data' => $view_game]);      
  //   }else{
  //           $response = response()->json(['status' => 0, 'message' => 'Data Not Found']);  
  //       }
  //     return $response;       
  //  }


  //status live,upcoming

  public function createstatus(Request $request)
  {

    $statusr = $request->input('ststu');

    $add_rank = DB::table('status')
      ->insert([
        "status_L" => $statusr
      ]);

    if ($add_rank) {
      $response = response()->json(['status' => 1, 'message' => 'Successfully Added']);
    } else {
      $response = response()->json(['status' => 0, 'message' => 'Something Error']);
    }
    return $response;
  }

  public function Selectstatus()
  {

    $view_game = DB::table('status')->select('*')->orderBy('id')->get();
    return $view_game;
    if ($view_game) {
      $response = response()->json(['status' => 1, 'data' => $view_game]);
    } else {
      $response = response()->json(['status' => 0, 'message' => 'Data Not Found']);
    }
    return $response;
  }

  public function updatestatusview(Request $request)
  {
    // print_r($request);
    // return;
    $id = $request->input('id');
    $statusn = $request->input('ststus_u');

    $update_roletb = DB::table('ststus')->where('id', $id)->update(['ststus_L' => $statusn]);

    if ($update_roletb) {
      $response = response()->json(['status' => 1, 'message' => 'Updated Successfully']);
    } else {
      $response = response()->json(['status' => 0, 'message' => 'No Data Found']);
    }
    return $response;
  }




  //mode

  public function createmode(Request $request)
  {

    $mode = $request->input('mode');

    $add_mode = DB::table('mode')
      ->insert([
        "mode_type" => $mode
      ]);

    if ($add_mode) {
      $response = response()->json(['status' => 1, 'message' => 'Successfully Added']);
    } else {
      $response = response()->json(['status' => 0, 'message' => 'Something Error']);
    }
    return $response;
  }

  public function Selectmode()
  {

    $view_game = DB::table('mode')->select('*')->orderBy('id')->get();
    return $view_game;
    if ($view_game) {
      $response = response()->json(['status' => 1, 'data' => $view_game]);
    } else {
      $response = response()->json(['status' => 0, 'message' => 'Data Not Found']);
    }
    return $response;
  }


  public function updatemodeview(Request $request)
  {
    // print_r($request);
    // return;
    $id = $request->input('id');
    $name = $request->input('modet');

    $update_roletb = DB::table('mode')->where('id', $id)->update(['mode_type' => $name]);
    if ($update_roletb) {
      $response = response()->json(['status' => 1, 'message' => 'Updated Successfully']);
    } else {
      $response = response()->json(['status' => 0, 'message' => 'No Data Found']);
    }
    return $response;
  }



  //prize

  public function createprize(Request $request)
  {

    $prize = $request->input('prize');

    $add_mode = DB::table('prize')
      ->insert([
        "prize_p" => $prize
      ]);

    if ($add_mode) {
      $response = response()->json(['status' => 1, 'message' => 'Successfully Added']);
    } else {
      $response = response()->json(['status' => 0, 'message' => 'Something Error']);
    }
    return $response;
  }


  public function Selectprize()
  {

    $view_game = DB::table('prize')->select('*')->orderBy('id')->get();
    return $view_game;
    if ($view_game) {
      $response = response()->json(['status' => 1, 'data' => $view_game]);
    } else {
      $response = response()->json(['status' => 0, 'message' => 'Data Not Found']);
    }
    return $response;
  }


  public function updateprize(Request $request)
  {
    // print_r($request);
    // return;
    $id = $request->input('id');
    $amount = $request->input('priz');

    $update_roletb = DB::table('prize')->where('id', $id)->update(['prize_p' => $amount]);
    if ($update_roletb) {
      $response = response()->json(['status' => 1, 'message' => 'Updated Successfully']);
    } else {
      $response = response()->json(['status' => 0, 'message' => 'No Data Found']);
    }
    return $response;
  }



  //rank

  public function createrank(Request $request)
  {

    $rank = $request->input('rank');

    $add_mode = DB::table('rank')
      ->insert([
        "rank_g" => $rank
      ]);

    if ($add_mode) {
      $response = response()->json(['status' => 1, 'message' => 'Successfully Added']);
    } else {
      $response = response()->json(['status' => 0, 'message' => 'Something Error']);
    }
    return $response;
  }

  public function Selectrank()
  {

    $view_game = DB::table('rank')->select('*')->orderBy('id')->get();
    return $view_game;
    if ($view_game) {
      $response = response()->json(['status' => 1, 'data' => $view_game]);
    } else {
      $response = response()->json(['status' => 0, 'message' => 'Data Not Found']);
    }
    return $response;
  }

  public function updaterank(Request $request)
  {
    // print_r($request);
    // return;
    $id = $request->input('id');
    $ranknum = $request->input('rankss');

    $update_roletb = DB::table('rank')->where('id', $id)->update(['rank_g' => $ranknum]);
    if ($update_roletb) {
      $response = response()->json(['status' => 1, 'message' => 'Updated Successfully']);
    } else {
      $response = response()->json(['status' => 0, 'message' => 'No Data Found']);
    }
    return $response;
  }



  //type

  public function createtype(Request $request)
  {
    $type = $request->input('type');

    $add_type = DB::table('device_type')
      ->insert([
        "device_t" => $type
      ]);

    if ($add_type) {
      $response = response()->json(['status' => 1, 'message' => 'Successfully Added']);
    } else {
      $response = response()->json(['status' => 0, 'message' => 'Something Error']);
    }
    return $response;
  }

  public function Selectdevice()
  {

    $view_game = DB::table('device_type')->select('*')->orderBy('id')->get();
    return $view_game;
    if ($view_game) {
      $response = response()->json(['status' => 1, 'data' => $view_game]);
    } else {
      $response = response()->json(['status' => 0, 'message' => 'Data Not Found']);
    }
    return $response;
  }



  public function updatetype(Request $request)
  {
    // print_r($request);
    // return;
    $id = $request->input('id');
    $type = $request->input('d_type');

    $update_roletb = DB::table('device_type')->where('id', $id)->update(['device_t' => $type]);
    if ($update_roletb) {
      $response = response()->json(['status' => 1, 'message' => 'Updated Successfully']);
    } else {
      $response = response()->json(['status' => 0, 'message' => 'No Data Found']);
    }
    return $response;
  }
}
