/* start module: model.vo.TimeVO */
$pyjs.loaded_modules['model.vo.TimeVO'] = function (__mod_name__) {
	if($pyjs.loaded_modules['model.vo.TimeVO'].__was_initialized__) return $pyjs.loaded_modules['model.vo.TimeVO'];
	if(typeof $pyjs.loaded_modules['model.vo'] == 'undefined' || !$pyjs.loaded_modules['model.vo'].__was_initialized__) $p['___import___']('model.vo', null);
	var $m = $pyjs.loaded_modules["model.vo.TimeVO"];
	$m.__repr__ = function() { return "<module: model.vo.TimeVO>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'model.vo.TimeVO';
	$m.__name__ = __mod_name__;
	$pyjs.loaded_modules['model.vo']['TimeVO'] = $pyjs.loaded_modules['model.vo.TimeVO'];


	$m['TimeVO'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'model.vo.TimeVO';
		$cls_definition['start'] = null;
		$cls_definition['end'] = null;
		$cls_definition['project'] = null;
		$cls_definition['description'] = null;
		$method = $pyjs__bind_method2('__init__', function(start, end, project, description) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				start = arguments[1];
				end = arguments[2];
				project = arguments[3];
				description = arguments[4];
			}
			if (typeof description == 'undefined') description=arguments.callee.__args__[6][1];

			self.start = start;
			self.end = end;
			self.project = project;
			self.description = description;
			return null;
		}
	, 1, [null,null,['self'],['start'],['end'],['project'],['description', '']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('isEmpty', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $bool2,$bool3,$bool1,$bool4;
			if ((($bool1=$p['getattr'](self, 'start')) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
				return false;
			}
			if ((($bool2=$p['getattr'](self, 'end')) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
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
				return false;
			}
			if ((($bool3=$p['getattr'](self, 'project')) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
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
				return false;
			}
			if ((($bool4=$p['getattr'](self, 'description')) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
					false :
					(typeof $bool4=='object'?
						(typeof $bool4.__nonzero__=='function'?
							$bool4.__nonzero__() :
							(typeof $bool4.__len__=='function'?
								($bool4.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				return false;
			}
			return true;
		}
	, 1, [null,null,['self']]);
		$cls_definition['isEmpty'] = $method;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('TimeVO', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end model.vo.TimeVO */


/* end module: model.vo.TimeVO */


