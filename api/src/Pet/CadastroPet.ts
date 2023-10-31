import RepositorioPets from "./Repositorio";
import petCadastrado from "./PetCadastrado";

export default class CadastraPet {
    constructor (readonly repositorioPets: RepositorioPets){
    }
    async execute (input: Input): Promise<void>{
        const pets = await this.repositorioPets.save(new petCadastrado(input.nomePet, input.raca, input.sexo, 
                                        input.cor, input.porte, input.id_tutor))
        return pets

    }
}
type Input = {
    nomePet: string,
    raca: string,
    sexo: string, 
    cor: string,
    porte: string,
    id_tutor: number //como conectar? 
}