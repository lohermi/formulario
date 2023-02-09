 function validarFormulario() {
      //Pintamos los mensajes
      //----------------------------validar nombre----------------------------
      if (!validarNombre(document.getElementById("ape").value)) {

        document.getElementById("mensajeApe").innerHTML = "Nombre y apellidos incorrecto"
      } else {
        document.getElementById("mensajeApe").innerHTML = "";
      }

      //--------------------------validar domicilio--------------------------
      if (!validaDomicilio(document.getElementById("dom").value)) {

        document.getElementById("mensajeDom").innerHTML = "Domicilio incorrecto"
      } else {
        document.getElementById("mensajeDom").innerHTML = ""

      }
      //------------------------ validar ciudad---------------------------------
      if (!validarNombre(document.getElementById("ciu").value)) {
        document.getElementById("mensajeCiu").innerHTML = "Ciudad incorrecta"
      } else {
        document.getElementById("mensajCiu").innerHTML = "";
      }
      //------------------------ validar provincia----------------------------------
      if (!validarNombre(document.getElementById("pro").value)) {
        document.getElementById("mensajePro").innerHTML = " Provincia  incorrecta"
      } else {
        document.getElementById("mensajePro").innerHTML = "";
      }
      // -----------------------validar Codigo Postal----------------------------

      if (!testCP(document.getElementById("cp").value)) {
        document.getElementById("mensajeCP").innerHTML = "Código Postal no válido";

      } else {
        document.getElementById("mensajeCP").innerHTML = ""
      }
      //------------------------valida rtelefono----------------------------------
      if (!validarTelefono(document.getElementById("pho").value)) {
        document.getElementById("mensajePho").innerHTML = "Telefono no valido";

      } else {
        document.getElementById("mensajePho").innerHTML = ""
      }
      //-----------------------valida Email------------------------------------------
      if (!validarEmail(document.getElementById("mail").value)) {
        document.getElementById("mensajeMail").innerHTML = "Email no valido";

      } else {
        document.getElementById("mensajeMail").innerHTML = ""
      }
      //-----------------------validar fecha actual-----------------------------------
      if (!validarFecha(document.getElementById("nac").value)) {
        document.getElementById("mensajeNac").innerHTML = "fecha no valida";

      } else {
        document.getElementById("mensajeNac").innerHTML = ""
      }


      //------------------------Validar el formulario general------------------------
      let validacion = validarNombre(document.getElementById("ape").value) &&

        validaDomicilio(document.getElementById("mensajeDom").value) &&

        validarNombre(document.getElementById("ciu").value) &&

        validarNombre(document.getElementById("pro").value) &&

        testCP(document.getElementById("cp").value) &&

        validarTelefono(document.getElementById("pho").value) &&

        validarEmail(document.getElementById("mail").value) &&

        validarFecha(document.getElementById("nac").value)

      return validacion;

      //Si se envía un false no está validado el formulario.
    }



    function limpiar() {
      for (x = 0; x < document.getElementsByTagName("span").length; x++) {
        document.getElementsByTagName("span")[x].innerHTML = "";
      }
    }

    function validarFecha(fecha) {

      let fechaInsertada = new Date(fecha);
      let fechaHoy = new Date();


      return fechaHoy > fechaInsertada;
    }