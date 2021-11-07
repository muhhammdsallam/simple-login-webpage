<?php

$email = $_POST['email'];
$password = md5($_POST['password']);


$conn = new mysqli("localhost", "root", "", "registration");
if (!$conn) {
  die("Connection failed: " . mysqli_connect_error());
}

$check_user = mysqli_query($conn, "SELECT email,password from user WHERE email = '$email' && password = '$password'");
$query = "SELECT * FROM user WHERE email = '$email'";
$result = mysqli_query($conn, $query);
$userRow = mysqli_fetch_array($result);

$name = $userRow['name'];

if (mysqli_num_rows($check_user) > 0) {
  echo "Welcome $name";
} elseif (mysqli_num_rows($check_user) == 0) {
  
  echo '<script type="text/javascript">'; 
  echo 'alert("Wrong email or password");'; 
  echo 'window.location.href = "index.html";';
  echo '</script>';
  
}

mysqli_close($conn);

?>