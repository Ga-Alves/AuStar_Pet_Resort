import RepositorioOrdem from "./Repositorio";

export default class FinalizaOrdemDeServico {
    constructor (readonly repositorioOrdem: RepositorioOrdem){
    }
    async execute (input: Input): Promise<Output>{
        const id_user = await this.repositorioOrdem.finalizaServico(input.id_ordem)

		return {
            id_user : id_user
		};
    }
}
type Input = {
    id_ordem: number
}
type Output = {
    id_user : number
}