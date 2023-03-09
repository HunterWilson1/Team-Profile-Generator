const Intern = require('../lib/Intern')

test("Can create new Intern", () => {
    const intern = new Intern()
    expect(typeof(intern)).toBe("object")
});