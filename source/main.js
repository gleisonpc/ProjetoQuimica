//A CLASSE MAIN É UTLIZADA PARA CRIAR TODOS OS OBJETOS PRESENTES NO PROGRAMA
//ESSA CLASSE UTILIZA TODA A ESTRUTURA DAS OUTRAS CALSSE PARA FUNCIONAR
//PARA COMPREENDER MELHOR COMO ESSA CLASSE TRABALHO É PRECISO COMPREENDER AS OUTRAS CLASSE PRESENTES NO PROJETO

function Main(){

	this.init = function(){

		document.write('<div style= "width:100%; height:100%; position: relative">');

			addButton('Coeficiente L','coefL',1, 40);
			addButton('Coeficiente A','coefA',1, 50);
			addButton('Cromatograma','cromatograma',1, 60)

			openDiv('container','',10,3,0,'','',40,45,'#000000','','fixed');

				geometry1 = new THREE.Geometry();
		        geometry1.vertices.push(new THREE.Vector3(0, 0, 0));
		        geometry1.vertices.push(new THREE.Vector3(4, 0, 0));
		        geometry1.vertices.push(new THREE.Vector3(4, 4, 0));
		        geometry1.vertices.push(new THREE.Vector3(0, 4, 0));
		        geometry1.vertices.push(new THREE.Vector3(0, 0, 0));
		        geometry1.vertices.push(new THREE.Vector3(0, 0, 4));
		        geometry1.vertices.push(new THREE.Vector3(0, 4, 4));
		        geometry1.vertices.push(new THREE.Vector3(0, 4, 0));
		        geometry1.vertices.push(new THREE.Vector3(0, 4, 4));
		        geometry1.vertices.push(new THREE.Vector3(4, 4, 4));
		        geometry1.vertices.push(new THREE.Vector3(4, 4, 0));
		        geometry1.vertices.push(new THREE.Vector3(4, 4, 4));
		        geometry1.vertices.push(new THREE.Vector3(4, 0, 4));
		        geometry1.vertices.push(new THREE.Vector3(4, 0, 0));
		        geometry1.vertices.push(new THREE.Vector3(4, 0, 4));
		        geometry1.vertices.push(new THREE.Vector3(0, 0, 4));

		        material1 = new THREE.LineBasicMaterial({
		        color: 0xFFFF33
		    	});
		        
		        
           		geometry2 = new THREE.SphereGeometry( 0.2, 35, 35 );
       			
       			material2 = new THREE.MeshBasicMaterial({
        		color: 0xFF0000
        		});

        		mesh1 = new THREE.Line(geometry1, material1);
        		mesh2 = new THREE.Line(geometry2, material2);
        		//mesh3 = new THREE.Line(geometry3, material3);

        		var group = new THREE.Object3D();
        		
        		group.add(mesh1);
        		mesh1.position = new THREE.Vector3(-2, -2, 0);
        		
        		group.add(mesh2);
        		mesh2.position = new THREE.Vector3(-2, -2, 0);
        		
        		//group.add(mesh3);

        		var render1 = new webGLRender(group);

		        render1.setContainer('container');
		        render1.startRender(1,-10,-5,50);	
       				
			closeDiv();

			//(idName,buttonName, top, left, button, padR, padL, width, height, color,functionEvt,position)
			openDiv('tableXYZ','',10,50,0,'','',40,40,'','','fixed','auto');

				var fieldTable3 = new Array();
				fieldTable3 = ['X','Y','Z','XX','YY','ZZ','XY','XZ','YZ'];
				
				var dataField3 = new Array();
				dateField3 = ['X','Y','Z','XX','YY','ZZ','XY','XZ','YZ'];

				grid3 = new gridTable('tableXYZ',3, fieldTable3, dateField3);
				grid3.creatTable(25,18,66,55);

			closeDiv();

			
			openDiv('','',60,3,0,'','',40,40,'','','fixed');

				addInput('X','range','X','','','','',0,'',"updateTextInput(this,'textRange10', mesh2)",-2,2,0.01);
				addInput('','text','textRange1','',30,0,'',0,'',"updateRange(this,'X0', mesh2)",'','','','','','absolute',30,0);
				
				addInput('Y','range','Y','','','','',0,'',"updateTextInput(this,'textRange20', mesh2)",-2,2,0.01);
				addInput('','text','textRange2','',30,17,'',0,'',"updateRange(this,'Y0', mesh2)",'','','','','','absolute',30,0);

				addInput('Z','range','Z','','','','',0,'',"updateTextInput(this,'textRange30', mesh2)",-2,2,0.01);
				addInput('','text','textRange3','',30,36,'',0,'',"updateRange(this,'Z0', mesh2)",'','','','','','absolute',30,0);
				
				addInput('','text','XX','',-40,36,'',0,'','','','','','','','absolute',30);
				addInput('','text','YY','',-40,36,'',0,'','','','','','','','absolute',30);
				addInput('','text','ZZ','',-40,36,'',0,'','','','','','','','absolute',30);
				addInput('','text','XY','',-40,36,'',0,'','','','','','','','absolute',30);
				addInput('','text','XZ','',-40,36,'',0,'','','','','','','','absolute',30);
				addInput('','text','YZ','',-40,36,'',0,'','','','','','','','absolute',30);

				//(buttonName, windowRef, top, left, padR, padL)
				addButtonFunc('Registrar',"javascript:grid3.buttonReg(0)",0 ,60 ,0.9 ,0.8);
				addButtonFunc('Novo',"javascript:grid3.buttonNew(0)",15 ,60);
				addButtonFunc('Salvar',"javascript:grid3.buttonSave()",30 ,60 ,0.7 ,0.7 );
				openDiv('file','Carregar',45 ,60,'',0.6,1,'','','','','absolute');
				addInput('','file','carregar','file',0,'','',1,'fileU',"grid3.readFile(this)",'','','','','','absolute');
				closeDiv();

			closeDiv();

			openModalCoef('coefL', 'Registro de Coeficientes L');

				document.write('<br><br>');

				//(text, type, idInput, nameInput, positionL, positionA, positionB,idTable,clas, functionEvt, minV, maxV, stepV, padR, padL, position, width, value)
				addInput('Reagente:','text','reagente','reagente',12,'','',1,'','','','','','','','absolute','','');
				addInput('Coef0:','text','coef0','coef0',12,'','',1,'','','','','','','','absolute','','');
				addInput('CoefX:','text','coefx','coefx',12,'','',1,'','','','','','','','absolute','','');
				addInput('CoefY:','text','coefy','coefy',12,'','',1,'','','','','','','','absolute','','');
				addInput('CoefZ:','text','coefz','coefz',12,'','',1,'','','','','','','','absolute','','');
				addInput('CoefXX:','text','coefxx','coefxx',12,'','',1,'','','','','','','','absolute','','');
				addInput('CoefYY:','text','coefyy','coefyy',12,'','',1,'','','','','','','','absolute','','');
				addInput('CoefZZ:','text','coefzz','coefzz',12,'','',1,'','','','','','','','absolute','','');
				addInput('CoefXY:','text','coefxy','coefxy',12,'','',1,'','','','','','','','absolute','','');
				addInput('CoefXZ:','text','coefxz','coefxz',12,'','',1,'','','','','','','','absolute','','');
				addInput('CoefYZ:','text','coefyz','coefyz',12,'','',1,'','','','','','','','absolute','','');
				document.write('<br><br><br><br>');

				var fieldTable1 = new Array();
				fieldTable1 = ['reagente', 'coef0', 'coefx', 'coefy', 'coefz', 'coefxx', 'coefyy', 'coefzz', 'coefxy', 'coefxz', 'coefyz'];
				
				var dataField1 = new Array();
				dateField1 = ['reagente', 'coef0', 'coefx', 'coefy', 'coefz', 'coefxx', 'coefyy', 'coefzz', 'coefxy', 'coefxz', 'coefyz'];

				grid1 = new gridTable('tableCoefL',1, fieldTable1, dateField1);
				grid1.creatTable(25,18,66,55);

				addButtonFunc('Novo',"javascript:grid1.buttonNew(1)",75 ,5);
				addButtonFunc('Registrar',"javascript:grid1.buttonReg(1)",75 ,10.5 ,0.9 ,0.8);
				addButtonFunc('Salvar',"javascript:grid1.buttonSave()",85 ,5 ,0.7 ,0.7 );
				openDiv('file','Carregar',85 ,10.5,'',0.6,1,'','','','','absolute');
				addInput('','file','carregar','file',0,'','',1,'fileU',"grid1.readFile(this)",'','','','','','absolute','','');
				closeDiv();
			
			closedModel();
		

			openModalCoef('coefA', 'Registro de Coeficientes A');
		
				document.write('<br><br>');
				addInput('Reagente','text','reagente','reagente',12,'','',2,'','','','','','','','absolute','','');
				addInput('Coef0','text','coef0','coef0',12,'','',2,'','','','','','','','absolute','','');
				addInput('CoefX','text','coefx','coefx',12,'','',2,'','','','','','','','absolute','','');
				addInput('CoefY','text','coefy','coefy',12,'','',2,'','','','','','','','absolute','','');
				addInput('CoefZ','text','coefz','coefz',12,'','',2,'','','','','','','','absolute','','');
				addInput('CoefXX','text','coefxx','coefxx',12,'','',2,'','','','','','','','absolute','','');
				addInput('CoefYY','text','coefyy','coefyy',12,'','',2,'','','','','','','','absolute','','');
				addInput('CoefZZ','text','coefzz','coefzz',12,'','',2,'','','','','','','','absolute','','');
				addInput('CoefXY','text','coefxy','coefxy',12,'','',2,'','','','','','','','absolute','','');
				addInput('CoefXZ','text','coefxz','coefxz',12,'','',2,'','','','','','','','absolute','','');
				addInput('CoefYZ','text','coefyz','coefyz',12,'','',2,'','','','','','','','absolute','','');
				document.write('<br><br><br><br>');

				var fieldTable2 = new Array();
				fieldTable2 = ['reagente', 'coef0', 'coefx', 'coefy', 'coefz', 'coefxx', 'coefyy', 'coefzz', 'coefxy', 'coefxz', 'coefyz'];
				
				var dataField2 = new Array();
				dateField2 = ['reagente', 'coef0', 'coefx', 'coefy', 'coefz', 'coefxx', 'coefyy', 'coefzz', 'coefxy', 'coefxz', 'coefyz'];

				grid2 = new gridTable('tableCoefA',2, fieldTable2, dateField2);
				grid2.creatTable(25,18,66,55);

				addButtonFunc('Novo',"javascript:grid2.buttonNew(2)",75 ,5);
				addButtonFunc('Registrar',"javascript:grid2.buttonReg(2)",75 ,10.5 ,0.9 ,0.8);
				addButtonFunc('Salvar',"javascript:grid2.buttonSave()",85 ,5 ,0.7 ,0.7 );
				openDiv('file','Carregar',85 ,10.5,'',0.6,1,'','','','','absolute');
				addInput('','file','carregar','file',0,'','',1,'fileU',"grid2.readFile(this)",'','','','','','absolute','','');
				closeDiv();
				
			closedModel();

				openModalCoef('cromatograma', 'Cromatograma');

					openDiv('croma3D','',10,5,0,'','',90,30,'#000000','','fixed');

						geometry1 = new THREE.Geometry();
						geometry1.vertices.push(new THREE.Vector3(-100, 0, 0));
						geometry1.vertices.push(new THREE.Vector3(100, 0, 0));

						material1 = new THREE.LineBasicMaterial({
						color: 0xFFFF33
						});

						mesh1 = new THREE.Line(geometry1, material1);
							        		
						var group = new THREE.Object3D();
						group.add(mesh1);

						render = new webGLRender(group);

						render.setContainer('croma3D');
						render.startRender(2,0,0,170);	   	

					closeDiv();

					addButtonFunc('Tempo Ret.',"javascript:retFunction()",1 ,15);
					addButtonFunc('Melhor Ret.',"javascript:bestFunction()",1 ,25);

					openDiv('CoefAC','Registro de Coeficientes A',40,5,0,'','',85,40,'','','fixed','auto');

						var fieldTable4 = new Array();
						fieldTable4 = ['reagente', 'coef0', 'coefx', 'coefy', 'coefz', 'coefxx', 'coefyy', 'coefzz', 'coefxy', 'coefxz', 'coefyz'];
				
						var dataField4 = new Array();
						dataField4 = ['reagente', 'coef0', 'coefx', 'coefy', 'coefz', 'coefxx', 'coefyy', 'coefzz', 'coefxy', 'coefxz', 'coefyz'];

						grid4 = new gridTable('tableCoefAC',4, fieldTable4, dataField4);
						grid4.creatTable(0,10,66,55);

					closeDiv();

					openDiv('CoefLC','Registro de Coeficientes L',65,5,0,'','',85,40,'','','fixed','auto');

						var fieldTable5 = new Array();
						fieldTable5 = ['reagente', 'coef0', 'coefx', 'coefy', 'coefz', 'coefxx', 'coefyy', 'coefzz', 'coefxy', 'coefxz', 'coefyz'];
				
						var dataField5 = new Array();
						dataField5 = ['reagente', 'coef0', 'coefx', 'coefy', 'coefz', 'coefxx', 'coefyy', 'coefzz', 'coefxy', 'coefxz', 'coefyz'];

						grid5 = new gridTable('tableCoefLC',5, fieldTable5, dataField5);
						grid5.creatTable(0,10,66,55);

					closeDiv();

					openDiv('Solventes','Solventes X Y Z',40,60,0,'','',85,40,'','','fixed','auto');

						var fieldTable6 = new Array();
						fieldTable6 = ['X','Y','Z','XX','YY','ZZ','XY','XZ','YZ'];
				
						var dataField6 = new Array();
						dataField6 = ['X','Y','Z','XX','YY','ZZ','XY','XZ','YZ'];

						grid6 = new gridTable('tableSolventes',6, fieldTable6, dataField6);
						grid6.creatTable(0,10,66,55);

					closeDiv();

					openDiv('Result','Resultado',65,60,0,'','',85,40,'','','fixed','auto');

						var fieldTable7 = new Array();
						fieldTable7 = ['reagente','ret.','X','Y','Z'];
				
						var dataField7 = new Array();
						dataField7 = ['reagente','ret.','X','Y','Z'];

						grid7 = new gridTable('tableResult',7, fieldTable7, dataField7);
						grid7.creatTable(0,10,66,55);

					closeDiv();

					document.write('<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>');
					
					updateCrom();
				
			closedModel();


		document.write('</div>');
	
	}
}