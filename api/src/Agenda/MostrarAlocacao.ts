import RepositorioAgenda from "./Repositorio";
import BanhistaAlocado from "./BanhistaAlocado";
import RepositorioDadosAgenda from "./RepositorioDadosAgenda";

export default class MostrarAlocacao {
    constructor (readonly repositorioAgenda: RepositorioAgenda){
    }

    async execute(input: Input): Promise<Output[]> {
        const alocacao: Output[] = [];

        const semana = ['seg', 'ter', 'qua', 'qui', 'sex', 'sab'];

        for (const dia of semana) {
            const alocacaoDia = await this.repositorioAgenda.get(input.week, dia);
            alocacao.push({day: dia, employees: alocacaoDia});
        }
        return alocacao;
    }
}

type Input = {
    week: number
}

type Output = {
    day: string,
    employees: BanhistaAlocado[]
}
