const misNotas = [
    { titulo: "VSCode", cuerpo: "usar snipets" },
    { titulo: "Cascada", cuerpo: "ir a la cascada del rio" },
    { titulo: "Escalada", cuerpo: "Ir a escalar" },
    { titulo: "medico", cuerpo: "Tienes visita al medico a las 4" },
    { titulo: "Casa", cuerpo: "ordenar cosas" },

]
//crea una nueva nota (return numero de elementos length)

function crearNota(notas,titulo, cuerpo) {
    const indice = notas.findIndex(
        function(nota){
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
function borrarNota(nota, tit) {
    let i = nota.findIndex(function(not){ return not.titulo.toLowerCase() === tit.toLowerCase()});
    

    if(i ===-1){
        console.log('Nota No encontrada');
        return {}
    }else{
        console.log('nota borrada');
        return nota.splice(i, 1);
    }
}
function borrarnota2(notas,tutulo){
    //filter no se mueve en la array principal crea otra
    const notasFiltradas = notas.filter(function(nota){
        return nota.tutulo !== titulo
    })
    if(notas.length> notasFiltradas.length){
        console.log('notas borradas');
    }else{
        console.log('nota no existente');
    }

    
}
//en el que le pases
function ordenarNotas(notas, a) {
    if(a === 'titulo'){
    return notas.sort(function (notaA, notaB) {
        if (notaA.titulo.toLowerCase() < notaB.titulo.toLowerCase()) {
            return -1
        } else if (notaA.titulo.toLowerCase() > notaB.titulo.toLowerCase()) {
            return 1
        } else {
            return 0
        }
    })}else{
        return notas.sort(function (notaA, notaB) {
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
function buscarTextoEnNotas(nota,txt) {
   
   
    const esta = misNotas.findIndex(function(nota){
        return nota.titulo.toLowerCase() === txt.toLowerCase();
    });
    const cuerpo = misNotas.findIndex(function(nota){
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
function buscarTextoEnNotas2(notas,txt) {
   
    const notaEncontrada = notas.find(function(nota){
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
console.log(buscarTextoEnNotas(misNotas,'termo'));
