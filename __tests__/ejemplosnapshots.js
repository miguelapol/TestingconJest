
const cliente={
    nombre:'Juan Pablo 2',
    balance:500,
    tipo:'Premium'
}
//los snapshots se hace al objeto completo se almacenan en un string y comparan si son el mismo
//dato mismo cliente o diferente
//usando el npm -- -u actualiza el snapshot
describe('Testing al cliente',()=>{
    test('Es Juan Pablo',()=>{
        expect(cliente).toMatchSnapshot();

    })
})