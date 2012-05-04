<?php

/**
 * @file Basic test of the getIncluderRelativePath function.
 */
 
require_once("../phpolait/phpolait.php");
/**
 * Utility assert function
 */
function xassert($bool, $error) {
	if (!$bool) {
		echo "$error<br />";
	}
}

/**
 * Contains an array of the parameters to getIncluderRelativePath and the expected result.
 * The first element is the relative path to phpolait.js FROM the file containing
 * getIncluderRelativePath(). The second is the actual directory on the filesystem where
 * the file containing getIncluderRelativePath() is located. The third is the actual directory
 * on the filesystem where the executing script (the webpage that has been requested) is located.
 * The fourth parameter is the expected result - the path to phpolait.js RELATIVE TO the executing
 * script.
 */
$tests = array (
  array("phpolait.js","/home/test/phpolait","/home/test/examples","../phpolait/phpolait.js"),
  array("phpolait.js","/home/test/lib/phpolait","/home/test/eg/examples", "../../lib/phpolait/phpolait.js"),
  array("phpolait.js","/home/test/lib/phpolait","/home/test", "lib/phpolait/phpolait.js"),
  array("js/phpolait.js", "/www/phpolait", "/www/project", "../phpolait/js/phpolait.js"),
  array("../js/phpolait.js", "/www/phpolait", "/www/project/test", "../../phpolait/../js/phpolait.js")
);
 
foreach ($tests as $t) {
  $p = getIncluderRelativePath($t[0],$t[1],$t[2]);
  xassert($p == $t[3], "Fn returns $p != ${t[3]}<br />");
}
	
?>
Done.
