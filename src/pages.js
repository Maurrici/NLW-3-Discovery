const orphanages = require('./database/data.js')

module.exports = {
    index(request, response){
        const city = request.query.city
        return response.render('index', {city})
    },
    orphanage(request, response){
        const orphanage = orphanages.find(item => item.id == request.query.id)
        return response.render('orphanage', { orphanage })
    },
    orphanages(request, response){
        return response.render('orphanages', { orphanages })
    },
    createOrphanage(request, response){
        return response.render('create-orphanage')
    },
}