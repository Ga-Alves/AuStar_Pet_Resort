import RepositorioServicos from "./Repositorio";
import servicoOferecido from "./ServicoOferecido";

export default class OfereceServico {
    constructor (readonly repositorioServicos: RepositorioServicos){
    }
    async execute (input: Input): Promise<Output>{
        const [servicoOferecidoUpselling, servicoOferecidoDicas] = await this.repositorioServicos.get(input.id_dog)

        const dica: string = servicoOferecidoDicas.getRandom()

		return {
            servicoOferecidoUpselling : servicoOferecidoUpselling,
            servicoOferecidoDicas : dica
		};
    }
}
type Input = {
    id_dog: number
}
type Output = {
    servicoOferecidoUpselling : servicoOferecido,
    servicoOferecidoDicas : string
}