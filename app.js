//                   Primer parte
/* Práctica Integradora
Objetivo
Vamos a armar una app de tareas que nos permita guardar notas cortas utilizando las
herramientas que hasta el momento hemos aprendido.
Micro desafíos 1
El tech leader de nuestro equipo de desarrollo propone programar una app de tareas. Para esto
nos encarga:
1. Crear un archivo tareas.json que contenga un array de objetos literales. */
/* 2. Cada objeto literal deberá tener las propiedades: titulo y estado. En donde el
título podrá ser cualquier cadena de texto y el estado podrá ser: terminada, en
progreso o pendiente. */
/* 3. Generar un archivo app.js que "consuma" el archivo de tareas.json. Para esto,
seguramente nos convenga usar el módulo nativo FS. */
/* 4. Mostrar el listado de tareas existente por terminal. Para esto, seguramente
tengamos que guardar el contenido del archivo tareas.json en una variable y
convertir la misma a un dato tipo array. ¿Se nos ocurre cómo? */
let fs = require('fs')

let archivoJSON = fs.readFileSync('./tareas.json','utf-8');

let archivoJAVASCRIPT = JSON.parse(archivoJSON)
console.log(archivoJAVASCRIPT);

//                    Segunda parte

/* Micro desafíos 2 */
/* Ahora se pone algo "picante" el tema. Pues nuestro tech leader nos solicita nuevas
funcionalidades, estas son:
1. Permitir que al momento de ejecutar el archivo app.js desde la terminal con
Node.js se pueda pasar un argumento después del nombre del archivo de la
siguiente manera:
a. node app.js listar
i. Si se escribe la palabra listar después del nombre del archivo, se
deberán listar todas las notas existentes.
b. node app.js
i. Si NO se escribe ninguna palabra después del nombre del archivo,
en la terminal deberá aparecer el texto: Atención - Tienes que
pasar una acción.
c. node app.js cualquier texto
i. Si se llegase a pasar cualquier otro texto que no sea la palabra
listar, en la terminal deberá aparecer el texto: No entiendo qué
quieres hacer.
Nuestro tech leader es una buena persona, y para que logremos lo anterior nos
dejó la siguiente pista: piensen en el switch. */
/* 2. Después de haber logrado lo anterior, nuestro tech leader nos pide modularizar la
aplicación, llevando toda la funcionalidad de lectura de tareas a un archivo
llamado funcionesDeTareas.js, el cual deberá ser consumido desde el archivo
app.js y se espera que todo siga funcionando sin problemas. */

let process = require('process')

let accion = process.argv[2]
function listar(){
    if(accion !== undefined){
        
   switch (accion.toLowerCase()){
       case "listar":
           if(archivoJAVASCRIPT.length===0){
               return console.log("No hay ninguna tarea en la lista");
           }else{          
            archivoJAVASCRIPT.forEach((param)=>console.log(param.titulo + " " + param.estado))          
           }
           break;                     
    default:
           return console.log("No entiendo qué quieres hacer")
   }
}else{
    return console.log("Atención - Tienes que pasar una acción")
}
}

module.exports = listar