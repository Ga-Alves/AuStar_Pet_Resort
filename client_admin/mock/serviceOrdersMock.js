const serviceOrdersMock = [
    { 
        id: 1,
        title: "Yoda", 
        services: ['Banho', 'Banho Volumezante', 'Sem Perfume', 'Gravata'], 
        responsable: 'Rafael', 
        total: 'R$ 50,00',
        time: "8:00",
        completed: true,
    },
    { 
        id: 31,
        title: "Outro Yoda as 8:00", 
        services: ['Banho', 'Sem Perfume', 'Gravata'], 
        responsable: 'Rafael', 
        total: 'R$ 50,00',
        time: "8:00",
        completed: false,
    },
    { 
        id: 11,
        title: "Thor", 
        services: ['Banho', 'Banho Volumezante', 'Sem Perfume', 'Gravata'], 
        responsable: 'Guilherme Costa', 
        total: 'R$ 50,00',
        time: "8:50",
        completed: true,
    },
    { 
        id: 112,
        title: "Pipoca", 
        services: ['Banho'], 
        responsable: 'Roberto', 
        total: 'R$ 70,00',
        time: "10:30",
        completed: true,
    },
    { 
        id: 1122,
        title: "Rex", 
        services: ['Banho', 'Banho Volumezante', 'Sem Perfume', 'Lacinho'], 
        responsable: 'Rafael', 
        total: 'R$ 60,00',
        time: "14:00",
        completed: false,
    }
]

export {serviceOrdersMock};