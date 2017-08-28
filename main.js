// Example of array.map()
const items = ['first', 'second', 'third']

function item (string) {
    return string.toUpperCase()
} 

let result = items.map(item)

// Alternate way to compose the above code
let result2 = items.map((string, index) => {
    return string.toUpperCase() + (index)
})

// A higher order function takes a callback function as an argument
const example = function higherOrderFunc(callbackFunc) {
    return callbackFunc
}

console.log('Result', result)
console.log('Result2', result2)
console.log('typeof example', typeof example)


