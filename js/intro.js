
export function hello (name) {
    //Use interpolation strings and return the wanted string
    return `Hello ${name}!`;
}

export function destructObject (obj) {
    //Use destructuring to get the value of last in obj to a variable named surname and return it.
    const {last: surname} = obj;

    return surname;
}

export function destructArray (arr) {
    let obj = {};

    // add a for loop that uses destructuring to get the index and actual value and add it to obj.
    for (const [index, element] of arr.entries()) {
        obj[index] = element;
    }

    return obj;
}

export function defaultParams (value = 42) {  // Add default value to the value param
    return value;
}

export function returnsRestParams (x, ...rest) {
    // Change the params to add the rest operator and then return the rest values.
    return rest;
}

export function squares (arr) {
    // multiply each element with itself and return the new array. Hint use arr.map, and use the arrow function
    return arr.map(n => n * n);
}

