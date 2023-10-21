import RepositorioUsers from "./Repositorio";
import userCadastrado from "./userCadastrado";

export default class CadastraUser {
    constructor (readonly repositorioUsers: RepositorioUsers){
    }
    async execute (input: Input): Promise<void>{
        await this.repositorioUsers.save(new userCadastrado(input.notifyToken))

    }
}
type Input = {
    notifyToken: string
}