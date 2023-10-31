import Conexao from "../Conexao";
import BanhistaCadastrado from "./BanhistaCadastrado";
import RepositorioBanhistas from "./Repositorio";

export default class RepositorioDadosBanhistas implements RepositorioBanhistas {
    constructor (readonly conexao: Conexao) {
    }

    async save(banhistaCadastrado: BanhistaCadastrado): Promise<void> {
        await this.conexao.query("insert into app.Banhista (nome) values ($1)", [banhistaCadastrado.nome]);
    }
    async list(): Promise<any[]> {
        const banhistasCadastrados = await this.conexao.query("select * from app.Banhista", 0);
        return banhistasCadastrados
    }
}
