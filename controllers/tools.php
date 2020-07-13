<?php

header('Content-Type: application/json');
include_once __DIR__ .'/../models/tool.php';

if($_REQUEST['action'] === 'index') {
  echo json_encode(Tools::all());



} elseif ($_REQUEST['action'] === 'post') {
  $request_body = file_get_contents('php://input');
  $body_object = json_decode($request_body);
  $new_tool = new Tool(null,$body_object->title,$body_object->img,$body_object->description,$body_object->price,$body_object->tags);
  $all_tools = Tools::create($new_tool);
  echo json_encode($all_tools);
}
elseif ($_REQUEST['action'] === 'update') {
  $request_body = file_get_contents('php://input');
  $body_object = json_decode($request_body);
  $updated_tool = new Tool($_REQUEST['id'], $body_object->title,$body_object->img,$body_object->description,$body_object->price,$body_object->tags);
  $all_tools = Tools::update($updated_tool);
  echo json_encode($all_tools);

}
elseif ($_REQUEST['action'] === 'delete') {
  $all_tools = Tools::delete($_REQUEST['id']);
  echo json_encode($all_tools);
}




?>
