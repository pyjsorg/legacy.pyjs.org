<?php

  require_once ("../phpolait/phpolait.php");

  /**
   * Simple test class for the JSON RPC server
   */
  class RestrictedServer {
		
    function myecho($msg) {
      return $msg;
    }

    function hidden() {
      return "Inaccessible method";
    }

    function version() {
      return "PHP-O-Lait Version 0.5";
    }
  }

  $server = new JSONRpcServer( new RestrictedServer(), 
		array ("version"=>true, "Echo"=>"myecho")
	);
?>
<html>
<head>
<?php $server->javascript('proxy'); ?>
</head>
<html>
<body>
<a href="javascript:alert(proxy.Echo('Echo from server'));">
Echo('Echo from server')</a><br />
<a href="javascript:alert(proxy.version());">
version()</a><br />
<a href="javascript:alert(proxy.hidden());">
hidden()</a> 
(Won't produce an error since the JavaScript method does not exist.)<br />
</body>
</html>

