import RepositorioAgenda from "./Repositorio";
import BanhistaAlocado from "./BanhistaAlocado";
import RepositorioPets from "../CadastroPet/RepositorioDadosPets";

export default class AgendaBanho {
    constructor (readonly repositorioAgenda: RepositorioAgenda, readonly repositorioPets: RepositorioPets){
    }

    async execute (input: Input): Promise<void>{
        let horaIndex: number = -1;
        if(input.horario =='8:00'){
            horaIndex = 0
        }
        if(input.horario =='8:50'){
            horaIndex = 1
        }
        if(input.horario =='9:40'){
            horaIndex = 2
        }
        if(input.horario =='10:30'){
            horaIndex = 3
        }
        if(input.horario =='13:10'){
            horaIndex = 4
        }
        if(input.horario =='14:00'){
            horaIndex = 5
        }
        if(input.horario =='14:50'){
            horaIndex = 6
        }
        if(input.horario =='15:40'){
            horaIndex = 7
        }
        const pet = await this.repositorioPets.get(input.id_pet)
        const  = await this.repositorioAgenda.get(week, input.horario) //how to get week?
        await this.repositorioAgenda.schedule(week, input.dia, banhistaAlocado[0].employeeID, horaIndex, pet.porte)
    }
}
type Input = {
    id_pet: number,
    dia: string,
    horario: string,
}