import Conexao from "../conexao";
import BanhistaCadastrado from "./banhistaCadastrado";
import RepositorioBanhistas from "./Repositorio";

export default class RepositorioDadosBanhistas implements RepositorioBanhistas {
    constructor (readonly conexao: Conexao) {
    }

    async save(banhistaCadastrado: BanhistaCadastrado): Promise<void> {
        await this.conexao.query("insert into app.Banhista (nome) values ($1)", [banhistaCadastrado.nome]);
    }
}