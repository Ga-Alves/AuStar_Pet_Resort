// Mock to GerenciaAgenda.jsx

const employeesMock = [
    {
        id: 1,
        name: 'Fernanda'
    },
    {
        id: 2,
        name: 'Eduardo'
    },
]

const weekScheeduleMock = [
    {
        day: 'seg',
        employees: [
            {
                id: 1,
                name: 'Fernanda'
            },
            {
                id: 2,
                name: 'Eduardo'
            },
            {
                id: 11,
                name: 'Diogo'
            },
        ]
    },
    {
        day: 'ter',
        employees: []
    },
    {
        day: 'qua',
        employees: [
            {
                id: 1,
                name: 'Fernanda'
            },
        ]
    },
    {
        day: 'qui',
        employees: [
            {
                id: 11,
                name: 'Diogo'
            },
        ]
    },
    {
        day: 'sex',
        employees: [
            {
                id: 1,
                name: 'Fernanda'
            },
            {
                id: 2,
                name: 'Eduardo'
            },
            {
                id: 11,
                name: 'Diogo'
            },
        ]
    },
    {
        day: 'sab',
        employees: []
    },
]

export {employeesMock, weekScheeduleMock}