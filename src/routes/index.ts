import { Router, Request, Response } from "express";
import { render } from "express/lib/response";

const router = Router();

router.get('/', (req:Request, res:Response)=>{
    let user: string = 'Emerson';
    let verificar:boolean = false;
    let obj = {
        nome: 'Diefenciado',
        idade: 18
    }
    if(obj.idade > 17){
        verificar = true;
    }
    res.render('home.mustache', {
        user,obj, verificar,
        produtos:[
            {titulo:'arroz', preco:10},
            {titulo:'feijao', preco:6},
            {titulo:'farinha', preco:4}
        ],
        Melhoreodia:[
            'Sorria, o dia está lindo',
            'Clima ensolarado',
            'Clima de piscina'
        ]
    });
});

router.get('/paginaTeste',(req:Request, res:Response)=>{
    let n1:number = 10;
    let n2:number = 20;
    function somar(x:number, y:number){
        return n1+n2;
    }
    res.render('PaginaTeste.mustache', {
        somar, n1, n2
    })
})

router.get('/contato', (req:Request, res:Response)=>{
    res.send('Formulario de contato');
});

router.get('/sobre', (req:Request, res:Response)=>{
    res.send('Sobre a empresa');
});

export default router;