'use strict';
		
let a = {                // <--Объект
'with space': 5,     // Ключ : поле (значение)
	'test' :0,
		    'fn' : function(){
			    console.debug('[Info] Привет из функции');
				this.test = 5;
				}
			}
			
		 a.fn();
		 
		//console.debug(a.test);
		
		a.newField = 'Test'
		//console.debug(a.newField);
		a.count = 5;
		if(a.hasOwnProperty('count')){
		    console.debug(a.count + 1);
			}
		else {
		    console.error('[error] нет поля count');
			}
		
		//let b = [1, 2, 3, 4] 
		//delete b[1]
		//delete a.test
		for(let key in a){
		    console.debug( key, a[key]);  // Выодит значения ключей А
		}
		
		let b = [1, 2, 3, 4];
		for(let key of b){
		    console.debug( key );
		}
		
		console.debug(a['with space']);
		//console.debug( `${typeof(a)}; ${a}` );
		//console.error("Ошибка");
		//console.warn("Внимание!!!");