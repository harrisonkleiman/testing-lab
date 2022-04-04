const { returnTwo, greeting, add, multiply, divide, subtract } = require("testing-lab/functions")


// Create a test for returnTwo:
// Should return 2
test("returnTwo should return 2", () => {
  expect(returnTwo()).toBe(2)
})

// Create a test for greeting:
// This test should expect greeting('James') to equal "Hello, James.".
// This test should expect greeting('Jill') to equal "Hello, Jill.".
describe("greeting", () => {
  test("greeting(name) should equal Hello, James.", () => {
    let name = "James"
    expect(greeting(name)).toEqual("Hello, James.")
  })
  test("greeting(name) should equal Hello, Jill.", () => {
    let name = "Jill"
    expect(greeting(name)).toEqual("Hello, Jill.")
  })
})


// Group the add, multiply, divide, and subtract test cases using describe.
// You will want to go look up the jest documentation to learn the correct syntax for a describe block.
// Call this group Math functions.
describe("Math functions", () => {
  
  test("add(1, 2) should equal 3", () => {
    expect(add(1, 2)).toEqual(3)
  })

  test("add(5, 9) should equal 14", () => { 
    expect(add(5, 9)).toEqual(14)
  })

  test("multiply(4, 2) should equal 8", () => {
    expect(multiply(4, 2)).toEqual(8)
  })

  test("multiply(5, 9) should equal 45", () => {
    expect(multiply(5, 9)).toEqual(45)
  })

  test("divide(10, 2) should equal 5", () => {
    expect(divide(10, 2)).toEqual(5)
  })

  test("divide(10, 4) should equal 2.5", () => {
    expect(divide(10, 4)).toEqual(2.5)
  })

  test("subtract(10, 2) should equal 8", () => {
    expect(subtract(10, 2)).toEqual(8)
  })

  test("subtract(10, 4) should equal 6", () => {
    expect(subtract(10, 4)).toEqual(6)
  })
})



