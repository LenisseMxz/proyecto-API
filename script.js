let miFormulario = document.getElementById("formulario");
let div = document.getElementById("listado");

miFormulario.addEventListener("submit", function(e){
    e.preventDefault();

    let accion = e.submitter.value;
    let placa = this.elements["placa"].value;
    let marca = this.elements["marca"].value;
    let modelo = this.elements["modelo"].value;

    if (accion === "buscar") {
        fetch(`http://localhost:3000/vehiculos/${placa}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);

            div.innerHTML = "";
            div.innerHTML = `<div class="card" style="width: 18rem;">
                            <div class="card-body">
                                <h5 class="card-title">${data.placa}</h5>
                                <h6 class="card-subtitle mb-2 text-body-secondary">${data.marca}</h6>
                                <p class="card-text">${data.modelo}</p>
                            </div>
                            </div>`;
            
        });
    }
    if (accion == "listado") {
        fetch(`http://localhost:3000/vehiculos`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            div.innerHTML = "";
            data.forEach(vehiculo => {
                div.innerHTML += `<div class="card" style="width: 18rem;">
                            <div class="card-body">
                                <h5 class="card-title">${vehiculo.placa}</h5>
                                <h6 class="card-subtitle mb-2 text-body-secondary">${vehiculo.marca}</h6>
                                <p class="card-text">${vehiculo.modelo}</p>
                            </div>
                            </div>`;
            })
        });
    }
    if (accion == "eliminar") {
        fetch(`http://localhost:3000/vehiculos/${placa}`, {
            method: "DELETE"
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            
            div.innerHTML = "";
            div.innerHTML = `El vehiculo con placa: ${placa} ha sido eliminado del almacen`;
        });
    }
});

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