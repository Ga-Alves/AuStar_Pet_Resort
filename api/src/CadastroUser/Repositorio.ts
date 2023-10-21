import UserCadastrado from "./userCadastrado";

export default interface RepositorioUsers{  //contrato repositorio user
    save(userCadastrado: UserCadastrado): Promise<void>;
    get(notifyToken: string): Promise<UserCadastrado>;

}