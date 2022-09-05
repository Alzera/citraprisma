<?php

namespace App\Models;

use CodeIgniter\Model;

class Product_images_model extends Model
{
    protected $table      = 'product_images';
    protected $primaryKey = 'id';

    protected $useAutoIncrement = true;

    protected $returnType     = 'array';
    protected $allowedFields = ['id_products','path','image_order'];
}