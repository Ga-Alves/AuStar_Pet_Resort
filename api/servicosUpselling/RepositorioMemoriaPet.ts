import ServicoOferecido from "./servicoOferecido";
import RepositorioServicos from "./Repositorio";

export default class RepositorioMemoriaServico implements RepositorioServicos{
    servicosOferecidos: ServicoOferecido[];
    constructor(){
        this.servicosOferecidos = [];
    }
    async get(id_dog : string): Promise<ServicoOferecido>{
		const servicoOferecido = this.servicosOferecidos.find(servicoOferecido => servicoOferecido.tip); ///trocar essa carniça dps
		if (!servicoOferecido) throw new Error();
		return servicoOferecido;
    }
}