var Grade =  function(){

	this.load = function(){
	        var color = new THREE.Color( 0x000000 );
			color.setRGB(0.8,0.8,0.8);
			var i;
			var Linematerial = new THREE.LineBasicMaterial({color: color});
			var Linegeometry = new THREE.Geometry();
				for(i=-10;i<10;i++){
					Linegeometry.vertices.push(new THREE.Vector3(i,-10,0));					
					Linegeometry.vertices.push(new THREE.Vector3(i,10,0));
					Linegeometry.vertices.push(new THREE.Vector3(i+1,10,0));
				}
				Linegeometry.vertices.push(new THREE.Vector3(i,-10,0));
				for(i=-10;i<10;i++){
					Linegeometry.vertices.push(new THREE.Vector3(-10,i,0));					
					Linegeometry.vertices.push(new THREE.Vector3(10,i,0));
					Linegeometry.vertices.push(new THREE.Vector3(10,i+1,0));
				}
				Linegeometry.vertices.push(new THREE.Vector3(-10,i,0));
				
			var line = new THREE.Line(Linegeometry, Linematerial);
			scene.add(line);
	}
}