import { Router } from 'express'

const router = Router()
import { getPaletrantes, criarPalestrantes } from '../controllers/palestranteControllers.js'
router.get('/', getPaletrantes)
router.post('/', criarPalestrantes)

export default router; 