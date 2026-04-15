import express from 'express'

const app = express();
app.use(express.json());

const miAlmacen = new Almacen();

app.get("/vehiculos/placa", (req, res) => {

    let resultado = miAlmacen.buscar(req.params.placa);

    if(resultado)
        res.json(resultado)
    else
        res.json({})
})

app.delete("/vehiculos/:placa", (req, res) => {

    let resultado = miAlmacen.eliminar(req.params.placa);

    if(resultado)
        res.json(miAlmacen.vehiculos)
    else
        res.json({})
})