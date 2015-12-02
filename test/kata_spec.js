describe("List", function () {
  var list = new List();

  it("has a value of 1 for 1", function() {
    expect(list.single(1)).toBe(1);
  });

  it("has a value of 2 for 2", function() {
    expect(list.single(2)).toBe(2);
  });

  it("has a value of 7 for 7", function() {
    expect(list.single(7)).toBe(7);
  });

  it("has a value of Fizz for 3", function() {
    expect(list.single(3)).toBe('Fizz');
  });

  it("has a value of Buzz for 5", function() {
    expect(list.single(5)).toBe('Buzz');
  });

  it("has a value of Fizz for 6", function() {
    expect(list.single(6)).toBe('Fizz');
  });

  it("has a value of Buzz for 5", function() {
    expect(list.single(10)).toBe('Buzz');
  });

  it("has a value of FizzBuzz for 15", function() {
    expect(list.single(15)).toBe('FizzBuzz');
  });

  it("has a value of FizzBuzz for 45", function() {
    expect(list.single(45)).toBe('FizzBuzz');
  });

  it("has a value of Buzz for 55", function() {
    expect(list.single(55)).toBe('Buzz');
  });

  it("has a list value of [1] for 1", function() {
    expect(list.sequence(1)).toEqual([1]);
  });

  it("has a list value of [1, 2] for 2", function() {
    expect(list.sequence(2)).toEqual([1, 2]);
  });

  it("has a list value of [1, 2, Fizz] for 3", function() {
    expect(list.sequence(3)).toEqual([1, 2, 'Fizz']);
  });

  it("has a list value of [1, 2, Fizz, 4] for 4", function() {
    expect(list.sequence(4)).toEqual([1, 2, 'Fizz', 4]);
  });

  it("has a list value of [1, 2, Fizz, 4, Buzz] for 5", function() {
    expect(list.sequence(5)).toEqual([1, 2, 'Fizz', 4, 'Buzz']);
  });

  it("has a list value of [1, 2, Fizz, 4, Buzz, 6, 7] for 7", function() {
    expect(list.sequence(7)).toEqual([1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7]);
  });

  it("has a list value of [1, 2, Fizz, 4, Buzz, 6, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz, 16, 17, Fizz, 19, Buzz, Fizz, 22] for 22", function() {
    expect(list.sequence(22)).toEqual([1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'FizzBuzz', 16, 17, 'Fizz', 19, 'Buzz', 'Fizz', 22]);
  });
});
