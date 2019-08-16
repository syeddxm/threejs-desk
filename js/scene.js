 // Our Javascript will go here.
 var scene = new THREE.Scene();
 var camera = new THREE.PerspectiveCamera( 25, window.innerWidth / window.innerHeight, 0.1, 2000 );

 var renderer = new THREE.WebGLRenderer();
 renderer.setSize( window.innerWidth, window.innerHeight );
 renderer.localClippingEnabled = true;

 document.body.appendChild( renderer.domElement );
 var clipPlanes = [
    new THREE.Plane( new THREE.Vector3( 0, 1, 0 ), -8 ),
    new THREE.Plane( new THREE.Vector3( 0, - 1, 0 ), -8 ),
    new THREE.Plane( new THREE.Vector3( 0, 0, - 1 ), -1 ),
    new THREE.Plane( new THREE.Vector3( 0, 0, 1 ), -1 ),
    new THREE.Plane( new THREE.Vector3( 1, 0, 0 ), -1 ),
    new THREE.Plane( new THREE.Vector3( -1, 0, 0 ), -1 ),
];

 var controls = new THREE.OrbitControls( camera, renderer.domElement );
 controls.update();

 var geometry = new THREE.BoxGeometry( 1, 1, 1 );
 var material = new THREE.MeshLambertMaterial( {
    //color: new THREE.Color().setHSL( Math.random(), 0.5, 0.5 ),
    side: THREE.DoubleSide,
    clippingPlanes: clipPlanes,
    clipIntersection: true
} );
 var cube = new THREE.Mesh( geometry, material );
 cube.scale.set(5,5,5);
 scene.add( cube );
 camera.position.set( 0, 100, 500 );
 camera.lookAt( 0, 0, 0 );

 var light = new THREE.AmbientLight( 0xffffff, 1 ); // soft white light
 scene.add( light );






var helpers = new THREE.Group();
helpers.add( new THREE.PlaneHelper( clipPlanes[ 0 ], 100, 0xff0000 ) );
helpers.add( new THREE.PlaneHelper( clipPlanes[ 1 ], 100, 0xff0000 ) );
helpers.add( new THREE.PlaneHelper( clipPlanes[ 2 ], 100, 0x00ff00 ) );
helpers.add( new THREE.PlaneHelper( clipPlanes[ 3 ], 100, 0x00ff00 ) );
helpers.add( new THREE.PlaneHelper( clipPlanes[ 4 ], 100, 0x0000ff ) );
//helpers.add( new THREE.PlaneHelper( clipPlanes[ 5 ], 100, 0x0000ff ) );
//helpers.add( new THREE.PlaneHelper( clipPlanes[ 4 ], 100, 0x0000ff ) );
helpers.visible = true;
scene.add( helpers );


 function animate() {
     requestAnimationFrame( animate );
     cube.rotation.x += 0.01;
     cube.rotation.y += 0.01;
     controls.update();

     renderer.render( scene, camera );
 }
animate();