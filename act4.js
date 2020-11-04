const misNotas = [
    { titulo: "VSCode", cuerpo: "usar snipets" },
    { titulo: "Cascada", cuerpo: "ir a la cascada del rio" },
    { titulo: "Escalada", cuerpo: "Ir a escalar" },
    { titulo: "medico", cuerpo: "Tienes visita al medico a las 4" },
    { titulo: "Casa", cuerpo: "ordenar cosas" },

]
//crea una nueva nota (return numero de elementos length)
console.log('----------1-----------');
function crearNota(txta, txtb) {
    misNotas.push({ titulo: txta, cuerpo: txtb })
}
//borrar la nota que le pases(la tarea borrada)
function borrarNota(nota, tit) {
    let i = nota.findIndex(function(not){ return not.titulo === tit});
    return nota.splice(i, 1);
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
   
    return misNotas.findIndex(function(nota){
        return nota.titulo.toLowerCase() === txt.toLowerCase();
    });
}





console.log('antes',misNotas.length);
crearNota('diario','quemar el diario')
console.log('despues',misNotas.length);

console.log('----------2-----------');
console.log(borrarNota(misNotas, "Escalada"));
console.log('------------------');
console.log(misNotas);

console.log('----------3-----------');
console.log(ordenarNotas(misNotas,'titulo'));
console.log('------------------------');
console.log(ordenarNotas(misNotas,'cuerpo'));

console.log('-------4--------');
console.log(misNotas[buscarTextoEnNotas(misNotas,'cascada')]);