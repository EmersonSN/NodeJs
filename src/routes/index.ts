import { Router, Request, Response } from "express";

const router = Router();

router.get('/', (req:Request, res:Response)=>{
    let user: string = 'Emerson';
    let obj = {
        nome: 'Diefenciado',
        idade: 30
    }
    res.render('home.mustache', {
        user,obj
    });
});

router.get('/contato', (req:Request, res:Response)=>{
    res.send('Formulario de contato');
});

router.get('/sobre', (req:Request, res:Response)=>{
    res.send('Sobre a empresa');
});

export default router;