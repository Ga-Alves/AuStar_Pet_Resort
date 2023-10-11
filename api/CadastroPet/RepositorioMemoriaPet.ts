import PetCadastrado from "./petCadastrado";
import RepositorioPets from "./RepositorioPets";

export default class RepositorioMemoriaPet implements RepositorioPets{
    petsCadastrados: PetCadastrado[];
    constructor(){
        this.petsCadastrados = [];
    }
    async save(petCadastrado: PetCadastrado): Promise<void>{
        this.petsCadastrados.push(petCadastrado);
    }
}