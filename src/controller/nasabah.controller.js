const express = require('express')
const prisma = require('../db')
const {createNasabah, getNasabahByKtp, getAllNasabah, updateNasabah, removeNasabah} = require('../service/nasabah.service')
const { deleteNasabah } = require('../repository/nasabah.repository')
const router = express.Router()

router.post('/', async (req, res) => {
    try {
        const newNasabah = req.body
        const nasabah = await createNasabah(newNasabah)
    
        res.send({
            data: nasabah,
            message: "Nasabah berhasil ditambahkan"
        })
    } catch (error) {
        res.status(400).send({
            error: "Gagal menambahkan nasabah",
            details: error.message
        })
    }
})

router.get('/:nomorKtp', async (req, res) => {
    try {
        const nasabahKtp = req.params.nomorKtp 
        const nasabah = await getNasabahByKtp(nasabahKtp)

        res.send(nasabah);
    } catch (error) {
        res.status(400).send({
            error: "Gagal mendapatkan nasabah",
            details: error.message
        });
    }
})

router.get('/', async (req, res) => {
    try {
        const nasabah = await getAllNasabah()

        res.send(nasabah)
    } catch (error) {
        res.status(400).send({
            error: "Gagal mendapatkan nasabah",
            details: error.message
        })
        
    }
})

router.put('/:nomorKtp', async (req, res) => {
    try {
        const nasabahKtp = req.params.nomorKtp
        const nasabahData = req.body
        const newNasabah = await updateNasabah(nasabahKtp, nasabahData)

        res.send({
            data: newNasabah,
            message: "Nasabah berhasil diupdate"
        })
    } catch (error) {
        res.status(400).send({
            error: "Gagal mengupdate nasabah",
            details: error.message
        })
    }
})

router.delete('/:nomorKtp', async (req, res) => {
    try {
        const nasabahKtp = req.params.nomorKtp
        await deleteNasabah(nasabahKtp)

        res.send("Nasabah berhasil dihapus")
    } catch (error) {
        res.status(400).send({
            error: "Gagal menghapus nasabah",
            details: error.message
        })
    }
})

module.exports = router
