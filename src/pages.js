const database = require('./database/db.js')
const insertData = require('./database/saveOrphanage.js')

module.exports = {
    index(request, response){
        const city = request.query.city
        return response.render('index', {city})
    },
    async orphanage(request, response){
        const id = request.query.id

        try{
            const db = await database
            const results = await db.all(`SELECT * FROM orphanages WHERE id = "${id}"`)
            
            const orphanage = results[0]
            orphanage.images = orphanage.images.split(",")
            orphanage.firstImage = orphanage.images[0]
            orphanage.opening_weekends = orphanage.opening_weekends == 1 ? true : false

            return response.render('orphanage', {orphanage})
        }catch(err){
            console.log(err)
        }
    },
    async orphanages(request, response){
        try{
            const db = await database
            const orphanages = await db.all("SELECT * FROM orphanages")
            return response.render('orphanages', { orphanages })
        }catch(err){
            console.log(err)
            return response.send("Erro no banco de dados!")
        }
        
    },
    createOrphanage(request, response){
        return response.render('create-orphanage')
    },
    async saveOrphanage(request, response){
        //Recebendo dados
        const fields = request.body
        console.log(fields)
        //Valida dados
        if(Object.values(fields).includes('')){
            return response.send("Todos os campos devem ser preenchidos!")
        }

        //Salvar Orfanato
        try{
            const db  = await database
            insertData(fields, db)

            //Redirecionamento
            return response.redirect('/orphanages')
        }catch(err){
            console.log(err)
            return response.send("Erro no Banco de dados!")
        }
        
    }
}