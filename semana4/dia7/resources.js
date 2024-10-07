//<--================================-->
//<--------- CodiGo - Tecsup ---------->
//<----- Desarrollo Web FullStack ----->
//<------ FrontEnd - JavaScript ------->
//<-------------- Repaso -------------->
//<--================================-->
    
const users = [{
        userId: 1,
        name: 'Fabian',
        lastName: 'Cerdán',
        active: true,
        email: 'fabiancr@gmail.com',
        address: {
            name: 'Rio Pasco',
            geo: {
                lat: "-43.9509",
                lng: "-34.4618"
            }
        },
        age: 12,
        courses: [1]
    },
    {
        userId: 2,
        name: 'Gabriel',
        lastName: 'Cerdán',
        active: true,
        email: 'gabrielcdlc@hotmail.com',
        address: {
            name: 'Banchero',
            geo: {
                lat: "-43.1509",
                lng: "-34.3518"
            }
        },
        age: 6,
        courses: [1, 2]
    },
    {
        userId: 3,
        name: 'kevin',
        lastName: 'Cerdán',
        active: true,
        email: 'kalexcs@gmail.com',
        address: {
            name: 'Los olivos',
            geo: {
                lat: "-43.1509",
                lng: "-34.3518"
            }
        },
        age: 19,
        courses: [3]
    },
    {
        userId: 4,
        name: 'Yomar',
        lastName: 'Cerdán',
        active: false,
        email: 'yomarcs@hotmail.com',
        address: {
            name: 'Canto Rey',
            geo: {
                lat: "-43.1521",
                lng: "-34.3518"
            }
        },
        age: 36,
        courses: [1, 2, 3, 4, 5]
    },
]


const courses = [{
        courseId: 1,
        name: 'Javascript',
        description: 'Curso de javascript de 0 a experto'
    },
    {
        courseId: 2,
        name: 'Python',
        description: 'Curso de python de 0 a experto'
    },
    {
        courseId: 3,
        name: 'Flutter',
        description: 'Curso de flutter de 0 a experto'
    },
    {
        courseId: 4,
        name: 'Next JS',
        description: 'Curso de next jS de 0 a experto'
    },
    {
        courseId: 5,
        name: 'Firebase',
        description: 'Curso de firebase de 0 a experto'
    }
]