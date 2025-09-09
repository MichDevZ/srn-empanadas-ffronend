<?php
namespace App\Controllers;

use CodeIgniter\Controller;

class Empanadas extends Controller {
    public function index() {
        return view('empanadas/index');
    }
}