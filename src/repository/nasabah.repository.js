const prisma = require('../db')

const insertNasabah = async (nasabahData) => {
    const nasabah = await prisma.nasabah.create({
        data: {
            namaLengkap: nasabahData.namaLengkap,
            alamat: nasabahData.alamat,
            tempatLahir: nasabahData.tempatLahir,
            tanggalLahir: nasabahData.tanggalLahir,
            nomorKtp: nasabahData.nomorKtp,
            nomorHandphone: nasabahData.nomorHandphone
        }
    })
    return nasabah
}

const findNasabahByKtp = async (nomorKtp) => {
    const nasabah = await prisma.nasabah.findUnique({
        where: {
            nomorKtp: nomorKtp
        }
    })
    return nasabah
}

const findAllNasabah = async () => {
    const allNasabah = await prisma.nasabah.findMany()
    return allNasabah
}

const updateNasabah = async (nomorKtp, nasabah) => {
    const newNasabah = await prisma.nasabah.update({
        where: {
            nomorKtp: nomorKtp
        },
        data: {
            namaLengkap: nasabah.namaLengkap,
            alamat: nasabah.alamat,
            tempatLahir: nasabah.tempatLahir,
            tanggalLahir: nasabah.tanggalLahir,
            nomorKtp: nasabah.nomorKtp,
            nomorHandphone: nasabah.nomorHandphone
        }
    })
    return newNasabah
}

const deleteNasabah = async (nomorKtp) => {
    await prisma.nasabah.delete({
        where: {
            nomorKtp: nomorKtp
        }
    })
}

module.exports = {
    insertNasabah,
    findNasabahByKtp,
    findAllNasabah,
    updateNasabah,
    deleteNasabah
}