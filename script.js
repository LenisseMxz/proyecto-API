let miFormulario = document.getElementById("formulario");
let div = document.getElementById("listado");

const btnAdd=document.getElementById("btnAdd");
btnAdd.addEventListener("click",()=>{
    let placa = this.elements["placa"].value;
    let marca = this.elements["marca"].value;
    let modelo = this.elements["modelo"].value;
    fetch('http://localhost:3000/vehiculos', {
        method: 'POST',
        body: JSON.stringify({
            placa: placa,
            marca: marca,
            modelo: modelo,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => {
            console.log(json);
        });
})

const btnListar=document.getElementById("btnListar");
btnListar.addEventListener("click",()=>{
    fetch('http://localhost:3000/vehiculos')
        .then((res) => res.json())
        .then((json) => {
            console.log(json);
        });
})

const btnBuscar=document.getElementById("btnBuscar");
btnBuscar.addEventListener("click",()=>{
    let placa = this.elements["placa"].value;
    fetch(`http://localhost:3000/vehiculos/${placa}`)
        .then((response) => response.json())
        .then((json) => {
            console.log(json);
        });
})

const btnEliminar=document.getElementById("btnEliminar");
btnEliminar.addEventListener("click",()=>{
    let placa = this.elements["placa"].value;
    let marca = this.elements["marca"].value;
    let modelo = this.elements["modelo"].value;
    fetch('http://localhost:3000/vehiculos', {
        method: 'POST',
        body: JSON.stringify({
            placa: placa,
            marca: marca,
            modelo: modelo,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => {
            console.log(json);
        });
})