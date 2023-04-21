const express = require('express')
const router = express.Router()

const {addPerson, getPerson, getPeople}= require('../controllers/people')

router.route('/people').post(addPerson).get(getPeople)
router.route('/people/:id').get(getPerson)


module.exports =router