<?php

namespace App\Controllers;

class Categories extends BaseController{

  private $model;

  public function __construct(){
    $this->model = model('App\Models\Category_model');
  }

  public function all(){
    return $this->response([
      'categories' => $this->model->findAll(),
    ], $this->model->error());
  }

  public function create(){
    $data = $this->request->getJson(true);
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