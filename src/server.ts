import express from 'express';
import rotaPrincipal from './routes/index';
import rotaPainel from './routes/painel'

const server = express();

server.use(rotaPrincipal);
server.use('/painel', rotaPainel);

server.listen(3000);/*SEMPRE ULTIMA LINHA*/