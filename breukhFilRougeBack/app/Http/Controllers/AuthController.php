<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $request->validate([
            'login' => 'required',
            'password' => 'required',
        ]);
        if (!Auth::attempt($request->only(['login', 'password']))) {
            return response()->json([
                'status' => false,
                'message' => 'User not found.',
            ], 404);
        }
        $user = User::where('login', $request->login)->first();
        return response()->json([
            'status' => true,
            'message' => 'User Logged In Successfully',
            'token' => $user->createToken("API TOKEN")->plainTextToken,
            'user' => $user
        ], 200);
    }

    public function logout()
    {
        Auth::logout();
    }
}
