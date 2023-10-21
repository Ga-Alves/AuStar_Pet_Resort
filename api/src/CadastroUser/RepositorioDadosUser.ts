import Conexao from "../conexao";
import UserCadastrado from "./userCadastrado";
import RepositorioUsers from "./Repositorio";
//import pgp from "pg-promise";

export default class RepositorioDadosUsers implements RepositorioUsers{

    constructor(readonly conexao: Conexao){
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
} 