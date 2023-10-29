import Conexao from "../conexao";
import ConexaoNotificacao from "../ConexaoNotificacao";

import UserCadastrado from "./userCadastrado";
import RepositorioUsers from "./Repositorio";
//import pgp from "pg-promise";

export default class RepositorioDadosUsers implements RepositorioUsers{

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
    async getComId (notifyToken: string): Promise<string> {
        const dadosUserCadastrado = await this.conexao.one("select id_tutor from app.User where id_user = $1", 
        [notifyToken]); 
		const usuarioCadastrado = new UserCadastrado(dadosUserCadastrado.id_tutor,notifyToken);
		return usuarioCadastrado.notifyToken;
    }
    async notificaUser (notifyToken: string): Promise<void> {
        await this.conexaoNotificacao.notifica(notifyToken);

    }
} 