const express = require('express')
const router = express.Router()
const controller = require('../controller/petsController')

router.post("/adicionar", controller.postPet)
router.patch("/atualizaNome/:id", controller.updateName)

module.exports = router