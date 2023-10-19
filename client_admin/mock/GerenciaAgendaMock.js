// Mock to GerenciaAgenda.jsx

const employeesMock = [
    {
        id: 1,
        name: 'Fernanda'
    },
    {
        id: 5,
        name: 'Eduardo'
    },
]

const weekScheeduleMock = [
    {
        day: 'Seg',
        employees: [
            {
                id: 1,
                name: 'Fernanda'
            },
            {
                id: 5,
                name: 'Eduardo'
            },
            {
                id: 11,
                name: 'Diogo'
            },
        ]
    },
    {
        day: 'Ter',
        employees: []
    },
    {
        day: 'Qua',
        employees: [
            {
                id: 1,
                name: 'Fernanda'
            },
        ]
    },
    {
        day: 'Qui',
        employees: [
            {
                id: 11,
                name: 'Diogo'
            },
        ]
    },
    {
        day: 'Sex',
        employees: [
            {
                id: 1,
                name: 'Fernanda'
            },
            {
                id: 5,
                name: 'Eduardo'
            },
            {
                id: 11,
                name: 'Diogo'
            },
        ]
    },
    {
        day: 'Sab',
        employees: []
    },
]

export {employeesMock, weekScheeduleMock}