//CLASSE RESPONSAVEL POR GERAR O MELHOR RESULTADO PARA O CÁLCULO
var bestCalc = function(coefP, coefL){

	var dado1 = new Array();
	var multTr = new Array();
	//var multTr = new Array();
	var tr;
	var lr;

	this.calcBase = function(){

		for(var x = -2; x <= 2.1; x = x + 0.1){

			var xx = x*x;

			for(var y = -2; y <= 2.1; y = y + 0.1){

				var yy = y*y;
				var xy = x*y;

				for(var z = -2; z <= 2.1;z = z + 0.1){

					var dado2 = new Array();

					var zz = z*z;
					var xz = x*z;
					var yz = y*z;
		
					console.log('CALCULO X Y Z');

					for(var i = 0; i < coefP.length/11; i++){

						var cont = i * 11;
						
						tr  = parseFloat(coefP[cont+1].dataT); 
						tr += (parseFloat(x)*parseFloat(coefP[cont+2].dataT)); 
						tr += (parseFloat(y)*parseFloat(coefP[cont+3].dataT));
						tr += (parseFloat(z)*parseFloat(coefP[cont+4].dataT));
						tr += (parseFloat(xx)*parseFloat(coefP[cont+5].dataT));
						tr += (parseFloat(yy)*parseFloat(coefP[cont+6].dataT));
						tr += (parseFloat(zz)*parseFloat(coefP[cont+7].dataT));
						tr += (parseFloat(xy)*parseFloat(coefP[cont+8].dataT));
						tr += (parseFloat(xz)*parseFloat(coefP[cont+9].dataT));
						tr += (parseFloat(yz)*parseFloat(coefP[cont+10].dataT));
						tr = tr.toFixed(2);

						lr  = parseFloat(coefL[cont+1].dataT); 
						lr += (parseFloat(x)*parseFloat(coefL[cont+2].dataT)); 
						lr += (parseFloat(y)*parseFloat(coefL[cont+3].dataT));
						lr += (parseFloat(z)*parseFloat(coefL[cont+4].dataT));
						lr += (parseFloat(xx)*parseFloat(coefL[cont+5].dataT));
						lr += (parseFloat(yy)*parseFloat(coefL[cont+6].dataT));
						lr += (parseFloat(zz)*parseFloat(coefL[cont+7].dataT));
						lr += (parseFloat(xy)*parseFloat(coefL[cont+8].dataT));
						lr += (parseFloat(xz)*parseFloat(coefL[cont+9].dataT));
						lr += (parseFloat(yz)*parseFloat(coefL[cont+10].dataT));
						lr = lr.toFixed(2);


						if(tr < 0 || lr < 0){

							dado2.push(new calcTable(0,0,0,0,0,0,lr));

						}
						else
							dado2.push(new calcTable(x,y,z,tr,i,0,lr));

					}

					dado1.push(new dataTr(dado2));

				}

			}
		
		}
	}

	this.calcRaiz = function(){

		for(i in dado1){

			var t2;
			var t1 = 0;
			multTr[i] = 1;

			for(var j = 0; j < coefP.length/11; j++){

				t2 = dado1[i].dado[j].tr;

				var dist = t2 - t1;

				if(dist < 0){

					dist = dist * (-1);

				}

				dado1[i].dado[j].dist = dist;

				multTr[i] = multTr[i] * dado1[i].dado[j].dist;

				t1 = t2;

				console.log('CALCULO RAIZ');

			}

			multTr[i] = Math.pow(multTr[i],(1/(coefP.length/11)));

		}

	}

	this.getBiger = function(){

		var m = 0;
		var m1 = 0;

		for(i in multTr){

			console.log('MAIOR RAIZ');

			if( multTr[i] > m ){

				m = multTr[i];
				m1 = i;
			} 
			else
				m = m;

		}

		return m1;
	}

	this.getData = function(){

		return dado1;

	}

}