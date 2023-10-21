import Conexao from "../conexao";
import userCadastrado from "./userCadastrado";
import RepositorioUsers from "./Repositorio";
//import pgp from "pg-promise";

export default class RepositorioDadosUsers implements RepositorioUsers{

    constructor(readonly conexao: Conexao){
    }

    async save (userCadastrado: userCadastrado): Promise<void> {
        await this.conexao.query("insert into user (notifyToken) values ($1) ",
        [userCadastrado.notifyToken]); // resolver dps
    }
} 