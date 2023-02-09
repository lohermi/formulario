//COMPROBACIÓN NIF / NIE

function comprobarNIF_NIE(y) {
  var nie = false;
  //El nif tiene que estar en mayúsculas
  //Devuelve true si está OK o false si KO.
  //Comprobar que el nif o nie tiene 9 caracteres
  if (y.length != 9) return 0;
  //Saber si es un NIF o un NIE
  if (y[0] == "X" || y[0] == "Y" || y[0] == "Z") nie = true;
  if (nie) {
    return comprobarNie(y);
  } else {
    return comprobarNif(y);
  }
}
function comprobarNif(nif) {
  var letras = "TRWAGMYFPDXBNJZSQVHLCKE";
  var numNif = parseInt(nif);
  var letraNif = nif[8];
  if (letraNif == letras[numNif % 23]) {
    console.log("OK");
    return true;
  } else {
    console.log("KO");
    return false;
  }
}
function comprobarNie(nie) {
  //Ejemplo NIE X1234567A
  //Conseguir la primera letra
  var primeraLetra = nie[0];
  if (primeraLetra == "X") nie = nie.replace("X", "0");
  if (primeraLetra == "Y") nie = nie.replace("Y", "1");
  if (primeraLetra == "Z") nie = nie.replace("Z", "2");
  return comprobarNif(nie);
}

//FIN DE COMPROBACIÓN DE NIF / NIE

//VALIDACIÓN DE LA LONGITUD DE UN TEXTO

function testTexto(texto, min, max = 1000) {
  //Máximo y mínimo incluido
  //Devuelve un 1 si es OK, un 0 si es KO

  /* if(texto.length >= min && texto.length <= max) return 1
    else return 0 */

  if (texto.length < min || texto.length > max) return false;
  else return true;
}

//FIN DE VALIDACIÓN DE UN TEXTO

//VALIDACIÓN SI DOS CONTRASEÑAS O TEXTO SON IGUALES

function testIgualdad(pass1, pass2) {
  //Devuelve un 1 si son iguales y un 0 si son distintas
  if (pass1 === pass2) return true;
  else return false;
}

//VALIDAMOS UN CÓDIGO POSTAL

function testCP(cp) {
  if (cp.length == 5 && cp > 1000 && cp < 52081) return true;
  else return false;
}

//VALIDAR PASSWORD

function validarPass(password) {
  //(?=.*[a-zñ])  -> Al menos una minúscula.
  //(?=.*[A-ZÑ])  -> Al menos una mayúscula.
  //(?=.*[0-9])   -> Al menos un dígito.
  //[a-zA-Z0-9ñÑ] -> Los caracteres permitidos
  //{6,25}        -> Cantidad mínima y máxima (no incluído) de caracteres

  var patron = /^(?=.*[a-zñ])(?=.*[A-ZÑ])(?=.*[0-9])[a-zA-Z0-9ñÑ]{6,}$/;
  return patron.test(password);
}

//VALIDAR ALFANUMERICO

function valideCarAlfanum(entrada) {
  var patron = /^[A-Za-z0-9]{1,}$/;
  return patron.test(entrada);
}

//SIN ESPACIOS EN BLANCO

function validarSinEspaciosBlanco(entrada) {
  if (entrada.search(" ") == -1) return true;
  else return false;
}

//VALIDAR NOMBRES Y APELLIDOS

function validarNombre(nombre) {
  var patron = /^[A-Za-zñÑáéíóúüÁÉÍÓÚÜ\s-]{3,50}$/;
  return patron.test(nombre);
}

//VALIDAR DOMICILIO
function validaDomicilio(domicilio) {
  var patron = /^[0-9\,\/ªºA-Za-zñÑáéíóúüÁÉÍÓÚÜ\s-]{3,90}$/;
  return patron.test(domicilio);
}

//VALIDAR TELEFONO
function validarTelefono(telefono) {
  var patron = /^[0-9\+\s]{9,20}$/;
  return patron.test(telefono);
}

//VALIDAR EMAIL

function validarEmail(email) {
  var patron = /^([\da-z_A-Z.-]+)@([\da-z.-]+)\.([a-z]{2,})$/;
  return patron.test(email);
}
