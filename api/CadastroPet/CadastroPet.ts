import RepositorioPets from "./RepositorioPets";
import petCadastrado from "./petCadastrado";

export default class CadastraPet {
    constructor (readonly repositorioPets: RepositorioPets){
    }
    async execute (input: Input): Promise<void>{
        await this.repositorioPets.save(new petCadastrado(input.nomePet, input.raca, input.sexo, 
                                        input.cor, input.porte, input.id_tutor))

    }
}
type Input = {
    nomePet: string,
    raca: string,
    sexo: string, 
    cor: string,
    porte: string,
    id_tutor: string //como conectar? 
}