import { Request, Response } from 'express';
import { clientesService } from '../service/clientes.service';

async function createCliente(req: Request, res: Response) {
    const body = req.body;

    const cliente = await clientesService.createCliente(body)
    res.status(201).send(cliente);
}

async function getAllClientes(req: Request, res: Response) {
    res.status(200).send(await (clientesService.getAllClientes()));
}


export const clienteController = {
    createCliente,
    getAllClientes
}