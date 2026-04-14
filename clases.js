class vehiculo {
    constructor(id, placa, marca, modelo) {
        this.id = id;
        this.placa = placa;
        this.marca = marca;
        this.modelo = modelo;
    }
}

class almacen {
    constructor() {
        this.contenido = [];
    }
    agregar(vehiculo) {}
    buscar(placa) {}
    listar() {}
    Eliminar(placa) {}
}