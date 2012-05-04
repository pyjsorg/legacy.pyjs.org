<?php

require("../phpolait/phpolait.php");

class UserManagementServer {
  function AddUser($name) {
		$proxy = new JSONRpcProxy("adduser.php");
		list ($result, $error) = $proxy->AddUser($name);
		return $result;
	}
	function DeleteUser($name) {
		return "Deleted user [$name]";
	}
};

$server = new JSONRpcServer(new UserManagementServer(),
	array("adduser"=>"AddUser","deleteuser"=>"DeleteUser")
);

?>
<html>
<head>
<?php $server->javascript('server'); ?>
<script language="javascript">
function doClick(act) {
	var name = document.getElementById('name').value;
	if (act == 'add') alert(server.adduser(name));
	if (act == 'del') alert(server.deleteuser(name));
}
</script>
<body>
<form>
<input type="text" id="name">
<input type="button" onClick="doClick('add');" value="Add" >
<input type="button" onClick="doClick('del');" value="Delete" >
</body>
</html>
