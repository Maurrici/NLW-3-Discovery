const Database = require('./db')
const saveOnDB = require('./saveOrphanage')

Database.then(async (db) =>{
    //Consultar todos orfanatos
    const selectedOrphnages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphnages)
    
    //Consulta um único orfanato
    const orphanage = await db.all(`SELECT * FROM orphanages WHERE id = "1"`)
    console.log(orphanage)

    await db.run("DELETE FROM orphanages WHERE id = '4'")

})