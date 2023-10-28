import Conexao from "../conexao";
import PetCadastrado from "./petCadastrado";
import RepositorioPets from "./Repositorio";
//import pgp from "pg-promise";

export default class RepositorioDadosPets implements RepositorioPets{

    constructor(readonly conexao: Conexao){
    }

    async save (petCadastrado: PetCadastrado): Promise<void> {
        await this.conexao.query("insert into app.Pet (nome, raca, sexo, cor, porte, id_tutor) values ($1, $2, $3, $4, $5, $6) ",
        [petCadastrado.nomePet, petCadastrado.raca, petCadastrado.sexo, petCadastrado.cor, petCadastrado.porte, petCadastrado.id]); // resolver dps
    }
    async get (pet_id: number): Promise<PetCadastrado>{
        const dadosPetCadastrado = await this.conexao.one("select * from app.Pet where id_pet = $1", pet_id)
        const petCadastrado = new PetCadastrado(dadosPetCadastrado.nomePet, dadosPetCadastrado.raca, dadosPetCadastrado.sexo, dadosPetCadastrado.cor,
            dadosPetCadastrado.porte, dadosPetCadastrado.id);
		return petCadastrado;

    }
    async getComIdTutor (id_tutor: number): Promise<PetCadastrado[]>{
        const dadosPetCadastrado = await this.conexao.query("select id_pet, nome from app.Pet where id_tutor = $1", id_tutor)  
        console.log(id_tutor)
        console.log(dadosPetCadastrado)
		return dadosPetCadastrado;

    }

} 