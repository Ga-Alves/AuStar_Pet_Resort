import PetCadastrado from "./petCadastrado";

export default interface RepositorioPets{  //contrato repositorio pets
    save(petCadastrado: PetCadastrado): Promise<void>;
}
