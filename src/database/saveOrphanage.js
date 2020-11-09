function saveOrphanage({lat, lng, name, about, whatsapp, images, instructions, opening_hours, opening_weekends}, db){
    return db.run(`
        INSERT INTO orphanages(
            lat,
            lng,
            name,
            about,
            whatsapp,
            images,
            instructions,
            opening_hours,
            opening_weekends
        ) VALUES (
            "${lat}",
            "${lng}",
            "${name}",
            "${about}",
            "${whatsapp}",
            "${images.toString()}",
            "${instructions}",
            "${opening_hours}",
            "${opening_weekends}"
        );
    `)
}

module.exports = saveOrphanage

