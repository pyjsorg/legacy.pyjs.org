/* start module: Tables */
$pyjs.loaded_modules['Tables'] = function (__mod_name__) {
	if($pyjs.loaded_modules['Tables'].__was_initialized__) return $pyjs.loaded_modules['Tables'];
	var $m = $pyjs.loaded_modules["Tables"];
	$m.__repr__ = function() { return "<module: Tables>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'Tables';
	$m.__name__ = __mod_name__;


	$m['Sink'] = $p['___import___']('pyjamas.ui.Sink.Sink', null, null, false);
	$m['SinkInfo'] = $p['___import___']('pyjamas.ui.Sink.SinkInfo', null, null, false);
	$m['Grid'] = $p['___import___']('pyjamas.ui.Grid.Grid', null, null, false);
	$m['FlexTable'] = $p['___import___']('pyjamas.ui.FlexTable.FlexTable', null, null, false);
	$m['HasHorizontalAlignment'] = $p['___import___']('pyjamas.ui.HasHorizontalAlignment', null, null, false);
	$m['Image'] = $p['___import___']('pyjamas.ui.Image.Image', null, null, false);
	$m['Tables'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'Tables';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $iter2_nextval,outer,$iter1_type,$iter2_iter,$iter1_idx,i,j,$iter1_iter,$add2,$add3,$iter2_idx,$add1,inner,$add4,$iter1_nextval,$iter2_type,$iter2_array,$iter1_array;
			$m['Sink']['__init__'](self);
			inner = $pyjs_kwargs_call(null, $m['Grid'], null, null, [{Width:'100%', BorderWidth:'1'}, 10, 5]);
			outer = $pyjs_kwargs_call(null, $m['FlexTable'], null, null, [{Width:'100%', BorderWidth:'1'}]);
			outer['setWidget'](0, 0, $m['Image']((typeof ($add1=self['baseURL']())==typeof ($add2='rembrandt/LaMarcheNocturne.jpg') && (typeof $add1=='number'||typeof $add1=='string')?
				$add1+$add2:
				$p['op_add']($add1,$add2))));
			outer['getFlexCellFormatter']()['setColSpan'](0, 0, 2);
			outer['getFlexCellFormatter']()['setHorizontalAlignment'](0, 0, $p['getattr']($m['HasHorizontalAlignment'], 'ALIGN_CENTER'));
			outer['setHTML'](1, 0, "Look to the right...<br>That's a nested table component ->");
			outer['setWidget'](1, 1, inner);
			outer['getCellFormatter']()['setColSpan'](1, 1, 2);
			$iter1_iter = $p['range'](10);
			if (typeof ($iter1_array = $iter1_iter.__array) != 'undefined') {
				$iter1_type = 0;
			} else {
				$iter1_iter = $iter1_iter.__iter__();
				$iter1_type = typeof ($iter1_array = $iter1_iter.__array) != 'undefined'? 0 : (typeof $iter1_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter1_idx = 0;
			while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
				i = $iter1_nextval;
				$iter2_iter = $p['range'](5);
				if (typeof ($iter2_array = $iter2_iter.__array) != 'undefined') {
					$iter2_type = 0;
				} else {
					$iter2_iter = $iter2_iter.__iter__();
					$iter2_type = typeof ($iter2_array = $iter2_iter.__array) != 'undefined'? 0 : (typeof $iter2_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter2_idx = 0;
				while (typeof ($iter2_nextval=($iter2_type?($iter2_type > 0?$iter2_iter.next(true,false):$p['wrapped_next']($iter2_iter)):$iter2_array[$iter2_idx++])) != 'undefined') {
					j = $iter2_nextval;
					inner['setText'](i, j, (typeof ($add3=$p['sprintf']('%d', i))==typeof ($add4=$p['sprintf'](',%d', j)) && (typeof $add3=='number'||typeof $add3=='string')?
						$add3+$add4:
						$p['op_add']($add3,$add4)));
				}
			}
			self['initWidget'](outer);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('onShow', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

 			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['onShow'] = $method;
		var $bases = new Array($m['Sink']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('Tables', $p['tuple']($bases), $data);
	})();
	$m['init'] = function() {
		var text;
		text = "The <code>FlexTable</code> widget doubles as a tabular data formatter and a panel.  In this example, you'll see that there is an outer table with four cells, two of which contain nested components.";
		return $m['SinkInfo']('Tables', text, $m['Tables']);
	};
	$m['init'].__name__ = 'init';

	$m['init'].__bind_type__ = 0;
	$m['init'].__args__ = [null,null];
	return this;
}; /* end Tables */


/* end module: Tables */


/*
PYJS_DEPS: ['pyjamas.ui.Sink.Sink', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.Sink', 'pyjamas.ui.Sink.SinkInfo', 'pyjamas.ui.Grid.Grid', 'pyjamas.ui.Grid', 'pyjamas.ui.FlexTable.FlexTable', 'pyjamas.ui.FlexTable', 'pyjamas.ui.HasHorizontalAlignment', 'pyjamas.ui.Image.Image', 'pyjamas.ui.Image']
*/
