
export function hello (name) {
    return `Hello ${name}!`;
}

export function destructObject (obj) {
    let {last: surname} = obj;
    return surname;
}

export function destructArray (arr) {
    let obj = {};
    for (let [index, element] of arr.entries()) {
        obj[index] = element;
    }
    return obj;
}

export function defaultParams (value = 42) {
    return value;
}

export function returnsRestParams (x, ...rest) {
    return rest;
}

export function squares (arr) {
    return arr.map ( x => x * x );
}
