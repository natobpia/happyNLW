const Database = require("./db");
const saveOrphanage = require("./saveOrphanage");

Database.then(async db => {
  // Insert data in the table
  await saveOrphanage(db, {
    lat: "-25.4538603",
    lng: "-49.2578671",
    name: "Lar de amor",
    about: "Presta assistência a crianças de 06 a 15 anos que se encontre em situações de risco e/ou vulnerabilidade social.",
    whatsapp: "999763482",
    images: [
        "https://images.unsplash.com/photo-1595295425007-985abbb16b92?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",

        "https://images.unsplash.com/photo-1576883600124-64c5aa68b4bc?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
    ].toString(),

    instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",

    opening_hours: "Horário de visitas Das 8H até 18H",

    open_on_weekends: "1"

})

  // Consult data from table
  const selectedOrphanges =  await db.all("SELECT * FROM orphanages")
  console.log(selectedOrphanges)

  // Consult data from only one orphanage
  const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "3"');
  console.log(orphanage)

  // Delete data from table
  const deleteOrphanage = await db.run("DELETE FROM orphanages WHERE id = '4'")
  console.log(deleteOrphanage)
})