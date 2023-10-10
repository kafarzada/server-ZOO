const { v4: uuidv4 } = require('uuid');
const db = {
    storage: {
        cells: [{id:"1"}, {id: "2"}, {id: "3"}, {id: uuidv4()}, {id: uuidv4()}],
        animals: [
            {id: uuidv4(), name: "Заяц", cell: "1"},
            {id: uuidv4(), name: "Змея", cell: "2"},
            {id: uuidv4(), name: "Медведь", cell: null},
            {id: uuidv4(), name: "Тигр", cell: "1"},
        ]
    },

    getAnimals() {
        return this.storage.animals
    },

    getAllCells() {
        return this.storage.cells
    },

    forwardAnimal(animalId, TargetCellId) {
        let result
        this.storage.animals.map(animal => {
            if(animal.id === animalId) {
                animal.cell = TargetCellId
                result = animal
            }
        
        })
        return result
    },

    createAnimal(name, cell=null) {
        const newAnimal = {
            id: uuidv4(),
            name,
            cell
        }

        this.storage.animals.push(newAnimal)

        return newAnimal
    },

    createNewCell() {
        const newCell = {id: uuidv4()}
        this.storage.cells.push(newCell)

        return newCell
    },

    deleteCell(id) {
        const animals = []
        this.storage.cells = this.storage.cells.filter(c => c.id !== id)
        this.storage.animals = this.storage.animals.map(a => {
            if(a.cell === id) {
                a.cell = null
                animals.push(a)
            }
            return a
        })

        return {
            cId: id,
            animals: animals
        }
    }
}


module.exports = db