import React from 'react';
import * as THREE from "three";

import { GameStyled } from './Game.style'

class Game extends React.Component{
    state = {
        cube: null
    }
    componentDidMount() {
        var scene = new THREE.Scene();
        var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
        var renderer = new THREE.WebGLRenderer();
        renderer.setSize( window.innerWidth, window.innerHeight );
        this.mount.appendChild( renderer.domElement );
        var geometry = new THREE.BoxGeometry( 1, 1, 1 );
        var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
        var cube = new THREE.Mesh( geometry, material );
        scene.add( cube );

        var lineaMaterial = new THREE.LineBasicMaterial( { color:'#6100FF' } );
        var points = [];
        points.push( new THREE.Vector3( - 10, 0, 0 ) );
        points.push( new THREE.Vector3( 0, 10, 0 ) );
        points.push( new THREE.Vector3( 10, 0, 0 ) );
        var lineaGeometria = new THREE.BufferGeometry().setFromPoints( points );
        var linea = new THREE.Line(lineaGeometria, lineaMaterial);
        scene.add(linea);

        // var loader = new THREE.ColladaLoader();
        // loader.load( '../../celular.dae', function ( collada ) {

        //     var animations = collada.animations;
        //     var avatar = collada.scene;

        //     var mixer = new THREE.AnimationMixer( avatar );
        //     var action = mixer.clipAction( animations[ 0 ] ).play();

        //     scene.add( avatar );

        // } );

        camera.position.z = 15;
        var animate = function () {
          requestAnimationFrame( animate );
          cube.rotation.x += 0.00;
          cube.rotation.y += 0.00;
          renderer.render( scene, camera );
        };
        animate();
        console.log('Hola Mundo')
        this.setState({
            cube: cube
        })
    }
    handleClickAbajo = e => {
        var cube = this.state.cube
        cube.rotation.x += 0.3
    }
    handleClickDerecha = e => {
        var cube = this.state.cube
        cube.rotation.y += 0.3
    }
    render(){
        return(
            <GameStyled>
                <button onClick={this.handleClickAbajo}>Abajo</button>
                <button onClick={this.handleClickDerecha}>Derecha</button>
                <div className="ventana" ref={ref => (this.mount = ref)} />
            </GameStyled>
        )
    }
}

export default Game;
