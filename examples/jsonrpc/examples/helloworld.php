<?php 

require_once("../phpolait/phpolait.php");

class MyClass {
  function hi() {
    return "Hello, World-O-Lait!";
	}
}
$server = new JSONRpcServer(new MyClass());

?>
<html>
<head>
<?php $server->javascript("test"); ?>
</head>
<body onLoad="alert(test.hi());">
</body>
</html>