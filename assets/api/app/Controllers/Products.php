<?php

namespace App\Controllers;

class Products extends BaseController{

  private $category;
  private $image;
  private $product;
  private $relation;

  public function __construct(){
    $this->category = model('App\Models\Category_model');
    $this->image = model('App\Models\Product_images_model');
    $this->product = model('App\Models\Product_model');
    $this->relation = model('App\Models\Rel_products_categories_model');
  }
    
  public function find($id){
    $data = $this->product->find($id);
    $error = $this->product->error();
    if(!empty($error['message'])) return $this->response(null, $error);
    
    $data['images'] = $this->image->select('path,image_order')->where('id_products', $id)->findAll();
    $error = $this->image->error();
    if(!empty($error['message'])) return $this->response(null, $error);

    $data['categories'] = $this->relation->select('id_categories')->where('id_products', $id)->findAll();
    $error = $this->relation->error();
    if(!empty($error['message'])) return $this->response(null, $error);

    return $this->response($data);
  }

  public function create(){
    $data = $this->request->getJson(true);

    $db = db_connect();
    $db->transStart();
    $this->product->insert($data);
    $error = $this->product->error();
    if(!empty($error['message'])){
      $db->transComplete();
      return $this->response(null, $error);
    }
    $id = $this->product->getInsertID();
    
    foreach ($data['images'] as $image) {
      $image['id_products'] = $id;
      $this->image->insert($image);
      $error = $this->image->error();
      if(!empty($error['message'])){
        $db->transComplete();
        return $this->response(null, $error);
      }
    }

    foreach ($data['categories'] as $cat) {
      $cat['id_products'] = $id;
      $this->relation->insert($cat);
      $error = $this->relation->error();
      if(!empty($error['message'])){
        $db->transComplete();
        return $this->response(null, $error);
      }
    }
    $db->transComplete();

    return $this->response([ 'id' => $id, ]);
  }

  public function update($id){
    $data = $this->request->getJson(true);

    $db = db_connect();
    $db->transStart();
    $product = $this->product->find($id);
    $product['title'] = isset($data['title']) ? $data['title'] : $product['title'];
    $product['price'] = isset($data['price']) ? $data['price'] : $product['price'];
    $product['description'] = isset($data['description']) ? $data['description'] : $product['description'];
    $this->product->save($product);

    if(isset($data['images'])){
      $this->image->where('id_products', $id)->delete();
      if(!empty($error['message'])){
        $db->transComplete();
        return $this->response(null, $error);
      }

      foreach ($data['images'] as $image) {
        $image['id_products'] = $id;
        $this->image->insert($image);
        $error = $this->image->error();
        if(!empty($error['message'])){
          $db->transComplete();
          return $this->response(null, $error);
        }
      }
    }

    if(isset($data['categories'])){
      $this->relation->where('id_products', $id)->delete();
      $error = $this->relation->error();
      if(!empty($error['message'])) return $this->response(null, $error);

      foreach ($data['categories'] as $cat) {
        $cat['id_products'] = $id;
        $this->relation->insert($cat);
        $error = $this->relation->error();
        if(!empty($error['message'])){
          $db->transComplete();
          return $this->response(null, $error);
        }
      }
    }

    $db->transComplete();

    return $this->response([ 'id' => $id, ]);
  }

  public function delete($id){
    $this->relation->where('id_products', $id)->delete();
    $error = $this->relation->error();
    if(!empty($error['message'])) return $this->response(null, $error);

    $this->image->where('id_products', $id)->delete();
    $error = $this->image->error();
    if(!empty($error['message'])) return $this->response(null, $error);

    $this->product->delete($id);
    $error = $this->product->error();
    if(!empty($error['message'])) return $this->response(null, $error);
    
    return $this->response(true);
  }

  public function pager(){
    $q = $this->request->getGet('q');
    if($q) $this->product->like('title', $q);
    $items = $this->product
      ->select('id,title,price,description,created_at')
      ->paginate(10);
    $pager = $this->product->pager;
    return $this->response([
      'items' => $items,
      'pager' => [
        'total' => $pager->getPageCount(),
        'count' => $pager->getTotal(),
      ]
    ], $this->product->error());
  }
}