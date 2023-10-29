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
            for (const banhistaAlocado of alocacaoDia) {
                const dayIndex = semana.indexOf(semana[idx]);
                alocacao[dayIndex].employees.push({
                    id: banhistaAlocado.employeeID,
                    name: banhistaAlocado.name,
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