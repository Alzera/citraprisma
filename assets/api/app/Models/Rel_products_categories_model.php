<?php

namespace App\Models;

use CodeIgniter\Model;

class Rel_products_categories_model extends Model
{
    protected $table      = 'rel_products_categories';
    protected $primaryKey = 'id';

    protected $useAutoIncrement = true;

    protected $returnType     = 'array';
    protected $allowedFields = ['id_products','id_categories'];
}