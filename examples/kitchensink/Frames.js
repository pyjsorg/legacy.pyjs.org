/* start module: Frames */
$pyjs.loaded_modules['Frames'] = function (__mod_name__) {
	if($pyjs.loaded_modules['Frames'].__was_initialized__) return $pyjs.loaded_modules['Frames'];
	var $m = $pyjs.loaded_modules["Frames"];
	$m.__repr__ = function() { return "<module: Frames>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'Frames';
	$m.__name__ = __mod_name__;


	$m['Sink'] = $p['___import___']('pyjamas.ui.Sink.Sink', null, null, false);
	$m['SinkInfo'] = $p['___import___']('pyjamas.ui.Sink.SinkInfo', null, null, false);
	$m['Frame'] = $p['___import___']('pyjamas.ui.Frame.Frame', null, null, false);
	$m['Frames'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'Frames';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $add2,$add1;
			$m['Sink']['__init__'](self);
			self.frame = $m['Frame']((typeof ($add1=self['baseURL']())==typeof ($add2='rembrandt/LaMarcheNocturne.html') && (typeof $add1=='number'||typeof $add1=='string')?
				$add1+$add2:
				$p['op_add']($add1,$add2)));
			self['frame']['setWidth']('100%');
			self['frame']['setHeight']('48em');
			self['initWidget']($p['getattr'](self, 'frame'));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		var $bases = new Array($m['Sink']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('Frames', $p['tuple']($bases), $data);
	})();
	$m['init'] = function() {
		var text;
		text = "If you need to include multiple pages of good ol' static HTML, it's easy to do using the <code>Frame</code> class.";
		return $m['SinkInfo']('Frames', text, $m['Frames']);
	};
	$m['init'].__name__ = 'init';

	$m['init'].__bind_type__ = 0;
	$m['init'].__args__ = [null,null];
	return this;
}; /* end Frames */


/* end module: Frames */


/*
PYJS_DEPS: ['pyjamas.ui.Sink.Sink', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.Sink', 'pyjamas.ui.Sink.SinkInfo', 'pyjamas.ui.Frame.Frame', 'pyjamas.ui.Frame']
*/
