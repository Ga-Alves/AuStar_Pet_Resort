import Conexao from "../conexao";
import petCadastrado from "./petCadastrado";
import RepositorioPets from "./Repositorio";
//import pgp from "pg-promise";

export default class RepositorioDadosPets implements RepositorioPets{

    constructor(readonly conexao: Conexao){
    }

    async save (petCadastrado: petCadastrado): Promise<void> {
        await this.conexao.query("insert into app.Pet (nome, raca, sexo, cor, porte, id_tutor) values ($1, $2, $3, $4, $5, $6) ",
        [petCadastrado.nomePet, petCadastrado.raca, petCadastrado.sexo, petCadastrado.cor, petCadastrado.porte, petCadastrado.id]); // resolver dps
    }
} 