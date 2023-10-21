import PetCadastrado from "./petCadastrado";
import RepositorioPets from "./Repositorio";

export default class RepositorioMemoriaPet implements RepositorioPets{
    petsCadastrados: PetCadastrado[];
    constructor(){
        this.petsCadastrados = [];
    }
    async save(petCadastrado: PetCadastrado): Promise<void>{
        this.petsCadastrados.push(petCadastrado);
    }
}