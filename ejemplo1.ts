 function add(a: number, b: number):number {
    return a + b
}

let result = add(1,20)

console.log(result) 

// Se tiene que especificar el tipo de variable a la hora de escribir la función de lo contrario el compilador lo detecta de forma automática.
// Por ejemplo:
/* function add(a: number, b: number):number {
    return a + b
}

let result = add(1,"20") // Error

console.log(result) */