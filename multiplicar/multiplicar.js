
// requireds
const fs = require('fs');
const colors = require('colors');
let listarTabla = (base, limite = 10)=>{
  return new Promise ((resolve, reject)=>{
    if (!Number(base) ){
      reject(`El valor introducido ${ base } no es un número`);
      return;
    }
else if (!Number(limite) || limite<=0) {
reject(`El valor introducido ${ limite } no es valido`);
  return;
}
console.log('====================='.green);
console.log(`tabla de ${ base }`.green);
console.log('====================='.green);
let cadena = '';
    for (let i=1; i<=limite;i++){
     cadena += `${ base } * ${ i } = ${ base * i }\n`;
    }
      resolve(cadena);
  })
}

let crearArchivo = ( base , limite =10 ) => {

  return new Promise ((resolve,reject)=>{
    if (!Number(base) ){
      reject(`El valor introducido ${ base } no es un número`);
      return;
    }
    let data = '';
    for (let i = 1; i <= limite; i++){
      data+= `${ base } * ${ i } = ${ base * i }\n `;
    }

    fs.writeFile(`tablas/tabla-${ base }-hasta-${ limite }.txt`, data, (err) => {
      if (err)
        reject(err)
      else
        resolve(`tabla-${ base }-hasta-${ limite }.txt`)

    });


  });

}

module.exports = {
  crearArchivo,
  listarTabla
}
