class Vehiculo {
    constructor(id, placa, marca, modelo) {
        this.id = id;
        this.placa = placa;
        this.marca = marca;
        this.modelo = modelo;
    }
}

class Almacen {
    constructor() {
        this.vehiculos = [];
    }

    agregar(vehiculo) {
        let listar = document.getElementById("listado");
        let texto = "";
        for (let i = 0; i < this.contenido.length; i++) {
            if (this.contenido[i].placa === vehiculo.placa) {
                texto += `<div class="card text-bg-danger mb-3" style="max-width: 18rem;">
                    <div class="card-header">Resultado</div>
                    <div class="card-body">
                    <h5 class="card-title">Ya existe un vehiculo con esta placa</h5>
                    </div>
                </div>`;
                listar.innerHTML = texto;
                return;
            }  
        }
        this.contenido.push(vehiculo);  
    }

    buscar(placa) {
        let listar = document.getElementById("listado");
        let texto = "";
        for (let i = 0; i < this.contenido.length; i++) {
            if (this.contenido[i].placa === placa) {
                texto +=  `<div class="card" style="width: 18rem;">
                            <div class="card-body">
                                <h5 class="card-title">${this.contenido[i].placa}</h5>
                                <h6 class="card-subtitle mb-2 text-body-secondary">${this.contenido[i].marca}</h6>
                                <p class="card-text">${this.contenido[i].modelo}</p>
                            </div>
                            </div>`;
                listar.innerHTML = texto;   
                return;
            }         
        }
        texto += `<div class="card text-bg-danger mb-3" style="max-width: 18rem;">
                    <div class="card-header">Resultado</div>
                    <div class="card-body">
                    <h5 class="card-title">Placa no encontrada</h5>
                    </div>
                </div>`;
        listar.innerHTML = texto;           
    }
    listar() {
    }
    Eliminar(placa) {}
}