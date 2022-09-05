<?php

namespace App\Controllers;

use CodeIgniter\API\ResponseTrait;

class Home extends BaseController
{
    use ResponseTrait;
    
    public function index()
    {
        $db = db_connect();
        $data = $db->table('users')->getWhere(['id' => 1])->getRow();
        return $this->respond([ 'test' => true], 200);
    }
}
