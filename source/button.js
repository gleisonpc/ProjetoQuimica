//ADCIONA BOTÃO:
//buttonName: NOME DO BOTÃO
//windowsRef: FUNÇÃO OU DIV PARA REFERENCIA DE CHAMADA
//top: POSICIONAMENTO DE ACORDO COM O TOPO DA PAGINA
//left: POSICIONAMENTO DE ACORDO COM O LADO ESQUERDO
//padR: DEFINE A Direto DO PADDING
//padL: DEFINE A Esquerdo DO PADDING
function addButton(buttonName, windowRef, top, left, padR, padL){

	document.write('<a href="#'+windowRef+'" class="button" style="top:'+top+'%; left:'+left+'%;padding-right:'+padR+'%; padding-left:'+padL+'%;">'+buttonName+'</a>');

}


//ADCIONA BOTÃO LINKADO A UMA FUNÇÃO
//buttonName: NOME DO BOTÃO
//windowsRef: FUNÇÃO OU DIV PARA REFERENCIA DE CHAMADA
//top: POSICIONAMENTO DE ACORDO COM O TOPO DA PAGINA
//left: POSICIONAMENTO DE ACORDO COM O LADO ESQUERDO
//padR: DEFINE A Direto DO PADDING
//padL: DEFINE A Esquerdo DO PADDING
function addButtonFunc(buttonName, windowRef, top, left, padR, padL){

	document.write('<a href="'+windowRef+';" onclick="updateCrom()" class="button" style="top:'+top+'%; left:'+left+'%;padding-right:'+padR+'%; padding-left:'+padL+'%;">'+buttonName+'</a>');

}

//ADICIONA BOTÃO FECHAR NA DIV
function addButtonClose(){
	document.write('<a href="#close" title="Close" class="close">X</a>');
}

//ADICIONA UMA CAIXA DE ENTRADA DE DADO
//text: TEXTO QUE APARECE ANTES DA CAIXA
//type: TIPO DE CAIXA PARA A ENTRADA DE DADO QUE SERÁ UTILIZADA EX: text, bolean
//idInput: IDEENTIFICAÇÃO PARA A CAIXA, UTILIZADA PARA PEGAR REFERENCIA PARA JAVASCRIPT
//nameInput: NOME PARA CAIXA
//positionL: POSICIONAMENTO DA CAIXA PENSANDO DA ESQUERDA PARA A DIREITA]
//class: PASSA A CLASSE CORRESPONDENTE AO CSS
function addInput(text, type, idInput, nameInput, positionL, positionA, positionB,idTable,clas, functionEvt, minV, maxV, stepV, padR, padL, position, width, value){

	document.write(text+' <input type="'+type+'" min="'+minV+'" max="'+maxV+'" step="'+stepV+'" value="'+value+'" onchange="'+functionEvt+'" id="'+idInput+idTable+'" class="'+clas+'" name="'+nameInput+'" style="width:'+width+'px; position: '+position+'; left: '+positionL+'%; top:'+positionA+'%; bottom:'+positionB+'%; padding-right:'+padR+'%; padding-left:'+padL+'%;"><br>');

}

//FUNÇÃO UTILIZADA PARA ABRIR UMA DIV E LINKAR A UM BOTÃO, DIV CONHECIDA COM MODELO "MODEL"
//nameModal: IDENTIFICAÇÃO DA DIV
//textMain: TEXTO QUE APARECERA NO TOP DA DIV
function openModalCoef(nameModal, textMain){

	document.write('<div id="'+nameModal+'" class="modal"><div>');
	addButtonClose();
	document.write('<div style="font-family:Lucida Console; font-size:35;">'+textMain+'</div>');

}

//FUNÇÃO UTILIZADA PARA FECHAR A MODEL ABERTA PELA FUNÇÃO OPENMODALCOEF
function closedModel(){

	document.write('</div></div>');

} 

//FUÇÃO ABRE UMA DIV SIMPLES
function openDiv(idName,buttonName, top, left, button, padR, padL, width, height, color,functionEvt,position, overflow){

	document.write('<div id="'+idName+'" onclick="'+functionEvt+'" style="background:'+color+'; position:'+position+' ; width:'+width+'%; height:'+height+'%; bottom:'+button+'; top:'+top+'%; left:'+left+'%; padding-right:'+padR+'%; padding-left:'+padL+'%; overflow:'+overflow+';">'+buttonName+'');

}

//FUNÇÃO FECHA UMA DIV SIMPLES
function closeDiv(){

	document.write('</div>');
	
}

//ATUALIZA O TEXTO DA CAIXA DE TEXTO DE ACORDO COM O RANGE SELECIONADO
function updateTextInput(obj, elementInput, mesh){

	document.getElementById(elementInput).value = obj.value;

	if(elementInput == 'textRange10'){

		var position = parseFloat(obj.value);
		mesh.position = new THREE.Vector3(position, mesh.position.y, mesh.position.z);
	
	}
	if(elementInput == 'textRange20'){

		var position = parseFloat(obj.value);
		mesh.position = new THREE.Vector3(mesh.position.x, position, mesh.position.z);
	
	}
	if(elementInput == 'textRange30'){

		var position = parseFloat(obj.value) + 2;
		mesh.position = new THREE.Vector3(mesh.position.x, mesh.position.y, position);
	
	}

	multField();

}

//ATUALIZA O RANGE DE ACORDO COM O TEXTO INSERIDO NA CAIXA DE TEXTO
function updateRange(obj, elementInput, mesh){

	document.getElementById(elementInput).value = obj.value;
	console.log('PASSEI NO UPDATE RANGE!');

	if(elementInput == 'X0'){

		var position = parseFloat(obj.value) + 2;
		mesh.position = new THREE.Vector3(position, mesh.position.y, mesh.position.z);
	
	}
	if(elementInput == 'Y0'){

		var position = parseFloat(obj.value) + 2;
		mesh.position = new THREE.Vector3(mesh.position.x, position, mesh.position.z);
	
	}
	if(elementInput == 'Z0'){

		var position = parseFloat(obj.value) + 2;
		mesh.position = new THREE.Vector3(mesh.position.x, mesh.position.y, position);
	
	}

}

//GERA OS VALORES DAS OUTRAS VARIAVEIS QUE SERÃO UTILIZADAS NO CALCULO
function multField(){

	document.getElementById('XX0').value = (document.getElementById('textRange10').value * document.getElementById('textRange10').value).toFixed(2);
	document.getElementById('YY0').value = (document.getElementById('textRange20').value * document.getElementById('textRange20').value).toFixed(2);
	document.getElementById('ZZ0').value = (document.getElementById('textRange30').value * document.getElementById('textRange30').value).toFixed(2);
	document.getElementById('XY0').value = (document.getElementById('textRange10').value * document.getElementById('textRange20').value).toFixed(2);
	document.getElementById('XZ0').value = (document.getElementById('textRange10').value * document.getElementById('textRange30').value).toFixed(2);
	document.getElementById('YZ0').value = (document.getElementById('textRange20').value * document.getElementById('textRange30').value).toFixed(2);

}

//ATUALIZA TELA DE CORMATOGRAFIA COM VALORES INSERIDOS NAS OUTRAS TABELAS
function updateCrom(){

	setTimeout('grid4.setData(grid2.getData())',100);
	setTimeout('grid5.setData(grid1.getData())',100);
	setTimeout('grid6.setData(grid3.getData())',100);

}

//FUNÇÃO QUE REALIZA O CALCULO DE RETENÇÃO DE ACORDO COM OS NÍVEIS DAS VARIAVEIS DEFINIDOS PELO USUARIO
//OBS: ESSA FUNÇÃO APRESENTA PROBLEMAS E PRECISA SER FINALIZADA PARA UM CORRETO FUNCIONAMENTO.
function retFunction(){

	var tr = new Array();
	var solv = grid3.getData();
	var coefP = grid2.getData();

	for(var i = 0; i < coefP.length/11; i++){

		var cont = i * 11;
		
		tr[i]  = parseFloat(coefP[cont+1].dataT); 
		tr[i] += (parseFloat(solv[0].dataT)*parseFloat(coefP[cont+2].dataT)); 
		tr[i] += (parseFloat(solv[1].dataT)*parseFloat(coefP[cont+3].dataT));
		tr[i] += (parseFloat(solv[2].dataT)*parseFloat(coefP[cont+4].dataT));
		tr[i] += (parseFloat(solv[3].dataT)*parseFloat(coefP[cont+5].dataT));
		tr[i] += (parseFloat(solv[4].dataT)*parseFloat(coefP[cont+6].dataT));
		tr[i] += (parseFloat(solv[5].dataT)*parseFloat(coefP[cont+7].dataT));
		tr[i] += (parseFloat(solv[6].dataT)*parseFloat(coefP[cont+8].dataT));
		tr[i] += (parseFloat(solv[7].dataT)*parseFloat(coefP[cont+9].dataT));
		tr[i] += (parseFloat(solv[8].dataT)*parseFloat(coefP[cont+10].dataT));
		tr[i] = tr[i].toFixed(2);

	}

	console.log(tr);
	
}

//FUNÇÃO RESPONSÁVEL POR EXECUTAR O CÁLCULO DOS MELHORES VALORES QUE SERÃO SINTETIZADOS NO CORMATOGRAMA
function bestFunction(){

	var geometry1 = new THREE.Geometry();

	var coefP = grid2.getData();
	var coefL = grid1.getData();

	var calc = new bestCalc(coefP, coefL);

	var mesh = new workMeshs();

	var dado1;
	var dado2;

	var m1 = 0;
	var x = 0;

	if(coefP.length != coefL.length){
		alert("NUMERO DE LINHAS DE COEFICIENTES ESTÃO DIFERENTES!!!");
		return;
	}

	console.log('INICIO!!!');

	calc.calcBase();
	calc.calcRaiz();

	m1 = calc.getBiger();
	dado1 = calc.getData();
	dado2 = grid4.getData();
	
	console.log(m1);
	console.log(dado1);

	
	mesh.setData(dado1);
	mesh.buildPoints(m1);

	geometry1 = mesh.buildMesh();

	material1 = new THREE.LineBasicMaterial({
		color: 0xFFFF33
	});

	mesh1 = new THREE.Line(geometry1, material1);
							        		
	var group = new THREE.Object3D();
	group.add(mesh1);

	render.setGroup(group);

	point = mesh.getPoints();
	var result = new Array();

	for(i in dado1[m1].dado){

		result.push(new dataTable(dado2[x].field,dado2[x].dataT));
		result.push(new dataTable('ret.',point[i].x2.toFixed(2)));
		result.push(new dataTable('X',dado1[m1].dado[0].x.toFixed(2)));
		result.push(new dataTable('Y',dado1[m1].dado[0].y.toFixed(2)));
		result.push(new dataTable('Z',dado1[m1].dado[0].z.toFixed(2)));
		
		console.log(point);
		grid7.setData(result);
		
		x = x + 11;
	}

	console.log('FIM!!!');

}