
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client'


import * as THREE from 'three';

import TWEEN from 'three/addons/libs/tween.module.js';
import { TrackballControls } from 'three/addons/controls/TrackballControls.js';
import { CSS3DRenderer, CSS3DObject } from 'three/addons/renderers/CSS3DRenderer.js';
import '@/style/reception/home.scss'
import { FloatButton, Image } from 'antd';

const Home = () => {

    let camera, scene, renderer;
    let controls;

    const objects = [];
    const targets = { table: [], sphere: [], helix: [], grid: [] };

    setTimeout(() => {
        init();
        animate();

    }, 150)
    const fileSrc = (filename) =>  {    //引入文件
        return new URL(`/src/assets/photo/${filename}`, import.meta.url).href
    }
    let ImgInfo = [         //src：图片地址   x：所在列  y：所在行
        { src:'SK0000.jpg', x: 0, y: 1 },
        { src:'SK0001.jpg', x: 1, y: 1 },
        { src:'SK0002.jpg', x: 2, y: 1 },
        { src:'SK0003.jpg', x: 3, y: 1 },
        { src:'SK0004.jpg', x: 4, y: 1 },
        { src:'SK0005.jpg', x: 5, y: 1 },
        { src:'SK0006.jpg', x: 6, y: 1 },
        { src:'SK0007.jpg', x: 7, y: 1 },
        { src:'SK0008.jpg', x: 8, y: 1 },
        { src:'SK0009.jpg', x: 9, y: 1 },
        { src:'SK0010.jpg', x: 10, y: 1 },
        { src:'SK0011.jpg', x: 11, y: 1 },
        { src:'SK0012.jpg', x: 12, y: 1 },
        { src:'SK0013.jpg', x: 13, y: 1 },
        { src:'SK0014.jpg', x: 14, y: 1 },
        { src:'SK0015.jpg', x: 15, y: 1 },
        { src:'SK0016.jpg', x: 16, y: 1 },
        { src:'SK0017.jpg', x: 17, y: 1 },
        { src:'SK0018.jpg', x: 0, y: 2 },
        { src:'SK0019.jpg', x: 1, y: 2 },
        { src:'SK0020.jpg', x: 2, y: 2 },
        { src:'SK0021.jpg', x: 3, y: 2 },
        { src:'SK0022.jpg', x: 4, y: 2 },
        { src:'SK0023.jpg', x: 5, y: 2 },
        { src:'SK0024.jpg', x: 6, y: 2 },
        { src:'SK0025.jpg', x: 7, y: 2 },
        { src:'SK0026.jpg', x: 8, y: 2 },
        { src:'SK0027.jpg', x: 9, y: 2 },
        { src:'SK0028.jpg', x: 10, y: 2 },
        { src:'SK0029.jpg', x: 11, y: 2 },
        { src:'SK0030.jpg', x: 12, y: 2 },
        { src:'SK0031.jpg', x: 13, y: 2 },
        { src:'SK0032.jpg', x: 14, y: 2 },
        { src:'SK0033.jpg', x: 15, y: 2 },
        { src:'SK0034.jpg', x: 16, y: 2 },
        { src:'SK0035.jpg', x: 17, y: 2 },
        { src:'SK0036.jpg', x: 0, y: 3 },
        { src:'SK0037.jpg', x: 1, y: 3 },
        { src:'SK0038.jpg', x: 2, y: 3 },
        { src:'SK0039.jpg', x: 3, y: 3 },
        { src:'SK0040.jpg', x: 4, y: 3 },
        { src:'SK0041.jpg', x: 5, y: 3 },
        { src:'SK0042.jpg', x: 6, y: 3 },
        { src:'SK0043.jpg', x: 7, y: 3 },
        { src:'SK0044.jpg', x: 8, y: 3 },
        { src:'SK0045.jpg', x: 9, y: 3 },
        { src:'SK0046.jpg', x: 10, y: 3 },
        { src:'SK0047.jpg', x: 11, y: 3 },
        { src:'SK0048.jpg', x: 12, y: 3 },
        { src:'SK0049.jpg', x: 13, y: 3 },
        { src:'SK0050.jpg', x: 14, y: 3 },
        { src:'SK0051.jpg', x: 15, y: 3 },
        { src:'SK0052.jpg', x: 16, y: 3 },
        { src:'SK0053.jpg', x: 17, y: 3 },
        { src:'SK0054.jpg', x: 0, y: 4 },
        { src:'SK0055.jpg', x: 1, y: 4 },
        { src:'SK0056.jpg', x: 2, y: 4 },
        { src:'SK0057.jpg', x: 3, y: 4 },
        { src:'SK0058.jpg', x: 4, y: 4 },
        { src:'SK0059.jpg', x: 5, y: 4 },
        { src:'SK0060.jpg', x: 6, y: 4 },
        { src:'SK0061.jpg', x: 7, y: 4 },
        { src:'SK0062.jpg', x: 8, y: 4 },
        { src:'SK0063.jpg', x: 9, y: 4 },
        { src:'SK0064.jpg', x: 10, y: 4 },
        { src:'SK0065.jpg', x: 11, y: 4 },
        { src:'SK0066.jpg', x: 12, y: 4 },
        { src:'SK0067.jpg', x: 13, y: 4 },
        { src:'SK0069.jpg', x: 14, y: 4 },
        { src:'SK0070.jpg', x: 15, y: 4 },
        { src:'SK0071.jpg', x: 16, y: 4 },
        { src:'SK0072.jpg', x: 2, y: 5 },
        { src:'SK0073.jpg', x: 0, y: 5 },
        { src:'SK0074.jpg', x: 1, y: 5 },
        { src:'SK0075.jpg', x: 2, y: 5 },
        { src:'SK0076.jpg', x: 3, y: 5 },
        { src:'SK0077.jpg', x: 4, y: 5 },
        { src:'SK0078.jpg', x: 5, y: 5 },
        { src:'SK0079.jpg', x: 6, y: 5 },
        { src:'SK0080.jpg', x: 7, y: 5 },
        { src:'SK0081.jpg', x: 8, y: 5 },
        { src:'SK0082.jpg', x: 9, y: 5 },
        { src:'SK0083.jpg', x: 10, y: 5 },
        { src:'SK0084.jpg', x: 11, y: 5 },
        { src:'SK0085.jpg', x: 12, y: 5 },
        { src:'SK0086.jpg', x: 13, y: 5 },
        { src:'SK0087.jpg', x: 14, y: 5 },
        { src:'SK0088.jpg', x: 15, y: 5 },
        { src:'SK0089.jpg', x: 16, y: 5 },
        { src:'SK0090.jpg', x: 17, y: 6 },
        { src:'SK0091.jpg', x: 0, y: 6 },
        { src:'SK0092.jpg', x: 1, y: 6 },
        { src:'SK0093.jpg', x: 2, y: 6 },
        { src:'SK0094.jpg', x: 3, y: 6 },
        { src:'SK0095.jpg', x: 4, y: 6 },
        { src:'SK0096.jpg', x: 5, y: 6 },
        { src:'SK0097.jpg', x: 6, y: 6 },
        { src:'SK0098.jpg', x: 7, y: 6 },
        { src:'SK0099.jpg', x: 8, y: 6 },
        { src:'SK0100.jpg', x: 9, y: 6 },
        { src:'SK0101.jpg', x: 10, y: 6 },
        { src:'SK0102.jpg', x: 11, y: 6 },
        { src:'SK0103.jpg', x: 12, y: 6 },
        { src:'SK0104.jpg', x: 13, y: 6 },
        { src:'SK0105.jpg', x: 14, y: 6 },
        { src:'SK0106.jpg', x: 15, y: 6 },
        { src:'SK0107.jpg', x: 16, y: 6 },
        { src:'SK0107.jpg', x: 17, y: 6 },
    ]

    function init() {

        camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 1, 10000);
        camera.position.z = 3000;

        scene = new THREE.Scene();

        // table

        for (let i = 0; i < ImgInfo.length; i++) {

            const element = document.createElement('div');
            element.className = 'element';
            element.style.backgroundColor = 'rgba(0,127,127,' + (Math.random() * 0.5 + 0.25) + ')';

            const number = document.createElement('div');
            number.className = 'number';
            number.textContent = (i) + 1;
            element.appendChild(number);


            const img = document.createElement('img');
            img.className = 'img';
            img.src =fileSrc( ImgInfo[i].src);
            element.appendChild(img);



            const objectCSS = new CSS3DObject(element);
            objectCSS.position.x = Math.random() * 4000 - 2000;
            objectCSS.position.y = Math.random() * 4000 - 2000;
            objectCSS.position.z = Math.random() * 4000 - 2000;
            scene.add(objectCSS);

            objects.push(objectCSS);

            //

            const object = new THREE.Object3D();
            object.position.x = (ImgInfo[i].x * 140) - 1330;
            object.position.y = - (ImgInfo[i].y * 180) + 990;

            targets.table.push(object);

        }

        // sphere

        const vector = new THREE.Vector3();

        for (let i = 0, l = objects.length; i < l; i++) {

            const phi = Math.acos(- 1 + (2 * i) / l);
            const theta = Math.sqrt(l * Math.PI) * phi;

            const object = new THREE.Object3D();

            object.position.setFromSphericalCoords(800, phi, theta);

            vector.copy(object.position).multiplyScalar(2);

            object.lookAt(vector);

            targets.sphere.push(object);

        }

        // helix

        for (let i = 0, l = objects.length; i < l; i++) {

            const theta = i * 0.175 + Math.PI;
            const y = - (i * 8) + 450;

            const object = new THREE.Object3D();

            object.position.setFromCylindricalCoords(900, theta, y);

            vector.x = object.position.x * 2;
            vector.y = object.position.y;
            vector.z = object.position.z * 2;

            object.lookAt(vector);

            targets.helix.push(object);

        }

        // grid

        for (let i = 0; i < objects.length; i++) {

            const object = new THREE.Object3D();

            object.position.x = ((i % 5) * 400) - 800;
            object.position.y = (- (Math.floor(i / 5) % 5) * 400) + 800;
            object.position.z = (Math.floor(i / 25)) * 1000 - 2000;

            targets.grid.push(object);

        }

        //

        renderer = new CSS3DRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.getElementById('container').appendChild(renderer.domElement);

        //

        controls = new TrackballControls(camera, renderer.domElement);
        controls.minDistance = 500;
        controls.maxDistance = 6000;
        controls.addEventListener('change', render);

        const buttonTable = document.getElementById('table');
        buttonTable.addEventListener('click', function () {

            transform(targets.table, 2000);

        });

        const buttonSphere = document.getElementById('sphere');
        buttonSphere.addEventListener('click', function () {

            transform(targets.sphere, 2000);

        });

        const buttonHelix = document.getElementById('helix');
        buttonHelix.addEventListener('click', function () {

            transform(targets.helix, 2000);

        });

        const buttonGrid = document.getElementById('grid');
        buttonGrid.addEventListener('click', function () {

            transform(targets.grid, 2000);

        });

        transform(targets.table, 2000);

        //

        window.addEventListener('resize', onWindowResize);

    }

    function transform(targets, duration) {

        TWEEN.removeAll();

        for (let i = 0; i < objects.length; i++) {

            const object = objects[i];
            const target = targets[i];

            new TWEEN.Tween(object.position)
                .to({ x: target.position.x, y: target.position.y, z: target.position.z }, Math.random() * duration + duration)
                .easing(TWEEN.Easing.Exponential.InOut)
                .start();

            new TWEEN.Tween(object.rotation)
                .to({ x: target.rotation.x, y: target.rotation.y, z: target.rotation.z }, Math.random() * duration + duration)
                .easing(TWEEN.Easing.Exponential.InOut)
                .start();

        }

        new TWEEN.Tween(this)
            .to({}, duration * 2)
            .onUpdate(render)
            .start();

    }

    function onWindowResize() {

        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();

        renderer.setSize(window.innerWidth, window.innerHeight);

        render();

    }

    function animate() {

        requestAnimationFrame(animate);

        TWEEN.update();

        controls.update();

    }

    function render() {

        renderer.render(scene, camera);

    }
    

    return (
        <section className='home'>
            <div id="container"></div>
            <FloatButton.Group
                shape="square"
                open={false}
            >
                <div id="menu">
                    <button id="table">TABLE</button>
                    <button id="sphere">SPHERE</button>
                    <button id="helix">HELIX</button>
                    <button id="grid">GRID</button>
                </div>
            </FloatButton.Group>
        </section>
    )
}
export default Home;