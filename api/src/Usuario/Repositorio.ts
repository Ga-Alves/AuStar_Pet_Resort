import NotifyToken from "./NotifyToken";
import UserCadastrado from "./UserCadastrado";

export default interface RepositorioUsuarios{  //contrato repositorio user
    save(userCadastrado: UserCadastrado): Promise<void>;
    get(notifyToken: string): Promise<UserCadastrado>;
    getComId(id_user: number): Promise<string>;
    notificaUsuario(notifyToken: string, dadosNotificacao: NotifyToken): Promise<void>;
}