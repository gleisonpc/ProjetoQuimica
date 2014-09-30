//CLASSE RESPONSAVEL POR GERAR OS PONTOS PARA SINTETIZAR AS IMAGENS

var workMeshs = function(){

	var dataCalc;
	var points = new Array();
	var geometry1 = new THREE.Geometry();

	this.buildPoints = function(m){

		var met;
		var x1;
		var x2;
		var x3;

		for(i in dataCalc[m].dado){

			met = dataCalc[m].dado[i].lr / 2;
			x1 = dataCalc[m].dado[i].tr - met;
			x2 = parseFloat(dataCalc[m].dado[i].tr);
			x3 = parseFloat(dataCalc[m].dado[i].tr) + met;

			points.push(new calcX(i , x1 , x2 , x3));
	
		}

		console.log(points);

	}

	this.buildMesh = function(){

		for(i in points){

			for(var j = 0; j < 1000; j = j + 0.01){

				console.log('RENDERIZANDO',i);

				if(j.toFixed(2) == points[i].x1.toFixed(2)){

					geometry1.vertices.push(new THREE.Vector3(points[i].x1, 0, 0));
					geometry1.vertices.push(new THREE.Vector3(points[i].x2, 10, 0));
					geometry1.vertices.push(new THREE.Vector3(points[i].x3, 0, 0));

				}
				else{
					geometry1.vertices.push(new THREE.Vector3(j, 0, 0));
				}

			}

			

		}

	return geometry1;

	}

	this.setData = function(data){

		dataCalc = data;

	}

	this.getPoints = function(){

		return points;
	}

}

	
