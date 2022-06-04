const petsJson = require("../models/pets.json");
const fs = require("fs");

const postPet = (req, res) => {
    const { id, nomeFantasia, endereco, telefone, atende } = req.body
    petsJson.push({ id: petsJson.length + 1, nomeFantasia, endereco, telefone, atende })
  
    fs.writeFile("./src/models/pets.json", JSON.stringify(petsJson), 'utf8', function (err) { // gravando novo pet no array de pets
      if (err) {
          res.status(500).send({ message: err })
      } else {
          console.log("Arquivo atualizado com sucesso!")
          const petFound = petsJson.find(pet => pet.id == id) // recupero o pet que foi criado no array de pets      
          res.status(200).send(petFound)
      }
  })
}

module.exports = {
  postPet
};
