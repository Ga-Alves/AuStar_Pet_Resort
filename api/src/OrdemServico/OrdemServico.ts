export default class OrdemServico {
    constructor (readonly petID: number, readonly employeeID: number, readonly services: string[], 
                readonly total: string, readonly date: Date,
                readonly time: string, readonly completed: boolean) {
    }
}
