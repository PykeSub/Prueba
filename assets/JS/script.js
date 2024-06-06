import { registrarDepartamento, obtenerDepartamentos, actualizarDepartamento, eliminarDepartamento } from "./promesas.js"
window.addEventListener("load", ()=>{
    // Aqui el id del documento del boton Registrar le pide que al hacer "click" al boton se registre los datos de los campos a la tabla.
    document.getElementById("btnRegistrar").addEventListener("click", registrar);
    obtenerDatos();
    // Aqui el id del documento del boton Actualizar le pide que al hacer "click" al boton para que se modifique este en la tabla.
    document.getElementById("btnActualizar").addEventListener("click", actualizar);
    // Aqui el id del documento del boton Validar le permite que pueda verificar si cumple o no la funcion.
    document.getElementById("btnValidar").addEventListener("click", validar);
    // Aqui el id del documento del boton Contraste le permite a uno que al presionarlo cambie a oscuro el formulario completo.
    document.getElementById("btnContraste").addEventListener("click", contraste);
})

// En esta Funcion cumple el rol de convertir tanto los H1 como los inpits, el body, etc. En el color negro del formulario.
function contraste(){
    let eBody = document.body;
    let ColorBody = eBody.style.backgroundColor;
    let eH1 = document.getElementsByClassName("textoH1");
    let eInputs = document.getElementsByClassName("input");
    let eTextAreas = document.getElementsByClassName("textarea");

    if(ColorBody=="black"){
        // Aqui basicamente es que si el body (cuerpo de la pagina) esta de color "Naranjo (Orange)", 
        // los: H1, Inputs y el Text Area se vuelven de color "Negro".
        eBody.style.backgroundColor = "orange";
        for(let index = 0; index < eH1.length; index++) {
            const element = eH1[index];
            element.style.color = "black";
        }

        for (let index = 0; index < eInputs.length; index++) {
            const element = eInputs[index];
            element.style.bordercolor = "orange";
        }

        for (let index = 0; index < eTextAreas.length; index++) {
            const element = eTextAreas[index];
            element.style.bordercolor = "orange";
        }
    }
    // Pero en este caso seria lo contrario es decir, que si el body esta de color "Negro (Black)",
    // entonces los: H1, Inputs y Text Areas se volveran "Blancos (White)".
    else{
        eBody.style.backgroundColor = "black";
        for (let index = 0; index < eH1.length; index++) {
            const element = eH1[index];
            element.style.color = "white";
        }

        for (let index = 0; index < eInputs.length; index++) {
            const element = eInputs[index];
            element.style.bordercolor = "white";
        }

        for (let index = 0; index < eTextAreas.length; index++) {
            const element = eTextAreas[index];
            element.style.bordercolor = "white";
        }
    }
}

// La funcion de "Validar" cumple el rol de tomar el Id de cada uno de los Campos de las validaciones,
// Para que pueda validar si esta cumplen o no.  
// Si algun Campo del Formulario tiene algo escrito no te mostrara ninguna alerta.
// Pero si no tiene nada en un campo especifico del Formulario, se pondria el borde de la casilla de color rojo.
// Si no llegara a cumplir en algun campo especifico, entonces ademas de la alerta ya mencionada antes, 
// tambien aparecera en el formulario de color "Rojo (Red)" el borde del cuadro como tambien el nombre de la seccion de dicho color.
function validar(){
    validarNombre("nombre");
    validarPrecio("precio");
    validarLongitud("telefono", 9);
    validarDireccion("direccion");
    validarColor("color");
    validarMensaje("mensaje");
    validarFecha("fechaDeDisponibilidad");
    validarCorreo("email");
}

function validarNombre(idCampo){
    let elemento3 = document.getElementById(idCampo);
    console.log(elemento3);
    let valor = elemento3.value;
    console.log(valor);
    console.log(valor.length);
    let valorSinEspacios = valor.trim();
    console.log(valorSinEspacios.length);
    let eParrafoValor = document.getElementById("p"+ idCampo);
    if(valorSinEspacios==""){
        document.getElementById("n").style.color = "red";
        console.log("Esta Vacio");
        alert("El Campo 'Nombre' esta Vacio, Por favor verifique.");
        elemento3.style.borderColor = "red";
        eParrafoValor.style.display = "block";
    }
    else{
        console.log("Tiene Algo");
        elemento3.style.borderColor = "green";
        eParrafoValor.style.display = "none";
    }
}

function validarPrecio(idCampo){
    let elemento3 = document.getElementById(idCampo);
    console.log(elemento3);
    let valor = elemento3.value;
    console.log(valor);
    console.log(valor.length);
    let valorSinEspacios = valor.trim();
    console.log(valorSinEspacios.length);
    let eParrafoValor = document.getElementById("p"+ idCampo);
    if(valorSinEspacios==""){
        document.getElementById("p").style.color = "red";
        console.log("Esta Vacio");
        alert("El Campo 'Precio' esta Vacio, Por favor verifique.");
        elemento3.style.borderColor = "red";
        eParrafoValor.style.display = "block";
    }
    else{
        console.log("Tiene Algo");
        elemento3.style.borderColor = "green";
        eParrafoValor.style.display = "none";
    }
}

function validarDireccion(idCampo){
    let elemento3 = document.getElementById(idCampo);
    console.log(elemento3);
    let valor = elemento3.value;
    console.log(valor);
    console.log(valor.length);
    let valorSinEspacios = valor.trim();
    console.log(valorSinEspacios.length);
    let eParrafoValor = document.getElementById("p"+ idCampo);
    if(valorSinEspacios==""){
        document.getElementById("d").style.color = "red";
        console.log("Esta Vacio");
        alert("El Campo 'Direccion' esta Vacio, Por favor verifique.");
        elemento3.style.borderColor = "red";
        eParrafoValor.style.display = "block";
    }
    else{
        console.log("Tiene Algo");
        elemento3.style.borderColor = "green";
        eParrafoValor.style.display = "none";
    }
}

function validarColor(idCampo){
    let elemento3 = document.getElementById(idCampo);
    console.log(elemento3);
    let valor = elemento3.value;
    console.log(valor);
    console.log(valor.length);
    let valorSinEspacios = valor.trim();
    console.log(valorSinEspacios.length);
    let eParrafoValor = document.getElementById("p"+ idCampo);
    if(valorSinEspacios==""){
        document.getElementById("c").style.color = "red";
        console.log("Esta Vacio");
        alert("El Campo 'Color' esta Vacio, Por favor verifique.");
        elemento3.style.borderColor = "red";
        eParrafoValor.style.display = "block";
    }
    else{
        console.log("Tiene Algo");
        elemento3.style.borderColor = "green";
        eParrafoValor.style.display = "none";
    }
}

function validarMensaje(idCampo){
    let elemento3 = document.getElementById(idCampo);
    console.log(elemento3);
    let valor = elemento3.value;
    console.log(valor);
    console.log(valor.length);
    let valorSinEspacios = valor.trim();
    console.log(valorSinEspacios.length);
    let eParrafoValor = document.getElementById("p"+ idCampo);
    if(valorSinEspacios==""){
        document.getElementById("m").style.color = "red";
        console.log("Esta Vacio");
        alert("El Campo 'Mensaje' esta Vacio, Por favor verifique.");
        elemento3.style.borderColor = "red";
        eParrafoValor.style.display = "block";
    }
    else{
        console.log("Tiene Algo");
        elemento3.style.borderColor = "green";
        eParrafoValor.style.display = "none";
    }
}

function validarFecha(idCampo){
    let elemento3 = document.getElementById(idCampo);
    console.log(elemento3);
    let valor = elemento3.value;
    console.log(valor);
    console.log(valor.length);
    let valorSinEspacios = valor.trim();
    console.log(valorSinEspacios.length);
    let eParrafoValor = document.getElementById("p"+ idCampo);
    if(valorSinEspacios==""){
        document.getElementById("f").style.color = "red";
        console.log("Esta Vacio");
        alert("El Campo 'Fecha Disponibilidad' esta Vacio, Por favor verifique.");
        elemento3.style.borderColor = "red";
        eParrafoValor.style.display = "block";
    }
    else{
        console.log("Tiene Algo");
        elemento3.style.borderColor = "green";
        eParrafoValor.style.display = "none";
    }
}

function validarCorreo(idCampo){
    let elemento3 = document.getElementById(idCampo);
    console.log(elemento3);
    let valor = elemento3.value;
    console.log(valor);
    console.log(valor.length);
    let valorSinEspacios = valor.trim();
    console.log(valorSinEspacios.length);
    let eParrafoValor = document.getElementById("p"+ idCampo);
    if(valorSinEspacios==""){
        document.getElementById("e").style.color = "red";
        console.log("Esta Vacio");
        alert("El Campo 'Email' esta Vacio, Por favor verifique.");
        elemento3.style.borderColor = "red";
        eParrafoValor.style.display = "block";
    }
    else{
        console.log("Tiene Algo");
        elemento3.style.borderColor = "green";
        eParrafoValor.style.display = "none";
    }
}

// La funcion de Validar la Longitud es lo mismo que la funcionde Validar, 
// Solo que con la diferencia en que esta funcion mide los caracteres ingresados en los campos si esta cumpliendo o no.
function validarLongitud(idCampo, max){
    let elemento1 = document.getElementById(idCampo);
    console.log(elemento1);
    let valor = elemento1.value;
    console.log(valor);
    console.log(valor.length);
    let valorSinEspacios = valor.trim();
    console.log(valorSinEspacios.length);
    let eParrafoValor = document.getElementById("p"+idCampo);
    if(valorSinEspacios.length==0 || valorSinEspacios.length==max){
        console.log("Cumple");
        elemento1.style.borderColor = "green";
        eParrafoValor.style.display = "none";
    }
    else{
        console.log("No cumple");
        alert("El campo Telefono tiene signos o mas de 9 numeros.");
        elemento1.style.borderColor = "red";
        eParrafoValor.style.display = "block";
        document.getElementById("t").style.color = "red";
    }
}

// En esta Funcion cumple el rol de poder registrar lo que te pide cada campo en especifico que quieras poner para la pagina web y la base de datos.
// Y al presionar el boton "Registrar", aparecera una alerta que dice que se habran registrado todos los cAmpos del Formulario.
const registrar = ()=>{
    let eNombre = document.getElementById("nombre");
    let vNombre = eNombre.value;
    let ePrecio = document.getElementById("precio");
    let vPrecio = ePrecio.value;
    let eTelefono = document.getElementById("telefono");
    let vTelefono = eTelefono.value;
    let eDireccion = document.getElementById("direccion");
    let vDireccion = eDireccion.value;
    let eColor = document.getElementById("color");
    let vColor = eColor.value;
    let eFechaDeDisponibilidad = document.getElementById("fechaDeDisponibilidad");
    let vFechaDeDisponibilidad = eFechaDeDisponibilidad.value;
    let eEmail = document.getElementById("email");
    let vEmail = eEmail.value;
    let eMensaje = document.getElementById("mensaje");
    let vMensaje = eMensaje.value;
    let objeto = {nombre : vNombre,
                precio : vPrecio,
                telefono : vTelefono,
                direccion : vDireccion,
                color : vColor,
                fechaDeDisponibilidad : vFechaDeDisponibilidad,
                email : vEmail,
                mensaje : vMensaje
            }
    registrarDepartamento(objeto).then(()=>{
        alert("Se ha Registrado Correstamente.");
    }).catch((r)=>{
        console.log(r);
    });
}

// La Funcion Obtener Datos cumple el rol de tomar los datos ya registrados en la tabla para que uno pueda usar los botones de Actualizar y Eliminar.
// Permite hacer esas acciones que hay en la pagina web.
const obtenerDatos = ()=>{
    obtenerDepartamentos().then((departamentos)=>{
        let estructura = "";
        console.log(departamentos);
        departamentos.forEach((d)=>{
            estructura += "<tr>";
            estructura += "<td>"+d.nombre+"</td>";
            estructura += "<td>"+d.precio+"</td>";
            estructura += "<td>"+d.telefono+"</td>";
            estructura += "<td>"+d.direccion+"</td>";
            estructura += "<td>"+d.color+"</td>";
            estructura += "<td>"+d.fechaDeDisponibilidad+"</td>";
            estructura += "<td>"+d.email+"</td>";
            estructura += "<td>"+d.mensaje+"</td>";
            estructura += "<td><button id='UPD"+d.id+"'</button>Actualizar</td>";
            estructura += "<td><button id='DEL"+d.id+"'</button>Eliminar</td>";
            estructura += "</tr>";
        });
        console.log(estructura);
        document.getElementById("tbDepartamentos").innerHTML = estructura;
        departamentos.forEach((d)=>{
            let elemento = document.getElementById("UPD"+ d.id);
            elemento.addEventListener("click", ()=>{
                document.getElementById("UPDnombre").value = d.nombre;
                document.getElementById("UPDprecio").value = d.precio;
                document.getElementById("UPDtelefono").value = d.telefono;
                document.getElementById("UPDdireccion").value = d.direccion;
                document.getElementById("UPDcolor").value = d.color;
                document.getElementById("UPDfechaDeDisponibilidad").value = d.fechaDeDisponibilidad;
                document.getElementById("UPDemail").value = d.email;
                document.getElementById("UPDmensaje").value = d.mensaje;
                document.getElementById("btnActualizar").value = d.id;
            })
            // Aqui en el Boton "Eliminar" si lo presionas, aparecera una alerta donde te diga el "Nombre" y el "Precio" que quieres o no eliminar ese registro antes de que lo elimine al instante.
            // Al presionar "Aceptar" en la alerta, le habras dado el visto bueno para que se elimine.
            // Y aparecera otra alerta que diga que ya se habra eliminado. 
            let elemento2 = document.getElementById("DEL"+ d.id);
            elemento2.addEventListener("click", ()=>{
                if(confirm("Se va a Eliminar a:\n"+ d.nombre + d.precio))(
                    eliminarDepartamento(d.id).then(()=>{
                        alert("Se ha Eliminado Correstamente.");
                        obtenerDatos();
                    })
                )
            })
        });
    })
}


// En esta Funcion que se llama "Actualizar" le permite a uno el poder modificar un campo en especifico que se encuentra ya registrado en la tabla que uno quiera cambiar.
// Al "Actualizarlo" deberia de aparecer una ventana tipo alerta en la pagina que diga que si se actualizo.
// Si NO aparece esa alerta en la pagina, no se actualizara la tabla y le aparecera el error en la consola.
const actualizar = ()=>{
    let eNombre = document.getElementById("UPDnombre");
    let vNombre = eNombre.value;
    let ePrecio = document.getElementById("UPDprecio");
    let vPrecio = ePrecio.value;
    let eTelefono = document.getElementById("UPDtelefono");
    let vTelefono = eTelefono.value;
    let eDireccion = document.getElementById("UPDdireccion");
    let vDireccion = eDireccion.value;
    let eColor = document.getElementById("UPDcolor");
    let vColor = eColor.value;
    let eFechaDeDisponibilidad = document.getElementById("UPDfechaDeDisponibilidad");
    let vFechaDeDisponibilidad = eFechaDeDisponibilidad.value;
    let eEmail = document.getElementById("UPDemail");
    let vEmail = eEmail.value;
    let eMensaje = document.getElementById("UPDmensaje");
    let vMensaje = eMensaje.value;
    let objeto = {nombre : vNombre,
                precio : vPrecio,
                telefono : vTelefono,
                direccion : vDireccion,
                color : vColor,
                fechaDeDisponibilidad : vFechaDeDisponibilidad,
                email : vEmail,
                mensaje : vMensaje
            }
    let id = document.getElementById("btnActualizar").value;
    actualizarDepartamento(objeto, id).then(()=>{
        alert("Se ha Actualizado Correstamente.");
        obtenerDatos();
        limpiarTabla("UPD");
    }).catch((a)=>{
        console.log(a);
    });
}

// En esta Funcion cumple el rol de poder "eliminar" el registro que uno haya hecho del formulario a la tabla. 
// aparecera una alerta que te dice que se habra eliminado de la tabla y en la tabla misma se actualizara al instante.
// Pero si en la alerta presionas "Cancelar", entonces desaparecera esa alerta y no se eliminara de la tabla donde estan los registros.
const eliminar = ()=>{
    let id = document.getElementById("btnEliminar").value;
    eliminarDepartamento(id).then(()=>{
        alert("Se ha Eliminado Correstamente.");
        obtenerDatos();
        limpiarTabla("DEL");
    }).catch((e)=>{
        console.log(e);
    });
}

// Esta Funcion me permite que se vaya actualizando la pagina como tambien la tabla al instante, 
// SIN necesidad de ir recargandola seguido.
const limpiarTabla = (text)=>{
    let eNombre = document.getElementById("nombre");
    let ePrecio = document.getElementById("precio");
    let eTelefono = document.getElementById("telefono");
    let eDireccion = document.getElementById("direccion");
    let eColor = document.getElementById("color");
    let eFechaDeDisponibilidad = document.getElementById("fechaDeDisponibilidad");
    let eEmail = document.getElementById("email");
    let eMensaje = document.getElementById("mensaje");
    eNombre.value = "";
    ePrecio.value = "";
    eTelefono.value = "";
    eDireccion.value = "";
    eColor.value = "";
    eFechaDeDisponibilidad.value = "";
    eEmail.value = "";
    eMensaje.value = "";
}