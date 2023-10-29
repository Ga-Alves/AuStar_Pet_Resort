import RepositorioAgenda from "./Repositorio";

export default class AlocaBanhista {
    constructor (readonly repositorioAgenda: RepositorioAgenda) {
    }

    async execute (input: Input): Promise<void> {
        const name = await this.repositorioAgenda.get_name(input.employeeID);
        await this.repositorioAgenda.add(input.week, input.day, input.employeeID, name);
    }
}

type Input = {
    week: number,
    day: string,
    employeeID: number
}
