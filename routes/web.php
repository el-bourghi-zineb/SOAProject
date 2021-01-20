<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
/*
Route::get('/', function () {

    //$pizzastable = DB::table('pizzas')->get();
    // return $pizzastable;
    return view('welcome');
});*/

Route::get('/{path}',function(){
    return view('welcome');
})->where('path','.*');

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');



Route::get('pizza','Api\PizzaController@index');
Route::post('pizza/store','Api\PizzaController@store');
Route::delete('pizza/delete/{id}','Api\PizzaController@destroy');
Route::get('pizza/edit/{id}','Api\PizzaController@edit');
Route::put('pizza/update/{id}','Api\PizzaController@update');
