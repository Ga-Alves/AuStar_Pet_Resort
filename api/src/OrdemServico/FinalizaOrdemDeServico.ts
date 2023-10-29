import RepositorioOrdem from "./Repositorio";
//import servicoOferecido from "./servicoOferecido";

export default class FinalizaOrdemDeServico {
    constructor (readonly repositorioOrdem: RepositorioOrdem){
    }
    async execute (input: Input): Promise<Output>{
        const status = await this.repositorioOrdem.finalizaServico(input.id_ordem)

		return {
            status : status
		};
    }
}
type Input = {
    id_ordem: number
}
type Output = {
    status : number
}