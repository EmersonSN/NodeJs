import { Router, Request, Response } from "express";
import res, { render } from "express/lib/response";

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
    res.render('pages/home.mustache', {
        user,obj, verificar,
        produtos:[
            {titulo:'arroz', preco:10},
            {titulo:'feijao', preco:6},
            {titulo:'farinha', preco:4}
        ],
        Melhoreodia:[
            /*'Sorria, o dia está lindo',
            'Clima ensolarado',
            'Clima de piscina'*/
        ]
    });
});

router.get('/paginaTeste',(req:Request, res:Response)=>{
    let n1:number = 10;
    let n2:number = 20;
    function somar(x:number, y:number){
        return n1+n2;
    }
    res.render('pages/PaginaTeste.mustache', {
        somar, n1, n2
    })
})

router.get('/contato', (req:Request, res:Response)=>{
    res.render('pages/contato.mustache');
});

router.get('/sobre', (req:Request, res:Response)=>{
    res.render('pages/sobre.mustache');
});
router.get('/nome',(req:Request, res:Response)=>{
   // console.log("Query String", req.query);
    let meuNome:string = req.query.nome as string;
    let idade:string = req.query.idade as string;
    res.render('pages/nome.mustache',{
        meuNome, idade
    })
});

router.get('/idade',(req:Request, res:Response)=>{
    let mostrarIdade:boolean = false;
    let idade:number=0;
    if(req.query.ano){
        let anoNascimento:number = parseInt(req.query.ano as string);
        let anoAtual:number = new Date().getFullYear();
        idade = anoAtual - anoNascimento;

        mostrarIdade = true;
    }
    res.render('pages/idade.mustache',{
        idade, mostrarIdade
    })
})


export default router;