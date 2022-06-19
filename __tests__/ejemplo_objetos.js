const cliente={
    nombre:'Juan',
    balance:500
}

describe('Testing al cliente',()=>{
    test('El cliente es premium',()=>{
        //ser mayor a toBeGreaterThan
        expect(cliente.balance).toBeGreaterThan(400);
     
    })
})