import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import AdminTiposForm from './components/AdminTiposForm'
import AdminTiposTable from './components/AdminTIposTable'

const AdminTiposScreen = () => {

  // const tbodyTipos = document.getElementById("tbody-tipos");
  // const formTipo = document.getElementById("form-tipos");
  // const inputNombre = document.getElementById("inputNombre");
  // const btnAccion = document.getElementById("btnAccion");
  
  // let modo = "crear";
  // let tipos = [];
  // let tipoGlobal = {};
  
  // const dibujarTabla = () => {
  //     tbodyTipos.innerHTML = "";
  
  //     tipos.forEach((tipos) => {
  //         let tr = document.createElement("tr");
  //         tr.innerHTML = `<td>${tipos.tipo_id}</td>
  //                     <td>${tipos.tipo_nombre}</td>`;
  //         let tdBotones = document.createElement("td");
  
  //         let btnEditar = document.createElement("button");
  //         btnEditar.classList.add("btn", "btn-warning", "mr-2");
  //         btnEditar.innerText = "Editar";
  //         btnEditar.onclick = () => { 
  //             modoEditar(tipos);
  //         };
  
  //         let btnEliminar = document.createElement("button");
  //         btnEliminar.classList.add("btn", "btn-danger");
  //         btnEliminar.innerText = "Eliminar";
  //         btnEliminar.onclick = () => {
  //             eliminar(tipos.tipo_id);
  //         };
  
  //         tdBotones.appendChild(btnEditar);
  //         tdBotones.appendChild(btnEliminar);
  
  //         tr.appendChild(tdBotones);
  //         tbodyTipos.appendChild(tr);
  //     });
  // };
  
  
  // const getTipos = () => {
  //     fetch(`${URL_BACKEND}/tipo`).then((peticion) => {
  //         peticion.json().then((data) => {
  //             console.log(data);
  //             tipos = [...data];
  //             dibujarTabla();
  //         });
  //     });
  // };
  // getTipos();
  
  // formTipo.onsubmit = (e) => {
  //     e.preventDefault();
  //     if (inputNombre.value.trim() === "") {
  //         Swal.fire({
  //             title: "Error!",
  //             text: "Todos los campos deben estar llenos",
  //             icon: "error",
  //         });
  //         return;
  //     }
  
  //     if (modo === "crear") {
  //         Swal.fire({
  //                 title: "¿Crear?",
  //                 text: "Seguro que deseas crear el registro?",
  //                 icon: "info",
  //                 showCancelButton: true,
  //             }).then((rpta) => {
  //                 if (rpta.isConfirmed) {
  //                     //Crear de todos modos 
  //                     let objTipo = {
  //                         tipo_nombre: inputNombre.value.trim(),
  //                     };
  //                     postTipo(objTipo).then((peticion) => {
  //                         peticion.json().then((data) => {
  //                             if (data.tipo_id) {
  //                                 // Lanzar un sweealert de exito.
  //                                 Swal.fire({
  //                                     title: "Hecho",
  //                                     text: "Registro creado exitosamente",
  //                                     timer: 1500,
  //                                     icon: "success"
  //                                 })
  //                                 getTipos();
  //                                 inputNombre.value = "";
  //                             }
  //                         });
  //                     });
  //                 }
  //             })
  //             // TO DO: Validar el formulario
  
  //     } else {
  //         // entramos al modo editar
  //         let objTipo = {
  //             tipo_id: tipoGlobal.tipo_id,
  //             tipo_nombre: inputNombre.value,
  //         };
  //         putTipo(objTipo).then((peticion) => {
  //             peticion.json().then((data) => {
  //                 getTipos();
  //                 modoCrear();
  //             });
  //         });
  //     }
  // };
  
  // const modoCrear = () => {
  //     tipoGlobal = {};
  //     modo = "crear";
  //     btnAccion.innerText = "Crear Tipo";
  //     inputNombre.value = "";
  // };
  
  // const modoEditar = (tipo) => {
  //     tipoGlobal = {...tipo };
  //     modo = "editar";
  //     btnAccion.innerText = "Guardar Cambios";
  //     inputNombre.value = tipoGlobal.tipo_nombre;
  // };
  
  // const eliminar = (tipo_id) => {
  
  //     Swal.fire({
  //         title: "¿Eliminar?",
  //         text: "¿Seguro que desea eliminar el registro?",
  //         icon: "error",
  //         showCancelButton: true,
  //     }).then((rpta) => {
  //         if (rpta.isConfirmed) {
  //             deleteTipoById(tipo_id).then((peticion) => {
  //                 peticion.json().then((data) => {
  //                     if (data.tipo_id) {
  //                         Swal.fire({
  //                             title: "Exito!",
  //                             text: "Registro eliminado correctamente",
  //                             icon: "success",
  //                             timer: 1500,
  //                         });
  //                         getTipos();
  //                     }
  //                 });
  //             });
  //         }
  //     });
  
  
  // };


    return (
      <main className="container">
        <h1 className="display-4 text-primary mt-4">El Bodegón App - Admin Tipos</h1>
        <hr className="bg-light"/>
        <AdminTiposForm />
        <AdminTiposTable />
      </main>
    )
}

export default AdminTiposScreen
