import RepositorioAgenda from "./Repositorio";
import RepositorioOrdem from "../OrdemServico/Repositorio";
import RepositorioPets from "../CadastroPet/RepositorioDadosPets";
import BanhistaAlocado from "./BanhistaAlocado";
import OrdemServico from "../OrdemServico/OrdemServico";

export default class AgendaBanho {
    constructor (readonly repositorioAgenda: RepositorioAgenda, readonly repositorioPets: RepositorioPets, readonly repositorioOrdem: RepositorioOrdem){
    }

    async execute (input: Input): Promise<void>{
        const dataString = input.data;
        const partesData = dataString.split("/");
        const dia = parseInt(partesData[0], 10);
        const mes = parseInt(partesData[1], 10) - 1; // Lembre-se de que os meses em JavaScript são baseados em zero (0 a 11)
        const ano = parseInt(partesData[2], 10);
        const data = new Date(ano, mes, dia);

        const week_day = await this.repositorioAgenda.get_week_day_from_date(dataString);

        const horaIndex = this.repositorioAgenda.horaStrToIndex(input.horario);
        let horaID: number;
        if (horaIndex < 5) {
            horaID = horaIndex
        } else {
            horaID = horaIndex + 1
        }

        const banhistasAlocados = await this.repositorioAgenda.get(week_day.week, week_day.day);

        const banhistasDisponiveis: BanhistaAlocado[] = [];
        for (const banhistaAlocado of banhistasAlocados) {
            const horarios = banhistaAlocado.horarios;
            if (horarios.includes(horaID)) {
                banhistasDisponiveis.push(banhistaAlocado);
            }
        }
        const banhistaEscolhido: BanhistaAlocado = banhistasDisponiveis[0];

        const pet = await this.repositorioPets.get(input.id_pet);

        await this.repositorioAgenda.schedule(data, banhistaEscolhido.id_banhista, horaIndex, pet.porte);

        const total = await this.repositorioOrdem.calcula_total(input.finalizacoes, input.servicos);

        await this.repositorioOrdem.save(new OrdemServico(input.id_pet, banhistaEscolhido.id_banhista, input.finalizacoes, input.servicos, total, data, input.horario, false));
    }
}
type Input = {
    id_pet: number,
    data: string,
    horario: string,
    finalizacoes: number[],
    servicos: number[]
}