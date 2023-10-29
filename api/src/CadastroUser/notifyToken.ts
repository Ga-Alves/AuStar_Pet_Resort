import RepositorioUsers from "./Repositorio";

export default class CadastraUser {
    constructor (readonly repositorioUsers: RepositorioUsers){
    }
    async execute (input: Input){

        const notifyToken = await this.repositorioUsers.getComId(input.id_user)

        const pushToken = notifyToken
        await this.repositorioUsers.notificaUser(pushToken)

        }
    }

type Input = {
    id_user: string
}





