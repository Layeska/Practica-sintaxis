console.log('Hola mundo')

let mensaje: string = 'Hola Mundo'

mensaje = 'Ja ja ja'
mensaje = 'Bye Bye'
console.log(mensaje)
console.log(typeof [])


let extensionDinosaurios: number = 76_000_000
let dinosaurioFavorito: string = 'T_rex'
let extinsion

extinsion = 42

extinsion = 'Hola'


function saludar (config: any) {
    return config
}


let animales: string[] = ['cerdo', 'gato', 'perro']
let nums: number[] = [10, 5, 30]
let checks: boolean[] = []

let numeros: Array<number> = []


//numeros.map(item => item.) //El autocompletado me sugiere el tipo de dato


let tupla: [number, string, number[]] = [1, 'Hola', [10,20,50]]
// tupla.push(12) //Este es un error pero TypeScript no lo reconoce


const peque = 's'
const md = 'm'
const grande = 'l'
const extra = 'xl'

//Pascalcase
enum Talla { Peque = 's', Md = 'm', Grande = 'l', Extra = 'xl' }

const variable1 = Talla.Grande
console.log(variable1)

const enum LoadingState { Idle, Loading, Success, Error }

const estado = LoadingState.Success

//! Objetos
type Direccion =  {
    numero: number,
    calle: string,
    pais: string
}

type Persona = {
    readonly id: number,
    nombre: string,
    talla: Talla,
    direccion: Direccion
}

const objeto: Persona = {
    id: 1,
    nombre: '',
    talla: Talla.Grande,
    direccion: {
        numero: 1,
        calle: 'Nica',
        pais: 'brazil'
    }
}

const arr: Persona[] = []

//objeto.nombre = 'Hola'




