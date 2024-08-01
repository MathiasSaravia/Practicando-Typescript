interface Person {
    name: string;
    surname:string;
    age: number;
}

/* let person1: Person = { // Error por que se necesita obligatoriamente el parametro age que no se ha especificado
    name: "Mathias",
    surname: "Saravia",
} */

let person1: Person = {
    name: "Mathias",
    surname: "Saravia",
    age: 22   // Sin error pq aca aparece ese parametro
}

interface Animal {
    name: string;
    age: number;
}

// "extends" Se refiere a agregar a dicha interface antes menciona un nuevo parametro, ahora "Dog" tiene la
// Herencia de "Animal" pero agregando dicho parametro "breed".
interface Dog extends Animal {
    breed: string;
}

let dog : Dog = {
    name: "Firulais",
    age: 1,
    breed: "Shitzu"
}

// PROPIEDADES OPCIONALES DE UNA INTERFAZ :

// Para dar propiedades opcionales de una interface se agrega el simbolo de interrogacion "?".
interface Car {
    name: string;
    model: string;
    year?: number;
}

// No es necesario agregar edad porque es algo secundario por eso no tira ningun error en esta funcion.
let car1: Car = {
    name: "Ferrari",
    model: "LaFerrari",
}

// En este caso se agrega la propiedad year , de igual manera sigue siendo algo secundario.
let car2: Car = {
    name: "Ferrari",
    model: "LaFerrari",
    year: 2022
}