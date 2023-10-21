import RepositorioUsers from "./Repositorio";
import userCadastrado from "./userCadastrado";

export default class CadastraUser {
    constructor (readonly repositorioUsers: RepositorioUsers){
    }
    async execute (input: Input): Promise<Output>{

        await this.repositorioUsers.save(new userCadastrado(0, input.notifyToken))
        const usuarioCadastrado = await this.repositorioUsers.get(input.notifyToken)
        return {
            idUser: usuarioCadastrado.idUser //
        };
    }
}
type Input = {
    notifyToken: string
}
type Output = {
    idUser?: number
}