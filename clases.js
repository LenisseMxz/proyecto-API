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
        // LO MISMO QUE CON LO DE BUSCAR() *CHECA*
        let listar = document.getElementById("listado");
        let texto = "";
        for (let i = 0; i < this.vehiculos.length; i++) {
            if (this.vehiculos[i].placa === vehiculo.placa) {
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
        this.vehiculos.push(vehiculo);  
    }
    buscar(placa) {
        // AQUI NO DEBERIA SIMPLEMENTE MANDAR EL RESULTADO DE LA PLACA PARA QUE EN EL
        // ARCHIVO DE SERVIDOR.JS LO OBTENGA? Y LA LOGICA DE MOSTRARLO EN LA PAGINA IRIA EN EL SCRIPT.JS?
        // USANDO FETCH? ESO MEDIO ENTENDI XD AYUDA
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
    eliminar(placa) {
        let index = this.vehiculos.findIndex(v => v.placa === placa);
        
        if (index != -1) {
            this.vehiculos.splice(index, 1);
            return true;
        }

        return false;
    }
}