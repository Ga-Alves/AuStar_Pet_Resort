import RepositorioAgenda from "./Repositorio";
import BanhistaAlocado from "./BanhistaAlocado";
import RepositorioPets from "../CadastroPet/RepositorioDadosPets";

export default class AgendaBanho {
    constructor (readonly repositorioAgenda: RepositorioAgenda, readonly repositorioPets: RepositorioPets){
    }

    async execute (input: Input): Promise<void>{
        let horaIndex: number;
        if(input.horario == 13:00)
        
        const pet = await this.repositorioPets.get(input.id_pet)
        const banhistaAlocado = await this.repositorioAgenda.get(week, input.horario) //how to get week?
        await this.repositorioAgenda.schedule(week, input.dia, banhistaAlocado[0].employeeID, input.horario, pet.porte)
    }
}
type Input = {
    id_pet: number,
    dia: string,
    horario: string,
}