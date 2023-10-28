import RepositorioAgenda from "./Repositorio";
import BanhistaAlocado from "./BanhistaAlocado";
import RepositorioDadosAgenda from "./RepositorioDadosAgenda";

export default class MostrarAlocacao {
    constructor (readonly repositorioAgenda: RepositorioAgenda){
    }

    async execute(input: Input): Promise<Output[]> {
        const alocacao: {
            day: string,
            employees: {
                id_banhista: number,
                nome: string
            }[]
        }[] = [];

        const semana = ['seg', 'ter', 'qua', 'qui', 'sex', 'sab'];

        // let banhista: Banhista;

            // [
            // {
            //     id_entrada: 1,
            //     id_banhista: 1,
            //     dia: 2023-11-01T03:00:00.000Z,
            //     horarios: [
            //     0, 1, 2, 3, 4,
            //     6, 7, 8, 9
            //     ]
            // }
            // ]

        for (const dia of semana) {
            const alocacaoDia = await this.repositorioAgenda.get(input.week, dia);
            const alocados: {
                id_banhista: number,
                nome: string
            }[] = [];

            for (const banhistaAlocado of alocacaoDia) {
                alocados.push({id_banhista: banhistaAlocado.employeeID, nome: banhistaAlocado.name});
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
    employees: {
        id_banhista: number,
        nome: string
    }[]
}
