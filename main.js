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

console.log('Result', result)
console.log('Result2', result2)


