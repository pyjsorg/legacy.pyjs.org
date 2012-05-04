<?php

  require_once ("../phpolait/phpolait.php");

  /**
   * Proxy reads a URL and returns data to the client. Client-side security restrictions
	 * prevent this being done client-side.
   */
  class WebFetch {
    function get($url) {
		  if (substr($url,0,7)!="http://") {
			  // Otherwise, could read system files!
				return "Access denied";	
			}
			return file_get_contents($url);
    }
  }

  $server = new JSONRpcServer( new WebFetch());
?>
<html>
<head>
<?php $server->javascript("webfetch"); ?>
<script language="javascript">
function fetchWebSource() {
  var url = document.getElementById('url').value;
	webfetch.showErrors=true;
	document.getElementById('html').value = webfetch.get(url);
}
</script>
</head>
<body>
<form>
URL: <input type="text" id="url" size="60" 
				value="http://www.sourceforge.net/projects/phpolait/">
<input type="button" 
				onClick="javascript:fetchWebSource();" value="Fetch">
<br />
<textarea rows="25" cols="60" wrap="true" id="html"></textarea><br />
</form>
</body>
</html>
