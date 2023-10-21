import Conexao from "../conexao";
import ServicoOferecido from "./servicoOferecido";
import RepositorioServicos from "./Repositorio";
//import pgp from "pg-promise";

export default class RepositorioDadosServicos implements RepositorioServicos{

    constructor(readonly conexao: Conexao){
    }

    async get (id_dog: string): Promise<ServicoOferecido> {
        const dadosServicoOfererecido = await this.conexao.one("select upSelling, tip from servicosUpselling join pets where raca = (id_dog) values ($1) ",
        [id_dog]); 
		const servicoOferecido = new ServicoOferecido(dadosServicoOfererecido.upSelling, dadosServicoOfererecido.tip);
		return servicoOferecido;
    }
} 