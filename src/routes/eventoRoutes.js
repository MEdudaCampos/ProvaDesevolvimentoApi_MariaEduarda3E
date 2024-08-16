import { Router } from 'express'

const router = Router()
import { getEventos, criarEventos } from '../controllers/eventoControllers.js';
router.post('/', criarEventos)
router.get('/', getEventos)

export default router; 