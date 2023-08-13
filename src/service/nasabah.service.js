const prisma = require('../db')
const { insertNasabah, findNasabahByKtp, findAllNasabah, editNasabah, deleteNasabah } = require('../repository/nasabah.repository')

const createNasabah = async (newNasabahData) => {
    const nasabah = await insertNasabah(newNasabahData)
    return nasabah
}

const getNasabahByKtp = async (nomorKtp) => {
    const nasabah = await findNasabahByKtp(nomorKtp)
    if (!nasabah) {
        throw Error('Nasabah tidak ditemukan')
    }
    return nasabah
}

const getAllNasabah = async () => {
    const allNasabah = await findAllNasabah()
    return allNasabah
}

const updateNasabah = async (nomorKtp, nasabah) => {
    await getNasabahByKtp(nomorKtp)
    const newNasabah = await editNasabah(nomorKtp, nasabah)
    return newNasabah
}

const removeNasabah = async (nomorKtp) => {
    await getNasabahByKtp(nomorKtp)
    await deleteNasabah(nomorKtp)
}

module.exports = {
    createNasabah,
    getNasabahByKtp,
    getAllNasabah,
    updateNasabah,
    removeNasabah
}