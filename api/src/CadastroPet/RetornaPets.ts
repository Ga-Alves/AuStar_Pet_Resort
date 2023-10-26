import RepositorioPets from "./Repositorio";

export default class CadastraPet {
    constructor (readonly repositorioPets: RepositorioPets){
    }
    async execute (input: Input): Promise<void>{
        
        await this.repositorioPets.getComIdTutor(input.id_tutor)

    }
}

type Input = {
    id_tutor: number 
}