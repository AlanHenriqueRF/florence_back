import { prisma } from "../config/database"

async function createCliente(data: any) {
    return prisma.cliente.create({ data })
}

async function getAllClientes() {
    return prisma.cliente.findMany();
}

export const clienteRepository = {
    createCliente,
    getAllClientes
}