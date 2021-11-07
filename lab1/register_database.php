<?php

$name = $_POST['name'];
$email = $_POST['email'];
$password = $_POST['password'];
$confirmPassword = $_POST['confirmPassword'];

$conn = new mysqli("localhost", "root", "", "registration");
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
  }
$query = "SELECT * FROM user WHERE email = '$email'";
$result = mysqli_query($conn, $query);
$userRow = mysqli_fetch_array($result);
  
if($email == $userRow['email']){
  echo '<script type="text/javascript">'; 
  echo 'alert("email already exists");'; 
  echo 'window.location.href = "register.html";';
  echo '</script>';
}else{

    $encryptedPassword = md5($password);
    $sql = "INSERT INTO user (email,name,password) VALUES ('$email', '$name', '$encryptedPassword')";
    mysqli_query($conn, $sql);
    echo "Welcome $name";
}


?>