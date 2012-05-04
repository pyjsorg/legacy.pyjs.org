<?php

  require_once("../phpolait/phpolait.php");
	
  class EchoServer {
    function myecho($msg) { return $msg; }
  }
	
  $server = new JSONRpcServer(new EchoServer(), array("echo"=>"myecho"));
?>
<html>
<head><?php $server->javascript("proxy"); ?>
<script language="javascript">
function doEcho() {
  msg = document.getElementById('msg').value;
	document.getElementById('returned').value = proxy.echo(msg);
}
</script>
<body>
<form>
<input type="text" id="msg" value="This echoes"> 
<input type="button" value="send" onClick="doEcho()" >
<input type="text" id="returned" value="">
</form>
</body>
</html>
