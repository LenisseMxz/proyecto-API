import express from 'express'
import cors from "cors";

import { Almacen } from "./clases.js";

const app = express();
app.use(express.json());
app.use(cors());

app.get(`/vehiculos/:placa`, (req, res) => {

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