const express = require('express'); 
const mongo = require('mongodb');

async function main(){
try{
    const app = express();

    const clienteDoBanco = await mongo.connect('mongodb://ronaldinho:nerdzao1@ds213832.mlab.com:13832/nerdzao-rick-and-morty');
     const bancoDeDados = clienteDoBanco.db('nerdzao-rick-and-morty');
    const personagens = baseDeDados.collection('characters');

    

//vai permitir que nossa aplicação escuto o pedido de personagens

    app.get('/personagens', async (requisicao,resposta) => {
       const todosOsPersonagens = await personagens.find();
        resposta.send(todosOsPersonagens);
    });

//eu falo que a aplicacao PODE escutar a porta que eu mandar
    app.listen(5000, () => {console.log('Escutando na porta 5000')});

    
}catch(e){

    console.log('Deu Ruim ${e}');
}
}
main();
