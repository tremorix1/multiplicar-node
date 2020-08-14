const argv = require('./config/yargs').argv;
const colors = require('colors/safe');
// importar modulo
const {crearArchivo, listarTabla} = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
  case 'listar':
listarTabla(argv.base, argv.limite)
.then(resp=>console.log(resp))
.catch(e => console.log(e));
break;
case 'crear':
crearArchivo(argv.base, argv.limite)
.then(archivo=>console.log(`Archivo creado:`, colors.green(archivo)))
.catch(e => console.log(e));
    break;
  default:
console.log('Comando no reconocido');
}

//console.log(argv.base);
//let parametro = argv[2];
//let base =parametro.split('=')[1];
