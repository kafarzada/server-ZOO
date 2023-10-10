const express = require('express')
const router = express.Router()
const db = require('../database/storage')

router.get("/", async (req, res) => {
    try {
        const animals = await db.getAnimals()
        res.status(200).json({
            "animals": animals,
            'error': null
        })
    } catch (e) {
        res.status(500).json({
            "error": e.message,
        })
    }
})


router.post("/", async (req, res) => {
    try {
        const { name } = req.body
        const newAnimal = await db.createAnimal(name)
        res.status(201).json({
            "animal": newAnimal,
            'error': null
        })
    } catch (e) {
        res.status(500).json({
            "error": e.message,
        })
    }
})


router.patch('/:animalId/:targetCellId', async (req, res) => {

    try {
        const { animalId, targetCellId } = req.params
        const animal = await db.forwardAnimal(animalId, targetCellId)
        res.status(200).json({
            "animal": animal,
            error: null
        })
    } catch (e) {
        res.status(500).json({
            "error": e.message,
        })
    }
})


module.exports = router