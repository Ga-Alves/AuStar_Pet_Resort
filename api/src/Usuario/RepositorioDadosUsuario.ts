import Conexao from "../Conexao";
import ConexaoNotificacao from "../ConexaoNotificacao";

import UserCadastrado from "./UserCadastrado";
import RepositorioUsuarios from "./Repositorio";
import NotifyToken from "./NotifyToken";

export default class RepositorioDadosUsuarios implements RepositorioUsuarios{

    constructor(readonly conexao: Conexao, readonly conexaoNotificacao : ConexaoNotificacao){
    }

    async save (userCadastrado: UserCadastrado): Promise<void> {
        await this.conexao.query("insert into app.User (notifyToken) values ($1) ",
        [userCadastrado.notifyToken]); // resolver dps
    }
    async get (notifyToken: string): Promise<UserCadastrado> {
        const dadosUserCadastrado = await this.conexao.one("select id_tutor from app.User where notifytoken = $1", 
        [notifyToken]); 
		const usuarioCadastrado = new UserCadastrado(dadosUserCadastrado.id_tutor,notifyToken);
		return usuarioCadastrado;

    }
    async getComId (id_user: number): Promise<string> {
        console.log(id_user)
        const dadosUserCadastrado = await this.conexao.one("select notifyToken from app.User where id_tutor = $1", 
        [id_user]); 
		const usuarioCadastrado = new UserCadastrado(dadosUserCadastrado.id_user,dadosUserCadastrado.id_tutor);
		return usuarioCadastrado.notifyToken;
    }
    async notificaUsuario (notifyToken: string, dadosNotificacao: NotifyToken): Promise<void> {
        await this.conexaoNotificacao.notifica(notifyToken, dadosNotificacao);

    }
} 