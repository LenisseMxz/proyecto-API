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
    agregar(vehiculo) {}
    buscar(placa) {
        let vehiculo = this.vehiculos.find(vehiculo => vehiculo == placa);
        return vehiculo;
    }
    listar() {}
    Eliminar(placa) {
        let vehiculo = this.vehiculos.find(vehiculo => vehiculo == placa);
        this.vehiculo.splice(vehiculo.id, 1);

        return null;
    }
}