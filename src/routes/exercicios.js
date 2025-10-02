import express from 'express'
import controllerExercicios from '../controllers/exercicios-post.js'

// TODO: ajeitar o get tbm
import { getExercicio1, getExercicio2, getExercicio3, getExercicio4, getExercicio5 } from '../controllers/exercicios-get.js'

const router = express.Router()

// - Query params -
// inicializa depois do ? na URL
// ?nome=batata
// ?idade=99
// ?nome=batata&idade=99&etc=etal...

router.get('/get/exercicio1', getExercicio1)

router.get('/get/exercicio2', getExercicio2)

router.get('/get/exercicio3', getExercicio3)

router.get('/get/exercicio4', getExercicio4)

router.get('/get/exercicio5', getExercicio5)

// POST ------------------------------------------------------------------------------

router.post('/post/exercicio1', controllerExercicios.postExercicio1)

router.post('/post/exercicio2', controllerExercicios.postExercicio2)

router.post('/post/exercicio3', controllerExercicios.postExercicio3)

router.post('/post/exercicio4', controllerExercicios.postExercicio4)

router.post('/post/exercicio5', controllerExercicios.postExercicio5)

export default router