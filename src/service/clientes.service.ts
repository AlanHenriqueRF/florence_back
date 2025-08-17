import { clienteRepository } from "../repository/clientes.repository"

async function createCliente(data: any){
    return await clienteRepository.createCliente(data)
}

async function getAllClientes() {
    return await clienteRepository.getAllClientes()
}

export const clientesService = {
    createCliente,
    getAllClientes
}