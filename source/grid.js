//CLASSE RESPONSAVÉL POR GERAR AS TABELAS.
// PARA UTILIZAR ESSA CLASSE É NESCESSARIO OBTER OS ARQUIVOS editablegrid-2.0.1.css e editalegrid-2.0.1.js que estão na pasta raiz do código.
// AS IMAGENS bullet_arrow_down.png e bullet_arrow_up.png QUE ESTAO NA PASTA IMAGENS

var gridTable = function(nameTable, idTable, field, dataField){

	this.idTable = idTable;
	this.nameTable = nameTable; 
	this.field = field;
	this.dataField = dataField;

	var arrayData = new Array();

	//CRIA A TABELA NA INICIALIZAÇÃO DA PAGINA
	this.creatTable = function(left, top, width, height){

		document.write('<div id="'+nameTable+'" style="position: absolute; left:'+left+'%; top:'+top+'%; width:'+width+'%; height:'+height+'%; overflow:auto;"></div>');

		grid();

	}

	//ADICIONA INFORMAÇÕES AOO ARRAY ESTANCIADO
	var addData = function(data){

		arrayData.push(data);

	}

	//DEVOLE O ARRAY COM AS INFORMAÇÕES OBTIDAS
	this.getData = function(){

		return arrayData;

	}

	//ALIMENTA ARRAY COM OUTRO OBJETO
	this.setData = function(array,originTable,destTable){

		arrayData = array;

		grid();

	}

	//BOTÃO RESPONSAVEL POR GRAVAR OS DADOS DOS INPUTS PARA A TABELA
	//id: PASSA O ID DA TABELA
	this.buttonReg = function(id){

		for (var i in dataField){

			arrayData.push(new dataTable(dataField[i],document.getElementById(dataField[i] + id).value));

		}

		for (var i in dataField){

			document.getElementById(dataField[i] + id).value = '';

		}

		grid();


	}

	//APAGA A TABELA INSERIDA E INICIA UMA NOVA
	//id: PASSA O ID DA TABELA
	this.buttonNew = function(id){

		for (var i in dataField){

			document.getElementById(dataField[i] + id).value = '';

		}


		arrayData = new Array();


		grid();
		
	}

	//GERA UM ARQUIVO CSV COM AS INFORMAÇÕES DA TABELA QUE PODERA SER IMPORTADO POSTERIORMENTE
	this.buttonSave = function(){

		var csvData = '';
		var cont = 1;

		for (var i in arrayData){

			if(cont == field.length){
				csvData = csvData + arrayData[i].dataT + "\n";
				cont = 1;
			}else{
				csvData = csvData + arrayData[i].dataT + ";";
				cont++;
			}
			console.log(i, arrayData[i].dataT);		

		}

		var blob = new Blob([csvData], { type: "text/csv;charset=utf-8" });
		saveAs(blob, "myFile.csv");

	}


	//LÊ UM ARQUIVO CSV PARAMETERIZADO CONFORME O PADRÃO DO SISTEMA E ALIMENTA A TABELA
	//thisItem: PASSA INFORMAÇÕES DO ARQUIVO SELECIONADO
	//id: PASSA O ID DA TABELA
	//nameTable: PASSA O NOME DA TABELA
	this.readFile = function(thisItem){

		var fileToLoad = thisItem.files[0];

		var fileReader = new FileReader();

		arrayData = new Array();
		
		fileReader.onload = function(fileLoadedEvent) 
		{

			var j = 0;
			var textFromFileLoaded = fileLoadedEvent.target.result;
			var cont = textFromFileLoaded.length;

			textFromFileLoaded = textFromFileLoaded.split("\n");
			textFromFileLoaded.pop();

			console.log(textFromFileLoaded);

			//textFromFileLoaded.splice(cont-1,1);
			//cont = textFromFileLoaded.length;

			for(x in textFromFileLoaded){

				textFromFileLoaded[x] = textFromFileLoaded[x].split(";");

				for(i in textFromFileLoaded[x]){

					if(j == field.length){
						j = 0
					}

					arrayData.push(new dataTable(dataField[j],textFromFileLoaded[x][i]));

					j++;

				}
			}
			grid();

		}

		fileReader.readAsText(fileToLoad, "UTF-8");

	}

	//RENDERIZA A TABELA COM AS INFORMAÇÕES
	//id: PASSA O ID DA TABELA
	function grid(){
					
		var dataRender = [];
		
		var metadata = [];

		for(var i in field){

			metadata.push({ name: field[i], label: field[i], datatype: "string", editable: true});

		}

		var k = 0;

		for(var j = 0; j < (arrayData.length/field.length);j++){

			var obj = {};
			var numField = 0;

			for(var i in field){

				var fieldLine = arrayData[numField].field;

				obj[fieldLine] = arrayData[k].dataT;
			
				k = k + 1;
				numField = numField + 1;

			}

			dataRender.push({id: i, values: obj});

		}
		  
		editableGrid = new EditableGrid("TableReagente");
		editableGrid.load({"metadata": metadata, "data": dataRender});
		editableGrid.renderGrid(nameTable, "testgrid");

	}

	
}

//ESTRUTURA DE DADOS PARA OS DADOS UTILIZADOS NO CÁLCULO
this.dataTable = function(field, dataT){

			this.field = field;
			this.dataT = dataT;

		}

//ESTRUTURA DE DADOS UTILIZADA PARA OS CÁLCULOS
this.calcTable = function(x , y , z , tr, i, dist, lr){

	this.x = x;
	this.y = y;
	this.z = z;
	this.tr = tr;
	this.i = i;
	this.dist = dist;
	this.lr = lr;

}

//ESTRUTURA UTILIZADA PARA DADOS NA TABELA
this.dataTr = function (dado){

	this.dado = dado;

}

//ESTRUTURA UTILIZADA PARA CALCULOS
this.calcX = function (i , x1 , x2 , x3){

	this.i = i;
	this.x1 = x1;
	this.x2 = x2;
	this.x3 = x3;

}

