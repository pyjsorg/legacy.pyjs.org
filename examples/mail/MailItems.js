/* start module: MailItems */
$pyjs.loaded_modules['MailItems'] = function (__mod_name__) {
	if($pyjs.loaded_modules['MailItems'].__was_initialized__) return $pyjs.loaded_modules['MailItems'];
	var $m = $pyjs.loaded_modules["MailItems"];
	$m.__repr__ = function() { return "<module: MailItems>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'MailItems';
	$m.__name__ = __mod_name__;


	$m['MailItem'] = $p['___import___']('MailItem.MailItem', null, null, false);
	$m['MailItems'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'MailItems';
		$cls_definition['NUM_ITEMS'] = 37;
		$cls_definition['FRAGMENTS_PER_EMAIL'] = 10;
		$cls_definition['senders'] = $p['list'](['markboland05', 'Hollie Voss', 'boticario', 'Emerson Milton', 'Healy Colette', 'Brigitte Cobb', 'Elba Lockhart', 'Claudio Engle', 'Dena Pacheco', 'Brasil s.pr', 'Parker', 'derbvktqsr', 'qetlyxxogg', 'antenas.sul', 'Christina Blake', 'Gail Horton', 'Orville Daniel', 'PostMaster', 'Rae Childers', 'Buster misjenou', 'user31065', 'ftsgeolbx', 'aqlovikigd', 'user18411', 'Mildred Starnes', 'Candice Carson', 'Louise Kelchner', 'Emilio Hutchinson', 'Geneva Underwood', 'Residence Oper?', 'fpnztbwag', 'tiger', 'Heriberto Rush', 'bulrush Bouchard', 'Abigail Louis', 'Chad Andrews', 'bjjycpaa', 'Terry English', 'Bell Snedden', 'huang', 'hhh', '(unknown sender)', 'Kent', 'Dirk Newman', 'Equipe Virtual Cards', 'wishesundmore', 'Benito Meeks']);
		$cls_definition['emails'] = $p['list'](['mark@example.com', 'hollie@example.com', 'boticario@example.com', 'emerson@example.com', 'healy@example.com', 'brigitte@example.com', 'elba@example.com', 'claudio@example.com', 'dena@example.com', 'brasilsp@example.com', 'parker@example.com', 'derbvktqsr@example.com', 'qetlyxxogg@example.com', 'antenas_sul@example.com', 'cblake@example.com', 'gailh@example.com', 'orville@example.com', 'post_master@example.com', 'rchilders@example.com', 'buster@example.com', 'user31065@example.com', 'ftsgeolbx@example.com', 'aqlovikigd@example.com', 'user18411@example.com', 'mildred@example.com', 'candice@example.com', 'louise_kelchner@example.com', 'emilio@example.com', 'geneva@example.com', 'residence_oper@example.com', 'fpnztbwag@example.com', 'tiger@example.com', 'heriberto@example.com', 'bulrush@example.com', 'abigail_louis@example.com', 'chada@example.com', 'bjjycpaa@example.com', 'terry@example.com', 'bell@example.com', 'huang@example.com', 'hhh@example.com', 'kent@example.com', 'newman@example.com', 'equipe_virtual@example.com', 'wishesundmore@example.com', 'benito@example.com']);
		$cls_definition['subjects'] = $p['list'](['URGENT -[Mon, 24 Apr 2006 02:17:27 +0000]', 'URGENT TRANSACTION -[Sun, 23 Apr 2006 13:10:03 +0000]', 'fw: Here it comes', 'voce ganho um vale presente Boticario', 'Read this ASAP', 'Hot Stock Talk', 'New Breed of Equity Trader', 'FWD: TopWeeks the wire special pr news release', '[fwd] Read this ASAP', 'Renda Extra R$1.000,00-R$2.000,00/m?s', 're: Make sure your special pr news released', 'Forbidden Knowledge Conference', 'decodificadores os menores pre?os', 're: Our Pick', 'RE: The hottest pick Watcher', 'RE: St0kkMarrkett Picks Trade watch special pr news release', 'St0kkMarrkett Picks Watch special pr news release news', 'You are a Winner oskoxmshco', 'Encrypted E-mail System (VIRUS REMOVED)', 'Fw: Malcolm', 'Secure Message System (VIRUS REMOVED)', 'fwd: St0kkMarrkett Picks Watch special pr news releaser', 'FWD: Financial Market Traderr special pr news release', '? s? uma dica r?pida !!!!! leia !!!', 're: You have to heard this', 'fwd: Watcher TopNews', 'VACANZE alle Mauritius', 'funny', 're: You need to review this', '[re:] Our Pick', 'RE: Before the be11 special pr news release', '[re:] Market TradePicks Trade watch news', 'No prescription needed', 'Seu novo site', '[fwd] Financial Market Trader Picker', 'FWD: Top Financial Market Specialists Trader interest increases', 'Os cart?es mais animados da web!!', 'We will sale 4 you cebtdbwtcv', 'RE: Best Top Financial Market Specialists Trader Picks']);
		$cls_definition['fragments'] = $p['list']([(typeof ($add1='Dear Friend,<br><br>I am Mr. Mark Boland the Bank Manager of ABN AMRO ')==typeof ($add2='BANK 101 Moorgate, London, EC2M 6SB.<br><br>') && (typeof $add1=='number'||typeof $add1=='string')?
			$add1+$add2:
			$p['op_add']($add1,$add2)), (typeof ($add11=(typeof ($add9=(typeof ($add7=(typeof ($add5=(typeof ($add3='I have an urgent and very confidential business proposition for you. On ')==typeof ($add4='July 20, 2001; Mr. Zemenu Gente, a National of France, who used to be a ') && (typeof $add3=='number'||typeof $add3=='string')?
			$add3+$add4:
			$p['op_add']($add3,$add4)))==typeof ($add6='private contractor with the Shell Petroleum Development Company in Saudi ') && (typeof $add5=='number'||typeof $add5=='string')?
			$add5+$add6:
			$p['op_add']($add5,$add6)))==typeof ($add8='Arabia. Mr. Zemenu Gente Made a Numbered time (Fixed deposit) for 36 ') && (typeof $add7=='number'||typeof $add7=='string')?
			$add7+$add8:
			$p['op_add']($add7,$add8)))==typeof ($add10='calendar months, valued at GBP?30, 000,000.00 (Thirty Million Pounds ') && (typeof $add9=='number'||typeof $add9=='string')?
			$add9+$add10:
			$p['op_add']($add9,$add10)))==typeof ($add12='only) in my Branch.') && (typeof $add11=='number'||typeof $add11=='string')?
			$add11+$add12:
			$p['op_add']($add11,$add12)), (typeof ($add23=(typeof ($add21=(typeof ($add19=(typeof ($add17=(typeof ($add15=(typeof ($add13='I have all necessary legal documents that can be used to back up any ')==typeof ($add14='claim we may make. All I require is your honest Co-operation, ') && (typeof $add13=='number'||typeof $add13=='string')?
			$add13+$add14:
			$p['op_add']($add13,$add14)))==typeof ($add16='Confidentiality and A trust to enable us sees this transaction through. ') && (typeof $add15=='number'||typeof $add15=='string')?
			$add15+$add16:
			$p['op_add']($add15,$add16)))==typeof ($add18='I guarantee you that this will be executed under a legitimate ') && (typeof $add17=='number'||typeof $add17=='string')?
			$add17+$add18:
			$p['op_add']($add17,$add18)))==typeof ($add20='arrangement that will protect you from any breach of the law. Please ') && (typeof $add19=='number'||typeof $add19=='string')?
			$add19+$add20:
			$p['op_add']($add19,$add20)))==typeof ($add22='get in touch with me urgently by E-mail and ') && (typeof $add21=='number'||typeof $add21=='string')?
			$add21+$add22:
			$p['op_add']($add21,$add22)))==typeof ($add24='Provide me with the following;<br>') && (typeof $add23=='number'||typeof $add23=='string')?
			$add23+$add24:
			$p['op_add']($add23,$add24)), (typeof ($add37=(typeof ($add35=(typeof ($add33=(typeof ($add31=(typeof ($add29=(typeof ($add27=(typeof ($add25='The OIL sector is going crazy. This is our weekly gift to you!<br>')==typeof ($add26='<br>') && (typeof $add25=='number'||typeof $add25=='string')?
			$add25+$add26:
			$p['op_add']($add25,$add26)))==typeof ($add28='Get KKPT First Thing, This Is Going To Run!<br>') && (typeof $add27=='number'||typeof $add27=='string')?
			$add27+$add28:
			$p['op_add']($add27,$add28)))==typeof ($add30='<br>') && (typeof $add29=='number'||typeof $add29=='string')?
			$add29+$add30:
			$p['op_add']($add29,$add30)))==typeof ($add32='Check out Latest NEWS!<br>') && (typeof $add31=='number'||typeof $add31=='string')?
			$add31+$add32:
			$p['op_add']($add31,$add32)))==typeof ($add34='<br>') && (typeof $add33=='number'||typeof $add33=='string')?
			$add33+$add34:
			$p['op_add']($add33,$add34)))==typeof ($add36='KOKO PETROLEUM (KKPT) - This is our #1 pick for next week!<br>') && (typeof $add35=='number'||typeof $add35=='string')?
			$add35+$add36:
			$p['op_add']($add35,$add36)))==typeof ($add38='Our last pick gained $2.16 in 4 days of trading.<br>') && (typeof $add37=='number'||typeof $add37=='string')?
			$add37+$add38:
			$p['op_add']($add37,$add38)), (typeof ($add51=(typeof ($add49=(typeof ($add47=(typeof ($add45=(typeof ($add43=(typeof ($add41=(typeof ($add39='LAS VEGAS, NEVADA--(MARKET WIRE)--Apr 6, 2006 -- KOKO Petroleum, Inc. ')==typeof ($add40='(Other OTC:KKPT.PK - News) -<br>KOKO Petroleum, Inc. announced today that ') && (typeof $add39=='number'||typeof $add39=='string')?
			$add39+$add40:
			$p['op_add']($add39,$add40)))==typeof ($add42='its operator for the Corsicana Field, JMT Resources, Ltd. (JMT) ') && (typeof $add41=='number'||typeof $add41=='string')?
			$add41+$add42:
			$p['op_add']($add41,$add42)))==typeof ($add44='will commence a re-work program on its Pecan Gap wells in the next week. ') && (typeof $add43=='number'||typeof $add43=='string')?
			$add43+$add44:
			$p['op_add']($add43,$add44)))==typeof ($add46='The re-work program will consist of drilling six lateral bore production ') && (typeof $add45=='number'||typeof $add45=='string')?
			$add45+$add46:
			$p['op_add']($add45,$add46)))==typeof ($add48='strings from the existing well bore. This process, known as Radial Jet ') && (typeof $add47=='number'||typeof $add47=='string')?
			$add47+$add48:
			$p['op_add']($add47,$add48)))==typeof ($add50='Enhancement, will utilize high pressure fluids to drill the lateral well ') && (typeof $add49=='number'||typeof $add49=='string')?
			$add49+$add50:
			$p['op_add']($add49,$add50)))==typeof ($add52="bores, which will extend out approximately 350' each.") && (typeof $add51=='number'||typeof $add51=='string')?
			$add51+$add52:
			$p['op_add']($add51,$add52)), (typeof ($add61=(typeof ($add59=(typeof ($add57=(typeof ($add55=(typeof ($add53='JMT has contracted with Well Enhancement Services, LLC (www.')==typeof ($add54='wellenhancement.com) to perform the rework on its Pierce nos. 14 and 14a. ') && (typeof $add53=='number'||typeof $add53=='string')?
			$add53+$add54:
			$p['op_add']($add53,$add54)))==typeof ($add56='A small sand frac will follow the drilling of the lateral well bores in ') && (typeof $add55=='number'||typeof $add55=='string')?
			$add55+$add56:
			$p['op_add']($add55,$add56)))==typeof ($add58='order to enhance permeability and create larger access to the Pecan Gap ') && (typeof $add57=='number'||typeof $add57=='string')?
			$add57+$add58:
			$p['op_add']($add57,$add58)))==typeof ($add60='reservoir. Total cost of the re-work per well is estimated to be ') && (typeof $add59=='number'||typeof $add59=='string')?
			$add59+$add60:
			$p['op_add']($add59,$add60)))==typeof ($add62='approximately $50,000 USD.') && (typeof $add61=='number'||typeof $add61=='string')?
			$add61+$add62:
			$p['op_add']($add61,$add62)), (typeof ($add75=(typeof ($add73=(typeof ($add71=(typeof ($add69=(typeof ($add67=(typeof ($add65=(typeof ($add63='Parab?ns!<br>Voc? Ganhou Um Vale Presente da Botic?rio no valor de ')==typeof ($add64='R$50,00<br>Voc? foi contemplado na Promo??o Respeite Minha Natureza - ') && (typeof $add63=='number'||typeof $add63=='string')?
			$add63+$add64:
			$p['op_add']($add63,$add64)))==typeof ($add66='Pulseira Social.<br>Algu?m pode t?-lo inscrito na promo??o! (Amigos(as), ') && (typeof $add65=='number'||typeof $add65=='string')?
			$add65+$add66:
			$p['op_add']($add65,$add66)))==typeof ($add68='Namorado(a) etc.).<br>Para retirar o seu pr?mio em uma das nossas Lojas, ') && (typeof $add67=='number'||typeof $add67=='string')?
			$add67+$add68:
			$p['op_add']($add67,$add68)))==typeof ($add70='fa?a o download do Vale-Presente abaixo.<br>Ap?s o download, com o ') && (typeof $add69=='number'||typeof $add69=='string')?
			$add69+$add70:
			$p['op_add']($add69,$add70)))==typeof ($add72='arquivo previamente salvo, imprima uma folha e salve a c?pia em seu ') && (typeof $add71=='number'||typeof $add71=='string')?
			$add71+$add72:
			$p['op_add']($add71,$add72)))==typeof ($add74='computador para evitar transtornos decorrentes da perda do mesmo. ') && (typeof $add73=='number'||typeof $add73=='string')?
			$add73+$add74:
			$p['op_add']($add73,$add74)))==typeof ($add76='Lembramos que o Vale-Presente ? ?nico e intransfer?vel.') && (typeof $add75=='number'||typeof $add75=='string')?
			$add75+$add76:
			$p['op_add']($add75,$add76)), (typeof ($add83=(typeof ($add81=(typeof ($add79=(typeof ($add77='Large Marketing Campaign running this weekend!<br>')==typeof ($add78='<br>') && (typeof $add77=='number'||typeof $add77=='string')?
			$add77+$add78:
			$p['op_add']($add77,$add78)))==typeof ($add80='Should you get in today before it explodes?<br>') && (typeof $add79=='number'||typeof $add79=='string')?
			$add79+$add80:
			$p['op_add']($add79,$add80)))==typeof ($add82='<br>') && (typeof $add81=='number'||typeof $add81=='string')?
			$add81+$add82:
			$p['op_add']($add81,$add82)))==typeof ($add84='This Will Fly Starting Monday!') && (typeof $add83=='number'||typeof $add83=='string')?
			$add83+$add84:
			$p['op_add']($add83,$add84)), (typeof ($add99=(typeof ($add97=(typeof ($add95=(typeof ($add93=(typeof ($add91=(typeof ($add89=(typeof ($add87=(typeof ($add85='PREMIER INFORMATION (PIFR)<br>')==typeof ($add86='A U.S. based company offers specialized information management ') && (typeof $add85=='number'||typeof $add85=='string')?
			$add85+$add86:
			$p['op_add']($add85,$add86)))==typeof ($add88='serices to both the Insurance and Healthcare Industries. The services ') && (typeof $add87=='number'||typeof $add87=='string')?
			$add87+$add88:
			$p['op_add']($add87,$add88)))==typeof ($add90='we provide are specific to each industry and designed for quick ') && (typeof $add89=='number'||typeof $add89=='string')?
			$add89+$add90:
			$p['op_add']($add89,$add90)))==typeof ($add92='response and maximum security.<br>') && (typeof $add91=='number'||typeof $add91=='string')?
			$add91+$add92:
			$p['op_add']($add91,$add92)))==typeof ($add94='<br>') && (typeof $add93=='number'||typeof $add93=='string')?
			$add93+$add94:
			$p['op_add']($add93,$add94)))==typeof ($add96='STK- PIFR<br>') && (typeof $add95=='number'||typeof $add95=='string')?
			$add95+$add96:
			$p['op_add']($add95,$add96)))==typeof ($add98='Current Price: .20<br>') && (typeof $add97=='number'||typeof $add97=='string')?
			$add97+$add98:
			$p['op_add']($add97,$add98)))==typeof ($add100='This one went to $2.80 during the last marketing Campaign!') && (typeof $add99=='number'||typeof $add99=='string')?
			$add99+$add100:
			$p['op_add']($add99,$add100)), (typeof ($add107=(typeof ($add105=(typeof ($add103=(typeof ($add101='These partnerships specifically allow Premier to obtain personal health ')==typeof ($add102='information, as governed by the Health In-surancee Portability and ') && (typeof $add101=='number'||typeof $add101=='string')?
			$add101+$add102:
			$p['op_add']($add101,$add102)))==typeof ($add104='Accountability Act of 1996 (HIPAA), and other applicable state laws and ') && (typeof $add103=='number'||typeof $add103=='string')?
			$add103+$add104:
			$p['op_add']($add103,$add104)))==typeof ($add106='regulations.<br><br>') && (typeof $add105=='number'||typeof $add105=='string')?
			$add105+$add106:
			$p['op_add']($add105,$add106)))==typeof ($add108='Global HealthCare Market Undergoing Digital Conversion') && (typeof $add107=='number'||typeof $add107=='string')?
			$add107+$add108:
			$p['op_add']($add107,$add108)), (typeof ($add109='>>   Componentes e decodificadores; confira aqui;<br>')==typeof ($add110=' http://br.geocities.com/listajohn/index.htm<br>') && (typeof $add109=='number'||typeof $add109=='string')?
			$add109+$add110:
			$p['op_add']($add109,$add110)), (typeof ($add125=(typeof ($add123=(typeof ($add121=(typeof ($add119=(typeof ($add117=(typeof ($add115=(typeof ($add113=(typeof ($add111='THE GOVERNING AWARD<br>')==typeof ($add112='NETHERLANDS HEAD OFFICE<br>') && (typeof $add111=='number'||typeof $add111=='string')?
			$add111+$add112:
			$p['op_add']($add111,$add112)))==typeof ($add114='AC 76892 HAUITSOP<br>') && (typeof $add113=='number'||typeof $add113=='string')?
			$add113+$add114:
			$p['op_add']($add113,$add114)))==typeof ($add116='AMSTERDAM, THE NETHERLANDS.<br>') && (typeof $add115=='number'||typeof $add115=='string')?
			$add115+$add116:
			$p['op_add']($add115,$add116)))==typeof ($add118='FROM: THE DESK OF THE PROMOTIONS MANAGER.<br>') && (typeof $add117=='number'||typeof $add117=='string')?
			$add117+$add118:
			$p['op_add']($add117,$add118)))==typeof ($add120='INTERNATIONAL PROMOTIONS / PRIZE AWARD DEPARTMENT<br>') && (typeof $add119=='number'||typeof $add119=='string')?
			$add119+$add120:
			$p['op_add']($add119,$add120)))==typeof ($add122='REF NUMBER: 14235/089.<br>') && (typeof $add121=='number'||typeof $add121=='string')?
			$add121+$add122:
			$p['op_add']($add121,$add122)))==typeof ($add124='BATCH NUMBER: 304/64780/IFY.<br>') && (typeof $add123=='number'||typeof $add123=='string')?
			$add123+$add124:
			$p['op_add']($add123,$add124)))==typeof ($add126='RE/AWARD NOTIFICATION<br>') && (typeof $add125=='number'||typeof $add125=='string')?
			$add125+$add126:
			$p['op_add']($add125,$add126)), (typeof ($add135=(typeof ($add133=(typeof ($add131=(typeof ($add129=(typeof ($add127='We are pleased to inform you of the announcement today 13th of April ')==typeof ($add128='2006, you among TWO LUCKY WINNERS WON the GOVERNING AWARD draw held on ') && (typeof $add127=='number'||typeof $add127=='string')?
			$add127+$add128:
			$p['op_add']($add127,$add128)))==typeof ($add130='the 28th of March 2006. The THREE Winning Addresses were randomly ') && (typeof $add129=='number'||typeof $add129=='string')?
			$add129+$add130:
			$p['op_add']($add129,$add130)))==typeof ($add132='selected from a batch of 10,000,000 international email addresses. ') && (typeof $add131=='number'||typeof $add131=='string')?
			$add131+$add132:
			$p['op_add']($add131,$add132)))==typeof ($add134='Your email address emerged alongside TWO others as a category B winner ') && (typeof $add133=='number'||typeof $add133=='string')?
			$add133+$add134:
			$p['op_add']($add133,$add134)))==typeof ($add136="in this year's Annual GOVERNING AWARD Draw.<br>") && (typeof $add135=='number'||typeof $add135=='string')?
			$add135+$add136:
			$p['op_add']($add135,$add136)), (typeof ($add157=(typeof ($add155=(typeof ($add153=(typeof ($add151=(typeof ($add149=(typeof ($add147=(typeof ($add145=(typeof ($add143=(typeof ($add141=(typeof ($add139=(typeof ($add137='>> obrigado por me dar esta pequena aten??o !!!<br>')==typeof ($add138='CASO GOSTE DE ASSISTIR TV , MAS A SUA ANTENA S? PEGA AQUELES CANAIS ') && (typeof $add137=='number'||typeof $add137=='string')?
			$add137+$add138:
			$p['op_add']($add137,$add138)))==typeof ($add140='LOCAIS  OU O SEU SISTEMA PAGO ? MUITO CARO , SAIBA QUE TENHO CART?ES ') && (typeof $add139=='number'||typeof $add139=='string')?
			$add139+$add140:
			$p['op_add']($add139,$add140)))==typeof ($add142='DE ACESSO PARA SKY DIRECTV , E DECODERS PARA  NET TVA E TECSAT , ') && (typeof $add141=='number'||typeof $add141=='string')?
			$add141+$add142:
			$p['op_add']($add141,$add142)))==typeof ($add144='TUDO GRATIS , SEM ASSINTURA , SEM MENSALIDADE, VC PAGA UMA VEZ S? E ') && (typeof $add143=='number'||typeof $add143=='string')?
			$add143+$add144:
			$p['op_add']($add143,$add144)))==typeof ($add146='ASSISTE A MUITOS CANAIS , FILMES , JOGOS , PORNOS , DESENHOS , ') && (typeof $add145=='number'||typeof $add145=='string')?
			$add145+$add146:
			$p['op_add']($add145,$add146)))==typeof ($add148='DOCUMENT?RIOS ,SHOWS , ETC,<br><br>') && (typeof $add147=='number'||typeof $add147=='string')?
			$add147+$add148:
			$p['op_add']($add147,$add148)))==typeof ($add150='CART?O SKY E DIRECTV TOTALMENTE HACKEADOS  350,00<br>') && (typeof $add149=='number'||typeof $add149=='string')?
			$add149+$add150:
			$p['op_add']($add149,$add150)))==typeof ($add152='DECODERS NET TVA DESBLOQUEADOS                       390,00<br>') && (typeof $add151=='number'||typeof $add151=='string')?
			$add151+$add152:
			$p['op_add']($add151,$add152)))==typeof ($add154='KITS COMPLETOS SKY OU DTV ANTENA DECODER E CART?O  650,00<br>') && (typeof $add153=='number'||typeof $add153=='string')?
			$add153+$add154:
			$p['op_add']($add153,$add154)))==typeof ($add156='TECSAT FREE   450,00<br>') && (typeof $add155=='number'||typeof $add155=='string')?
			$add155+$add156:
			$p['op_add']($add155,$add156)))==typeof ($add158='TENHO TB ACESS?RIOS , CABOS, LNB .<br>') && (typeof $add157=='number'||typeof $add157=='string')?
			$add157+$add158:
			$p['op_add']($add157,$add158)), (typeof ($add173=(typeof ($add171=(typeof ($add169=(typeof ($add167=(typeof ($add165=(typeof ($add163=(typeof ($add161=(typeof ($add159='********************************************************************<br>')==typeof ($add160=' Original filename: mail.zip<br>') && (typeof $add159=='number'||typeof $add159=='string')?
			$add159+$add160:
			$p['op_add']($add159,$add160)))==typeof ($add162=' Virus discovered: JS.Feebs.AC<br>') && (typeof $add161=='number'||typeof $add161=='string')?
			$add161+$add162:
			$p['op_add']($add161,$add162)))==typeof ($add164='********************************************************************<br>') && (typeof $add163=='number'||typeof $add163=='string')?
			$add163+$add164:
			$p['op_add']($add163,$add164)))==typeof ($add166=' A file that was attached to this email contained a virus.<br>') && (typeof $add165=='number'||typeof $add165=='string')?
			$add165+$add166:
			$p['op_add']($add165,$add166)))==typeof ($add168=' It is very likely that the original message was generated<br>') && (typeof $add167=='number'||typeof $add167=='string')?
			$add167+$add168:
			$p['op_add']($add167,$add168)))==typeof ($add170=' by the virus and not a person - treat this message as you would<br>') && (typeof $add169=='number'||typeof $add169=='string')?
			$add169+$add170:
			$p['op_add']($add169,$add170)))==typeof ($add172=' any other junk mail (spam).<br>') && (typeof $add171=='number'||typeof $add171=='string')?
			$add171+$add172:
			$p['op_add']($add171,$add172)))==typeof ($add174=' For more information on why you received this message please visit:<br>') && (typeof $add173=='number'||typeof $add173=='string')?
			$add173+$add174:
			$p['op_add']($add173,$add174)), (typeof ($add179=(typeof ($add177=(typeof ($add175='Put a few letters after your name. Let us show you how you can do it in ')==typeof ($add176='just a few days.<br><br>') && (typeof $add175=='number'||typeof $add175=='string')?
			$add175+$add176:
			$p['op_add']($add175,$add176)))==typeof ($add178='http://thewrongchoiceforyou.info<br><br>') && (typeof $add177=='number'||typeof $add177=='string')?
			$add177+$add178:
			$p['op_add']($add177,$add178)))==typeof ($add180='kill future mailing by pressing this : see main website') && (typeof $add179=='number'||typeof $add179=='string')?
			$add179+$add180:
			$p['op_add']($add179,$add180)), (typeof ($add185=(typeof ($add183=(typeof ($add181='We possess scores of pharmaceutical products handy<br>')==typeof ($add182="All med's are made in U.S. laboratories<br>") && (typeof $add181=='number'||typeof $add181=='string')?
			$add181+$add182:
			$p['op_add']($add181,$add182)))==typeof ($add184='For your wellbeing! Very rapid, protected and secure<br>') && (typeof $add183=='number'||typeof $add183=='string')?
			$add183+$add184:
			$p['op_add']($add183,$add184)))==typeof ($add186='Ordering, No script required. We have the pain aid you require<br>') && (typeof $add185=='number'||typeof $add185=='string')?
			$add185+$add186:
			$p['op_add']($add185,$add186)), (typeof ($add237=(typeof ($add235=(typeof ($add233=(typeof ($add231=(typeof ($add229=(typeof ($add227=(typeof ($add225=(typeof ($add223=(typeof ($add221=(typeof ($add219=(typeof ($add217=(typeof ($add215=(typeof ($add213=(typeof ($add211=(typeof ($add209=(typeof ($add207=(typeof ($add205=(typeof ($add203=(typeof ($add201=(typeof ($add199=(typeof ($add197=(typeof ($add195=(typeof ($add193=(typeof ($add191=(typeof ($add189=(typeof ($add187="Oh, don't speak to me of Austria. Perhaps I don't understand things, ")==typeof ($add188='but Austria never has wished, and does not wish, for war. She is ') && (typeof $add187=='number'||typeof $add187=='string')?
			$add187+$add188:
			$p['op_add']($add187,$add188)))==typeof ($add190='betraying us! Russia alone must save Europe. Our gracious sovereign ') && (typeof $add189=='number'||typeof $add189=='string')?
			$add189+$add190:
			$p['op_add']($add189,$add190)))==typeof ($add192='recognizes his high vocation and will be true to it. That is the one ') && (typeof $add191=='number'||typeof $add191=='string')?
			$add191+$add192:
			$p['op_add']($add191,$add192)))==typeof ($add194='thing I have faith in! Our good and wonderful sovereign has to perform ') && (typeof $add193=='number'||typeof $add193=='string')?
			$add193+$add194:
			$p['op_add']($add193,$add194)))==typeof ($add196='the noblest role on earth, and he is so virtuous and noble that God ') && (typeof $add195=='number'||typeof $add195=='string')?
			$add195+$add196:
			$p['op_add']($add195,$add196)))==typeof ($add198='will not forsake him. He will fulfill his vocation and crush the hydra ') && (typeof $add197=='number'||typeof $add197=='string')?
			$add197+$add198:
			$p['op_add']($add197,$add198)))==typeof ($add200='of revolution, which has become more terrible than ever in the person of ') && (typeof $add199=='number'||typeof $add199=='string')?
			$add199+$add200:
			$p['op_add']($add199,$add200)))==typeof ($add202='this murderer and villain! We alone must avenge the blood of the ') && (typeof $add201=='number'||typeof $add201=='string')?
			$add201+$add202:
			$p['op_add']($add201,$add202)))==typeof ($add204='just one.... Whom, I ask you, can we rely on?... England with ') && (typeof $add203=='number'||typeof $add203=='string')?
			$add203+$add204:
			$p['op_add']($add203,$add204)))==typeof ($add206='her commercial spirit will not and cannot understand the Emperor ') && (typeof $add205=='number'||typeof $add205=='string')?
			$add205+$add206:
			$p['op_add']($add205,$add206)))==typeof ($add208="Alexander's loftiness of soul. She has refused to evacuate Malta. ") && (typeof $add207=='number'||typeof $add207=='string')?
			$add207+$add208:
			$p['op_add']($add207,$add208)))==typeof ($add210='She wanted to find, and still seeks, some secret motive in our ') && (typeof $add209=='number'||typeof $add209=='string')?
			$add209+$add210:
			$p['op_add']($add209,$add210)))==typeof ($add212='actions. What answer did Novosiltsev get? None. The English have not ') && (typeof $add211=='number'||typeof $add211=='string')?
			$add211+$add212:
			$p['op_add']($add211,$add212)))==typeof ($add214='understood and cannot understand the self-ab!<br>negation of our ') && (typeof $add213=='number'||typeof $add213=='string')?
			$add213+$add214:
			$p['op_add']($add213,$add214)))==typeof ($add216='Emperor who wants nothing for himself, but only desires the good ') && (typeof $add215=='number'||typeof $add215=='string')?
			$add215+$add216:
			$p['op_add']($add215,$add216)))==typeof ($add218='of mankind. And what have they promised? Nothing! And what little ') && (typeof $add217=='number'||typeof $add217=='string')?
			$add217+$add218:
			$p['op_add']($add217,$add218)))==typeof ($add220='they have promised they will not perform! Prussia has always ') && (typeof $add219=='number'||typeof $add219=='string')?
			$add219+$add220:
			$p['op_add']($add219,$add220)))==typeof ($add222='declared that Buonaparte is invincible, and that all Europe is ') && (typeof $add221=='number'||typeof $add221=='string')?
			$add221+$add222:
			$p['op_add']($add221,$add222)))==typeof ($add224="powerless before him.... And I don't believe a word that Hardenburg ") && (typeof $add223=='number'||typeof $add223=='string')?
			$add223+$add224:
			$p['op_add']($add223,$add224)))==typeof ($add226='says, or Haugwitz either. This famous Prussian neutrality is just a ') && (typeof $add225=='number'||typeof $add225=='string')?
			$add225+$add226:
			$p['op_add']($add225,$add226)))==typeof ($add228='trap. I have faith only in God and the lofty destiny of our adored ') && (typeof $add227=='number'||typeof $add227=='string')?
			$add227+$add228:
			$p['op_add']($add227,$add228)))==typeof ($add230='monarch. He will save Europe!<br>Those were extremes, no doubt, ') && (typeof $add229=='number'||typeof $add229=='string')?
			$add229+$add230:
			$p['op_add']($add229,$add230)))==typeof ($add232='but they are not what is most important. What is important are the ') && (typeof $add231=='number'||typeof $add231=='string')?
			$add231+$add232:
			$p['op_add']($add231,$add232)))==typeof ($add234='rights of man, emancipation from prejudices, and equality of ') && (typeof $add233=='number'||typeof $add233=='string')?
			$add233+$add234:
			$p['op_add']($add233,$add234)))==typeof ($add236='citizenship, and all these ideas Napoleon has retained in full ') && (typeof $add235=='number'||typeof $add235=='string')?
			$add235+$add236:
			$p['op_add']($add235,$add236)))==typeof ($add238='force.') && (typeof $add237=='number'||typeof $add237=='string')?
			$add237+$add238:
			$p['op_add']($add237,$add238))]);
		$method = $pyjs__bind_method2('__init__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $cmp1,$cmp2,i,$bool1,$add240,$add239;
			self.senderIdx = 0;
			self.emailIdx = 0;
			self.subjectIdx = 0;
			self.fragmentIdx = 0;
			self.items = $p['list']([]);
			i = 0;
			while ((($bool1=((($cmp1=i)===($cmp2=$p['getattr']($m['MailItems'], 'NUM_ITEMS'))?0:
				(typeof $cmp1==typeof $cmp2 && ((typeof $cmp1 == 'number')||(typeof $cmp1 == 'string')||(typeof $cmp1 == 'boolean'))?
					($cmp1 == $cmp2 ? 0 : ($cmp1 < $cmp2 ? -1 : 1)):
					$p['cmp']($cmp1, $cmp2))) == -1)) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
				self['items']['append'](self['createFakeMail']());
				i = (typeof ($add239=i)==typeof ($add240=1) && (typeof $add239=='number'||typeof $add239=='string')?
					$add239+$add240:
					$p['op_add']($add239,$add240));
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('getMailItemCount', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $len1;
			return (($len1=$p['getattr'](self, 'items')) === null?0:
				(typeof $len1.__array != 'undefined' ? $len1.__array.length:
					(typeof $len1.__len__ == 'function'?$len1.__len__():
						(typeof $len1.length != 'undefined'?$len1.length:
							$p['len']($len1)))));
		}
	, 1, [null,null,['self']]);
		$cls_definition['getMailItemCount'] = $method;
		$method = $pyjs__bind_method2('getMailItem', function(index) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				index = arguments[1];
			}
			var $cmp3,$cmp4,$bool2,$len2,$2,$1;
			if ((($bool2=((((($cmp3=index)===($cmp4=(($len2=$p['getattr'](self, 'items')) === null?0:
				(typeof $len2.__array != 'undefined' ? $len2.__array.length:
					(typeof $len2.__len__ == 'function'?$len2.__len__():
						(typeof $len2.length != 'undefined'?$len2.length:
							$p['len']($len2))))))?0:
				(typeof $cmp3==typeof $cmp4 && ((typeof $cmp3 == 'number')||(typeof $cmp3 == 'string')||(typeof $cmp3 == 'boolean'))?
					($cmp3 == $cmp4 ? 0 : ($cmp3 < $cmp4 ? -1 : 1)):
					$p['cmp']($cmp3, $cmp4))))|1) == 1)) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
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
				return null;
			}
			return (typeof ($1=$p['getattr'](self, 'items')).__array != 'undefined'?
				((typeof $1.__array[$2=index]) != 'undefined'?$1.__array[$2]:
					$1.__getitem__($2)):
					$1.__getitem__(index));
		}
	, 1, [null,null,['self'],['index']]);
		$cls_definition['getMailItem'] = $method;
		$method = $pyjs__bind_method2('createFakeMail', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $bool4,$9,subject,$len6,$add244,$add251,$len5,$add250,email,$add243,body,$eq8,$add252,$eq2,$eq3,$eq1,$eq6,$eq7,$eq4,$eq5,$bool3,$bool6,$bool7,$8,$bool5,$6,$7,$4,$5,$3,$cmp5,$cmp6,$10,sender,i,$add246,$add247,$len4,$add245,$add242,$len3,$add241,$add248,$add249;
			sender = (typeof ($3=$p['getattr']($m['MailItems'], 'senders')).__array != 'undefined'?
				((typeof $3.__array[$4=$p['getattr'](self, 'senderIdx')]) != 'undefined'?$3.__array[$4]:
					$3.__getitem__($4)):
					$3.__getitem__($p['getattr'](self, 'senderIdx')));
			self.senderIdx = (typeof ($add241=$p['getattr'](self, 'senderIdx'))==typeof ($add242=1) && (typeof $add241=='number'||typeof $add241=='string')?
				$add241+$add242:
				$p['op_add']($add241,$add242));
			if ((($bool3=(($eq1=$p['getattr'](self, 'senderIdx'))===($eq2=(($len3=$p['getattr']($m['MailItems'], 'senders')) === null?0:
				(typeof $len3.__array != 'undefined' ? $len3.__array.length:
					(typeof $len3.__len__ == 'function'?$len3.__len__():
						(typeof $len3.length != 'undefined'?$len3.length:
							$p['len']($len3))))))&&$eq1===null?true:
				($eq1===null?false:($eq2===null?false:
					((typeof $eq1=='object'||typeof $eq1=='function')&&typeof $eq1.__cmp__=='function'?$eq1.__cmp__($eq2) === 0:
						((typeof $eq2=='object'||typeof $eq2=='function')&&typeof $eq2.__cmp__=='function'?$eq2.__cmp__($eq1) === 0:
							$eq1==$eq2)))))) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
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
				self.senderIdx = 0;
			}
			email = (typeof ($5=$p['getattr']($m['MailItems'], 'emails')).__array != 'undefined'?
				((typeof $5.__array[$6=$p['getattr'](self, 'emailIdx')]) != 'undefined'?$5.__array[$6]:
					$5.__getitem__($6)):
					$5.__getitem__($p['getattr'](self, 'emailIdx')));
			self.emailIdx = (typeof ($add243=$p['getattr'](self, 'emailIdx'))==typeof ($add244=1) && (typeof $add243=='number'||typeof $add243=='string')?
				$add243+$add244:
				$p['op_add']($add243,$add244));
			if ((($bool4=(($eq3=$p['getattr'](self, 'emailIdx'))===($eq4=(($len4=$p['getattr']($m['MailItems'], 'emails')) === null?0:
				(typeof $len4.__array != 'undefined' ? $len4.__array.length:
					(typeof $len4.__len__ == 'function'?$len4.__len__():
						(typeof $len4.length != 'undefined'?$len4.length:
							$p['len']($len4))))))&&$eq3===null?true:
				($eq3===null?false:($eq4===null?false:
					((typeof $eq3=='object'||typeof $eq3=='function')&&typeof $eq3.__cmp__=='function'?$eq3.__cmp__($eq4) === 0:
						((typeof $eq4=='object'||typeof $eq4=='function')&&typeof $eq4.__cmp__=='function'?$eq4.__cmp__($eq3) === 0:
							$eq3==$eq4)))))) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
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
				self.emailIdx = 0;
			}
			subject = (typeof ($7=$p['getattr']($m['MailItems'], 'subjects')).__array != 'undefined'?
				((typeof $7.__array[$8=$p['getattr'](self, 'subjectIdx')]) != 'undefined'?$7.__array[$8]:
					$7.__getitem__($8)):
					$7.__getitem__($p['getattr'](self, 'subjectIdx')));
			self.subjectIdx = (typeof ($add245=$p['getattr'](self, 'subjectIdx'))==typeof ($add246=1) && (typeof $add245=='number'||typeof $add245=='string')?
				$add245+$add246:
				$p['op_add']($add245,$add246));
			if ((($bool5=(($eq5=$p['getattr'](self, 'subjectIdx'))===($eq6=(($len5=$p['getattr']($m['MailItems'], 'subjects')) === null?0:
				(typeof $len5.__array != 'undefined' ? $len5.__array.length:
					(typeof $len5.__len__ == 'function'?$len5.__len__():
						(typeof $len5.length != 'undefined'?$len5.length:
							$p['len']($len5))))))&&$eq5===null?true:
				($eq5===null?false:($eq6===null?false:
					((typeof $eq5=='object'||typeof $eq5=='function')&&typeof $eq5.__cmp__=='function'?$eq5.__cmp__($eq6) === 0:
						((typeof $eq6=='object'||typeof $eq6=='function')&&typeof $eq6.__cmp__=='function'?$eq6.__cmp__($eq5) === 0:
							$eq5==$eq6)))))) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
					false :
					(typeof $bool5=='object'?
						(typeof $bool5.__nonzero__=='function'?
							$bool5.__nonzero__() :
							(typeof $bool5.__len__=='function'?
								($bool5.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				self.subjectIdx = 0;
			}
			body = '';
			i = 0;
			while ((($bool6=((($cmp5=i)===($cmp6=$p['getattr']($m['MailItems'], 'FRAGMENTS_PER_EMAIL'))?0:
				(typeof $cmp5==typeof $cmp6 && ((typeof $cmp5 == 'number')||(typeof $cmp5 == 'string')||(typeof $cmp5 == 'boolean'))?
					($cmp5 == $cmp6 ? 0 : ($cmp5 < $cmp6 ? -1 : 1)):
					$p['cmp']($cmp5, $cmp6))) == -1)) === null || $bool6 === false || $bool6 === 0 || $bool6 === '' ?
					false :
					(typeof $bool6=='object'?
						(typeof $bool6.__nonzero__=='function'?
							$bool6.__nonzero__() :
							(typeof $bool6.__len__=='function'?
								($bool6.__len__()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				body = (typeof ($add247=body)==typeof ($add248=(typeof ($9=$p['getattr']($m['MailItems'], 'fragments')).__array != 'undefined'?
					((typeof $9.__array[$10=$p['getattr'](self, 'fragmentIdx')]) != 'undefined'?$9.__array[$10]:
						$9.__getitem__($10)):
						$9.__getitem__($p['getattr'](self, 'fragmentIdx')))) && (typeof $add247=='number'||typeof $add247=='string')?
					$add247+$add248:
					$p['op_add']($add247,$add248));
				self.fragmentIdx = (typeof ($add249=$p['getattr'](self, 'fragmentIdx'))==typeof ($add250=1) && (typeof $add249=='number'||typeof $add249=='string')?
					$add249+$add250:
					$p['op_add']($add249,$add250));
				if ((($bool7=(($eq7=$p['getattr'](self, 'fragmentIdx'))===($eq8=(($len6=$p['getattr']($m['MailItems'], 'fragments')) === null?0:
					(typeof $len6.__array != 'undefined' ? $len6.__array.length:
						(typeof $len6.__len__ == 'function'?$len6.__len__():
							(typeof $len6.length != 'undefined'?$len6.length:
								$p['len']($len6))))))&&$eq7===null?true:
					($eq7===null?false:($eq8===null?false:
						((typeof $eq7=='object'||typeof $eq7=='function')&&typeof $eq7.__cmp__=='function'?$eq7.__cmp__($eq8) === 0:
							((typeof $eq8=='object'||typeof $eq8=='function')&&typeof $eq8.__cmp__=='function'?$eq8.__cmp__($eq7) === 0:
								$eq7==$eq8)))))) === null || $bool7 === false || $bool7 === 0 || $bool7 === '' ?
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
					self.fragmentIdx = 0;
				}
				i = (typeof ($add251=i)==typeof ($add252=1) && (typeof $add251=='number'||typeof $add251=='string')?
					$add251+$add252:
					$p['op_add']($add251,$add252));
			}
			return $m['MailItem'](sender, email, subject, body);
		}
	, 1, [null,null,['self']]);
		$cls_definition['createFakeMail'] = $method;
		var $bases = new Array(pyjslib.object);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('MailItems', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end MailItems */


/* end module: MailItems */


/*
PYJS_DEPS: ['MailItem.MailItem', 'MailItem']
*/
