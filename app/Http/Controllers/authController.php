<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class authController extends Controller
{
    public function register(Request $request){
        $userFound = User::where('email', $request->get('email'))->first();

        if($userFound){
            return response(["message" => 'User with this email exist'], 400);
        }else{
            if ($request->get('password')== $request->get('confirm_password')){
                $user = new User();

                $user->name = $request->get('username');
                $user->email = $request->get('email');
                $user->password = bcrypt($request->get('password'));

                $otp = mt_rand(100000, 999999);
                $user->$otp = $otp;


                $user->save();

                Mail::to($user->email)->send(new OtpMail('http://localhost:9000/verify_otp?user_id='.$user->id.'&code='.$otp));
                return ["message => success"];
            }else{
                return response(["message" => 'Password and confirm password is not matched'],400);
            }
        }

    }

    public function login(Request $request){

    }

    public function verifyOTP(Request $request){

    }
}
