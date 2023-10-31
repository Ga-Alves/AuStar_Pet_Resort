import RepositorioUsuarios from "./Repositorio";
import NotifyToken from "./NotifyToken";

export default class NotificaUsuario {
    constructor (readonly repositorioUsers: RepositorioUsuarios){
    }
    async execute (input: Input){

        const notifyToken = await this.repositorioUsers.getComId(input.id_user)
        const dadosNotificacao = new NotifyToken('default', 'Estamos te esperando daqui uma hora', 'Não se esqueça do banho do deu cachorrinho')
        const pushToken = notifyToken
        await this.repositorioUsers.notificaUsuario(pushToken, dadosNotificacao)

        }
    }

type Input = {
    id_user: number
}





