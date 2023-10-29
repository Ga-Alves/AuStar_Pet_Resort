import NotifyToken from "./notifyToken";
import UserCadastrado from "./userCadastrado";

export default interface RepositorioUsers{  //contrato repositorio user
    save(userCadastrado: UserCadastrado): Promise<void>;
    get(notifyToken: string): Promise<UserCadastrado>;
    getComId(id_user: number): Promise<string>;
    notificaUser(notifyToken: string, dadosNotificacao: NotifyToken): Promise<void>;
}