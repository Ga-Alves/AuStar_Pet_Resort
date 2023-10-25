export default class OrdemServico {
    constructor (readonly title: string, readonly services: string[], readonly responsible: string,
                readonly total: string, readonly week: number, readonly day: string,
                readonly time: string, readonly completed: boolean) {
    }
}
