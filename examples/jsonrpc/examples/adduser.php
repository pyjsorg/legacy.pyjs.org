<?php

require("../phpolait/phpolait.php");

class AddUserServer {
  function AddUser($name) {
		return "Added user [$name]";
	}
};

$server = new JSONRpcServer(new AddUserServer());

?>
<html>
<body>
Regular PHP-O-Lait functionality to add a user.
</body>
</html>