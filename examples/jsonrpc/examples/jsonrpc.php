<?php

require ("../phpolait/phpolait.php");

$proxy = new JSONRpcProxy(
   "echo.php"
);
list ($result, $err, $ext) = 
	$proxy->echo("Testing JSONRPC echo on PHP-O-Lait's server!");
if ($err!=null) {
  echo "ERROR $err: $ext";
} else {
  echo $result;
}

?>