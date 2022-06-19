const cliente={
    nombre:'Juan',
    balance:500
}

describe('Testing al cliente',()=>{
    test('El cliente es premium',()=>{
        //ser mayor a toBeGreaterThan
        expect(cliente.balance).toBeGreaterThan(400);
     
    });
    test('Es juan?',()=>{
        expect(cliente.nombre).toBe('Juan');

    })
    test('No es otro cliente',()=>{
    
        expect(cliente.nombre).not.toBe('Pedro');

    })
})