function square(n) {
    return n * n;
}

function cube(n) {
    return n * n * n;
}

function quad(n) {
    return n * n * n * n;
}

function doSomething(a, b, fn) {
    const val1 = fn(a);
    const val2 = fn(b);
    return val1 + val2;
}

//functional arguments
let ans = doSomething(2, 2, quad)


console.log(ans);