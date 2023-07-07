import express from 'express';          // Importando o Express
const app = express()                   // Instanciando o Express
const port = 3000                       // Define a porta

app.get('/', (req, res) => {            // Cria a rota da raiz do projeto
    res.json({
        "nome" : "Seu_nome_completo"    // Substitua pelo seu nome
    })
    console.log('Rota / solicitada')    
})

app.listen(port, () => {                // Um socket para "escutar" as requisições
    console.log(`Serviço escutando a porta:  ${port}`)
})