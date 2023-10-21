import UserCadastrado from "./userCadastrado";
import RepositorioUsers from "./Repositorio";
import userCadastrado from "./userCadastrado";

export default class RepositorioMemoriaUser implements RepositorioUsers{
    usersCadastrados: UserCadastrado[];
    constructor(){
        this.usersCadastrados = [];
    }
    async save(userCadastrado: UserCadastrado): Promise<void>{
        this.usersCadastrados.push(userCadastrado);
    }
    async get(notifyToken : string): Promise<UserCadastrado>{
		const userCadastrado = this.usersCadastrados.find(userCadastrado => userCadastrado.idUser); ///trocar essa carniça dps
		if (!userCadastrado) throw new Error();
		return userCadastrado;
    }
}