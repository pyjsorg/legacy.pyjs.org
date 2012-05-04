/* start module: Media */
$pyjs.loaded_modules['Media'] = function (__mod_name__) {
	if($pyjs.loaded_modules['Media'].__was_initialized__) return $pyjs.loaded_modules['Media'];
	var $m = $pyjs.loaded_modules["Media"];
	$m.__repr__ = function() { return "<module: Media>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'Media';
	$m.__name__ = __mod_name__;
	var $bool1,$eq1,$eq2,$bool2,$bool3;

	$m['pyjd'] = $p['___import___']('pyjd', null);
	$m['RootPanel'] = $p['___import___']('pyjamas.ui.RootPanel.RootPanel', null, null, false);
	$m['Video'] = $p['___import___']('pyjamas.media.Video.Video', null, null, false);
	$m['Audio'] = $p['___import___']('pyjamas.media.Audio.Audio', null, null, false);
	$m['Window'] = $p['___import___']('pyjamas.Window', null, null, false);
	if ((($bool1=(($eq1=(typeof __name__ == "undefined"?$m.__name__:__name__))===($eq2='__main__')&&$eq1===null?true:
		($eq1===null?false:($eq2===null?false:
			((typeof $eq1=='object'||typeof $eq1=='function')&&typeof $eq1.__cmp__=='function'?$eq1.__cmp__($eq2) === 0:
				((typeof $eq2=='object'||typeof $eq2=='function')&&typeof $eq2.__cmp__=='function'?$eq2.__cmp__($eq1) === 0:
					$eq1==$eq2)))))) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
			false :
			(typeof $bool1=='object'?
				(typeof $bool1.__nonzero__=='function'?
					$bool1.__nonzero__() :
					(typeof $bool1.__len__=='function'?
						($bool1.__len__()>0 ?
							true :
							false) :
						true ) ) :
				 true ) )) {
		$m['pyjd']['setup']('public/Media.html?fred=foo#me');
		if ((($bool2=true) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
				false :
				(typeof $bool2=='object'?
					(typeof $bool2.__nonzero__=='function'?
						$bool2.__nonzero__() :
						(typeof $bool2.__len__=='function'?
							($bool2.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) {
			$m['v'] = $pyjs_kwargs_call(null, $m['Video'], null, null, [{Width:'640', Height:'480', StyleName:'teststyle', Autoplay:true, Controls:true, src:'http://acfauk/public/services/files.py?video=sample&ext=wmv', Poster:'http://acfauk/public/img/coffee_cup_01.png'}]);
			$m['RootPanel']()['add']($m['v']);
		}
		if ((($bool3=false) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
				false :
				(typeof $bool3=='object'?
					(typeof $bool3.__nonzero__=='function'?
						$bool3.__nonzero__() :
						(typeof $bool3.__len__=='function'?
							($bool3.__len__()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) {
			$m['a'] = $pyjs_kwargs_call(null, $m['Audio'], null, null, [{Width:'160px', Height:'32px', StyleName:'teststyle', Autoplay:true, Controls:true, src:'http://acfauk/public/services/files.py?audio=copy&ext=wma'}]);
			$m['RootPanel']()['add']($m['a']);
		}
		$m['pyjd']['run']();
	}
	return this;
}; /* end Media */


/* end module: Media */


/*
PYJS_DEPS: ['pyjd', 'pyjamas.ui.RootPanel.RootPanel', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.RootPanel', 'pyjamas.media.Video.Video', 'pyjamas.media', 'pyjamas.media.Video', 'pyjamas.media.Audio.Audio', 'pyjamas.media.Audio', 'pyjamas.Window']
*/
