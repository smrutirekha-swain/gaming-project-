<?php

namespace App\Http\Controllers\admin;

use Illuminate\Http\Request;
use Illuminate\support\Facades\DB;
use Laravel\Lumen\Routing\Controller as BaseController;

class tournamentController extends BaseController
{

  /**
   * Create a new controller instance.
   *
   * @return void
   */





public function createtournament(Request $request)
  {
    // print_r($request);
    // return ;
    $gameid = $request->input('gamename');

    $gametypeid = $request->input('gametype');

    $todate = date('Ymdhis');
    $random = rand(1000, 9999);
    //unique

    $file = $request->file('file');
    //.pnj

    $originalNameold = $file->getClientOriginalExtension();

    $originalName = $todate . '-' . $random . '.' . $originalNameold;
    $uploadPath = "fileupload";
    $file->move($uploadPath, $originalName);

    // $file = $request->file('file');
    //original name
    // $originalName= $file->getClientOriginalName();
    //change the img name

    // $originalName = $file->getClientOriginalExtension();
    // $uploadPath = "fileupload";
    // $file->move($uploadPath, $originalName);

    //$file->move($uploadPath, $originalName);


    $gamemodeid = $request->input('gamemode');
    $gamestatusid = $request->input('status');
    $gamerankid = $request->input('gamerank');
    $gameprizeid = $request->input('gameprize');
    $gamestart = $request->input('gamedate');
    $gamestime = $request->input('gamestime');
    $gameetime = $request->input('gameetime');
    $gamefees = $request->input('gamefees');

    $view_gamename = DB::table('games')->select('game_name')->where('id', '=', $gameid)->first();
    $view_gamestatus = DB::table('status')->select('status_L')->where('id', '=', $gamestatusid)->first();
    $view_gamemode = DB::table('mode')->select('mode_type')->where('id', '=', $gamemodeid)->first();
    $view_gamerank = DB::table('rank')->select('rank_g')->where('id', '=', $gamerankid)->first();
    $view_gameprize = DB::table('prize')->select('prize_p')->where('id', '=', $gameprizeid)->first();
    $view_gametypes = DB::table('device_type')->select('device_t')->where('id', '=', $gametypeid)->first();



    $add_tournament = DB::table('tournament')
      ->insert([
        "gameid" => $gameid,
        "gamename" => $view_gamename->game_name,

        'gameimage' => $originalName,
        'imagepath' => $uploadPath,

        "typeid" => $gametypeid,
        "type" => $view_gametypes->device_t,
        "modeid" => $gamemodeid,
        "mode" => $view_gamemode->mode_type,
        
        "statusid" => $gamestatusid,
        "status" => $view_gamestatus->status_L,
        "rankid" => $gamerankid,
        "rank" => $view_gamerank->rank_g,
        "prizeid" => $gameprizeid,
        "prize" => $view_gameprize->prize_p,
        "date" => $gamestart,
        "time" => $gamestime,
        "etime" => $gameetime,
        "fees" => $gamefees,

      ]);
    if ($add_tournament) {
      $response = response()->json(['status' => 200, 'message' => 'Successfully Added']);
    } else {
      $response = response()->json(['status' => 500, 'message' => 'Something Error']);
    }
    return $response;
  }

  // public function imginsert(){
  // }

  // $file=$request->file('file');
  // $uploadPath="images/profile";

  // $originalName= $file->getClientOriginalName();
  // $file->move($uploadPath, $originalName);


  // view tournament
  public function ViewTournament()
  {

    $view_tournament = DB::table('tournament')->select('*')->orderBy('id')->get();
    if (sizeof($view_tournament)) {
      $response = response()->json(['status' => 1, 'data' => $view_tournament]);
    } else {
      $response = response()->json(['status' => 0, 'message' => 'Data Not Found']);
    }
    return $response;
  }



 //update tournament

  public function  updatetrournament(Request $request)
  {

    $todate = date('Ymdhis');
    $random = rand(1000, 9999);
    //unique
    $file = $request->file('file');
    //.pnj
    $originalNameold = $file->getClientOriginalExtension();

    $originalName = $todate . '-' . $random . '.' . $originalNameold;
    $uploadPath = "fileupload";
    $file->move($uploadPath, $originalName);
    
    $id = $request->input('id');
    $game = $request->input('gamenam');
    $gametype = $request->input('gametyp');
    $gamemod = $request->input('gamemod');
    $gamestatus = $request->input('statu');
    $gamerank = $request->input('gameran');
    $gameprize = $request->input('gamepriz');
    $gamestar = $request->input('gamedat');
    $gamestim = $request->input('gamestim');
    $gameetim = $request->input('gameetim');
    $gamefee = $request->input('gamefee');

    
    $view_gamename = DB::table('games')->select('game_name')->where('id', '=', $game)->get();
    // return $view_gamename;
    // exit(); 

    $view_gamestatus = DB::table('status')->select('status_L')->where('id', '=', $gamestatus)->get();

    // return $view_gamestatus;
    // exit();
    $view_gamemode = DB::table('mode')->select('mode_type')->where('id', '=', $gamemod)->get();

    // return $view_gamemode;
    // exit();
    $view_gamerank = DB::table('rank')->select('rank_g')->where('id', '=', $gamerank)->get();

    // return $view_gamerank;
    // exit();
    $view_gameprize = DB::table('prize')->select('prize_p')->where('id', '=', $gameprize)->get();

    // return $view_gameprize;
    // exit();
    $view_gametypes = DB::table('device_type')->select('device_t')->where('id', '=', $gametype)->get();

    // return $view_gamename->first()->game_name;
    // exit();


    $update_roletb = DB::table('tournament')->where('id', $id)->update([

      "gamename" => $view_gamename->first()->game_name,

      'gameimage' => $originalName,

      'imagepath' => $uploadPath,

      "type" => $view_gametypes->first()->device_t,
    
      "mode" => $view_gamemode->first()->mode_type,
    
      "status" => $view_gamestatus->first()->status_L,
      
      "rank" => $view_gamerank->first()->rank_g,
     
      "prize" => $view_gameprize->first()->prize_p,
      "date" => $gamestar,
      "time" => $gamestim,
      "etime" => $gameetim,
      "fees" => $gamefee,

    ]);
    if ($update_roletb) {
      $response = response()->json(['status' => 1, 'message' => 'Updated Successfully']);
    } else {
      $response = response()->json(['status' => 0, 'message' => 'No Data Found']);
    }
    return $response;
  }


//selectviewtourrnament

  public function viewtournamentdata(Request $request){

    $id = $request->input('gameID');
    
    $game_tour = DB::table('tournament')->select('*')->where('gameid' ,'=', $id)->where('tournament_status' ,'=',1)->get();


    if (sizeof($game_tour) > 0) {
      $response = response()->json(['status' => 1, 'message' => 'Updated Successfully' .$game_tour->first()->gameid, 'data' => $game_tour]);
    } else {
      $response = response()->json(['status' => 0, 'message' => 'No Data Found']);
    }
    return $response;
  }








  //gaming

  public function selectroleper()
  {
    $view_data = DB::table('games')
      // ->join('games', 'tournament.gamename', '=','games.id')

      ->select('id', 'game_name')
      ->get();

    // print_r($view_data);

    if ($view_data) {
      $response = response()->json(['status' => 1, 'data' => $view_data]);
    } else {
      $response = response()->json(['status' => 0, 'message' => 'Data Not Found']);
    }

    return $response;
  }

  //upcoming

  public function Upcomingselect()
  {

    $view_data = DB::table('tournament')->select('id', 'gamename', 'mode')->get();

    if ($view_data) {
      $response = response()->json(['status' => 1, 'data' => $view_data]);
    } else {
      $response = response()->json(['status' => 0, 'message' => 'Data Not Found']);
    }

    return $response;
  }

  //complete

  public function Completedselect()
  {

    $view_data = DB::table('tournament')->select('id', 'gamename', 'prize', 'date')->get();

    if ($view_data) {
      $response = response()->json(['status' => 1, 'data' => $view_data]);
    } else {
      $response = response()->json(['status' => 0, 'message' => 'Data Not Found']);
    }

    return $response;
  }

  //live

  public function liveselect()
  {
    $view_data = DB::table('tournament')->select('id', 'gamename', 'prize', 'date')->get();

    if ($view_data) {
      $response = response()->json(['status' => 1, 'data' => $view_data]);
    } else {
      $response = response()->json(['status' => 0, 'message' => 'Data Not Found']);
    }

    return $response;
  }
  // insertprofilepage

  // public function insertprofilepage(Request $request) { 

  //   $id= $request->input('id');
  //   $name = $request->input('Name');
  //   $mail = $request->input('Mail');
  //   $mob = $request->input('Mob');
  //  // $gender = $request->input('Gender');
  //  // $pass = $request->input('Pass');
  //  // $npass = $request->input('Npass');
  //   $cpass = $request->input('CpassW');
 

  //   $add_mode =DB::table('signup')->where('id', $id)->update(["username"=>$name,  "email"=>$mail, "number"=>$mob,"password"=>$cpass]); 
      
  //   if ($add_mode) {
  //     $response = response()->json(['status' =>1, 'message' => 'Successfully Added']);
  //   }else {
  //     $response = response()->json(['status' => 0, 'message' => 'Something Error']);
  //   }
  //   return $response;
  //  }


}
