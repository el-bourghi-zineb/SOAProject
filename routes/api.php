<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

//Route::resource('pizza','Api\PizzaController');


Route::get('pizza','Api\PizzaController@index');
Route::get('order','Api\PizzaController@create');
Route::post('pizza/store','Api\PizzaController@store');
Route::delete('pizza/delete/{id}','Api\PizzaController@destroy');
Route::get('pizza/edit/{id}','Api\PizzaController@edit');
Route::put('pizza/update/{id}','Api\PizzaController@update');


Route::get('payment','Api\PaymentController@index');
Route::post('login','Api\UserController@index');
Route::post('user/store','Api\UserController@store');
Route::post('payment/store','Api\PaymentController@store');
Route::post('address/store','Api\AddressController@store');
/*
Route::group(['middleware' => ['web']], function () {
    Route::post('login','Auth\LoginController@login');  
    Route::post('register','Auth\RegisterController@register');  
    Route::post('logout','Auth\LoginController@logout');
    Route::post('password/email','Auth\ForgotPasswordController@sendResetLinkEmail'); 
    Route::post('password/reset','Auth\ResetPasswordController@reset');
       
});*/