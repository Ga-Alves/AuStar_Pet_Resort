import RepositorioOrdem from "./Repositorio";

export default class ServiceOrders {
    constructor (readonly repositorioOrdem: RepositorioOrdem) {
    }

    async execute(input: Input) {
        const serviceOrders = await this.repositorioOrdem.list_day(input.week, input.day);
        return serviceOrders;
    }
}

type Input = {
    week: number,
    day: string
}