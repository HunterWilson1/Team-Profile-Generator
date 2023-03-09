const Engineer = require('../lib/Engineer')

test("Can create new Engineer", () => {
    const engineer = new Engineer()
    expect(typeof(engineer)).toBe("object")
});