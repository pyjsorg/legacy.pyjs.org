/* start module: view.components.FileOpenDlg */
$pyjs.loaded_modules['view.components.FileOpenDlg'] = function (__mod_name__) {
	if($pyjs.loaded_modules['view.components.FileOpenDlg'].__was_initialized__) return $pyjs.loaded_modules['view.components.FileOpenDlg'];
	if(typeof $pyjs.loaded_modules['view.components'] == 'undefined' || !$pyjs.loaded_modules['view.components'].__was_initialized__) $p['___import___']('view.components', null);
	var $m = $pyjs.loaded_modules["view.components.FileOpenDlg"];
	$m.__repr__ = function() { return "<module: view.components.FileOpenDlg>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'view.components.FileOpenDlg';
	$m.__name__ = __mod_name__;
	$pyjs.loaded_modules['view.components']['FileOpenDlg'] = $pyjs.loaded_modules['view.components.FileOpenDlg'];


	$m['Notification'] = $p['___import___']('ApplicationConstants.Notification', 'view.components', null, false);
	$m['HorizontalPanel'] = $p['___import___']('pyjamas.ui.HorizontalPanel.HorizontalPanel', 'view.components', null, false);
	$m['VerticalPanel'] = $p['___import___']('pyjamas.ui.VerticalPanel.VerticalPanel', 'view.components', null, false);
	$m['Label'] = $p['___import___']('pyjamas.ui.Label.Label', 'view.components', null, false);
	$m['Button'] = $p['___import___']('pyjamas.ui.Button.Button', 'view.components', null, false);
	$m['DialogBox'] = $p['___import___']('pyjamas.ui.DialogBox.DialogBox', 'view.components', null, false);
	$m['FormPanel'] = $p['___import___']('pyjamas.ui.FormPanel.FormPanel', 'view.components', null, false);
	$m['FileUpload'] = $p['___import___']('pyjamas.ui.FileUpload.FileUpload', 'view.components', null, false);
	$m['HTML'] = $p['___import___']('pyjamas.ui.HTML.HTML', 'view.components', null, false);
	$m['DockPanel'] = $p['___import___']('pyjamas.ui.DockPanel.DockPanel', 'view.components', null, false);
	$m['Frame'] = $p['___import___']('pyjamas.ui.Frame.Frame', 'view.components', null, false);
	$m['DOM'] = $p['___import___']('pyjamas.DOM', 'view.components', null, false);
	$m['alert'] = $p['___import___']('pyjamas.Window.alert', 'view.components', null, false);
	$m['Window'] = $p['___import___']('pyjamas.Window', 'view.components', null, false);
	$m['sys'] = $p['___import___']('sys', 'view.components');
	$m['has_getAsText'] = true;
	$m['FileOpenDlg'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'view.components.FileOpenDlg';
		$cls_definition['files'] = null;
		$method = $pyjs__bind_method2('__init__', function(left, top, fileLocation) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				left = arguments[1];
				top = arguments[2];
				fileLocation = arguments[3];
			}
			if (typeof left == 'undefined') left=arguments.callee.__args__[3][1];
			if (typeof top == 'undefined') top=arguments.callee.__args__[4][1];
			if (typeof fileLocation == 'undefined') fileLocation=arguments.callee.__args__[5][1];
			var sep,$bool10,$bool11,hpanel,$pyjs_try_err,$add1,location,msg,$eq2,$and1,$and2,$and3,$bool2,$bool3,$bool1,$bool6,$bool7,$bool4,$bool5,$bool8,$bool9,$cmp5,$cmp4,$cmp6,$cmp1,$cmp3,$cmp2,elem,$add2,$add3,base,$add6,$add7,$add4,$add5,$add8,$eq1;
			try {
				$pyjs_kwargs_call($m['DialogBox'], '__init__', null, null, [{modal:false}, self]);
				self.filename = null;
				self.data = null;
				self['setPopupPosition'](left, top);
				self.dockPanel = $m['DockPanel']();
				self['dockPanel']['setSpacing'](4);
				self['setText']('File Open');
				if ((($bool2=!(($bool1=(fileLocation === null)) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
					false :
					(typeof $bool1=='object'?
						(typeof $bool1.__nonzero__=='function'?
							$bool1.__nonzero__() :
							(typeof $bool1.__len__=='function'?
								($bool1.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
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
					msg = $m['HTML']('Loading file...', true);
					self['dockPanel']['add'](msg, $p['getattr']($m['DockPanel'], 'NORTH'));
					location = fileLocation;
					if ((($bool3=((($cmp1=fileLocation['find']('://'))===($cmp2=0)?0:
						(typeof $cmp1==typeof $cmp2 && ((typeof $cmp1 == 'number')||(typeof $cmp1 == 'string')||(typeof $cmp1 == 'boolean'))?
							($cmp1 == $cmp2 ? 0 : ($cmp1 < $cmp2 ? -1 : 1)):
							$p['cmp']($cmp1, $cmp2))) == -1)) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
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
						base = $m['Window']['getLocation']()['getHref']();
						if ((($bool4=((((($cmp3=base['find']('/'))===($cmp4=0)?0:
							(typeof $cmp3==typeof $cmp4 && ((typeof $cmp3 == 'number')||(typeof $cmp3 == 'string')||(typeof $cmp3 == 'boolean'))?
								($cmp3 == $cmp4 ? 0 : ($cmp3 < $cmp4 ? -1 : 1)):
								$p['cmp']($cmp3, $cmp4))))|1) == 1)) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
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
							sep = '/';
						}
						else {
							sep = '\\';
						}
						base = (typeof ($add1=sep['join']($p['__getslice'](base['$$split'](sep), 0, (typeof ($usub1=1)=='number'?
							-$usub1:
							$p['op_usub']($usub1)))))==typeof ($add2=sep) && (typeof $add1=='number'||typeof $add1=='string')?
							$add1+$add2:
							$p['op_add']($add1,$add2));
						location = (typeof ($add3=base)==typeof ($add4=fileLocation) && (typeof $add3=='number'||typeof $add3=='string')?
							$add3+$add4:
							$p['op_add']($add3,$add4));
					}
					self.iframe = $m['Frame'](location);
					self['dockPanel']['add']($p['getattr'](self, 'iframe'), $p['getattr']($m['DockPanel'], 'CENTER'));
				}
				else {
					msg = $m['HTML']('Choose a file', true);
					self.browseFile = $m['FileUpload']();
					elem = self['browseFile']['getElement']();
					if ((($bool7=((($bool5=$and1=false) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
						false :
						(typeof $bool5=='object'?
							(typeof $bool5.__nonzero__=='function'?
								$bool5.__nonzero__() :
								(typeof $bool5.__len__=='function'?
									($bool5.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )?((($bool6=$and2=$m['has_getAsText']) === null || $bool6 === false || $bool6 === 0 || $bool6 === '' ?
						false :
						(typeof $bool6=='object'?
							(typeof $bool6.__nonzero__=='function'?
								$bool6.__nonzero__() :
								(typeof $bool6.__len__=='function'?
									($bool6.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )?$p['hasattr'](elem, 'files'):$and2):$and1)) === null || $bool7 === false || $bool7 === 0 || $bool7 === '' ?
							false :
							(typeof $bool7=='object'?
								(typeof $bool7.__nonzero__=='function'?
									$bool7.__nonzero__() :
									(typeof $bool7.__len__=='function'?
										($bool7.__len__()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						self.iframe = null;
						self.files = $p['getattr'](elem, 'files');
						self['dockPanel']['add']($p['getattr'](self, 'browseFile'), $p['getattr']($m['DockPanel'], 'CENTER'));
					}
					else {
						self.browseFile = null;
						self.files = null;
						base = (typeof ($add5='')==typeof ($add6=$p['getattr']($doc, 'location')) && (typeof $add5=='number'||typeof $add5=='string')?
							$add5+$add6:
							$p['op_add']($add5,$add6));
						if ((($bool8=((((($cmp5=base['find']('/'))===($cmp6=0)?0:
							(typeof $cmp5==typeof $cmp6 && ((typeof $cmp5 == 'number')||(typeof $cmp5 == 'string')||(typeof $cmp5 == 'boolean'))?
								($cmp5 == $cmp6 ? 0 : ($cmp5 < $cmp6 ? -1 : 1)):
								$p['cmp']($cmp5, $cmp6))))|1) == 1)) === null || $bool8 === false || $bool8 === 0 || $bool8 === '' ?
								false :
								(typeof $bool8=='object'?
									(typeof $bool8.__nonzero__=='function'?
										$bool8.__nonzero__() :
										(typeof $bool8.__len__=='function'?
											($bool8.__len__()>0 ?
												true :
												false) :
											true ) ) :
									 true ) )) {
							sep = '/';
						}
						else {
							sep = '\\';
						}
						if ((($bool10=!(($bool9=(($eq1=$p['__getslice'](base['lower'](), 0, 5))===($eq2='file:')&&$eq1===null?true:
							($eq1===null?false:($eq2===null?false:
								((typeof $eq1=='object'||typeof $eq1=='function')&&typeof $eq1.__cmp__=='function'?$eq1.__cmp__($eq2) === 0:
									((typeof $eq2=='object'||typeof $eq2=='function')&&typeof $eq2.__cmp__=='function'?$eq2.__cmp__($eq1) === 0:
										$eq1==$eq2)))))) === null || $bool9 === false || $bool9 === 0 || $bool9 === '' ?
							false :
							(typeof $bool9=='object'?
								(typeof $bool9.__nonzero__=='function'?
									$bool9.__nonzero__() :
									(typeof $bool9.__len__=='function'?
										($bool9.__len__()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) === null || $bool10 === false || $bool10 === 0 || $bool10 === '' ?
								false :
								(typeof $bool10=='object'?
									(typeof $bool10.__nonzero__=='function'?
										$bool10.__nonzero__() :
										(typeof $bool10.__len__=='function'?
											($bool10.__len__()>0 ?
												true :
												false) :
											true ) ) :
									 true ) )) {
							base = 'file:///C:/';
							msg = $m['HTML']("You'll have to place the application on a local file system, otherwise the browser forbids access.", true);
						}
						else {
							base = (typeof ($add7=sep['join']($p['__getslice'](base['$$split'](sep), 0, (typeof ($usub2=1)=='number'?
								-$usub2:
								$p['op_usub']($usub2)))))==typeof ($add8=sep) && (typeof $add7=='number'||typeof $add7=='string')?
								$add7+$add8:
								$p['op_add']($add7,$add8));
						}
						self.iframe = $m['Frame'](base);
						self['dockPanel']['add']($p['getattr'](self, 'iframe'), $p['getattr']($m['DockPanel'], 'CENTER'));
					}
					self['dockPanel']['add'](msg, $p['getattr']($m['DockPanel'], 'NORTH'));
				}
				if ((($bool11=$p['getattr'](self, 'iframe')) === null || $bool11 === false || $bool11 === 0 || $bool11 === '' ?
						false :
						(typeof $bool11=='object'?
							(typeof $bool11.__nonzero__=='function'?
								$bool11.__nonzero__() :
								(typeof $bool11.__len__=='function'?
									($bool11.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					self['iframe']['setWidth']('36em');
				}
				hpanel = $m['HorizontalPanel']();
				self.openBtn = $m['Button']('Open', $p['getattr'](self, 'onClickOpen'));
				hpanel['add']($p['getattr'](self, 'openBtn'));
				self.cancelBtn = $m['Button']('Cancel', $p['getattr'](self, 'onClickCancel'));
				hpanel['add']($p['getattr'](self, 'cancelBtn'));
				self['dockPanel']['add'](hpanel, $p['getattr']($m['DockPanel'], 'SOUTH'));
				self['setWidget']($p['getattr'](self, 'dockPanel'));
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
				$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
				if (true) {
					throw ($pyjs.__last_exception__?
						$pyjs.__last_exception__.error:
						$p['TypeError']('exceptions must be classes, instances, or strings (deprecated), not NoneType'));
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['left', 50],['top', 50],['fileLocation', null]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('onClickCancel', function(sender) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}

			self['hide']();
			return null;
		}
	, 1, [null,null,['self'],['sender']]);
		$cls_definition['onClickCancel'] = $method;
		$method = $pyjs__bind_method2('onClickOpen', function(sender) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}
			var $bool12,$bool13,$bool14,$bool15,$bool16,elem,file,filename,$pyjs_try_err,body,$eq3,$eq6,$eq4,$eq5,$add14,$add10,$add11,$add12,$add13,data,$cmp7,e,$cmp8,$add9;
			data = null;
			filename = null;
			if ((($bool12=$p['getattr'](self, 'files')) === null || $bool12 === false || $bool12 === 0 || $bool12 === '' ?
					false :
					(typeof $bool12=='object'?
						(typeof $bool12.__nonzero__=='function'?
							$bool12.__nonzero__() :
							(typeof $bool12.__len__=='function'?
								($bool12.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				if ((($bool13=(($eq3=$p['getattr']($p['getattr'](self, 'files'), 'length'))===($eq4=0)&&$eq3===null?true:
					($eq3===null?false:($eq4===null?false:
						((typeof $eq3=='object'||typeof $eq3=='function')&&typeof $eq3.__cmp__=='function'?$eq3.__cmp__($eq4) === 0:
							((typeof $eq4=='object'||typeof $eq4=='function')&&typeof $eq4.__cmp__=='function'?$eq4.__cmp__($eq3) === 0:
								$eq3==$eq4)))))) === null || $bool13 === false || $bool13 === 0 || $bool13 === '' ?
						false :
						(typeof $bool13=='object'?
							(typeof $bool13.__nonzero__=='function'?
								$bool13.__nonzero__() :
								(typeof $bool13.__len__=='function'?
									($bool13.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					return null;
				}
				if ((($bool14=((($cmp7=$p['getattr']($p['getattr'](self, 'files'), 'length'))===($cmp8=1)?0:
					(typeof $cmp7==typeof $cmp8 && ((typeof $cmp7 == 'number')||(typeof $cmp7 == 'string')||(typeof $cmp7 == 'boolean'))?
						($cmp7 == $cmp8 ? 0 : ($cmp7 < $cmp8 ? -1 : 1)):
						$p['cmp']($cmp7, $cmp8))) == 1)) === null || $bool14 === false || $bool14 === 0 || $bool14 === '' ?
						false :
						(typeof $bool14=='object'?
							(typeof $bool14.__nonzero__=='function'?
								$bool14.__nonzero__() :
								(typeof $bool14.__len__=='function'?
									($bool14.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					$m['alert']('Cannot open more than one file');
					return null;
				}
				file = self['files']['item'](0);
				filename = $p['getattr'](file, 'fileName');
				try {
					data = file['getAsText']('');
				} catch($pyjs_try_err) {
					var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
					$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
					if (($pyjs_try_err_name == $p['AttributeError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['AttributeError'])) {
						e = $pyjs_try_err;
						$m['has_getAsText'] = false;
						$m['alert']('Sorry. cannot retrieve file in this browser.\nTry again.');
					} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
				}
			}
			else {
				elem = self['iframe']['getElement']();
				body = $p['getattr']($p['getattr']($p['getattr'](elem, 'contentWindow'), 'document'), 'body');
				try {
					filename = (typeof ($add9='')==typeof ($add10=$p['getattr']($p['getattr'](elem, 'contentWindow'), 'location')) && (typeof $add9=='number'||typeof $add9=='string')?
						$add9+$add10:
						$p['op_add']($add9,$add10));
				} catch($pyjs_try_err) {
					var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
					$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
					if (true) {
						filename = null;
					}
				}
				if ((($bool15=(($eq5=$p['getattr']($p['getattr'](body, 'childNodes'), 'length'))===($eq6=1)&&$eq5===null?true:
					($eq5===null?false:($eq6===null?false:
						((typeof $eq5=='object'||typeof $eq5=='function')&&typeof $eq5.__cmp__=='function'?$eq5.__cmp__($eq6) === 0:
							((typeof $eq6=='object'||typeof $eq6=='function')&&typeof $eq6.__cmp__=='function'?$eq6.__cmp__($eq5) === 0:
								$eq5==$eq6)))))) === null || $bool15 === false || $bool15 === 0 || $bool15 === '' ?
						false :
						(typeof $bool15=='object'?
							(typeof $bool15.__nonzero__=='function'?
								$bool15.__nonzero__() :
								(typeof $bool15.__len__=='function'?
									($bool15.__len__()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					data = (typeof ($add11='')==typeof ($add12=$p['getattr'](body['childNodes']['item'](0), 'innerHTML')) && (typeof $add11=='number'||typeof $add11=='string')?
						$add11+$add12:
						$p['op_add']($add11,$add12));
				}
				else {
					data = (typeof ($add13='')==typeof ($add14=$p['getattr'](body, 'innerHTML')) && (typeof $add13=='number'||typeof $add13=='string')?
						$add13+$add14:
						$p['op_add']($add13,$add14));
				}
			}
			self['hide']();
			if ((($bool16=data) === null || $bool16 === false || $bool16 === 0 || $bool16 === '' ?
					false :
					(typeof $bool16=='object'?
						(typeof $bool16.__nonzero__=='function'?
							$bool16.__nonzero__() :
							(typeof $bool16.__len__=='function'?
								($bool16.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				self.data = data;
				self.filename = filename;
			}
			return null;
		}
	, 1, [null,null,['self'],['sender']]);
		$cls_definition['onClickOpen'] = $method;
		var $bases = new Array($m['DialogBox']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('FileOpenDlg', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end view.components.FileOpenDlg */


/* end module: view.components.FileOpenDlg */


/*
PYJS_DEPS: ['ApplicationConstants.Notification', 'ApplicationConstants', 'pyjamas.ui.HorizontalPanel.HorizontalPanel', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.HorizontalPanel', 'pyjamas.ui.VerticalPanel.VerticalPanel', 'pyjamas.ui.VerticalPanel', 'pyjamas.ui.Label.Label', 'pyjamas.ui.Label', 'pyjamas.ui.Button.Button', 'pyjamas.ui.Button', 'pyjamas.ui.DialogBox.DialogBox', 'pyjamas.ui.DialogBox', 'pyjamas.ui.FormPanel.FormPanel', 'pyjamas.ui.FormPanel', 'pyjamas.ui.FileUpload.FileUpload', 'pyjamas.ui.FileUpload', 'pyjamas.ui.HTML.HTML', 'pyjamas.ui.HTML', 'pyjamas.ui.DockPanel.DockPanel', 'pyjamas.ui.DockPanel', 'pyjamas.ui.Frame.Frame', 'pyjamas.ui.Frame', 'pyjamas.DOM', 'pyjamas.Window.alert', 'pyjamas.Window', 'sys']
*/
