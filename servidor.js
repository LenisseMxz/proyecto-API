import express from 'express'
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

import { Almacen, Vehiculo } from "./clases.js";

const __filename = fileURLToPath(import.meta.url)
const __dirname  = path.dirname(__filename)
app.use(express.static(path.join(__dirname, "public")))

const app = express();
app.use(express.json());
app.use(cors());

const almacen = new Almacen();

app.post('/vehiculos', (req, res) => {
    const { placa, marca, modelo } = req.body;
    let vehiculo = new Vehiculo(placa, marca, modelo);
    let resultado = almacen.agregar(vehiculo);

    if(resultado)
        res.json({msg: "Vehiculo agregado"});
    else
        res.json({msg: "ya existe"});
})

app.get('/vehiculos', (req, res) => {
    if(almacen.vehiculos)
        res.json(almacen.vehiculos)
    else
        res.json({})
})

app.get(`/vehiculos/:placa`, (req, res) => {

    let resultado = almacen.buscar(req.params.placa);

    if(resultado)
        res.json(resultado)
    else
        res.json({})
})

app.delete("/vehiculos/:placa", (req, res) => {

    let resultado = almacen.eliminar(req.params.placa);

    if(resultado)
        res.json({msg: "Vehiculo eliminado"})
    else
        res.json({msg: "no existe"})
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("Server is running on port" + PORT);
});