let scene, camera, renderer, cube;

function init() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(
        75,                                     // fov
        window.innerWidth / window.innerHeight, // aspect
        0.1,                                    // near
        1000,                                   // far
    );

    renderer = new THREE.WebGLRenderer({ antialias: true});

    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    const geometry = new THREE.BoxGeometry( 2, 2, 2 );
    const texture = new THREE.TextureLoader().load('textures/crate.gif');
    const material = new THREE.MeshBasicMaterial({ map: texture });
    // const material = new THREE.MeshBasicMaterial( {color: 0x0000ff} );

    cube = new THREE.Mesh( geometry, material );
    scene.add( cube );

    camera.position.z = 5;
}

function animate() {
    requestAnimationFrame(animate);

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;


    renderer.render(scene, camera);
}

function onWIndowResize(){
    camera.aspect = window.innerWidth/ window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight); 
}

// automatically resize window
window.addEventListener('resize', onWIndowResize, false);

init();
animate();

