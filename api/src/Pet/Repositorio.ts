import PetCadastrado from "./PetCadastrado";

export default interface RepositorioPets{
    save(petCadastrado: PetCadastrado): Promise<void>;
    get(pet_id : number): Promise<PetCadastrado>
    getComIdTutor(id_tutor: number): Promise<PetCadastrado[]>
}
