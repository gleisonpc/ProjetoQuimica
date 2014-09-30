//CLASSE REPONSAVEL PELA SINTETIZAÇÃO GERAL.
var webGLRender = function(groupObjects){

	var container;
	var camera;
	var scene;
	var projector;
	var renderer;
    var id;
    var group = groupObjects;

    this.setContainer = function(containerObj){

        container = document.getElementById(containerObj);

    }


    this.getContainer = function(){

        return container;

    }

    this.setCamera = function(X,Y,Z,container){

        camera = new THREE.PerspectiveCamera( 75, container.innerWidth / container.innerHeight, 1, 10000 );
       
        camera.position.x = X;
        camera.position.y = Y;
        camera.position.z = Z;


    }

    this.getCamera = function(){

        return camera;

    }


    this.startRender = function(idTeste,X,Y,Z){

        id = idTeste;
        
        scene = new THREE.Scene();

        camera = new THREE.PerspectiveCamera( 8, container.clientWidth / container.clientHeight, 1, 1000 );
       
        camera.position.x = X;
        camera.position.y = Y;
        camera.position.z = Z;

        camera.updateProjectionMatrix();

        console.log(camera);

		renderer = new THREE.WebGLRenderer( { antialias: true } );
		renderer.setSize( container.clientWidth, container.clientHeight );

		container.appendChild( renderer.domElement );

        if(idTeste == 1){
            controlBall = new THREE.TrackballControls(camera, container);
        }
        else
            if(idTeste == 2){
                controlBall2 = new THREE.TrackballControls(camera, container);
		      }

		animate();  

	}
	
	function animate() {

        requestAnimationFrame( animate );

        scene.add(group);

        try{
            if(id == 1){            
                controlBall.update();
            }
            else
                if(id == 2){
                    controlBall2.update();
                }
                
        
        }
        catch (Err)
        {
            //console.log("Erro:"+Err);
        }

        renderer.render( scene, camera );

    }

    this.setGroup = function(groupObj){

        scene.remove(group);
        group = groupObj;

    }

    this.setLookAt = function(vector){

        camera.lookAt(new THREE.Vector3(vector));

    }

}