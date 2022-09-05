<?php

namespace App\Filters;

use CodeIgniter\Filters\FilterInterface;
use CodeIgniter\HTTP\RequestInterface;
use CodeIgniter\HTTP\ResponseInterface;
use Config\Services;
use Firebase\JWT\JWT;
use Firebase\JWT\Key;

class Auth_filter implements FilterInterface {

  public function before(RequestInterface $request, $arguments = null){
    $cookie_name = getenv('USER_COOKIE_NAME');
    if(!isset($_COOKIE[$cookie_name])) 
        return $this->response("No Authorization");

    try {
      $auth = $_COOKIE[$cookie_name];
      $key = getenv('TOKEN_SECRET');

      $decoded = JWT::decode($auth, new Key($key, 'HS256'));
      
      if(
        !property_exists($decoded, 'exp') 
        || $decoded->exp < time()
      ) throw new \Exception("Token expired");
    
      $model = model('App\Models\User_model');
      $user = $model
        ->select('role,created_at')
        ->find($decoded->uid);

      if(
        !property_exists($decoded, 'salt')
        || md5($user['created_at']) != $decoded->salt
        || $user['role'] != 'admin'
      ) throw new \Exception("Unauthorized");

      $request->user_id = $decoded->uid;
    } catch (\Throwable $th) {
      return $this->response($th->getMessage());
    }
  }

  private function response($error){
    return Services::response()
      ->setStatusCode(200)
      ->setJSON([
        'status' => false,
        'error' => $error
      ]);
  }

  public function after(RequestInterface $request, ResponseInterface $response, $arguments = null){
    
  }
}