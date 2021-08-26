import { Router, Request, Response } from "express";

const router = Router();

router.get('/', (req:Request, res:Response)=>{
    res.send('Bem vindo ao painel');
});

router.get('/noticis', (req:Request, res:Response)=>{
    res.send('Informe a noticia');
});


export default router;