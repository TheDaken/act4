/* const misNotas = [
    { titulo: "VSCode", cuerpo: "usar snipets" },
    { titulo: "Cascada", cuerpo: "ir a la cascada del rio" },
    { titulo: "Escalada", cuerpo: "Ir a escalar" },
    { titulo: "medico", cuerpo: "Tienes visita al medico a las 4" },
    { titulo: "Casa", cuerpo: "ordenar cosas" },

]
//crea una nueva nota (return numero de elementos length)

const crearNota =(notas,titulo, cuerpo)=> {
    const indice = notas.findIndex(
        (nota)=>{
            return nota.titulo == titulo
        }
    )
    if(indice === -1){
        console.log('nota creada');
        return notas.push({titulo, cuerpo})
    }else{
        console.log('nota ya existente');
        return notas.length
    }
   
}
//borrar la nota que le pases(la tarea borrada)
const borrarNota =(nota, tit)=> {
    let i = nota.findIndex((not)=>{ return not.titulo.toLowerCase() === tit.toLowerCase()});
    

    if(i ===-1){
        console.log('Nota No encontrada');
        return {}
    }else{
        console.log('nota borrada');
        return nota.splice(i, 1);
    }
}
const borrarnota2=(notas,tutulo)=>{
    //filter no se mueve en la array principal crea otra
    const notasFiltradas = notas.filter((nota)=>{
        return nota.tutulo !== titulo
    })
    if(notas.length> notasFiltradas.length){
        console.log('notas borradas');
    }else{
        console.log('nota no existente');
    }

    
}
//en el que le pases
const ordenarNotas=(notas, a)=> {
    if(a === 'titulo'){
    return notas.sort( (notaA, notaB)=> {
        if (notaA.titulo.toLowerCase() < notaB.titulo.toLowerCase()) {
            return -1
        } else if (notaA.titulo.toLowerCase() > notaB.titulo.toLowerCase()) {
            return 1
        } else {
            return 0
        }
    })}else{
        return notas.sort( (notaA, notaB)=> {
            if (notaA.cuerpo.toLowerCase() < notaB.cuerpo.toLowerCase()) {
                return -1
            } else if (notaA.cuerpo.toLowerCase() > notaB.cuerpo.toLowerCase()) {
                return 1
            } else {
                return 0
            }
        })
    }
}
//en todo coje el texto (return tarea)
 const buscarTextoEnNotas = (nota,txt)=> {
   
   
    const esta = misNotas.findIndex((nota)=>{
        return nota.titulo.toLowerCase() === txt.toLowerCase();
    });
    const cuerpo = misNotas.findIndex((nota)=>{
            return nota.cuerpo.toLowerCase().includes(txt.toLowerCase());
        });
    if(esta >= 0){
        return nota[esta]
    }else if(cuerpo >= 0){
        return nota[cuerpo]
    }else{
        return 'No se a Encontrado nada'
    }
}
const buscarTextoEnNotas2 = (notas,txt) =>{
   
    const notaEncontrada = notas.find((nota)=>{
        return nota.titulo.toLowerCase().includes(txt) || nota.cuerpo.toLowerCase().includes(txt)
    })
    if(notaEncontrada){
        console.log('nota encontrada');
        return notaEncontrada
    }else{
        console.log('Nota no encontrada');
        return{}
    }
}




console.log('----------1-----------');
console.log('Length antes de crear una nota',misNotas.length);
//crearNota(misNotas,'diario','quemar el diario')
console.log('despues de crearla',crearNota(misNotas,'diario','quemar el diario'));
crearNota(misNotas,'diario','quemar el diario')

console.log('----------2-----------');
console.log(misNotas);
console.log('-----------------------');
console.log(borrarNota(misNotas, "casa"));
console.log('------------------');
console.log(misNotas);

console.log('----------3-----------');
console.log('Orden Con Titulos');
console.log(ordenarNotas(misNotas,'titulo'));
console.log('-----Orden con Cuerpo------');
console.log(ordenarNotas(misNotas,'cuerpo'));

console.log('-------4--------');
console.log('Buscando vscode en el titulo');
console.log(buscarTextoEnNotas(misNotas,'vscode'));
console.log('--Buscando medico en el cuepo--');
console.log(buscarTextoEnNotas(misNotas,'rio'));
console.log(buscarTextoEnNotas(misNotas,'termo')); */



const media = (cosa, ...items) => {
    let suma = 0;
    items.forEach((item) => {
        suma += item
    })
    return `Tienes ${suma} ${cosa}`
}
console.log(media('manzanas', 1, 3, 4, 6, 7, 9));

const deportistas = ['koeman', 'Messi', 'Xavi', 'Ronaldo']
const imprimirEquipo = (entrenador, jugador1, jugador2, jugaodr3) => {
    console.log(`Entrenador : ${entrenador}; Jugadores ${jugador1} ${jugador2} ${jugaodr3}`);
}
imprimirEquipo(...deportistas)

const [entrenador, ...jugadores] = deportistas
console.log(entrenador);
console.log(jugadores);
const deportistasCopia = [...deportistas,'pedro']
console.log(deportistasCopia);

const programadorX = {
    nombre: 'Perico',
    email:'perico@email.com',

}

const programadorY = {
    nombre2: 'Pedro',
    email2:'pedro@email.com',
    github2:'https//:github.com/progY'
    
}
const {nombre,email,github ="ttp://github.com/progX"} = programadorX

const {nombre2,email2:correo,github2 ="ttp://github.com/progX"} = programadorY

console.log(nombre2);
console.log(correo);
console.log(github2)
