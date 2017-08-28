const items = ['first', 'second', 'third']

function item (string) {
    return string.toUpperCase()
} 

let result = items.map(item)

console.log('Result', result)
