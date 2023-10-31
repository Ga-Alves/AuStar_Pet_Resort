import RepositorioAgenda from "./Repositorio";

export default class MostrarAlocacao {
    constructor (readonly repositorioAgenda: RepositorioAgenda){
    }

    async execute(input: Input): Promise<string> {
        const semana = ['seg', 'ter', 'qua', 'qui', 'sex', 'sab'];

        const alocacao: Semana[] = semana.map((day) => {
            return {
              day,
              employees: [], // Inicializa array de banhistas
            };
          });

        for (let idx = 0; idx < 6; idx++) {
            const alocacaoDia = await this.repositorioAgenda.get(input.week, semana[idx]);
            for (let idx_banhista = 0; idx_banhista < alocacaoDia.length; idx_banhista++){
                const banhistaAlocado = alocacaoDia[idx_banhista];

                const id: number = banhistaAlocado.id_banhista;
                const name: string = banhistaAlocado.nome;

                const dayIndex = semana.indexOf(semana[idx]);
                alocacao[dayIndex].employees.push({
                    id: id,
                    name: name,
                });
            }
        }
        return JSON.stringify(alocacao);
    }
}

type Input = {
    week: number
}

type Semana = {
    day: string,
    employees: Banhista[]
}

type Banhista = {
    id: number,
    name: string
}