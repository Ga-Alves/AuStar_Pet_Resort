import UserCadastrado from "./userCadastrado";

export default interface RepositorioUsers{  //contrato repositorio user
    save(userCadastrado: UserCadastrado): Promise<void>;
    get(notifyToken: string): Promise<UserCadastrado>;
    getComId(id_User: string): Promise<string>;
    notificaUser(notifyToken: string): Promise<void>;
}