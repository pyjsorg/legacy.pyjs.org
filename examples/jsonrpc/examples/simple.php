<?php

require_once("phpolait/phpolait.php");  /* First line */

class MyClass {
  function hi() {
    return "Hello, World!";
	}
}
$server = new JSONRpcServer(new MyClass());	/* Second Line */

?>
<html>
<head>
<?php $server->javascript("test");    /* Third Line */  ?>	
</head>
<body onLoad="alert(test.hi());">
That's it!
</body>
</html>

