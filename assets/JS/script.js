import { registrarDepartamento, obtenerDepartamentos, actualizarDepartamento, eliminarDepartamento } from "./promesas.js"
window.addEventListener("load", ()=>{
    document.getElementById("btnRegistrar").addEventListener("click", registrar);
    obtenerDatos();
    document.getElementById("btnActualizar").addEventListener("click", actualizar);
})

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
    let objeto = {nombre : vNombre,
                precio : vPrecio,
                telefono : vTelefono,
                direccion : vDireccion,
                color : vColor,
                fechaDeDisponibilidad : vFechaDeDisponibilidad
            }
    registrarDepartamento(objeto).then(()=>{
        alert("Se ha Registrado Correstamente.");
    }).catch((r)=>{
        console.log(r);
    });
}

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
    let objeto = {nombre : vNombre,
                precio : vPrecio,
                telefono : vTelefono,
                direccion : vDireccion,
                color : vColor,
                fechaDeDisponibilidad : vFechaDeDisponibilidad
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

const limpiarTabla = async(text)=>{
    let eNombre = document.getElementById("nombre");
    let ePrecio = document.getElementById("precio");
    let eTelefono = document.getElementById("telefono");
    let eDireccion = document.getElementById("direccion");
    let eColor = document.getElementById("color");
    let eFechaDeDisponibilidad = document.getElementById("fechaDeDisponibilidad");
    eNombre.value = "";
    ePrecio.value = "";
    eTelefono.value = "";
    eDireccion.value = "";
    eColor.value = "";
    eFechaDeDisponibilidad.value = "";
}