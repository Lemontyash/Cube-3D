



let body = document.querySelector('body');


let scene = new THREE.Scene(); // создание сцены

//light

let spotLight = new THREE.SpotLight(0xeeeece);

  spotLight.position.set( 1000, 1000, 1000);

  scene.add(spotLight);

//

let spotLight2 = new THREE.SpotLight(0xffffff);

  spotLight2.position.set( -1000, -1000, -1000);

  scene.add(spotLight2);

//

let spotLight3 = new THREE.SpotLight(0xffffff);

   spotLight3.position.set(0,0,-1000);

   scene.add(spotLight3);

//

 let spotLight4 = new THREE.SpotLight(0xffffff);

   spotLight4.position.set(0,0,1000);

   scene.add(spotLight4);

 let spotLight5 = new THREE.SpotLight(0xffffff);

   spotLight5.position.set(1000,1000,0);

   scene.add(spotLight5);

//camra and render

let camera = new THREE.PerspectiveCamera( 50, window.innerWidth / window.innerHeight, 0.1, 1000 ); // создание камеры , её обзора дальности покрытия

let renderer = new THREE.WebGLRenderer();//создание рендера

   renderer.setSize( window.innerWidth, window.innerHeight );

   document.body.appendChild( renderer.domElement );// привязка рендера к хтмл

//cube


//sphere



let geometry_ov = new THREE.SphereGeometry(0.8, 32, 32);

let material_ov = new THREE.MeshPhongMaterial( { color: "#C92639" });

let sphere = new THREE.Mesh( geometry_ov, material_ov );

   sphere.position.x = -10;

   scene.add( sphere );




//sphere1
let geometry_ov1 = new THREE.SphereGeometry(0.8, 32, 32);

let material_ov1 = new THREE.MeshPhongMaterial( { color: "#5D68C9" });

let sphere1 = new THREE.Mesh( geometry_ov1, material_ov1 );

   sphere1.position.x = 0;

   scene.add( sphere1 );


//sphere2

   let geometry_ov2 = new THREE.SphereGeometry(0.8, 32, 32);

   let material_ov2 = new THREE.MeshPhongMaterial( { color: "#29C92C" });

   let sphere2 = new THREE.Mesh( geometry_ov2, material_ov2 );

      sphere2.position.x = -10;
      sphere2.position.z = 10;

      scene.add( sphere2 );

   //sphere3
   let geometry_ov3 = new THREE.SphereGeometry(0.8, 32, 32);

   let material_ov3 = new THREE.MeshPhongMaterial( { color: "#FFF200" });

   let sphere3 = new THREE.Mesh( geometry_ov3, material_ov3 );

      sphere3.position.x = 0;
      sphere3.position.z = 10;

      scene.add( sphere3 );



  //sphere4

      let geometry_ov4 = new THREE.SphereGeometry(0.8, 32, 32);

      let material_ov4 = new THREE.MeshPhongMaterial( { color: "#A3FFFF" });

      let sphere4 = new THREE.Mesh( geometry_ov4, material_ov4 );

         sphere4.position.z = 0;
         sphere4.position.x = -10;
         sphere4.position.y = 10;

         scene.add( sphere4 );

//sphere5

      let geometry_ov5 = new THREE.SphereGeometry(0.8, 32, 32);

      let material_ov5 = new THREE.MeshPhongMaterial( { color: "#FF46F3" });

      let sphere5 = new THREE.Mesh( geometry_ov5, material_ov5 );

         sphere5.position.z = 0;
         sphere5.position.x = 0;
         sphere5.position.y = 10;
         scene.add( sphere5 );


//sphere6

         let geometry_ov6 = new THREE.SphereGeometry(0.8, 32, 32);

         let material_ov6 = new THREE.MeshPhongMaterial( { color: "#FF5990" });

         let sphere6 = new THREE.Mesh( geometry_ov6, material_ov6 );

            sphere6.position.x = -10;
            sphere6.position.z = 10;
            sphere6.position.y = 10;
            scene.add( sphere6 );

         //sphere3
         let geometry_ov7 = new THREE.SphereGeometry(0.8, 32, 32);

         let material_ov7 = new THREE.MeshPhongMaterial( { color: "#FFB134" });

         let sphere7 = new THREE.Mesh( geometry_ov7, material_ov7 );

            sphere7.position.x = 0;
            sphere7.position.z = 10;
            sphere7.position.y = 10;
            scene.add( sphere7 );


// i;inder
let geometry_cilinder = new THREE.CylinderGeometry( 0.1, 0.1, 10, 32 ); // Геометрия (радиус вверху, радиус внизу, длина, число сегментовvar material = new THREE.MeshBasicMaterial( {color: 0xffff00} ); // Материал

let material_cilinder = new THREE.MeshPhongMaterial( { color: "#FFFFFF" });

let cylinder = new THREE.Mesh( geometry_cilinder, material_cilinder ); // Массив

      cylinder.position.x = 0;
      cylinder.position.z = 10;
      cylinder.position.y = 5;



scene.add( cylinder ); // Добавляем в сцену


// i;inder2
let geometry_cilinder2 = new THREE.CylinderGeometry( 0.1, 0.1, 10, 32 ); // Геометрия (радиус вверху, радиус внизу, длина, число сегментовvar material = new THREE.MeshBasicMaterial( {color: 0xffff00} ); // Материал

let material_cilinder2 = new THREE.MeshPhongMaterial( { color: "#FFFFFF" });

let cylinder2 = new THREE.Mesh( geometry_cilinder2, material_cilinder2 ); // Массив

     cylinder2.position.x = -10;
     cylinder2.position.z = 10;
     cylinder2.position.y = 5;

scene.add( cylinder2 ); // Добавляем в сцену




// i;inder3
let geometry_cilinder3 = new THREE.CylinderGeometry( 0.1, 0.1, 10, 32 ); // Геометрия (радиус вверху, радиус внизу, длина, число сегментовvar material = new THREE.MeshBasicMaterial( {color: 0xffff00} ); // Материал

let material_cilinder3 = new THREE.MeshPhongMaterial( { color: "#FFFFFF" });

let cylinder3 = new THREE.Mesh( geometry_cilinder3, material_cilinder3 ); // Массив

      cylinder3.position.x = 0;
      cylinder3.position.y = 5;
      cylinder3.position.z = 0;
scene.add( cylinder3 ); // Добавляем в сцену


// i;inder4
let geometry_cilinder4 = new THREE.CylinderGeometry( 0.1, 0.1, 10, 32 ); // Геометрия (радиус вверху, радиус внизу, длина, число сегментовvar material = new THREE.MeshBasicMaterial( {color: 0xffff00} ); // Материал

let material_cilinder4 = new THREE.MeshPhongMaterial( { color: "#FFFFFF" });

let cylinder4 = new THREE.Mesh( geometry_cilinder4, material_cilinder4 ); // Массив


     cylinder4.position.z = 0;
     cylinder4.position.x = -10;
     cylinder4.position.y = 5;

scene.add( cylinder4 ); // Добавляем в сцену


// i;inder5
let geometry_cilinder5 = new THREE.CylinderGeometry( 0.1, 0.1, 10, 32 ); // Геометрия (радиус вверху, радиус внизу, длина, число сегментовvar material = new THREE.MeshBasicMaterial( {color: 0xffff00} ); // Материал

let material_cilinder5 = new THREE.MeshPhongMaterial( { color: "#FFFFFF" });

let cylinder5 = new THREE.Mesh( geometry_cilinder5, material_cilinder5 ); // Массив



     cylinder5.rotation.x =  Math.PI / 2;;

     cylinder5.position.x = -10;
     cylinder5.position.y = 10;
     cylinder5.position.z = 5;

scene.add( cylinder5 ); // Добавляем в сцену

let geometry_cilinder6 = new THREE.CylinderGeometry( 0.1, 0.1, 10, 32 ); // Геометрия (радиус вверху, радиус внизу, длина, число сегментовvar material = new THREE.MeshBasicMaterial( {color: 0xffff00} ); // Материал

let material_cilinder6 = new THREE.MeshPhongMaterial( { color: "#FFFFFF" });

let cylinder6 = new THREE.Mesh( geometry_cilinder6, material_cilinder6 ); // Массив



     cylinder6.rotation.x =  Math.PI / 2;;

     cylinder6.position.x = 0;
     cylinder6.position.y = 10;
     cylinder6.position.z = 5;

scene.add( cylinder6 ); // Добавляем в сцену

let geometry_cilinder7 = new THREE.CylinderGeometry( 0.1, 0.1, 10, 32 ); // Геометрия (радиус вверху, радиус внизу, длина, число сегментовvar material = new THREE.MeshBasicMaterial( {color: 0xffff00} ); // Материал

let material_cilinder7 = new THREE.MeshPhongMaterial( { color: "#FFFFFF" });

let cylinder7 = new THREE.Mesh( geometry_cilinder7, material_cilinder7 ); // Массив



     cylinder7.rotation.x =  Math.PI / 2;;

     cylinder7.position.x = 0;
     cylinder7.position.z = 5;

scene.add( cylinder7 ); // Добавляем в сцену


let geometry_cilinder8 = new THREE.CylinderGeometry( 0.1, 0.1, 10, 32 ); // Геометрия (радиус вверху, радиус внизу, длина, число сегментовvar material = new THREE.MeshBasicMaterial( {color: 0xffff00} ); // Материал

let material_cilinder8 = new THREE.MeshPhongMaterial( { color: "#FFFFFF" });

let cylinder8 = new THREE.Mesh( geometry_cilinder8, material_cilinder8 ); // Массив



     cylinder8.rotation.x =  Math.PI / 2;;

     cylinder8.position.x = -10;
     cylinder8.position.z = 5;

scene.add( cylinder8 ); // Добавляем в сцену


let geometry_cilinder9 = new THREE.CylinderGeometry( 0.1, 0.1, 10, 32 ); // Геометрия (радиус вверху, радиус внизу, длина, число сегментовvar material = new THREE.MeshBasicMaterial( {color: 0xffff00} ); // Материал

let material_cilinder9 = new THREE.MeshPhongMaterial( { color: "#FFFFFF" });

let cylinder9 = new THREE.Mesh( geometry_cilinder9, material_cilinder9 ); // Массив



     cylinder9.rotation.x =  Math.PI / 2;;
     cylinder9.rotation.z =  Math.PI / 2;;

     cylinder9.position.x = -5;
     cylinder9.position.z = 10;



scene.add( cylinder9 ); // Добавляем в сцену



let geometry_cilinder10 = new THREE.CylinderGeometry( 0.1, 0.1, 10, 32 ); // Геометрия (радиус вверху, радиус внизу, длина, число сегментовvar material = new THREE.MeshBasicMaterial( {color: 0xffff00} ); // Материал

let material_cilinder10 = new THREE.MeshPhongMaterial( { color: "#FFFFFF" });

let cylinder10 = new THREE.Mesh( geometry_cilinder10, material_cilinder10 ); // Массив



     cylinder10.rotation.x =  Math.PI / 2;;
     cylinder10.rotation.z =  Math.PI / 2;;

     cylinder10.position.x = -5;
     cylinder10.position.z = 0;



scene.add( cylinder10 ); // Добавляем в сцену


let geometry_cilinder11 = new THREE.CylinderGeometry( 0.1, 0.1, 10, 32 ); // Геометрия (радиус вверху, радиус внизу, длина, число сегментовvar material = new THREE.MeshBasicMaterial( {color: 0xffff00} ); // Материал

let material_cilinder11 = new THREE.MeshPhongMaterial( { color: "#FFFFFF" });

let cylinder11 = new THREE.Mesh( geometry_cilinder11, material_cilinder11 ); // Массив



     cylinder11.rotation.x =  Math.PI / 2;;
     cylinder11.rotation.z =  Math.PI / 2;;

     cylinder11.position.x = -5;
     cylinder11.position.z = 0;
     cylinder11.position.y = 10;


scene.add( cylinder11 ); // Добавляем в сцену


let geometry_cilinder12 = new THREE.CylinderGeometry( 0.1, 0.1, 10, 32 ); // Геометрия (радиус вверху, радиус внизу, длина, число сегментовvar material = new THREE.MeshBasicMaterial( {color: 0xffff00} ); // Материал

let material_cilinder12 = new THREE.MeshPhongMaterial( { color: "#FFFFFF" });

let cylinder12 = new THREE.Mesh( geometry_cilinder12, material_cilinder12 ); // Массив



     cylinder12.rotation.x =  Math.PI / 2;;
     cylinder12.rotation.z =  Math.PI / 2;;

     cylinder12.position.x = -5;
     cylinder12.position.z = 10;
     cylinder12.position.y = 10;


scene.add( cylinder12 ); // Добавляем в сцену


//camera

   camera.position.z = 50;
   camera.position.x = -5;
   camera.position.y = 5;


   document.addEventListener('keydown', function(event) {
     if (event.code == 'KeyW') {

       camera.position.z -= 0.2;

     }



     if (event.code == 'KeyS') {

       camera.position.z += 0.2;

     }



     if (event.code == 'KeyD') {

       camera.position.x += 0.2;

     }

     if (event.code == 'KeyA') {

       camera.position.x -= 0.2;

     }

     if (event.code == 'Space') {

       camera.position.y += 0.2;

     }

     if (event.code == 'ShiftLeft') {

       camera.position.y -= 0.2;

     }

   });




let raycaster = new THREE.Raycaster();
let mouse = new THREE.Vector2();

function click( event ) {


  mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
  mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;



}



window.addEventListener( 'click', click, false );

window.requestAnimationFrame(render);
//script






let arr_obj = [];





//рендеринг


confirm('WASD to move, Space - go up, Shift - go down');







function render() {

    requestAnimationFrame( render );




raycaster.setFromCamera( mouse, camera );

//
      scene.add(sphere);

      arr_obj.push(sphere);


    let intersects = raycaster.intersectObjects( arr_obj );

     for ( let i = 0; i < intersects.length; i++ ) {




       cylinder4.material.color.set('#C92639');
       cylinder8.material.color.set('#C92639');
       cylinder10.material.color.set('#C92639');



}



     arr_obj.pop(sphere);

//

     scene.add(sphere1);

     arr_obj.push(sphere1);




  let intersects1 = raycaster.intersectObjects( arr_obj );

   for ( let i = 0; i < intersects1.length; i++ ) {




     cylinder3.material.color.set('#5D68C9');
     cylinder10.material.color.set('#5D68C9');
     cylinder7.material.color.set('#5D68C9');

   }


     arr_obj.pop(sphere);
     arr_obj.pop(sphere1);

//

     scene.add(sphere2);

     arr_obj.push(sphere2);

  let intersects2 = raycaster.intersectObjects( arr_obj );

   for ( let i = 0; i < intersects2.length; i++ ) {




     cylinder2.material.color.set('#29C92C');
     cylinder8.material.color.set('#29C92C');
     cylinder9.material.color.set('#29C92C');

   }


     arr_obj.pop(sphere);
     arr_obj.pop(sphere1);
     arr_obj.pop(sphere2);

//

     scene.add(sphere3);

     arr_obj.push(sphere3);

  let intersects3 = raycaster.intersectObjects( arr_obj );

   for ( let i = 0; i < intersects3.length; i++ ) {




     cylinder.material.color.set('#FFF200');
     cylinder7.material.color.set('#FFF200');
     cylinder9.material.color.set('#FFF200');

   }



     arr_obj.pop(sphere);
     arr_obj.pop(sphere1);
     arr_obj.pop(sphere2);
     arr_obj.pop(sphere3);

//

     scene.add(sphere4);

     arr_obj.push(sphere4);

  let intersects4 = raycaster.intersectObjects( arr_obj );

   for ( let i = 0; i < intersects4.length; i++ ) {




     cylinder11.material.color.set('#A3FFFF');
     cylinder4.material.color.set('#A3FFFF');
     cylinder5.material.color.set('#A3FFFF');

   }

   arr_obj.pop(sphere);
   arr_obj.pop(sphere1);
   arr_obj.pop(sphere2);
   arr_obj.pop(sphere3);
   arr_obj.pop(sphere4);


//



scene.add(sphere5);

arr_obj.push(sphere5);

let intersects5 = raycaster.intersectObjects( arr_obj );

for ( let i = 0; i < intersects5.length; i++ ) {




     cylinder11.material.color.set('#FF46F3');
     cylinder6.material.color.set('#FF46F3');
     cylinder3.material.color.set('#FF46F3');

}

    arr_obj.pop(sphere);
    arr_obj.pop(sphere1);
    arr_obj.pop(sphere2);
    arr_obj.pop(sphere3);
    arr_obj.pop(sphere4);
    arr_obj.pop(sphere5);


//

    scene.add(sphere6);

    arr_obj.push(sphere6);

    let intersects6 = raycaster.intersectObjects( arr_obj );

    for ( let i = 0; i < intersects6.length; i++ ) {




         cylinder12.material.color.set('#FF5990');
         cylinder2.material.color.set('#FF5990');
         cylinder5.material.color.set('#FF5990');

    }

        arr_obj.pop(sphere);
        arr_obj.pop(sphere1);
        arr_obj.pop(sphere2);
        arr_obj.pop(sphere3);
        arr_obj.pop(sphere4);
        arr_obj.pop(sphere5);
        arr_obj.pop(sphere6);

//

        scene.add(sphere7);

        arr_obj.push(sphere7);

        let intersects7 = raycaster.intersectObjects( arr_obj );

        for ( let i = 0; i < intersects7.length; i++ ) {




             cylinder6.material.color.set('#FFB134');
             cylinder.material.color.set('#FFB134');
             cylinder12.material.color.set('#FFB134');

        }

            arr_obj.pop(sphere);
            arr_obj.pop(sphere1);
            arr_obj.pop(sphere2);
            arr_obj.pop(sphere3);
            arr_obj.pop(sphere4);
            arr_obj.pop(sphere5);
            arr_obj.pop(sphere6);
            arr_obj.pop(sphere7);

renderer.render( scene, camera );

//sphere

  // cylinder5.rotation.x += 0.01;






  sphere.rotation.x -= 0.01;

  sphere.rotation.y -= 0.01;

  renderer.render( scene, camera );
}

render();
