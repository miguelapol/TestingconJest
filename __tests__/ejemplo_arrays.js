const carrito=  ['Producto1','Producto2','producto3'];

describe('Testing al carritos de compras',()=>{
    test('Probar que el carrito tenga 3 elementos',()=>{
        expect(carrito).toHaveLength(3);
    });
    test('Probar que el carrito no tenga 0 elementos',()=>{
        expect(carrito).not.toHaveLength(0);
    })
})