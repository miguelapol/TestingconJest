import Citas from '../js/classes/Citas';
//aqui comprobamos la funcionalidad de la clase
describe('Probar la clase de citas',()=>{
    const citas= new Citas();
    const id= Date.now();
    test('Agregar nuevas funciones',()=>{
        const citaObj={
            id,
            mascota:'Hook',
            propietario: 'Miguel',
            telefono: '55986628',
            fecha: '10-12-2021',
            hora: '10:30',
            sintomas: 'Solo duerme'
        };

        citas.agregarCita(citaObj);
        //pruebas verificamos que la clase que pasamos se esta ´pasando correctamente
        expect(citas).toMatchSnapshot();
    });
    test('Actualizar cita',()=>{
        const citaActualizada={
            id,
            mascota:'Negrito',
            propietario: 'Miguel',
            telefono: '55986628',
            fecha: '10-12-2021',
            hora: '10:30',
            sintomas: 'Solo duerme'
        };
        citas.editarCita(citaActualizada);
        //prueba
        expect(citas).toMatchSnapshot();
    })
    test('Eliminar cita',()=>{
        citas.eliminarCita(id);

        //prueba aqui debe estar el arreglo vacio
        expect(citas).toMatchSnapshot();
    });
 
})