import express from 'express';

const router = express.Router();

import AtletaController from './controllers/AtletaController.mjs';

router.get("/atletas", (req, res) => AtletaController.index(req, res))
router.get("/atletas/:id", (req, res) => AtletaController.show(req, res))
router.post("/atletas", (req, res) => AtletaController.create(req, res))
router.put("/atletas/:id", (req, res) => AtletaController.update(req, res))
router.delete("/atletas/:id", (req, res) => AtletaController.update(req, res))


export default router;