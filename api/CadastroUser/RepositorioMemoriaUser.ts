import UserCadastrado from "./userCadastrado";
import RepositorioUsers from "./Repositorio";

export default class RepositorioMemoriaUser implements RepositorioUsers{
    usersCadastrados: UserCadastrado[];
    constructor(){
        this.usersCadastrados = [];
    }
    async save(userCadastrado: UserCadastrado): Promise<void>{
        this.usersCadastrados.push(userCadastrado);
    }
}