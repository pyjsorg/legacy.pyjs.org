<?php

require_once ("../phpolait/phpolait.php");

class MyServer {
  function add ($a, $b) {
    return $a+$b;
  }
}
$server = new JSONRpcServer(new MyServer());

?>
<html>
<head>
<? $server->javascript("proxy"); ?>
<script language="javascript">
function doCalculation() {
  var firstValue = document.getElementById('firstValue').value;
  var secondValue = document.getElementById('secondValue').value;
  document.getElementById('result').value = proxy.add( firstValue, secondValue );
}
</script>
</head>
<body>
<form>
Server-Side Calculator:<br />
<input type="text" id="firstValue" size="5"> + 
<input type="text" id="secondValue" size="5"> 
<input type="button" onClick="doCalculation();" value="=">
<input type="text" id="result" size="5"> 
</form>
</body>
</html>