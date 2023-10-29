import RepositorioUsers from "./Repositorio";
import NotifyToken from "./notifyToken";

export default class NotificaUser {
    constructor (readonly repositorioUsers: RepositorioUsers){
    }
    async execute (input: Input){

        const notifyToken = await this.repositorioUsers.getComId(input.id_user)
        const dadosNotificacao = new NotifyToken('default', 'Estamos te esperando daqui uma hora', 'Não se esqueça do banho do deu cachorrinho')
        const pushToken = notifyToken
        await this.repositorioUsers.notificaUser(pushToken, dadosNotificacao)

        }
    }

type Input = {
    id_user: string
}





