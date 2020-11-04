const misNotas = [
    { titulo: "VSCode", cuerpo: "usar snipets" },
    { titulo: "Cascada", cuerpo: "ir a la cascada del rio" },
    { titulo: "Escalada", cuerpo: "Ir a escalar" },
    { titulo: "medico", cuerpo: "Tienes visita al medico a las 4" },
    { titulo: "Casa", cuerpo: "ordenar cosas" },

]
//crea una nueva nota (return numero de elementos length)

function crearNota(txta, txtb) {
   return misNotas.push({ titulo: txta, cuerpo: txtb })
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
function buscarTextoEnNotas(nota,txt,a) {
   
    if(a){
    return misNotas.findIndex(function(nota){
        return nota.titulo.toLowerCase() === txt.toLowerCase();
    });}else if(!a){
        return misNotas.findIndex(function(nota){
            return nota.cuerpo.toLowerCase().includes(txt.toLowerCase());
        });
    }
}
function buscarTextoEnNotas2(nota,txt) {
   
    return misNotas.findIndex(function(nota){
        return nota.cuerpo.toLowerCase().includes(txt.toLowerCase());
    });
}




console.log('----------1-----------');
console.log('Length antes de crear una nota',misNotas.length);
crearNota('diario','quemar el diario')
console.log('despues',misNotas.length);

console.log('----------2-----------');
console.log(borrarNota(misNotas, "Escalada"));
console.log('------------------');
console.log(misNotas);

console.log('----------3-----------');
console.log('Orden Con Titulos');
console.log(ordenarNotas(misNotas,'titulo'));
console.log('-----Orden con Cuerpo------');
console.log(ordenarNotas(misNotas,'cuerpo'));

console.log('-------4--------');
console.log('Buscando vscode en el titulo');
console.log(misNotas[buscarTextoEnNotas(misNotas,'vscode',true)]);
console.log('--Buscando medico en el cuepo--');
console.log(misNotas[buscarTextoEnNotas(misNotas,'medico',false)]);
