import RepositorioAgenda from "./Repositorio";
import BanhistaAlocado from "./BanhistaAlocado";
import RepositorioPets from "../CadastroPet/RepositorioDadosPets";

export default class AgendaBanho {
    constructor (readonly repositorioAgenda: RepositorioAgenda, readonly repositorioPets: RepositorioPets){
    }

    async execute (input: Input): Promise<void>{
        const horaIndex = this.repositorioAgenda.horaStrToIndex(input.horario)
        const date = new Date(input.dia);

        const pet = await this.repositorioPets.get(input.id_pet)
        const banhistaAlocado = await this.repositorioAgenda.get(input.week, input.horario) //how to get week?
        await this.repositorioAgenda.schedule(date, banhistaAlocado[0].employeeID, horaIndex, pet.porte)
    }
}
type Input = {
    id_pet: number,
    dia: string,
    horario: string,
    week: number
}