import RepositorioAgenda from "./Repositorio";

export default class MostrarAlocacao {
    constructor (readonly repositorioAgenda: RepositorioAgenda){
    }

    async execute(input: Input): Promise<Output[]> {
        const alocacao: Output[] = [];

        const semana = ['seg', 'ter', 'qua', 'qui', 'sex', 'sab'];

        for (const dia of semana) {
            const alocacaoDia = await this.repositorioAgenda.get(input.week, dia);
            const alocados: Banhista[] = [];

            for (const banhistaAlocado of alocacaoDia) {
                alocados.push({id: banhistaAlocado.employeeID, name: banhistaAlocado.name});
            }
            alocacao.push({day: dia, employees: alocados});
        }
        return alocacao;
    }
}

type Input = {
    week: number
}

type Output = {
    day: string,
    employees: Banhista[]
}

type Banhista = {
    id: number,
    name: string
}