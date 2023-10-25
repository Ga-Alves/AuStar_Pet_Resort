import RepositorioServicos from "./Repositorio";
import servicoOferecido from "./servicoOferecido";
import Dicas from "./dicas"

export default class OfereceServico {
    constructor (readonly repositorioServicos: RepositorioServicos){
    }
    async execute (input: Input): Promise<Output>{
        const [servicoOferecidoUpselling, servicoOferecidoDicas] = await this.repositorioServicos.get(input.id_dog)
        //const dicas = new Dicas(servicoOferecidoDicas.dica);

        const dica: string = servicoOferecidoDicas.getRandom()

		return {
            servicoOferecidoUpselling : servicoOferecidoUpselling,
            servicoOferecidoDicas : dica
		};
    }
}
type Input = {
    id_dog: string
}
type Output = {
    servicoOferecidoUpselling : servicoOferecido,
    servicoOferecidoDicas : string
}