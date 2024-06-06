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

// Esta funcion lo que hace es validar si cumplen o no cada campo especifico.
function validar(){
    validarVacio("nombre");
    validarVacio("precio");
    validarLongitud("telefono");
    validarVacio("direccion");
    validarVacio("color");
    validarVacio("mensaje");
}

// La funcion de Validar Vacio cumple el rol de si no tiene nada en un campo especifico se pondria de color rojo.
// Pero si el campo tiene algo escrito en el, apareceria como de color verde para dar a entender que sitiene algo escrito. 
function validarVacio(idCampo){
    let elemento3 = document.getElementById(idCampo);
    console.log(elemento3);
    let valor = elemento3.value;
    console.log(valor);
    console.log(valor.length);
    let valorSinEspacios = valor.trim();
    console.log(valorSinEspacios.length);
    let eParrafoValor = document.getElementById("p"+ idCampo);
    if(valorSinEspacios==""){
        console.log("Esta Vacio");
        elemento3.style.borderColor = "red";
        eParrafoValor.style.display = "block";
    }
    else{
        console.log("Tiene Algo");
        elemento3.style.borderColor = "green";
        eParrafoValor.style.display = "none";
    }
}

// La funcion de Validar la Longitud es lo mismo que la funcionde Validar Vacio, 
//solo que con la diferencia en que esta funcion mide los caracteres ingresados en los campos si esta cumpliendo o no.
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
        elemento1.style.borderColor = "red";
        eParrafoValor.style.display = "block";
    }
}

// En esta Funcion cumple el rol de poder registrar lo que te pide cada campo en especifico que quieras poner para la pagina web y la base de datos.
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
    let eMensaje = document.getElementById("mensaje");
    let vMensaje = eMensaje.value;
    let objeto = {nombre : vNombre,
                precio : vPrecio,
                telefono : vTelefono,
                direccion : vDireccion,
                color : vColor,
                fechaDeDisponibilidad : vFechaDeDisponibilidad,
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
                document.getElementById("UPDmensaje").value = d.mensaje;
                document.getElementById("btnActualizar").value = d.id;
            })
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


// En esta Funcion que se llama Actualizar le permite a uno el poder modificar un campo en especifico que se encuentra ya registrado en la tabla que uno quiera cambiar.
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
    let eMensaje = document.getElementById("UPDmensaje");
    let vMensaje = eMensaje.value;
    let objeto = {nombre : vNombre,
                precio : vPrecio,
                telefono : vTelefono,
                direccion : vDireccion,
                color : vColor,
                fechaDeDisponibilidad : vFechaDeDisponibilidad,
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

// En esta Funcion cumple el rol de poder eliminar el registro que uno haya hecho. 
// Al presionar el bototn te dira una alerta que diga si quieres o no elimiinar ese registro antes de que lo elimine al instante.
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

// Esta Funcion me permite que se vaya actualizando la pagina como tambien la tabla al instante, SIN necesidad de ir recargandola seguido.
const limpiarTabla = (text)=>{
    let eNombre = document.getElementById("nombre");
    let ePrecio = document.getElementById("precio");
    let eTelefono = document.getElementById("telefono");
    let eDireccion = document.getElementById("direccion");
    let eColor = document.getElementById("color");
    let eFechaDeDisponibilidad = document.getElementById("fechaDeDisponibilidad");
    let eMensaje = document.getElementById("mensaje");
    eNombre.value = "";
    ePrecio.value = "";
    eTelefono.value = "";
    eDireccion.value = "";
    eColor.value = "";
    eFechaDeDisponibilidad.value = "";
    eMensaje.value = "";
}