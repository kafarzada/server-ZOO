const express = require('express')
const router = express.Router()
const db = require('../database/storage')

router.get("/", async (req, res) => {
    try {
        const cells = await db.getAllCells()
        res.status(200).json({
            'cells': cells,
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
        const newCell = await db.createNewCell()
        res.status(200).json({
            'cell': newCell,
            "error": null
        })
    } catch (e) {
        res.status(500).json({
            "error": e.message,
        })
    }
})


router.delete('/:cellId', async (req, res) => {
    try {
        const { cellId } = req.params
        const result = await db.deleteCell(cellId)
        res.status(200).json({
            "data": result
        })
    } catch (e) {
        res.status(500).json({
            "error": e.message,
        })
    }
})


module.exports = router