<?php

/** @var \Laravel\Lumen\Routing\Router $router */
namespace App\Controllers\admin\tournamentController;

namespace App\Http\Controllers\admin\signupController;
namespace App\Http\Controllers\admin\loginController;
namespace App\Http\Controllers\admin\forgetController;

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$router->get('/', function () use ($router) {
    $html = "<!DOCTYPE html>
    <html>
    <head>
    <style>
    @import url(https://fonts.googleapis.com/css?family=Raleway:600);
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #EA2E49;
}

h1 {
  color: #fff;
  font-family: 'Raleway', sans-serif;
  font-size: 52px;
  font-weight: 600;
  text-transform: uppercase;
}
h1 span {
  display: inline-block;
  opacity: 0;
  transform: translateY(20px) rotate(90deg);
  transform-origin: left;
  animation: in 0.5s forwards;
}
h1 span:nth-child(1) {
  animation-delay: 0.1s;
}
h1 span:nth-child(2) {
  animation-delay: 0.2s;
}
h1 span:nth-child(3) {
  animation-delay: 0.3s;
}
h1 span:nth-child(4) {
  animation-delay: 0.4s;
}
h1 span:nth-child(5) {
  animation-delay: 0.5s;
}
h1 span:nth-child(6) {
  animation-delay: 0.6s;
}
h1 span:nth-child(7) {
  animation-delay: 0.7s;
}
h1 span:nth-child(8) {
  animation-delay: 0.8s;
}
h1 span:nth-child(9) {
  animation-delay: 0.9s;
}
h1 span:nth-child(10) {
  animation-delay: 1.0s;
}
h1 span:nth-child(11) {
  animation-delay: 1.1s;
}
h1 span:nth-child(12) {
  animation-delay: 1.2s;
}

@keyframes in {
  0% {
    opacity: 0;
    transform: translateY(50px) rotate(90deg);
  }
  100% {
    opacity: 1;
    transform: translateY(0) rotate(0);
  }
}
    </style>
    </head>
    <body>
    <h1>
	<span>w</span>
	<span>e</span>
	<span>l</span>
	<span>c</span>
	<span>o</span>
	<span>m</span>
	<span>e</span>
	<span>T</span>
	<span>o</span>
	<span>A</span>
	<span>P</span>
	<span>I</span>
        </h1>
    </body>
    </html>";
    return $html.$router->app->version();
});

//tournament admin
$router->post('/inserttournament','admin\tournamentController@createtournament');
$router->get('/selecttournament','admin\tournamentController@ViewTournament');

$router->get('/selectgametournament','admin\tournamentController@selectroleper');
$router->post('/updatetrournamentdata','admin\tournamentController@updatetrournament');

$router->post('/viewselectetournament','admin\tournamentController@viewtournamentdata');



//game admin
$router->get('/selectgame','admin\gameController@ViewGame');
$router->post('/insertgame','admin\gameController@creategame');
$router->post('/updategame','admin\gameController@UpdateGame');
$router->post('/Deletegame','admin\gameController@deletegame');

//status live

$router->post('/insertstatus','admin\gameController@createstatus');
$router->get('/selectstatus','admin\gameController@Selectstatus');
$router->post('/updatestatusview','admin\gameController@updatestatusview');


//mode solo
$router->post('/insertmode','admin\gameController@createmode');
$router->get('/selectmode','admin\gameController@Selectmode');
$router->post('/updatemodeview','admin\gameController@updatemodeview');


//prize
$router->post('/insertprize','admin\gameController@createprize');
$router->get('/selectprize','admin\gameController@Selectprize');
$router->post('/updateprizeview','admin\gameController@updateprize');

//rank
$router->post('/insertrank','admin\gameController@createrank');
$router->get('/selectrank','admin\gameController@Selectrank');
$router->post('/updaterankview','admin\gameController@updaterank');


//type
$router->post('/insertdevice','admin\gameController@createtype');
$router->get('/selecttype','admin\gameController@Selectdevice');
$router->post('/updatetypeview','admin\gameController@updatetype');



//sign up
$router->post('/insertsignup','admin\signupController@Insertsignupdata');

$router->post('/selectprofiledata','admin\signupController@profileselect');

$router->post('/updatepassword','admin\signupController@Updatepassword');
$router->post('/insertprofile','admin\signupController@insertprofilepage');




//profile

$router->post('/updateimg','admin\signupController@updateimg');

//login

$router->post('/login','admin\loginController@logindata');

//forget 
$router->post('/checkemail','admin\forgetController@emailforgate');


//upcoming 
$router->get('/upcomingselect','admin\tournamentController@Upcomingselect');

//completed

$router->get('/completedselect','admin\tournamentController@Completedselect');

//live
$router->get('/liveselect','admin\tournamentController@liveselect');



// insertprofile

