import express from 'express'
import cors from "cors";

import { Almacen } from "./clases.js";

const app = express();
app.use(express.json());
app.use(cors());

app.get('/vehiculos', (req, res) => {
    if(Almacen.vehiculos)
        res.json(Almacen.vehiculos)
    else
        res.json({})
})

app.get(`/vehiculos/:placa`, (req, res) => {

    let resultado = Almacen.vehiculos.buscar(req.params.placa);

    if(resultado)
        res.json(resultado)
    else
        res.json({})
})

app.delete("/vehiculos/:placa", (req, res) => {

    let resultado = Almacen.vehiculos.eliminar(req.params.placa);

    if(resultado)
        res.json({msg: "Vehiculo eliminado"})
    else
        res.json({})
})