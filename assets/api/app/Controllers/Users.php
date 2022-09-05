<?php

namespace App\Controllers;

use CodeIgniter\HTTP\RequestInterface;
use Firebase\JWT\JWT;

class Users extends BaseController {

  private $model;

  public function __construct(){
    $this->model = model('App\Models\User_model');
  }
    
  public function find($id){
    $data = $this->model
      ->select('id,name,email,created_at,updated_at,deleted_at')
      ->find($id);
    return $this->response($data, $this->model->error());
  }
    
  public function me(){
    return $this->find($this->request->user_id);
  }
    
  public function login(){
    $params = $this->request->getJson(true);
    $email = $params['email'];
    $pass = $params['password'];
    
    $data = $this->model
      ->select('id,name,password,created_at')
      ->where('email', $email)
      ->first();
      
    if(!$data){
      return $this->response(false, [ 'message' => 'Email not found!' ]);
    }
    
    $salt = md5($data['created_at']);
    
    if(!password_verify($pass . "|ale|" . $salt, $data['password'])){
      return $this->response(false, [ 'message' => 'Wrong password!' ]);
    }

    $key = getenv('TOKEN_SECRET');
    $time = time();
    $exp = $time+60*60*24*30;
    $payload = array(
      "iat" => $time,
      "uid" => $data['id'],
      "salt" => $salt,
      "exp" => $exp
    );
    $token = JWT::encode($payload, $key, 'HS256');
    $cookie_name = getenv('USER_COOKIE_NAME');
    
    setcookie($cookie_name, $token, [
      'expires' => $exp,
      'path' => '/',
      // 'secure' => true,
      'httponly' => true,
      'samesite' => 'None',
    ]);
    
    return $this->response(true, $this->model->error());
  }
  
  public function logout(){
    $cookie_name = getenv('USER_COOKIE_NAME');
    setcookie($cookie_name, '', [
      'expires' => time()-3600,
      'path' => '/',
      // 'secure' => true,
      'httponly' => true,
      'samesite' => 'None',
    ]);
    return $this->response(true);
  }
    
  public function pager(){
    $q = $this->request->getGet('q');
    if($q) $this->model->like('name', $q)->orLike('email', $q);
    $items = $this->model
      ->select('id,name,email,created_at')
      ->paginate(10);
    // $sql = $this->model->getLastQuery()->getQuery();
    // echo $sql;
    $pager = $this->model->pager;
    return $this->response([
      'items' => $items,
      'pager' => [
        'total' => $pager->getPageCount(),
        'count' => $pager->getTotal(),
      ]
    ], $this->model->error());
  }

  public function create(){
    $data = $this->request->getJson(true);
    $data['created_at'] = date('Y-m-d H:i:s');

    $salt = md5($data['created_at']);
    $data['password'] = password_hash($data['password'] . "|ale|" . $salt, PASSWORD_BCRYPT, [
      'cost' => 10,
    ]);

    $this->model->insert($data);

    return $this->response([
      'id' => $this->model->getInsertID(),
    ], $this->model->error());
  }

  public function update($id){
    $this->model->update($id, $this->request->getJson(true));
    return $this->response(true, $this->model->error());
  }

  public function delete($id){
    $this->model->delete($id);
    return $this->response(true, $this->model->error());
  }
}
