import RepositorioPets from "./Repositorio";
import PetCadastrado from "./petCadastrado";

export default class CadastraPet {
    constructor (readonly repositorioPets: RepositorioPets){
    }
    async execute (input: Input): Promise<Output>{
        
        const res = await this.repositorioPets.getComIdTutor(input.id_tutor)
        return {
            res: res
        }

    }
}

type Input = {
    id_tutor: number 
}

type Output = {
    res: any[]
}