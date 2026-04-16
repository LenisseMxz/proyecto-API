class Vehiculo {
    #id;
    constructor( placa, marca, modelo) {
        this.placa = placa;
        this.marca = marca;
        this.modelo = modelo;
    }
    infoHtml(){
        return `<div class="card text-bg-danger mb-3" style="max-width: 18rem;">
                    <div class="card-header"> ${this.placa}</div>
                    <div class="card-body">
                    <h5 class="card-title">${this.marca}${this.modelo}</h5>
                    </div>
                </div>`
    }
}

class Almacen {
    constructor() {
        this.vehiculos = [];
    }
    agregar(vehiculo) {
        if (buscar( vehiculo.placa)!=null) {

            return false;
        }  
        
        this.vehiculos.push(vehiculo);
        return true;  
    }
    buscar(placa) {
        let listar = document.getElementById("listado");
        let texto = "";
        for (let i = 0; i < this.vehiculos.length; i++) {
            if (this.vehiculos[i].placa === placa) {
                return this.vehiculos[i];
            }         
        }
        return null;
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