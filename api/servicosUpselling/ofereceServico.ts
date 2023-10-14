import RepositorioServicos from "./Repositorio";

export default class OfereceServico {
    constructor (readonly repositorioServicos: RepositorioServicos){
    }
    async execute (input: Input): Promise<Output>{
        const servicoOferecido = await this.repositorioServicos.get(input.id_dog)
        servicoOferecido.getRandom(servicoOferecido.tip)
		return {
			upSelling: servicoOferecido.upSelling,
			tip: servicoOferecido.tip
		};
    }
}
type Input = {
    id_dog: string
}
type Output = {
    upSelling?: any[],
    tip?: any[]
}