import ServicoOferecido from "./servicoOferecido";
import Dicas from "./dicas";
import RepositorioServicos from "./Repositorio";

export default class RepositorioMemoriaServico implements RepositorioServicos{
    servicosOferecidos: ServicoOferecido[];
    constructor(){
        this.servicosOferecidos = [];
    }
    async get(id_dog : string): Promise<[ServicoOferecido, Dicas]>{
		const servicoOferecido = this.servicosOferecidos.find(servicoOferecido => servicoOferecido.nome); ///trocar essa  dps
		if (!servicoOferecido) throw new Error();
		return [servicoOferecido];
    }
}