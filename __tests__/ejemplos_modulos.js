/**
 * @jest-environment jsdom
 */
import {suma} from '../js/funciones.js';

//babeñ para realizar pruebas de otro files con babel podemos dar soporte a navegadores viejos
//usamos ´para instalar babel  npm i --save-dev @babel/preset-env
//se debe de crear un archivo babelrccon las respectiva configuraciones
//el babeñ y jest deben tener la misma version npm i -D jest babel-jest @babel/preset-env
describe('suma de dos numeros',()=>{
    test('Sumar 10 y 20 debe dar 30',()=>{
        expect(suma(10,20)).toBe(30);
    })
});