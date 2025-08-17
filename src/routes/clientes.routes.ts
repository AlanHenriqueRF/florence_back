import { Router } from "express";
import { clienteController } from "../controllers/clientes.controller";

const clientesRoutes = Router();

clientesRoutes.post("/", clienteController.createCliente);
clientesRoutes.get("/all", clienteController.getAllClientes);


export default clientesRoutes;