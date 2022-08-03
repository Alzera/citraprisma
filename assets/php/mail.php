<?php

header('Access-Control-Allow-Origin: https://www.citraprisma.com');
// header('Access-Control-Allow-Origin: http://localhost:3000');
// header('Access-Control-Allow-Credentials: true');
header('Access-Control-Allow-Methods: POST');
header("Access-Control-Allow-Headers: Content-Type, Authorization, Accept, Accept-Language, X-Authorization");
// header('Access-Control-Max-Age: 86400');

header('Content-Type: application/json; charset=utf-8');

$headers = null;
if (isset($_SERVER['Authorization'])) {
    $headers = trim($_SERVER["Authorization"]);
} else if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    $headers = trim($_SERVER["HTTP_AUTHORIZATION"]);
} else if (function_exists('apache_request_headers')) {
    $requestHeaders = apache_request_headers();
    $requestHeaders = array_combine(array_map('ucwords', array_keys($requestHeaders)), array_values($requestHeaders));
    if (isset($requestHeaders['Authorization'])) {
        $headers = trim($requestHeaders['Authorization']);
    }
}

function pullOut($message){
  echo json_encode([
    "status" => $message
  ]);
  exit;
}

if (empty($headers) || !preg_match('/Bearer\s(\S+)/', $headers, $matches)) 
  pullOut("Something wrong, please contact administrator! Status: No Authorization");

$jwt = $matches[1];
if (! $jwt) pullOut("Something wrong, please contact administrator! Status: No Authorization");

require_once __DIR__ . '/vendor/autoload.php';

use Firebase\JWT\JWT;
use Firebase\JWT\Key;

try {
  $token = JWT::decode($jwt, new Key("cf83e1357eefb8bdf1542850d66d8007d620e4050b5715dc83f4a921d36ce9ce47d0d13c5d85f2b0ff8318d2877eec2f63b931bd47417a81a538327af927da3e", 'HS256'));
} catch (Exception $err) {
  pullOut("Something wrong, please contact administrator! Status: Unauthorized");
}
$now = new DateTimeImmutable();

if ($token->nbf > $now->getTimestamp() || $token->exp < $now->getTimestamp()){
  pullOut("Something wrong, please contact administrator! Status: Token Invalid");
}

$to = "sales@citraprisma.com";
// $to = "alzeracita23@gmail.com";
$from = $token->data->email;
$name = $token->data->name;
$work = strcmp($token->data->work,"") == 0 ? $token->data->otherwork : $token->data->work;
$subject = strcmp($token->data->nacessties,"") == 0 ? $token->data->othernacessties : $token->data->nacessties;
$phone = $token->data->phone;
$address = $token->data->address;
$message = $token->data->message;

$headers = "From: no-reply@citraprisma.com\r\n";
$headers .= "Reply-To: ". $from . "\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";

$body = "<!DOCTYPE html><html lang='en'><head><meta charset='UTF-8'><title>Website Email</title></head><body>";
$body .= "<table style='width: 100%;'>";
$body .= "<tbody><tr>";
$body .= "<td style='border:none;'><strong>Name:</strong> {$name}</td>";
$body .= "<td style='border:none;'><strong>Email:</strong> {$from}</td>";
$body .= "</tr>";
$body .= "<tr>";
$body .= "<td style='border:none;'><strong>Phone:</strong> {$phone}</td>";
$body .= "<td style='border:none;'><strong>Address:</strong> {$address}</td>";
$body .= "</tr>";
$body .= "<tr>";
$body .= "<td style='border:none;'><strong>Subject:</strong> {$subject}</td>";
$body .= "<td style='border:none;'><strong>Work:</strong> {$work}</td>";
$body .= "</tr>";
$body .= "<tr><td colspan='2' style='border:none;'>{$message}</td></tr>";
$body .= "</tbody></table>";
$body .= "</body></html>";

$send = mail($to, $subject, $body, $headers);
if(!$send){
  echo json_encode([
    "status" => "Fail to send email"
  ]);
}

echo json_encode([
  "status" => "Success"
]);