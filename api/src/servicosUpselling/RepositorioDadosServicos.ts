import Conexao from "../conexao";
import ServicoOferecido from "./servicoOferecido";
import Dicas from "./dicas";
import RepositorioServicos from "./Repositorio";
//import pgp from "pg-promise";

export default class RepositorioDadosServicos implements RepositorioServicos{

    constructor(readonly conexao: Conexao){
    }

    async get (id_dog: string): Promise<[ServicoOferecido, Dicas]> {
        var id: number = +id_dog
        const pet = await this.conexao.one("select raca, cor from app.pet where pet.id_pet = ($1) ",
        [id]); 
        const dadosServicosUpselling = await this.conexao.query("select nome, preco, id_upselling from app.servicosupselling where raca = ($1) and cor = ($2)",
        [pet.raca, pet.cor]); 
        const dadosServicoDicas = await this.conexao.query("select dica from app.servicosupselling where raca = ($1) and cor = ($2)",
        [pet.raca, pet.cor]); 

        const dicas = new Dicas(dadosServicoDicas);

		return [dadosServicosUpselling, dicas];
    }
} 