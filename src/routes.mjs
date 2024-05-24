import express from 'express';
import dotenv from 'dotenv';
import AtletaController from './controllers/AtletaController.mjs';

dotenv.config();
const router = express.Router();



router.get(`/API_KEY=${process.env.API_KEY}/atletas`, (req, res) => AtletaController.index(req, res))
router.get(`/API_KEY=${process.env.API_KEY}/atletas/:id`, (req, res) => AtletaController.show(req, res))
router.post(`/API_KEY=${process.env.API_KEY}/atletas`, (req, res) => AtletaController.create(req, res))
router.put(`/API_KEY=${process.env.API_KEY}/atletas/:id`, (req, res) => AtletaController.update(req, res))
router.delete(`/API_KEY=${process.env.API_KEY}/atletas/:id`, (req, res) => AtletaController.update(req, res))


export default router;