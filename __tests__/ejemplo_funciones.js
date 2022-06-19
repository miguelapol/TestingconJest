function suma(a, b) {
    return a + b;
}
function resta(a, b) {
    return a - b;
}

describe('Testing functions de suma y resta', () => {
    test('suma de 2 y 3', () => {
        expect(suma(2, 3)).toBe(5);
    })
})