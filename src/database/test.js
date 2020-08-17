const Database = require('./db')
const createProffy = require('./createProffy')

Database.then(async (db) => {
    //Inserir dados

    proffyValue = {
        name: "Lucas De-Toffol",
        avatar: "https://avatars3.githubusercontent.com/u/62857938?s=60&v=4",
        whatsapp: "990909090",
        bio:"Entusiasta das melhores tecnologias da química avançada."
    }


    classValue = {
        subject:1,
        cost:"30",
       //O proffy id virá pelo banco de dados

    }

    classScheduleValues = [
        //Class id virá pelo banco de dados após cadastrarmos a aula
        {
            weekday:1,
            time_from:720,
            time_to: 1220
        },

        {
            weekday:4,
            time_from:520,
            time_to: 1200
        }
    ]

 //await createProffy(db, {proffyValue, classValue, classScheduleValues})

    //Consultar dados inseridos


    //Todos os proffys
    const selectedProffys = await db.all("SELECT * FROM proffys")
    // console.log(selectedProffys)

    //consultar as classes de um determinado  professor
    //e trazer junto os dados do professor 
    const selectClassesAndProffys = await db.all(`
        SELECT classes.*,proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
    `)

    //console.log(selectClassesAndProffys)

    // O horário que a pessoa trabalha, por exemplo, é das 8h - 18h
    const selectClassesSchedules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = "1"
        AND class_schedule.weekday = "4"
        AND class_schedule.time_from <= "420"
        AND class_schedule.time_to > "520"

    `)

    console.log(selectClassesSchedules)
})