import express, {Request, Response} from 'express';
import path from 'path';
import mustache from 'mustache-express';

import rotaPrincipal from './routes/index';
import rotaPainel from './routes/painel'
import mustacheExpress from 'mustache-express';

const server = express();
server.set('view engine', 'mustache');
server.set('views', path.join(__dirname, 'views'));
server.engine('mustache', mustache());

server.use(express.static(path.join(__dirname, '../public')));

server.use(rotaPrincipal);
server.use('/painel', rotaPainel);
server.use((req:Request, res:Response)=>{
    res.status(404).send('ERRO 404 Pagina não encontrada!');
});

server.listen(3000);/*SEMPRE ULTIMA LINHA pode ser usado a porta 80*/