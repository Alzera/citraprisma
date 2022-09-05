<?php

namespace Config;

// Create a new instance of our RouteCollection class.
$routes = Services::routes();

// Load the system's routing file first, so that the app and ENVIRONMENT
// can override as needed.
if (is_file(SYSTEMPATH . 'Config/Routes.php')) {
    require SYSTEMPATH . 'Config/Routes.php';
}

/*
 * --------------------------------------------------------------------
 * Router Setup
 * --------------------------------------------------------------------
 */
$routes->setDefaultNamespace('App\Controllers');
$routes->setDefaultController('Home');
$routes->setDefaultMethod('index');
$routes->setTranslateURIDashes(false);
$routes->set404Override();
// The Auto Routing (Legacy) is very dangerous. It is easy to create vulnerable apps
// where controller filters or CSRF protection are bypassed.
// If you don't want to define all routes, please use the Auto Routing (Improved).
// Set `$autoRoutesImproved` to true in `app/Config/Feature.php` and set the following to true.
//$routes->setAutoRoute(false);

/*
 * --------------------------------------------------------------------
 * Route Definitions
 * --------------------------------------------------------------------
 */

// We get a performance increase by specifying the default
// route since we don't have to scan directories.

$routes->post('/users/login', 'Users::login');
$routes->post('/users/logout', 'Users::logout');
$routes->group('', ['filter' => 'auth'], function($routes) {
    $routes->get('/users/me', 'Users::me');
    $routes->get('/users/find/(:num)', 'Users::find/$1');
    $routes->get('/users/pager', 'Users::pager');
    $routes->post('/users/create', 'Users::create');
    $routes->post('/users/update/(:num)', 'Users::update/$1');
    $routes->get('/users/delete/(:num)', 'Users::delete/$1');

    $routes->get('/categories', 'Categories::all');
    $routes->post('/categories/create', 'Categories::create');
    $routes->post('/categories/update/(:num)', 'Categories::update/$1');
    $routes->get('/categories/delete/(:num)', 'Categories::delete/$1');

    $routes->get('/products/find/(:num)', 'Products::find/$1');
    $routes->get('/products/pager', 'Products::pager');
    $routes->post('/products/create', 'Products::create');
    $routes->post('/products/update/(:num)', 'Products::update/$1');
    $routes->get('/products/delete/(:num)', 'Products::delete/$1');
});
/*
 * --------------------------------------------------------------------
 * Additional Routing
 * --------------------------------------------------------------------
 *
 * There will often be times that you need additional routing and you
 * need it to be able to override any defaults in this file. Environment
 * based routes is one such time. require() additional route files here
 * to make that happen.
 *
 * You will have access to the $routes object within that file without
 * needing to reload it.
 */
if (is_file(APPPATH . 'Config/' . ENVIRONMENT . '/Routes.php')) {
    require APPPATH . 'Config/' . ENVIRONMENT . '/Routes.php';
}
