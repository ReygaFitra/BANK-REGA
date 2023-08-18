const prisma = require('../db')
const { insertNasabah, findNasabahByKtp, findAllNasabah, editNasabah, deleteNasabah } = require('../repository/nasabah.repository')

const createNasabah = async (newNasabahData) => {
    if (!newNasabahData.nomorKtp || !newNasabahData.namaLengkap) {
        throw Error('Nomor KTP dan nama tidak boleh kosong')
    }

    const existingNasabah = await findNasabahByKtp(newNasabahData.nomorKtp)
    if(existingNasabah) {
        throw Error('Nasabah dengan nomor KTP tersebut sudah terdaftar')
    }

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
    const nasabahData = await getNasabahByKtp(nomorKtp)
    if (!nasabahData) {
        throw Error('Nasabah tidak ditemukan')
    }
    const newNasabah = await editNasabah(nomorKtp, nasabah)
    return newNasabah
}

const removeNasabah = async (nomorKtp) => {
   const nasabahData = await getNasabahByKtp(nomorKtp)
    if (!nasabahData) {
        throw Error('Nasabah tidak ditemukan')
    }
    await deleteNasabah(nomorKtp)
}

module.exports = {
    createNasabah,
    getNasabahByKtp,
    getAllNasabah,
    updateNasabah,
    removeNasabah
}