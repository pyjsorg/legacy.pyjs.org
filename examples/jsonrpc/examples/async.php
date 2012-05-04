<?php 

require_once("../phpolait/phpolait.php");

class MyClass {
  function myecho($msg) {
    return $msg;
	}
}
$server = new JSONRpcServer(new MyClass());

?>
<html>
<head>
<?php $server->javascript("test"); ?>
<script language="javascript">
function syncCall() {
  alert('syncCall()');
	alert( test.myecho('Hello from synchronous call') );
	alert('leaving syncCall()');
}

function asyncCall() {
  alert('asyncCall()');
	test.myecho('Hello from synchronous call', asyncCallback);
	alert('leaving asyncCall()');
}

function asyncCallback(res, err) {
  alert(res);
}
	
</script>
</head>
<body>
<a href="javascript:syncCall();">Synchronous call</a><br />
<a href="javascript:asyncCall();">Asynchronous call</a><br />
</body>
</html>