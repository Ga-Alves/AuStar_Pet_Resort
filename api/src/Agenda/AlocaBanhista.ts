import RepositorioAgenda from "./Repositorio";

export default class AlocaBanhista {
    constructor (readonly repositorioAgenda: RepositorioAgenda) {
    }

    async execute (input: Input): Promise<void> {
        await this.repositorioAgenda.add(input.week, input.day, input.employeeID);
    }
}

type Input = {
    week: number,
    day: string,
    employeeID: number
}
