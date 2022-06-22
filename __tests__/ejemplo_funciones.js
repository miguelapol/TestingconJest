
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
    test('resta de 5 y 2', () => {
        expect(resta(5, 4)).toBe(1);
    })
    test('que la suma 10 y 10 nose 10', () => {
        expect(suma(10, 10)).not.toBe(10);
    })
    test('que la resta 10 -5 no sea otro valor', () => {
        expect(resta(10, 5)).not.toBe(10);

    })
})